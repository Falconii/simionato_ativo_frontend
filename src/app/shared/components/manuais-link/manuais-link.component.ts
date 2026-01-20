import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
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
import { messageError } from '../../classes/util';

@Component({
  selector: 'app-manuais-link',
  templateUrl: './manuais-link.component.html',
  styleUrls: ['./manuais-link.component.css'],
})
export class ManuaisLinkComponent implements OnInit {
  inscricaoAcao!: Subscription;
  inscricaoGetImobilizado!: Subscription;
  inscricaoInsereDepara!: Subscription;
  inscricaoProcessarDePara!: Subscription;

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
    this.setValue();
  }

  ngOnDestroy(): void {
    this.inscricaoAcao?.unsubscribe();
    this.inscricaoGetImobilizado?.unsubscribe();
    this.inscricaoInsereDepara?.unsubscribe();
    this.inscricaoProcessarDePara?.unsubscribe();
  }

  actionFunction() {
    if (this.formulario.valid) {
      this.executaAcao();
    } else {
      this.formulario.markAllAsTouched();
      this.appSnackBar.openSuccessSnackBar(
        `Formulário Com Campos Inválidos.`,
        'OK',
      );
    }
  }

  closeModal() {
    this.dialogRef.close();
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

  executaAcao() {
    this.itsOK = false;
    this.insereDePara();
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

  getImoIven() {
    let par = new ParametroImobilizadoinventario01();

    par.id_empresa = this.globalService.getIdEmpresa();

    par.id_filial = this.globalService.getLocal().id;

    par.id_inventario = this.globalService.getInventario().codigo;

    let key = parseInt(this.formulario.value.para, 10);

    if (isNaN(key)) {
      par.id_imobilizado = 0;
    } else {
      par.id_imobilizado = key;
    }

    par.pagina = 0;

    this.globalService.setSpin(true);
    this.inscricaoGetImobilizado = this.imoInventarioService
      .getImobilizadosinventariosParametro_01(par)
      .subscribe(
        (data: ImobilizadoinventarioModel[]) => {
          this.globalService.setSpin(false);
          this.destino = data[0];
          this.atualizar();
          this.mensagem = 'Tudo OK Para Fazer A Substituição';
          this.itsOK = true;
          if (this.destino.imo_origem != 'P') {
            this.mensagem = "Este Ativo Não É De Origem 'PLANILHA'";
            this.itsOK = false;
            this.appSnackBar.openFailureSnackBar(
              `Atenção! ${this.mensagem}`,
              'OK',
            );
            this.itsOK = false;
            return;
          }
          if (this.destino.id_lanca != 0) {
            this.mensagem = 'Este Ativo Já Foi Inventariado!';
            this.itsOK = false;
            this.appSnackBar.openFailureSnackBar(
              `Atenção! ${this.mensagem}`,
              'OK',
            );
            this.itsOK = false;
            return;
          }
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.destino = new ImobilizadoinventarioModel();
          this.mensagem = 'Ativo Não Localizado!';
          this.setValue();
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Produtos De Inventário ${messageError(error)}`,
            'OK',
          );
        },
      );
  }

  insereDePara() {
    const depara: DeParaModel = new DeParaModel();

    depara.id_empresa = this.data.ativo.id_empresa;
    depara.id_local = this.data.ativo.id_filial;
    depara.id_inventario = this.data.ativo.id_inventario;
    depara.de = this.data.ativo.id_imobilizado;
    depara.para = this.destino.id_imobilizado;
    depara.status = 0;
    depara.user_insert = this.globalService.getUsuario().id;

    this.globalService.setSpin(true);
    this.inscricaoInsereDepara = this.deparaSrv.deparaInsert(depara).subscribe(
      (data: DeParaModel) => {
        this.globalService.setSpin(false);
        this.mensagem = 'Solcitação De Substituição Incluída Na Fila.';
        this.substituirAtivo();
      },
      (error: any) => {
        this.globalService.setSpin(false);
        this.mensagem =
          'Não Foi Possivel Incluir A Solcitiação De Substtituição.';
        this.appSnackBar.openFailureSnackBar(
          `Falha Na Inclusão do De Para ${messageError(error)}`,
          'OK',
        );
      },
    );
  }

  substituirAtivo() {
    const param: ParametroSubstituirAtivo = new ParametroSubstituirAtivo();

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
      );
  }

  pesquisar() {
    this.getImoIven();
  }

  onPesquisar() {
    this.getAtivos();
  }

  clearValue(campo: string) {
    if (campo == 'dePesquisa') {
      this.formulario.patchValue({
        dePesquisa: '',
      });
    }
  }

  escolha(op: number, imobilizado: ImobilizadoinventarioModel) {}

  getAtivos() {
    let par = new ParametroImobilizadoinventario01();

    par.id_empresa = this.globalService.getIdEmpresa();

    par.id_filial = this.globalService.getLocal().id;

    par.id_inventario = this.globalService.getInventario().codigo;

    par.pagina = 1;

    par.tamPagina = 50;

    par.contador = 'N';

    par.orderby = 'imo_descricao';

    par.descricao = this.formulario.value.dePesquisa;

    //par.pagina = this.controlePaginas.getPaginalAtual();

    //this.globalService.setSpin(true);

    alert('Pesquisar');

    this.inscricaoGetImobilizado = this.imoInventarioService
      .getImobilizadosinventariosParametro_01(par)
      .subscribe(
        (data: ImobilizadoinventarioModel[]) => {
          this.globalService.setSpin(false);
          this.lsAtivos = data;
          console.log('data', data);
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.lsAtivos = [];
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Produtos De Inventário ${messageError(error)}`,
            'OK',
          );
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
}
