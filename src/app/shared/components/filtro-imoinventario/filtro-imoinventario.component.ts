import { ControlePaginas } from 'src/app/shared/classes/controle-paginas';
import { ParametrosService } from 'src/app/services/parametros.service';
import { Component, EventEmitter, Input, OnInit, Output, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CentrocustoService } from 'src/app/services/centrocusto.service';
import { GlobalService } from 'src/app/services/global.service';
import { GrupoService } from 'src/app/services/grupo.service';
import { AppSnackbar } from '../../classes/app-snackbar';
import { Observable, Subscription } from 'rxjs';
import { map,filter,tap,take, distinctUntilChanged, debounceTime} from   'rxjs/operators';
import { SituacaoInventario } from '../../classes/situacao-inventario';
import { Origem } from '../../classes/Origem';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { LancamentoModel } from 'src/app/models/lancamento-model';
import { ResumoLancamentosUsuariosModel } from 'src/app/models/resumo-lancamentos-usuario-model';
import { GrupoModel } from 'src/app/models/grupo-model';
import { CentrocustoModel } from 'src/app/models/centrocusto-model';
import { SimNao } from '../../classes/sim-nao';
import { Condicoes } from '../../classes/condicoes';
import { ParametroCentrocusto01 } from 'src/app/parametros/parametro-centrocusto01';
import { ParametroGrupo01 } from 'src/app/parametros/parametro-grupo01';
import { ParametroModel } from 'old/parametro-model';
import { GetValueJsonBoolean, GetValueJsonNumber, GetValueJsonString, messageError } from '../../classes/util';
import { ParametroParametro01 } from 'src/app/parametros/parametro-parametro01';
import { ParametroLancamentoUsuario } from 'src/app/parametros/parametros-lancamento-usuarios';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { ParametroImobilizadoinventario01 } from 'src/app/parametros/parametro-imobilizadoinventario01';
import { ImobilizadoinventarioService } from 'src/app/services/imobilizadoinventario.service';
import { ParametroSendemailv2 } from 'src/app/parametros/parametro-sendemailv2';
import { EmailService } from 'src/app/services/email.service';
import { FileService } from 'src/app/services/file.service';
import { ParametroDownloadfile } from 'src/app/parametros/parametro-downloadfile';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmailDialogData } from '../email-dialog/email-dialog-data';
import { EmailDialogComponent } from '../email-dialog/email-dialog.component';
import { DownloadDialogData } from '../download-dialog/download-dialog-data';
import { DownloadDialogComponent } from '../download-dialog/download-dialog.component';

@Component({
  selector: 'app-filtro-imoinventario',
  templateUrl: './filtro-imoinventario.component.html',
  styleUrls: ['./filtro-imoinventario.component.css']
})
export class FiltroImoinventarioComponent implements OnInit {

  @Input('PARAMETRO') parametro:  ParametroModel = new ParametroModel;
  @Input('RETORNO')   retorno:boolean = false;
  @Input('EMAIL')     email:boolean = false;
  @Input('DOWNLOAD')  download:boolean = false;
  @Input('CONTROLE_PAGINAS') controle_paginas:ControlePaginas = new ControlePaginas(50,0);
  @Input('HIDE') hide: boolean = true;
  @Output('changeParametro') change = new EventEmitter<ParametroModel>();

  inscricaoGetGrupo!: Subscription;
  inscricaoGetCc!: Subscription;
  inscricaoParametro!: Subscription;
  inscricaoExecutores!: Subscription;
  inscricaoExcel!: Subscription;
  inscricaoEmail!: Subscription;

  parametros: FormGroup;

  grupos: GrupoModel[] = [];

  ccs: CentrocustoModel[] = [];

  ccs_alterados: CentrocustoModel[] = [];

  condicoes: Condicoes[] = [];

  respostas: SimNao[] = [];

  situacoesInventario: SituacaoInventario[] = [];

  situacoesInventarioPar: SituacaoInventario[] = [];

  Origens: Origem[] = [];

  usuarios: UsuarioModel[] = [];

  lancamento: LancamentoModel = new LancamentoModel();

  showFiltro: boolean = true;

  executores: ResumoLancamentosUsuariosModel[] = [];

  hideAcao:string = "Ocultar";

  codigo$!:Observable<any>



  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalService,
    private grupoService: GrupoService,
    private parametrosService:ParametrosService,
    private centrocustoService: CentrocustoService,
    private lancamentoService:LancamentoService,
    private imoInventarioService:ImobilizadoinventarioService,
    private emailService:EmailService,
    private fileService:FileService,
    private appSnackBar: AppSnackbar,
    private EmailDialog: MatDialog,
    private DownLoadDialog: MatDialog,
    ) {

      this.parametros = formBuilder.group({
        ccs: [{ value: '' }],
        cc_novo: [{ value: '' }],
        grupos: [{ value: '' }],
        situacoes: [{ value: '' }],
        origem: [{ value: '' }],
        executor: [{ value: '' }],
        codigo: [{ value: '' }],
        novo: [{ value: '' }],
        condicao: [{ value: '' }],
        book: [{ value: '' }],
        descricao: [{ value: '' }],
        observacao: [{ value: '' }],
      });
    this.situacoesInventario = this.globalService.getSituacoesInventario();
    this.situacoesInventarioPar =
    this.globalService.getSituacoesInventarioPar();
    this.condicoes = this.globalService.getCondicoes();
    const todos: SimNao = new SimNao();
    todos.sigla = '';
    todos.descricao = 'Todos';
    const sim: SimNao = new SimNao();
    sim.sigla = 'S';
    sim.descricao = 'SIM';
    const nao: SimNao = new SimNao();
    nao.sigla = 'N';
    nao.descricao = 'NÃO';
    this.respostas.push(todos);
    this.respostas.push(sim);
    this.respostas.push(nao);
    this.Origens.push(new Origem('', 'Todas'));
    this.Origens = [...this.Origens, ...this.globalService.getOrigens()];
    this.setHide();
    this.setValuesNoParam();
    this.getExecutores();
    this.getCentroCustos();
    }

  ngOnInit(): void {

     this.parametros.get("codigo")?.valueChanges.pipe(
      map(value => value.trim()),
      filter(value => value.length > 0),
      debounceTime(350),
      distinctUntilChanged(),
     ).subscribe((_) => this.onChangeParametros());

     this.parametros.get("novo")?.valueChanges.pipe(
      map(value => value.trim()),
      filter(value => value.length > 0),
      debounceTime(350),
      distinctUntilChanged(),
     ).subscribe((_) => this.onChangeParametros());

     this.parametros.get("descricao")?.valueChanges.pipe(
      map(value => value.trim().toUpperCase()),
      filter(value => value.length > 0),
      debounceTime(350),
      distinctUntilChanged(),
     ).subscribe((value:string) => {
      //this.ChangeValue("descricao",value);
      this.onChangeParametros();
    });

     this.parametros.get("observacao")?.valueChanges.pipe(
      map(value => value.trim().toUpperCase()),
      filter(value => value.length > 0),
      debounceTime(350),
      distinctUntilChanged(),
      tap(value => console.log(value)),
     ).subscribe((value) => {
      //this.ChangeValue("observacao",value);
      this.onChangeParametros()
    });

  }

  ngOnDestroy(): void {
    this.inscricaoGetGrupo?.unsubscribe();
    this.inscricaoGetCc?.unsubscribe();
    this.inscricaoParametro?.unsubscribe();
    this.inscricaoExecutores?.unsubscribe();
    this.inscricaoExcel?.unsubscribe();
    this.inscricaoEmail?.unsubscribe();
  }


  getExecutores() {
    let par = new ParametroLancamentoUsuario();

    par.id_empresa = this.globalService.getEmpresa().id;
    par.id_filial = this.globalService.getLocal().id;
    par.id_inventario = this.globalService.getInventario().codigo;

    this.globalService.setSpin(true);
    this.inscricaoExecutores = this.lancamentoService
      .resumolancamentos(par)
      .subscribe(
        (data: ResumoLancamentosUsuariosModel[]) => {
          this.globalService.setSpin(false);
          const semFiltro = new ResumoLancamentosUsuariosModel();
          semFiltro.id_usuario = 0;
          semFiltro.razao = 'Todos';
          this.executores.push(semFiltro);
          this.executores = [...this.executores, ...data];
        },
        (error: any) => {
          this.globalService.setSpin(false);
          const semFiltro = new ResumoLancamentosUsuariosModel();
          semFiltro.id_usuario = 0;
          semFiltro.razao = 'Todos';
          this.executores.push(semFiltro);
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
          this.ccs = [];
          this.ccs_alterados = [];
          this.ccs.push(semFiltro);
          const semAlter: CentrocustoModel = new CentrocustoModel();
          semAlter.codigo = '';
          semAlter.descricao = 'Todos Não Alterados';
          this.ccs_alterados.push(semAlter);
          data.forEach((obj) => {
            var idx = obj.descricao.indexOf('-');
            if (idx >= 0) {
              obj.descricao =
                obj.descricao.trim().substring(idx + 1) +
                ' -> ' +
                obj.descricao.trim();
            }
          });
          data.sort((a, b) => {
            if (a.descricao < b.descricao) {
              return -1;
            }
            if (a.descricao > b.descricao) {
              return 1;
            }
            return 0;
          });
          this.ccs = [...this.ccs, ...data];
          this.ccs_alterados = [...this.ccs_alterados, ...data];
          this.getGrupos();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.ccs = [];
          this.ccs_alterados = [];
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Grupos ${messageError(error)}`,
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
          this.grupos = [];
          this.grupos.push(semFiltro);
          this.grupos = [...this.grupos, ...data];
          this.loadParametros();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.grupos = [];
          this.setValues();
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Grupos ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  onGetExcelToEmailOrDownLoad(destino:string) {

    if (destino.toUpperCase() == "E-MAIL"){
      this.openEmailDialog();
    } else {
      this.openDownLoadDialog();
    }
  }

  sendMail(fileName:string) {

    let par = new ParametroSendemailv2();

    par.id_empresa = this.globalService.getIdEmpresa();

    par.id_filial = this.globalService.getLocal().id;

    par.id_inventario = this.globalService.getInventario().codigo;

    par.assunto = "Relatório Dos Ativos Do Inventário";

    par.destinatario =  this.globalService.usuario.email;

    par.mensagem     = "Mensagem enviada automaticamento por solicitação do usuário. Favor Verificar Anexo."

    par.fileName = fileName;

    this.globalService.setSpin(true);

    this.inscricaoEmail = this.emailService
      .sendEmailV2(par)
      .subscribe(
        (data: any) => {
          this.globalService.setSpin(false);
          this.appSnackBar.openSuccessSnackBar(
            `E-Mail Enviado Com Sucesso!`,
            'OK'
          );
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Produtos De Inventário ${messageError(error)}`,
            'OK'
          );
        }
      );
  }


  setValues() {
    this.parametros.setValue({
      ccs: GetValueJsonString(this.parametro.getParametro(), 'cc'),
      cc_novo: GetValueJsonString(this.parametro.getParametro(), 'cc_novo'),
      grupos: GetValueJsonNumber(this.parametro.getParametro(), 'grupo'),
      situacoes: GetValueJsonString(this.parametro.getParametro(), 'situacao'),
      codigo: GetValueJsonNumber(this.parametro.getParametro(), 'codigo'),
      novo: GetValueJsonNumber(this.parametro.getParametro(), 'novo'),
      origem: GetValueJsonString(this.parametro.getParametro(), 'origem'),
      executor: GetValueJsonNumber(this.parametro.getParametro(), 'executor'),
      condicao: GetValueJsonNumber(this.parametro.getParametro(), 'condicao'),
      book: GetValueJsonString(this.parametro.getParametro(), 'book'),
      descricao: GetValueJsonString(this.parametro.getParametro(), 'descricao'),
      observacao: GetValueJsonString(
        this.parametro.getParametro(),
        'observacao'
      ),
    });
  }

  setValuesNoParam() {
    this.parametros.setValue({
      ccs: '',
      cc_novo: '',
      grupos: 0,
      situacoes: -1,
      codigo: '',
      novo: '',
      origem: '',
      executor: 0,
      condicao: '0',
      book: '',
      descricao: '',
      observacao: '',
    });
  }

  setHide(){
    this.hide = !this.hide;
    this.hideAcao = this.hide ? "Mostrar" : "Ocultar";
  }

  loadParametros() {
    this.parametro = new ParametroModel();
    this.parametro.id_empresa = this.globalService.getIdEmpresa();
    this.parametro.modulo = 'paramimoinv';
    this.parametro.assinatura = 'V1.00 21/08/2024';
    this.parametro.id_usuario = this.globalService.usuario.id;
    this.parametro.parametro = `
       {
         "cc": "",
         "cc_novo":"",
         "grupo":0,
         "situacao":-1,
         "codigo":0,
         "novo":0,
         "origem":"",
         "executor":0,
         "condicao":0,
         "book":"",
         "descricao": "",
         "observacao": "",
         "page": 1,
         "new": false,
         "id_retorno":0
       }`;
       if (this.retorno && this.globalService.estadoFind('paramimoinv') !== null) {
        const par = this.globalService.estadoFind('imoinv');
        if (par != null) {
          if (GetValueJsonBoolean(par.getParametro(), 'new')) {
            let config = this.parametro.getParametro();
            Object(config).id_retorno = GetValueJsonNumber(
              par.getParametro(),
              'id_retorno'
            );
            this.parametro.parametro = JSON.stringify(config);
          } else {
            this.parametro.setParametro(par.getParametro());
          }
          this.globalService.estadoDelete(par);
          this.setValues();
          this.onChangeParametros();
        }
      } else {
        this.getParametro();
      }
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
          this.onChangeParametros();
        },
        (error: any) => {
          this.globalService.setSpin(false);
        }
      );
  }

  updateParametros() {
    this.globalService.setSpin(true);
    this.parametro.user_insert = this.globalService.usuario.id;
    this.parametro.user_update = this.globalService.usuario.id;
    this.refreshParametro();
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

  refreshParametro(){
    let config = this.parametro.getParametro();
    let key = parseInt(this.parametros.value.codigo, 10);
    if (isNaN(key)) {
      Object(config).codigo = 0;
    } else {
      Object(config).codigo = key;
    }
    Object(config).cc = this.parametros.value.ccs;
    Object(config).cc_novo = this.parametros.value.cc_novo;
    Object(config).grupo = this.parametros.value.grupos;
    Object(config).situacao = this.parametros.value.situacoes;
    Object(config).codigo = this.parametros.value.codigo;
    Object(config).novo       = this.parametros.value.novo;
    Object(config).origem     = this.parametros.value.origem;
    Object(config).executor   = this.parametros.value.executor;
    Object(config).condicao   = this.parametros.value.condicao;
    Object(config).book       = this.parametros.value.book;
    Object(config).descricao  = this.parametros.value.descricao.toUpperCase();
    Object(config).observacao = this.parametros.value.observacao.toUpperCase();
    Object(config).page = 0;
    Object(config).new = false;
    this.parametro.parametro = JSON.stringify(config);
  }

  onChangeParametros(){
    this.refreshParametro();
    this.change.emit(this.parametro);
  }

  onRefreshConsulta(){
    this.refreshParametro();
    this.change.emit(this.parametro);
  }

  onSaveConfig(){
    this.updateParametros();
  }

  onHide(){
    this.setHide();
  }

  hasValue(campo: string): boolean {
      if (this.parametros.get(campo)?.value == "") {
        return false;
      }
      return true;
  }

  clearValue(campo: string){
    if (campo == 'descricao')
    this.parametros.patchValue({
      descricao: ''
    })
    if (campo == 'observacao')
      this.parametros.patchValue({
        observacao: ''
    })
    if (campo == 'codigo')
      this.parametros.patchValue({
        codigo: ''
    })
    if (campo == 'novo')
      this.parametros.patchValue({
        novo: ''
    })
    this.onChangeParametros();
}

ChangeValue(campo: string, value:string){
  if (campo == 'descricao')
  this.parametros.patchValue({
    descricao: value
  })
  if (campo == 'observacao')
    this.parametros.patchValue({
      observacao: value
  })
}


openEmailDialog(): void {
  const data: EmailDialogData = new EmailDialogData();
  data.titulo       = "ENVIAR CONSULTA VIA E-MAIL";
  data.destinatario = this.globalService.usuario.email;
  data.escopo       = "T";
  data.labelBottomNao = "Cancelar";
  data.labelBottonSim = "Processar";
  data.id_empresa     = this.globalService.empresa.id;
  data.id_filial      = this.globalService.local.id;
  data.id_inventario  = this.globalService.inventario.codigo;
  data.pagina          = this.controle_paginas.getPaginalAtual();
  data.parametro       = this.parametro;

  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.id     = 'consulta-email';
  dialogConfig.width  = '800px';
  dialogConfig.data = data;
  const modalDialog = this.EmailDialog.open(
    EmailDialogComponent,
    dialogConfig
  )
    .beforeClosed()
    .subscribe((data: EmailDialogData) => {
    });
}


openDownLoadDialog(): void {
  const data: DownloadDialogData = new DownloadDialogData();
  data.titulo       = "DOWNLOAD DE CONSULTA";
  data.escopo       = "T";
  data.labelBottomNao = "Cancelar";
  data.labelBottonSim = "Processar";
  data.id_empresa     = this.globalService.empresa.id;
  data.id_filial      = this.globalService.local.id;
  data.id_inventario  = this.globalService.inventario.codigo;
  data.pagina          = this.controle_paginas.getPaginalAtual();
  data.parametro       = this.parametro;

  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.id     = 'consulta-download';
  dialogConfig.width  = '800px';
  dialogConfig.data = data;
  const modalDialog = this.EmailDialog.open(
    DownloadDialogComponent,
    dialogConfig
  )
    .beforeClosed()
    .subscribe((data: EmailDialogData) => {
    });
}

}

