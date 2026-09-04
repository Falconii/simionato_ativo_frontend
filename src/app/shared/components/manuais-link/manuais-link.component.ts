import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig,
  MatDialog,
} from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import {
  map,
  filter,
  tap,
  take,
  distinctUntilChanged,
  debounceTime,
} from 'rxjs/operators';
import { ImobilizadoinventarioModel } from 'src/app/models/imobilizadoinventario-model';
import { DeparaService } from 'src/app/services/depara.service';
import { GlobalService } from 'src/app/services/global.service';
import { ImobilizadoinventarioService } from 'src/app/services/imobilizadoinventario.service';
import { AppSnackbar } from '../../classes/app-snackbar';
import { CondicaoPipePipe } from '../../pipes/condicao-pipe.pipe';
import { OrigemPipe } from '../../pipes/origem.pipe';
import { SimNaoPipe } from '../../pipes/sim-nao.pipe';
import { ManuaisLinkData } from './manuais-link-data';
import { DeParaModel } from 'src/app/models/de-para-model';
import { ParametroImobilizadoinventario01 } from 'src/app/parametros/parametro-imobilizadoinventario01';
import { ParametroSubstituirAtivo } from 'src/app/parametros/parametro-substituir-ativo';
import { CadastroAcoes } from '../../classes/cadastro-acoes';
import { hasNonNumeric, messageError } from '../../classes/util';
import { DeparaModel } from 'src/app/models/depara-model';
import { ControlePaginasV2 } from '../../classes/controle-paginasv2';
import { TipoOperacao } from '../../classes/tipo-operacao';
import { QuestionDialogData } from '../question-dialog/Question-Dialog-Data';
import { QuestionDialogComponent } from '../question-dialog/question-dialog.component';
import { SimNao } from '../../classes/sim-nao';
import { ProcessaLoteDeparaData } from '../processa-lote-depara-dialog/processa-lote-deparaData';
import { TipoPesquisa } from '../../classes/tipo-pesquisa';

@Component({
  selector: 'app-manuais-link',
  templateUrl: './manuais-link.component.html',
  styleUrls: ['./manuais-link.component.css'],
})
export class ManuaisLinkComponent implements OnInit {
  inscricaoGetImobilizado!: Subscription;
  inscricaoInsereDepara!: Subscription;

  formulario: FormGroup;
  labelCadastro: string = '';
  readOnly: boolean = false;
  gravando: boolean = false;
  focusEntrada: boolean = false;
  focusCancelar: boolean = false;
  panelOpenState = false;
  destino: ImobilizadoinventarioModel = new ImobilizadoinventarioModel();
  mensagem: string = '';
  itsOK: boolean = false;
  lsAtivos: ImobilizadoinventarioModel[] = [];

  tamPagina: number = 50;

  controlePaginas: ControlePaginasV2 = new ControlePaginasV2(this.tamPagina, 1);

  enable_filter: boolean = false;

  valueChangeSubs: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ManuaisLinkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ManuaisLinkData,
    private globalService: GlobalService,
    private appSnackBar: AppSnackbar,
    private imoInventarioService: ImobilizadoinventarioService,
    private simNaoPipe: SimNaoPipe,
    private origemPipe: OrigemPipe,
    private condicaoPipePipe: CondicaoPipePipe,
    private deparaSrv: DeparaService,
    private questionDialog: MatDialog,
  ) {
    this.formulario = formBuilder.group({
      de: [{ value: '' }],
      dePesquisa: '',
      deDescricao: [{ value: '' }],
      deObs: [{ value: '' }],
    });
  }

  ngOnInit(): void {
    this.data.processar = false;
    this.getImoIven();
  }

  ngOnDestroy(): void {
    this.inscricaoGetImobilizado?.unsubscribe();
    this.inscricaoInsereDepara?.unsubscribe();
    this.valueChangeSubs.forEach((sub) => sub.unsubscribe());
  }

  setEnableFilter(value: boolean): void {
    this.enable_filter = value;

    // Se desativar, cancelar todas as subscriptions
    if (!value) {
      this.valueChangeSubs.forEach((sub) => sub.unsubscribe());
      this.valueChangeSubs = [];
      return;
    }

    // Se ativar, registrar os valueChanges
    const pesquisaSub = this.formulario
      .get('dePesquisa')
      ?.valueChanges.pipe(
        map((value) => value?.trim()),
        filter((value) => value?.length > 0),
        debounceTime(350),
        distinctUntilChanged(),
      )
      .subscribe(() => this.getAtivos(TipoOperacao.Contador));

    this.valueChangeSubs = [pesquisaSub].filter(
      (sub): sub is Subscription => !!sub,
    );
  }

  onCancelar() {
    this.data.processar = false;
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close(this.data);
  }

  getAcoes() {
    return CadastroAcoes;
  }

  setAcao(op: number) {
    this.focusEntrada = false;
    this.focusCancelar = false;
    this.labelCadastro = `Inclusão`;
    this.readOnly = false;
    this.focusEntrada = true;
  }

  getLabelCancel() {
    return 'Cancelar';
  }

  setValue() {
    this.formulario.setValue({
      de: this.data.ativo.id_imobilizado,
      dePesquisa: '',
      deDescricao: this.data.ativo.imo_descricao,
      deObs: this.data.ativo.lanc_obs,
    });
  }

  NoValidtouchedOrDirty(campo: string): boolean {
    if (
      !this.formulario.get(campo)?.valid &&
      (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)
    ) {
      return true;
    }
    return false;
  }

  getMensafield(field: string): string {
    return this.formulario.get(field)?.errors?.message;
  }

  hasValue(campo: string): boolean {
    if (this.formulario.get(campo)?.value == '') {
      return false;
    }
    return true;
  }

  insereDePara(ativo: ImobilizadoinventarioModel) {
    const depara: DeparaModel = new DeparaModel();

    depara.id_empresa = this.data.ativo.id_empresa;
    depara.id_local = this.data.ativo.id_filial;
    depara.id_inventario = this.data.ativo.id_inventario;
    depara.de = this.data.ativo.id_imobilizado;
    depara.de_descricao = this.data.ativo.imo_descricao;
    depara.para = ativo.id_imobilizado;
    depara.id_usuario = this.globalService.getUsuario().id;
    depara.status = 0;
    depara.user_insert = this.globalService.getUsuario().id;

    this.globalService.setSpin(true);
    this.inscricaoInsereDepara = this.deparaSrv.deparaInsert(depara).subscribe(
      (data: DeparaModel) => {
        this.globalService.setSpin(false);
        this.appSnackBar.openSuccessSnackBar(`Ativo Incuido Na Fila`, 'OK');
        this.data.depara = data;
        this.data.processar = true;
        this.closeModal();
      },
      (error: any) => {
        this.globalService.setSpin(false);
        this.appSnackBar.openFailureSnackBar(
          `Falha Na Inclusão do De Para ${messageError(error)}`,
          'OK',
        );
      },
    );
  }

  substituirAtivo() {
    /*  const param: ParametroSubstituirAtivo = new ParametroSubstituirAtivo();

    param.id_empresa = this.data.ativo.id_empresa;
    param.id_local = this.data.ativo.id_filial;
    param.id_inventario = this.data.ativo.id_inventario;

    this.globalService.setSpin(true);
    this.inscricaoProcessarDePara = this.deparaSrv
      .substituirAtivo(param)
      .subscribe(
        (data: any) => {
          this.globalService.setSpin(false);
          this.mensagem = 'Substituição Processada Com Sucesso!';
          this.appSnackBar.openSuccessSnackBar(`${this.mensagem}`, 'OK');
          this.data.processar = true;
          this.closeModal();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.mensagem = `Falha Na Substituição Do Ativo. ${error.message}`;
          this.appSnackBar.openFailureSnackBar(`${this.mensagem}`, 'OK');
        },
      ); */
  }

  onPesquisar() {
    this.getAtivos(TipoOperacao.Contador);
  }

  clearValue(campo: string) {
    if (campo == 'dePesquisa') {
      this.formulario.patchValue({
        dePesquisa: '',
      });
    }
    this.getAtivos(TipoOperacao.Contador);
  }

  escolha(op: number, imobilizado: ImobilizadoinventarioModel) {
    if (op == CadastroAcoes.Inclusao) {
      if (imobilizado.id_lanca > 0) {
        this.appSnackBar.openFailureSnackBar(
          `Imobilizado ${imobilizado.imo_descricao} Foi Inventariado! Não Pode Ser Usuado No "DE PARA"`,
          'OK',
        );
        return;
      }
      this.openQuestion(imobilizado);
    }
  }

  getImoIven() {
    this.globalService.setSpin(true);
    this.inscricaoGetImobilizado = this.imoInventarioService
      .getImobilizadoinventario(
        this.data.ativo.id_empresa,
        this.data.ativo.id_filial,
        this.data.ativo.id_inventario,
        this.data.ativo.id_imobilizado,
      )
      .subscribe(
        (data: any) => {
          this.globalService.setSpin(false);
          this.destino = data;
          this.setValue();
          this.setEnableFilter(true);
          this.getAtivos(TipoOperacao.Contador);
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.destino = new ImobilizadoinventarioModel();
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa De Ativos ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
            'OK',
          );
        },
      );
  }

  getAtivos(tipoOperacao: TipoOperacao = TipoOperacao.Pesquisa) {
    let par = new ParametroImobilizadoinventario01();

    par.id_empresa = this.globalService.getIdEmpresa();

    par.id_filial = this.globalService.getLocal().id;

    if (this.definirPesquisa() == TipoPesquisa.Codigo) {

      const key = parseInt(this.formulario.value.dePesquisa, 10);

      if (isNaN(key)) {
        par.id_imobilizado = 0;
      } else {
        par.id_imobilizado = key;
      }

    }

    if (this.definirPesquisa() == TipoPesquisa.Descricao) {
      par.descricao = this.formulario.value.dePesquisa.toUpperCase();
    }

    par.status = 0;

    par.origem = 'P';

    par.filtra_depara = 'S';

    par.orderby = 'imo_descricao';

    if (tipoOperacao == TipoOperacao.Contador) {
      par.contador = 'S';
    } else {
      par.pagina = this.controlePaginas.getPaginalAtual();
      par.tamPagina = this.controlePaginas.getTamPagina();
    }

    this.globalService.setSpin(true);

    console.log('Paramentros De Pesquisa', par);

    this.inscricaoGetImobilizado = this.imoInventarioService
      .getImobilizadosinventariosParametro_01(par)
      .subscribe(
        (data: any) => {
          this.globalService.setSpin(false);
          if (tipoOperacao == TipoOperacao.Pesquisa) {
            this.lsAtivos = data;
          } else {
            this.controlePaginas = new ControlePaginasV2(
              this.tamPagina,
              data.total == 0 ? 1 : data.total,
            );
            this.getAtivos();
          }
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.lsAtivos = [];
          this.controlePaginas = new ControlePaginasV2(this.tamPagina, 0);
        },
      );
  }

  atualizar() {
    /*    this.formulario.patchValue({
      paraDescricao: this.destino.imo_descricao,
      paraOrigem: this.origemPipe.transform(this.destino.imo_origem),
      paraCondicao: this.condicaoPipePipe.transform(this.destino.condicao),
      paraBook: this.simNaoPipe.transform(this.destino.lanc_book),
      paraObs: this.destino.lanc_obs,
      paraGrupo: this.destino.grupo_descricao,
      paraCC: this.destino.cc_descricao,
    }); */
  }

  onChangePage() {
    this.getAtivos();
  }

  openQuestion(imobilizado: ImobilizadoinventarioModel): void {
    const dados: QuestionDialogData = new QuestionDialogData();
    dados.mensagem01 = 'Confirma Inclusão Na Fila Do De Para';
    dados.mensagem02 = `Do Ativo: ${this.data.ativo.id_imobilizado} - Para Ativo: ${imobilizado.id_imobilizado}`;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'question_sim_nao';
    dialogConfig.panelClass = 'fullscreen-dialog';
    dialogConfig.data = dados;
    const modalDialog = this.questionDialog
      .open(QuestionDialogComponent, dialogConfig)
      .beforeClosed()
      .subscribe((dados: QuestionDialogData) => {
        if (dados && dados.resposta == 'S') {
          this.insereDePara(imobilizado);
        }
      });
  }

  definirPesquisa(): TipoPesquisa {
    const texto = this.formulario.value.dePesquisa.toUpperCase();
    if (texto.trim().length == 0) {
      return TipoPesquisa.None;
    }
    const isTexto = hasNonNumeric(texto);
    if (isTexto) {
      return TipoPesquisa.Descricao;
    }
    if (texto.trim().length <= 6) {
      return TipoPesquisa.Codigo;
    }
    return TipoPesquisa.Descricao;
  }

  getTextoTipoPesquisa(): string {
    const value: TipoPesquisa = this.definirPesquisa();
    switch (value) {
      case TipoPesquisa.Codigo:
        return 'Pelo Código';

      case TipoPesquisa.Descricao:
        return 'Pela Descrição';

      default:
        return '';
    }
  }

}
