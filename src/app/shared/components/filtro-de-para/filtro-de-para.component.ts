import { UsuariosService } from './../../../services/usuarios.service';
import { LocalStorageService } from '../../../services/localStorage.service';
import { Orderby } from '../../classes/orderby';
import { ControlePaginas } from 'src/app/shared/classes/controle-paginas';
import { ParametrosService } from 'src/app/services/parametros.service';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Inject,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CentrocustoService } from 'src/app/services/centrocusto.service';
import { GlobalService } from 'src/app/services/global.service';
import { GrupoService } from 'src/app/services/grupo.service';
import { AppSnackbar } from '../../classes/app-snackbar';
import { Observable, Subscription } from 'rxjs';
import {
  map,
  filter,
  tap,
  take,
  distinctUntilChanged,
  debounceTime,
} from 'rxjs/operators';
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
import {
  arraytostring,
  GetValueJsonBoolean,
  GetValueJsonNumber,
  GetValueJsonString,
  messageError,
} from '../../classes/util';
import { ParametroParametro01 } from 'src/app/parametros/parametro-parametro01';
import { ParametroLancamentoUsuario } from 'src/app/parametros/parametros-lancamento-usuarios';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { ParametroSendemailv2 } from 'src/app/parametros/parametro-sendemailv2';
import { EmailService } from 'src/app/services/email.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmailDialogData } from '../email-dialog/email-dialog-data';
import { EmailDialogComponent } from '../email-dialog/email-dialog.component';
import { DownloadDialogData } from '../download-dialog/download-dialog-data';
import { DownloadDialogComponent } from '../download-dialog/download-dialog.component';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ParametroModel } from 'src/app/models/parametro-model';
import { ParametroPrincipal01 } from 'src/app/parametros/parametro-principal01';
import { PrincipalService } from 'src/app/services/principal.service';
import { PrincipalModel } from 'src/app/models/principal-model';
import { SeachDialogService } from 'src/app/services/seach-dialog.service';
import { SeachDialogData } from '../seach-dialog/seach-dialog-data';
import { CadastroEnum } from '../../enum/cadastro-enum.enum';
import { ParametroUsuario01 } from 'src/app/parametros/parametro-usuario01';
import { ControlePaginasV2 } from '../../classes/controle-paginasv2';

@Component({
  selector: 'app-filtro-depara',
  templateUrl: './filtro-de-para.component.html',
  styleUrls: ['./filtro-de-para.component.css'],
})
export class FiltroDeParaComponent implements OnInit {
  @Input('PARAMNAME') paramName: string = '';
  @Input('RETORNO') retorno: boolean = false;
  @Input('EMAIL') email: boolean = false;
  @Input('DOWNLOAD') download: boolean = false;
  @Input('CONTROLE_PAGINAS') controle_paginas: ControlePaginasV2 =
    new ControlePaginasV2(50, 0);
  @Input('HIDE') hide: boolean = true;
  @Output('changeParametro') change = new EventEmitter<ParametroModel>();
  @Output('changeHide') changeHide = new EventEmitter<boolean>();

  inscricaoParametro!: Subscription;
  inscricaoExecutores!: Subscription;
  inscricaoExcel!: Subscription;
  inscricaoEmail!: Subscription;

  formulario: FormGroup;

  lsUsuarios: UsuarioModel[] = [];

  showFiltro: boolean = true;

  hideAcao: string = 'Ocultar';

  orderby: Orderby[] = [
    { sigla: '000001', descricao: 'De' },
    { sigla: '000002', descricao: 'Para' },
  ];

  situacoes: Orderby[] = [
    { sigla: '0', descricao: 'Não Processado' },
    { sigla: '1', descricao: 'Estagio 1' },
    { sigla: '2', descricao: 'Estagio 2' },
    { sigla: '3', descricao: 'Fotos' },
    { sigla: '4', descricao: 'Encerrado' },
  ];

  parametro: ParametroModel = new ParametroModel();

  enable_filter: boolean = false;

  valueChangeSubs: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalService,
    private parametrosService: ParametrosService,
    private usuarioSrv: UsuariosService,
    private emailService: EmailService,
    private appSnackBar: AppSnackbar,
    private EmailDialog: MatDialog,
    private DownLoadDialog: MatDialog,
    private searchDialogService: SeachDialogService,
  ) {
    this.formulario = formBuilder.group({
      orderby: [{ value: '' }],
      de: [{ value: '' }],
      para: [{ value: '' }],
      status: [{ value: '' }],
      id_usuario: [{ value: '' }],
    });
    this.setHide();
    this.setValuesNoParam();
    this.getUsuarios();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.inscricaoParametro?.unsubscribe();
    this.inscricaoExecutores?.unsubscribe();
    this.inscricaoExcel?.unsubscribe();
    this.inscricaoEmail?.unsubscribe();
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
    const deSub = this.formulario
      .get('de')
      ?.valueChanges.pipe(
        map((value) => value?.trim()),
        filter((value) => value?.length >= 0),
        debounceTime(350),
        distinctUntilChanged(),
      )
      .subscribe(() => this.onChangeParametros());

    const paraSub = this.formulario
      .get('para')
      ?.valueChanges.pipe(
        map((value) => value?.trim()),
        filter((value) => value?.length >= 0),
        debounceTime(350),
        distinctUntilChanged(),
      )
      .subscribe(() => this.onChangeParametros());

    this.valueChangeSubs = [deSub, paraSub].filter(
      (sub): sub is Subscription => !!sub,
    );
  }

  getUsuarios() {
    let par = new ParametroUsuario01();

    par.id_empresa = this.globalService.getEmpresa().id;

    this.globalService.setSpin(true);
    this.inscricaoExecutores = this.usuarioSrv.getusuarios_01(par).subscribe(
      (data: UsuarioModel[]) => {
        this.globalService.setSpin(false);
        this.lsUsuarios = data;
        this.loadParametros();
      },
      (error: any) => {
        this.globalService.setSpin(false);
        this.lsUsuarios = [];
        this.appSnackBar.openFailureSnackBar(
          `Pesquisa Nos Usuários ${messageError(error)}`,
          'OK',
        );
      },
    );
  }

  onGetExcelToEmailOrDownLoad(destino: string) {
    if (destino.toUpperCase() == 'E-MAIL') {
      this.openEmailDialog();
    } else {
      this.openDownLoadDialog();
    }
  }

  sendMail(fileName: string) {
    let par = new ParametroSendemailv2();

    par.id_empresa = this.globalService.getIdEmpresa();

    par.id_filial = this.globalService.getLocal().id;

    par.id_inventario = this.globalService.getInventario().codigo;

    par.assunto = 'Relatório Dos Ativos Do Inventário';

    par.destinatario = this.globalService.usuario.email;

    par.mensagem =
      'Mensagem enviada automaticamento por solicitação do usuário. Favor Verificar Anexo.';

    par.fileName = fileName;

    this.globalService.setSpin(true);

    this.inscricaoEmail = this.emailService.sendEmailV2(par).subscribe(
      (data: any) => {
        this.globalService.setSpin(false);
        this.appSnackBar.openSuccessSnackBar(
          `E-Mail Enviado Com Sucesso!`,
          'OK',
        );
      },
      (error: any) => {
        this.globalService.setSpin(false);
        this.appSnackBar.openFailureSnackBar(
          `Pesquisa Nos Produtos De Inventário ${messageError(error)}`,
          'OK',
        );
      },
    );
  }

  setValues() {
    this.formulario.setValue({
      orderby: GetValueJsonString(this.parametro.getParametro(), 'orderby'),
      de: GetValueJsonString(this.parametro.getParametro(), 'de'),
      para: GetValueJsonString(this.parametro.getParametro(), 'para'),
      status: GetValueJsonString(this.parametro.getParametro(), 'status'),
      id_usuario: GetValueJsonNumber(
        this.parametro.getParametro(),
        'id_usuario',
      )?.toString(),
    });
  }

  setValuesNoParam() {
    this.enable_filter = false;
    this.formulario.setValue({
      orderby: '000001',
      de: '',
      para: '',
      status: '',
      id_usuario: '',
    });
    this.enable_filter = true;
  }

  setHide() {
    this.hide = !this.hide;
    this.hideAcao = this.hide ? 'Mostrar' : 'Ocultar';
  }

  onlimparParametros() {
    this.parametro = this.InicializaParametro();
    this.setEnableFilter(false);
    this.setValues();
    this.setEnableFilter(true);
    this.onChangeParametros();
  }

  InicializaParametro(): ParametroModel {
    const param = new ParametroModel();
    param.id_empresa = this.globalService.getEmpresa().id;
    param.modulo = this.paramName;
    param.assinatura = 'V1.00 24/01/2026';
    param.id_usuario = this.globalService.getUsuario().id;
    param.parametro = `
           {
         "de":"",
         "para":"",
         "status": "",
         "id_usuario":"",
         "orderby":"000001"
       }`;

    return param;
  }

  loadParametros() {
    this.parametro = this.InicializaParametro();
    this.getParametro();
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
          this.setEnableFilter(true);
          this.onChangeParametros();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.setValues();
          this.setEnableFilter(true);
          this.onChangeParametros();
        },
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
            'OK',
          );
        },
      );
  }

  refreshParametro() {
    let config = this.parametro.getParametro();
    Object(config).de = this.formulario.value.de;
    Object(config).para = this.formulario.value.para;
    Object(config).status = this.formulario.value.status;
    Object(config).id_usuario = this.formulario.value.id_usuario;
    Object(config).orderby = this.formulario.value.orderby;

    console.log('refresh chamado', config);

    this.parametro.parametro = JSON.stringify(config);
  }

  onChangeParametros() {
    console.log('Cheguei na onChangeParametros');
    console.log('enable_filter', this.enable_filter);
    if (this.enable_filter) {
      this.refreshParametro();
      this.change.emit(this.parametro);
    }
  }

  onSaveConfig() {
    this.updateParametros();
  }

  onHide() {
    this.setHide();
    this.changeHide.emit(this.hide);
  }

  hasValue(campo: string): boolean {
    if (this.formulario.get(campo)?.value == '') {
      return false;
    }
    return true;
  }

  clearValue(campo: string) {
    if (campo == 'de')
      this.formulario.patchValue({
        de: '',
      });
    if (campo == 'para')
      this.formulario.patchValue({
        para: '',
      });
    if (campo == 'status')
      this.formulario.patchValue({
        status: '',
      });
    if (campo == 'id_usuario')
      this.formulario.patchValue({
        id_usuario: '',
      });
    console.log('estou chamando a ChangeParametros', campo);
    this.onChangeParametros();
  }

  ChangeValue(campo: string, value: string) {
    if (campo == 'de')
      this.formulario.patchValue({
        de: value,
      });
    if (campo == 'para')
      this.formulario.patchValue({
        para: value,
      });
    if (campo == 'status')
      this.formulario.patchValue({
        status: value,
      });
    if (campo == 'id_usuario')
      this.formulario.patchValue({
        id_usuario: value,
      });
  }

  openEmailDialog(): void {
    const data: EmailDialogData = new EmailDialogData();
    data.titulo = 'ENVIAR CONSULTA VIA E-MAIL';
    data.destinatario = this.globalService.usuario.email;
    data.escopo = 'T';
    data.labelBottomNao = 'Cancelar';
    data.labelBottonSim = 'Processar';
    data.id_empresa = this.globalService.empresa.id;
    data.id_filial = this.globalService.local.id;
    data.id_inventario = this.globalService.inventario.codigo;
    data.pagina = this.controle_paginas.getPaginalAtual();
    data.parametro = this.parametro;

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = 'consulta-email';
    dialogConfig.width = '800px';
    dialogConfig.data = data;
    const modalDialog = this.EmailDialog.open(
      EmailDialogComponent,
      dialogConfig,
    )
      .beforeClosed()
      .subscribe((data: EmailDialogData) => {});
  }

  openDownLoadDialog(): void {
    console.log('Pagina: ', this.controle_paginas.getPaginalAtual());

    const data: DownloadDialogData = new DownloadDialogData();
    data.titulo = 'DOWNLOAD DE CONSULTA';
    data.escopo = 'T';
    data.labelBottomNao = 'Cancelar';
    data.labelBottonSim = 'Processar';
    data.id_empresa = this.globalService.empresa.id;
    data.id_filial = this.globalService.local.id;
    data.id_inventario = this.globalService.inventario.codigo;
    data.pagina = this.controle_paginas.getPaginalAtual();
    data.parametro = this.parametro;

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = 'consulta-download';
    dialogConfig.width = '800px';
    dialogConfig.data = data;
    const modalDialog = this.DownLoadDialog.open(
      DownloadDialogComponent,
      dialogConfig,
    )
      .beforeClosed()
      .subscribe((data: DownloadDialogData) => {});
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

  onHoje(event: MatCheckboxChange) {
    if (event.checked) {
      let hoje: string = new Date(Date.now()).toLocaleString().split(',')[0];
      this.formulario.patchValue({
        dtinicial: hoje,
        dtfinal: hoje,
        hoje: false,
      });
      this.onChangeParametros();
    }
  }
}
