import { InventarioModel } from './../../../models/inventario-model';
import { ValoresDialogComponent } from './../../../shared/valores-dialog/valores-dialog.component';
import { CadastroAcoes } from 'src/app/shared/classes/cadastro-acoes';
import { LancaDialogComponent } from './../../../shared/components/lanca-dialog/lanca-dialog.component';
import { SituacaoInventario } from './../../../shared/classes/situacao-inventario';
import { ParametroModel } from './../../../models/parametro-model';
import { ImobilizadoinventarioModel } from './../../../models/imobilizadoinventario-model';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CentrocustoModel } from 'src/app/models/centrocusto-model';
import { GrupoModel } from 'src/app/models/grupo-model';
import { ControlePaginas } from 'src/app/shared/classes/controle-paginas';
import { GlobalService } from 'src/app/services/global.service';
import { ParametrosService } from 'src/app/services/parametros.service';
import { GrupoService } from 'src/app/services/grupo.service';
import { CentrocustoService } from 'src/app/services/centrocusto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { ImobilizadoinventarioService } from 'src/app/services/imobilizadoinventario.service';
import { ParametroGrupo01 } from 'src/app/parametros/parametro-grupo01';
import {
  GetValueJsonBoolean,
  GetValueJsonNumber,
  GetValueJsonString,
  GetValueJsonStringArray,
  MensagensBotoes,
  messageError,
} from 'src/app/shared/classes/util';
import { ParametroCentrocusto01 } from 'src/app/parametros/parametro-centrocusto01';
import { ParametroParametro01 } from 'src/app/parametros/parametro-parametro01';
import { ParametroImobilizadoinventario01 } from 'src/app/parametros/parametro-imobilizadoinventario01';
import { LancamentoModel } from 'src/app/models/lancamento-model';
import { LancaData } from 'src/app/shared/components/lanca-dialog/lanca-data';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { ImobilizadoData } from 'src/app/shared/components/imobilizado-dialog/imobilizado-data';
import { ImobilizadoDialogComponent } from 'src/app/shared/components/imobilizado-dialog/imobilizado-dialog.component';
import { NfeData } from 'src/app/shared/nfe-dialog/nfe-data';
import { NfeModel } from 'src/app/models/nfe-model';
import { NfeDialogComponent } from 'src/app/shared/nfe-dialog/nfe-dialog.component';
import { ValorData } from 'src/app/shared/valores-dialog/valor-data';
import { ValorModel } from 'src/app/models/valor-model';
import { NfeService } from 'src/app/services/nfe.service';
import { ValorService } from 'src/app/services/valor.service';

@Component({
  selector: 'app-crud-imoinventario',
  templateUrl: './crud-imoinventario.component.html',
  styleUrls: ['./crud-imoinventario.component.css'],
})
export class CrudImoinventarioComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewPort!: CdkVirtualScrollViewport;

  inscricaoGetAll!: Subscription;
  inscricaoGetGrupo!: Subscription;
  inscricaoGetCc!: Subscription;
  inscricaoGetLancamento!: Subscription;
  inscricaoRota!: Subscription;
  inscricaoParametro!: Subscription;
  inscricaoNfe!: Subscription;
  inscricaoValores!: Subscription;

  imoinv: ImobilizadoinventarioModel[] = [];

  grupos: GrupoModel[] = [];

  ccs: CentrocustoModel[] = [];

  parametros: FormGroup;

  erro: string = '';

  tamPagina = 50;

  controlePaginas: ControlePaginas = new ControlePaginas(this.tamPagina, 0);

  retorno: boolean = false;

  parametro: ParametroModel = new ParametroModel();

  situacoesInventario: SituacaoInventario[] = [];

  lancamento: LancamentoModel = new LancamentoModel();

  nfe: NfeModel = new NfeModel();

  valor: ValorModel = new ValorModel();

  inventario: InventarioModel = new InventarioModel();

  browse: boolean = true;

  idAcao: CadastroAcoes = CadastroAcoes.Consulta;

  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalService,
    private imoInventarioService: ImobilizadoinventarioService,
    private parametrosService: ParametrosService,
    private grupoService: GrupoService,
    private centrocustoService: CentrocustoService,
    private lancamentoService: LancamentoService,
    private nfeService: NfeService,
    private valorService: ValorService,
    private router: Router,
    private appSnackBar: AppSnackbar,
    private route: ActivatedRoute,
    private ngZone: NgZone,
    private LancaDialog: MatDialog,
    private NfeDialog: MatDialog,
    private valorDialog: MatDialog
  ) {
    this.parametros = formBuilder.group({
      ccs: [{ value: '' }],
      grupos: [{ value: '' }],
      situacoes: [{ value: '' }],
      codigo: [{ value: '' }],
      descricao: [{ value: '' }],
    });
    const semFiltro: SituacaoInventario = new SituacaoInventario();
    semFiltro.id = -1;
    semFiltro.descricao = 'Todos';
    this.situacoesInventario.push(semFiltro);
    this.situacoesInventario = [
      ...this.situacoesInventario,
      ...this.globalService.getSituacoesInventario(),
    ];
    this.getCentroCustos();
    this.loadParametros();
  }

  ngOnInit(): void {
    this.inventario = this.globalService.getInventario();
  }

  ngOnDestroy(): void {
    this.inscricaoGetAll?.unsubscribe();
    this.inscricaoGetGrupo?.unsubscribe();
    this.inscricaoGetCc?.unsubscribe();
    this.inscricaoGetLancamento?.unsubscribe();
    this.inscricaoRota?.unsubscribe();
    this.inscricaoParametro?.unsubscribe();
    this.inscricaoNfe?.unsubscribe();
    this.inscricaoValores?.unsubscribe();
  }

  getNfe(imobilizado: ImobilizadoinventarioModel) {
    this.globalService.setSpin(true);
    this.inscricaoNfe = this.nfeService
      .getNfeByImobilizado(
        imobilizado.id_empresa,
        imobilizado.id_filial,
        imobilizado.id_imobilizado,
        imobilizado.imo_nfe,
        imobilizado.imo_serie,
        imobilizado.imo_item
      )
      .subscribe(
        (data: NfeModel[]) => {
          this.globalService.setSpin(false);
          if (data.length > 0) {
            this.nfe = data[0];
            this.openNfeDialog();
          }
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nas Nfes ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  getValor(imobilizado: ImobilizadoinventarioModel) {
    this.globalService.setSpin(true);
    this.inscricaoValores = this.valorService
      .getValor(
        imobilizado.id_empresa,
        imobilizado.id_filial,
        imobilizado.id_imobilizado
      )
      .subscribe(
        (data: ValorModel) => {
          this.globalService.setSpin(false);
          this.valor = data;
          this.openValoresDialog();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Valores ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  getGrupos() {
    let par = new ParametroGrupo01();

    par.id_empresa = this.globalService.getIdEmpresa();

    par.id_filial = this.globalService.getLocal().id;

    par.orderby = 'Grupo';

    this.globalService.setSpin(true);
    this.inscricaoGetGrupo = this.grupoService
      .getGruposParametro_01(par)
      .subscribe(
        (data: GrupoModel[]) => {
          this.globalService.setSpin(false);
          const semFiltro: GrupoModel = new GrupoModel();
          semFiltro.codigo = 0;
          semFiltro.descricao = 'Todos';
          this.grupos.push(semFiltro);
          this.grupos = [...this.grupos, ...data];
          this.loadParametros();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.grupos = [];
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Grupos ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  getCentroCustos() {
    let par = new ParametroCentrocusto01();

    par.id_empresa = this.globalService.getIdEmpresa();

    par.id_filial = this.globalService.getLocal().id;

    par.orderby = 'Descrição';

    this.globalService.setSpin(true);
    this.inscricaoGetCc = this.centrocustoService
      .getCentroscustosParametro_01(par)
      .subscribe(
        (data: CentrocustoModel[]) => {
          this.globalService.setSpin(false);
          const semFiltro: CentrocustoModel = new CentrocustoModel();
          semFiltro.codigo = '';
          semFiltro.descricao = 'Todos';
          this.ccs.push(semFiltro);
          this.ccs = [...this.ccs, ...data];
          this.getGrupos();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.ccs = [];
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Grupos ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  getImoIven() {
    let par = new ParametroImobilizadoinventario01();

    par.id_empresa = this.globalService.getIdEmpresa();

    par.id_filial = this.globalService.getLocal().id;

    par.id_inventario = this.globalService.getInventario().codigo;

    if (this.parametros.value.cc !== '') {
      par.id_cc = this.parametros.value.ccs;
    }

    let key = parseInt(this.parametros.value.grupos, 10);

    if (isNaN(key)) {
      par.id_grupo = 0;
    } else {
      par.id_grupo = key;
    }

    key = parseInt(this.parametros.value.situacoes, 10);

    if (isNaN(key)) {
      par.status = 0;
    } else {
      par.status = key;
    }

    key = parseInt(this.parametros.value.codigo, 10);

    if (isNaN(key)) {
      par.id_imobilizado = 0;
    } else {
      par.id_imobilizado = key;
    }

    if (this.parametros.value.descricao.trim() !== '') {
      par.descricao = this.parametros.value.descricao;
    }

    par.contador = 'N';

    par.tamPagina = this.tamPagina;

    par.pagina = this.controlePaginas.getPaginalAtual();

    par.orderby = 'Imobilizado';

    this.globalService.setSpin(true);
    this.inscricaoGetAll = this.imoInventarioService
      .getImobilizadosinventariosParametro_01(par)
      .subscribe(
        (data: ImobilizadoinventarioModel[]) => {
          this.globalService.setSpin(false);
          this.imoinv = data;
          const idx = this.imoinv.findIndex(
            (inv) =>
              inv.id_imobilizado ==
              GetValueJsonNumber(this.parametro.getParametro(), 'id_retorno')
          );
          setTimeout(() => this.viewPort.scrollToIndex(idx), 10);
          this.retorno = false;
          let config = this.parametro.getParametro();
          Object(config).id_retorno = 0;
          Object(config).new = false;
          this.parametro.parametro = JSON.stringify(config);
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.imoinv = [];
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Produtos De Inventário ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  getImoIvenContador() {
    let par = new ParametroImobilizadoinventario01();

    par.id_empresa = this.globalService.getIdEmpresa();

    par.id_filial = this.globalService.getLocal().id;

    par.id_inventario = this.globalService.getInventario().codigo;

    if (this.parametros.value.cc !== '') {
      par.id_cc = this.parametros.value.ccs;
    }

    let key = parseInt(this.parametros.value.grupos, 10);

    if (isNaN(key)) {
      par.id_grupo = 0;
    } else {
      par.id_grupo = key;
    }

    key = parseInt(this.parametros.value.situacoes, 10);

    if (isNaN(key)) {
      par.status = 0;
    } else {
      par.status = key;
    }

    key = parseInt(this.parametros.value.codigo, 10);

    if (isNaN(key)) {
      par.id_imobilizado = 0;
    } else {
      par.id_imobilizado = key;
    }

    if (this.parametros.value.descricao.trim() !== '') {
      par.descricao = this.parametros.value.descricao;
    }

    par.contador = 'S';

    par.tamPagina = this.tamPagina;

    par.orderby = 'Imobilizado';

    this.globalService.setSpin(true);
    this.inscricaoGetAll = this.imoInventarioService
      .getImobilizadosinventariosParametro_01(par)
      .subscribe(
        (data: any) => {
          this.globalService.setSpin(false);
          this.controlePaginas = new ControlePaginas(
            this.tamPagina,
            data.total == 0 ? 1 : data.total
          );
          //atualiza com o parametro
          if (this.retorno)
            if (!GetValueJsonBoolean(this.parametro.getParametro(), 'new')) {
              let config = this.parametro.getParametro();
              this.controlePaginas.setPaginaAtual(Object(config)['page']);
            } else {
              //'É inclusao ',
              this.controlePaginas.goLast();
            }
          this.getImoIven();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.imoinv = [];
          this.controlePaginas = new ControlePaginas(this.tamPagina, 1);
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Produtos De Inventário ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  getLancamento(opcao: CadastroAcoes, imobilizado: ImobilizadoinventarioModel) {
    this.globalService.setSpin(true);
    this.inscricaoGetLancamento = this.lancamentoService
      .getLancamento(
        imobilizado.id_empresa,
        imobilizado.id_filial,
        imobilizado.id_inventario,
        imobilizado.id_imobilizado
      )
      .subscribe(
        (data: any) => {
          this.globalService.setSpin(false);
          this.lancamento = data;
          //this.openLancaDialog(opcao, imobilizado);
          this.idAcao = opcao;
          this.browse = false;
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.lancamento = new LancamentoModel();
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Lançamentos ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  setValues() {
    this.parametros.setValue({
      ccs: GetValueJsonString(this.parametro.getParametro(), 'cc'),
      grupos: GetValueJsonNumber(this.parametro.getParametro(), 'grupo'),
      situacoes: GetValueJsonString(this.parametro.getParametro(), 'situacao'),
      codigo: GetValueJsonString(this.parametro.getParametro(), 'codigo'),
      descricao: GetValueJsonString(this.parametro.getParametro(), 'descricao'),
    });
  }

  getTexto() {
    return MensagensBotoes;
  }

  escolha(opcao: number, imobilizado: ImobilizadoinventarioModel) {
    if (opcao == 95) {
      this.getNfe(imobilizado);
      return;
    }

    if (opcao == 94) {
      this.getValor(imobilizado);
      return;
    }

    if (imobilizado.id_lanca == 0) {
      this.lancamento = new LancamentoModel();
      this.lancamento.id_empresa = imobilizado.id_empresa;
      this.lancamento.id_filial = imobilizado.id_filial;
      this.lancamento.id_imobilizado = imobilizado.id_imobilizado;
      this.lancamento.id_inventario = imobilizado.id_inventario;
      this.lancamento.imo_cod_cc = imobilizado.imo_cod_cc;
      this.lancamento.imo_cod_grupo = imobilizado.imo_cod_grupo;
      this.lancamento.condicao = imobilizado.condicao;
      this.lancamento.book = imobilizado.book;
      this.lancamento.id_usuario = this.globalService.getUsuario().id;
      this.lancamento.usu_razao = this.globalService.getUsuario().razao;
      this.lancamento.imo_descricao = imobilizado.imo_descricao;
      this.lancamento.estado = imobilizado.status;
      this.idAcao = CadastroAcoes.Inclusao;
      this.browse = false;
      //this.openLancaDialog(CadastroAcoes.Inclusao, imobilizado);
    } else {
      this.getLancamento(opcao, imobilizado);
    }
  }

  onChangePage() {
    this.getImoIven();
  }

  onChangeParametros() {
    this.getImoIvenContador();
  }

  onHome() {
    this.router.navigate(['']);
  }

  setValuesNoParam() {
    this.parametros.setValue({
      ccs: this.ccs[0].codigo,
      grupos: this.grupos[0].codigo,
      situacoes: 0,
      codigo: 0,
      descricao: '',
    });
  }

  onNovo() {
    this.browse = !this.browse;
    //this.openImobilizadoDialog();
  }

  onSaveConfig() {
    this.updateParametros();
  }

  loadParametros() {
    this.parametro = new ParametroModel();
    this.parametro.id_empresa = this.globalService.getIdEmpresa();
    this.parametro.modulo = 'imoinv';
    this.parametro.assinatura = 'V1.00 15/12/23';
    this.parametro.id_usuario = this.globalService.usuario.id;
    this.parametro.parametro = `
       {
         "cc": "",
         "grupo":0,
         "situacao":0,
         "codigo":0,
         "descricao": "",
         "page": 1,
         "new": false,
         "id_retorno":0
       }`;
    // this.opcoesOrdenacao = GetValueJsonStringArray(
    //   this.parametro.getParametro(),
    //  'ordenacao'
    //);
    //this.opcoesCampo = GetValueJsonStringArray(
    //  this.parametro.getParametro(),
    // 'pesquisar'
    //);
    if (this.retorno && this.globalService.estadoFind('imoinv') !== null) {
      const par = this.globalService.estadoFind('imoinv');
      if (par != null) {
        if (GetValueJsonBoolean(par.getParametro(), 'new')) {
          let config = this.parametro.getParametro();
          Object(config).id_retorno = GetValueJsonNumber(
            par.getParametro(),
            'id_retorno'
          );
          this.parametro.parametro = JSON.stringify(config);
          this.setPosicaoInclusao();
        } else {
          this.controlePaginas.setPaginaAtual(
            GetValueJsonNumber(par.getParametro(), 'page')
          );
          this.parametro.setParametro(par.getParametro());
        }
        this.globalService.estadoDelete(par);
        this.setValues();
        this.getImoIvenContador();
      }
    } else {
      this.getParametro();
    }
  }

  setPosicaoInclusao() {
    const config = this.parametro.getParametro();
    Object(config).op_ordenacao = 0;
    Object(config).op_pesquisar = 0;
    Object(config).descricao = '';
    Object(config).new = true;
    this.parametro.setParametro(config);
  }

  getParametro() {
    this.globalService.setSpin(true);
    let par = new ParametroParametro01();
    par.id_empresa = this.parametro.id_empresa;
    par.modulo = this.parametro.modulo;
    par.assinatura = this.parametro.assinatura;
    par.id_usuario = this.parametro.id_usuario;
    par.orderby = 'Usuário';
    this.inscricaoParametro = this.parametrosService
      .getParametrosParametro01(par)
      .subscribe(
        (data: ParametroModel[]) => {
          this.globalService.setSpin(false);
          this.parametro = new ParametroModel();
          this.parametro.id_empresa = data[0].id_empresa;
          this.parametro.modulo = data[0].modulo;
          this.parametro.id_usuario = data[0].id_usuario;
          this.parametro.assinatura = data[0].assinatura;
          this.parametro.parametro = data[0].parametro;
          this.parametro.user_insert = data[0].user_insert;
          this.parametro.user_update = data[0].user_update;
          this.setValues();
          this.getImoIvenContador();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.setValuesNoParam();
          this.getImoIvenContador();
        }
      );
  }

  updateParametros() {
    this.globalService.setSpin(true);
    this.parametro.user_insert = this.globalService.usuario.id;
    this.parametro.user_update = this.globalService.usuario.id;
    let config = this.parametro.getParametro();
    let key = parseInt(this.parametros.value.codigo, 10);
    if (isNaN(key)) {
      Object(config).codigo = 0;
    } else {
      Object(config).codigo = key;
    }
    Object(config).cc = this.parametros.value.ccs;
    Object(config).grupo = this.parametros.value.grupos;
    Object(config).situacao = this.parametros.value.situacoes;
    Object(config).codigo = this.parametros.value.codigo;
    Object(config).descricao = this.parametros.value.descricao;
    Object(config).page = 0;
    Object(config).new = false;
    this.parametro.parametro = JSON.stringify(config);
    this.inscricaoParametro = this.parametrosService
      .ParametroAtualiza(this.parametro)
      .subscribe(
        (data: ParametroModel) => {
          this.globalService.setSpin(false);
          this.appSnackBar.openSuccessSnackBar(`Parâmetros Atualizados`, 'OK');
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.appSnackBar.openFailureSnackBar(
            `Gravação Dos Parametros ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  openNfeDialog(): void {
    const data: NfeData = new NfeData();
    data.nfe = this.nfe;
    data.opcao = CadastroAcoes.Consulta;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'nfes';
    dialogConfig.width = '1200px';
    dialogConfig.data = data;
    const modalDialog = this.NfeDialog.open(NfeDialogComponent, dialogConfig)
      .beforeClosed()
      .subscribe((data: NfeData) => {
        //faço nada
      });
  }

  openValoresDialog(): void {
    const data: ValorData = new ValorData();
    data.valor = this.valor;
    data.opcao = CadastroAcoes.Consulta;

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = 'valores';
    dialogConfig.width = '1200px';
    dialogConfig.data = data;
    const modalDialog = this.valorDialog
      .open(ValoresDialogComponent, dialogConfig)
      .beforeClosed()
      .subscribe((data: LancaData) => {
        //faço nada
      });
  }

  openLancaDialog(
    opcao: number,
    imobilizado: ImobilizadoinventarioModel
  ): void {
    let config = this.parametro.getParametro();
    Object(config).new = false;
    Object(config).id_retorno = imobilizado.id_imobilizado;
    Object(config).page = this.controlePaginas.getPaginalAtual();
    Object(config).cc = this.parametros.value.ccs;
    Object(config).grupo = this.parametros.value.grupos;
    Object(config).situacao = this.parametros.value.situacao;
    Object(config).codigo = this.parametros.value.codigo;
    Object(config).descricao = this.parametros.value.filtro;
    this.parametro.parametro = JSON.stringify(config);
    this.globalService.estadoSave(this.parametro);
    console.log(this.parametro);
    //
    const data: LancaData = new LancaData();
    data.ccs = [...this.ccs];
    data.ccs[0].codigo = '';
    data.ccs[0].descricao = 'CENTRO DE CUSTO NÃO ALTERADO';
    data.lancamento = this.lancamento;
    data.opcao = opcao;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = 'apontamento';
    dialogConfig.width = '1200px';
    dialogConfig.data = data;
    const modalDialog = this.LancaDialog.open(
      LancaDialogComponent,
      dialogConfig
    )
      .beforeClosed()
      .subscribe((data: LancaData) => {
        this.getImoIven();
      });
  }

  openImobilizadoDialog(): void {
    const data: ImobilizadoData = new ImobilizadoData();
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = 'imobilizado';
    dialogConfig.width = '1200px';
    dialogConfig.height = '1200px';
    dialogConfig.data = data;
    const modalDialog = this.LancaDialog.open(
      ImobilizadoDialogComponent,
      dialogConfig
    )
      .beforeClosed()
      .subscribe((data: ImobilizadoData) => {
        //this.getImoIven();
      });
  }
}
