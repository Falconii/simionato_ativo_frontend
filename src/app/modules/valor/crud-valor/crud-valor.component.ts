import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  ChangeDetectionStrategy,
  Component,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ParametroModel } from 'src/app/models/parametro-model';
import { ValorModel } from 'src/app/models/valor-model';
import { ParametroParametro01 } from 'src/app/parametros/parametro-parametro01';
import { ParametroValor01 } from 'src/app/parametros/parametro-valor01';
import { GlobalService } from 'src/app/services/global.service';
import { ParametrosService } from 'src/app/services/parametros.service';
import { ValorService } from 'src/app/services/valor.service';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { CadastroAcoes } from 'src/app/shared/classes/cadastro-acoes';
import { ControlePaginas } from 'src/app/shared/classes/controle-paginas';
import {
  GetValueJsonBoolean,
  GetValueJsonNumber,
  GetValueJsonString,
  GetValueJsonStringArray,
  MensagensBotoes,
  messageError,
} from 'src/app/shared/classes/util';

@Component({
  selector: 'app-crud-valor',
  templateUrl: './crud-valor.component.html',
  styleUrls: ['./crud-valor.component.css'],
})
export class CrudValorComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewPort!: CdkVirtualScrollViewport;

  inscricaoGetAll!: Subscription;
  inscricaoGetFiltro!: Subscription;
  inscricaoGetGrupo!: Subscription;
  inscricaoRota!: Subscription;
  inscricaoParametro!: Subscription;

  valores: ValorModel[] = [];

  parametros: FormGroup;

  erro: string = '';

  opcoesOrdenacao: string[] = [];

  opcoesCampo: string[] = [];

  tamPagina = 50;

  controlePaginas: ControlePaginas = new ControlePaginas(this.tamPagina, 0);

  retorno: boolean = false;

  parametro: ParametroModel = new ParametroModel();

  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalService,
    private valorService: ValorService,
    private parametroService: ParametrosService,
    private router: Router,
    private appSnackBar: AppSnackbar,
    private route: ActivatedRoute,
    private ngZone: NgZone
  ) {
    this.parametros = formBuilder.group({
      ordenacao: [null],
      campo: [null],
      filtro: [null],
      grupo: [],
    });
    this.inscricaoRota = route.params.subscribe((params: any) => {
      if (typeof params.retorno == 'undefined') {
        this.retorno = false;
      } else {
        this.retorno = true;
        const par = this.globalService.estadoFind('valor');
      }
    });
    this.loadParametros();
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.inscricaoGetAll?.unsubscribe();
    this.inscricaoGetFiltro?.unsubscribe();
    this.inscricaoGetGrupo?.unsubscribe();
    this.inscricaoRota?.unsubscribe();
    this.inscricaoParametro?.unsubscribe();
  }

  escolha(opcao: number, valor?: ValorModel) {
    if (typeof valor !== 'undefined') {
      let config = this.parametro.getParametro();
      Object(config).new = false;
      Object(config).id_retorno = valor.id_imobilizado;
      Object(config).page = this.controlePaginas.getPaginalAtual();
      Object(config).op_ordenacao = this.opcoesOrdenacao.findIndex(
        (op) => this.parametros.value.ordenacao == op
      );
      Object(config).op_pesquisar = this.opcoesCampo.findIndex(
        (op) => this.parametros.value.campo == op
      );
      Object(config).descricao = this.parametros.value.filtro;
      this.parametro.parametro = JSON.stringify(config);
      this.globalService.estadoSave(this.parametro);
      this.router.navigate([
        '/valores/valor',
        valor.id_empresa,
        valor.id_filial,
        valor.id_imobilizado,
        opcao,
      ]);
    } else {
      let config = this.parametro.getParametro();
      Object(config).new = false;
      Object(config).id_retorno = 0;
      Object(config).page = this.controlePaginas.getPaginalAtual();
      Object(config).op_ordenacao = this.opcoesOrdenacao.findIndex(
        (op) => this.parametros.value.ordenacao == op
      );
      Object(config).op_pesquisar = this.opcoesCampo.findIndex(
        (op) => this.parametros.value.campo == op
      );
      Object(config).descricao = this.parametros.value.filtro;
      this.parametro.parametro = JSON.stringify(config);
      this.globalService.estadoSave(this.parametro);
      this.router.navigate([
        '/valores/valor',
        this.globalService.getIdEmpresa(),
        this.globalService.getLocal().id,
        0,
        opcao,
      ]);
    }
  }

  getAcoes() {
    return CadastroAcoes;
  }

  setValues() {
    this.parametros.setValue({
      ordenacao:
        this.opcoesOrdenacao[
          GetValueJsonNumber(this.parametro.getParametro(), 'op_ordenacao')
        ],
      campo:
        this.opcoesCampo[
          GetValueJsonNumber(this.parametro.getParametro(), 'op_pesquisar')
        ],
      filtro: GetValueJsonString(this.parametro.getParametro(), 'descricao'),
      grupo: 1,
    });
  }

  getValores() {
    let par = new ParametroValor01();

    par.id_empresa = this.globalService.getIdEmpresa();

    par.id_filial = this.globalService.getLocal().id;

    par.orderby = this.parametros.value.ordenacao;

    if (this.parametros.value.campo == 'Imobilizado') {
      let key = parseInt(this.parametros.value.filtro, 10);

      if (isNaN(key)) {
        par.id_imobilizado = 0;
      } else {
        par.id_imobilizado = key;
      }
    }

    par.pagina = this.controlePaginas.getPaginalAtual();

    par.contador = 'N';

    par.tamPagina = this.tamPagina;

    this.globalService.setSpin(true);
    this.inscricaoGetFiltro = this.valorService
      .getValoresParametro_01(par)
      .subscribe(
        (data: ValorModel[]) => {
          this.globalService.setSpin(false);
          this.valores = [];
          this.valores = data;
          const idx = this.valores.findIndex(
            (cli) =>
              cli.id_imobilizado ==
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
          let config = this.parametro.getParametro();
          Object(config).id_retorno = 0;
          Object(config).new = false;
          this.retorno = false;
          this.globalService.setSpin(false);
          this.valores = [];
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Valores ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  getValoresContador() {
    let par = new ParametroValor01();

    par.id_empresa = this.globalService.getIdEmpresa();

    par.id_filial = this.globalService.getLocal().id;

    par.orderby = this.parametros.value.ordenacao;

    par.contador = 'S';

    par.tamPagina = this.tamPagina;

    this.globalService.setSpin(true);
    this.inscricaoGetFiltro = this.valorService
      .getValoresParametro_01(par)
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
          this.getValores();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.controlePaginas = new ControlePaginas(this.tamPagina, 0);
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Valores ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  getTexto() {
    return MensagensBotoes;
  }

  onChangePage() {
    this.getValores();
  }

  onChangeParametros() {
    this.getValoresContador();
  }
  onHome() {
    this.router.navigate(['']);
  }

  onSaveConfig() {
    this.updateParametros();
  }

  loadParametros() {
    this.parametro = new ParametroModel();
    this.parametro.id_empresa = this.globalService.getIdEmpresa();
    this.parametro.modulo = 'valor';
    this.parametro.assinatura = 'V1.00 26/08/23';
    this.parametro.id_usuario = this.globalService.usuario.id;
    this.parametro.parametro = `
      {
        "op_ordenacao": 0,
        "ordenacao": ["Imobiliado"],
        "op_pesquisar": 0,
        "pesquisar": ["Imobilizado"],
        "descricao": "",
        "page": 1,
        "new": false,
        "id_retorno":0
      }`;

    this.opcoesOrdenacao = GetValueJsonStringArray(
      this.parametro.getParametro(),
      'ordenacao'
    );
    this.opcoesCampo = GetValueJsonStringArray(
      this.parametro.getParametro(),
      'pesquisar'
    );
    if (this.retorno && this.globalService.estadoFind('imobilizado') !== null) {
      const par = this.globalService.estadoFind('imobilizado');
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
        this.getValoresContador();
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
    this.inscricaoParametro = this.parametroService
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
          this.opcoesOrdenacao = GetValueJsonStringArray(
            this.parametro.getParametro(),
            'ordenacao'
          );
          this.opcoesCampo = GetValueJsonStringArray(
            this.parametro.getParametro(),
            'pesquisar'
          );
          this.setValues();
          this.getValoresContador();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.setValues();
          this.getValoresContador();
        }
      );
  }

  updateParametros() {
    this.globalService.setSpin(true);
    this.parametro.user_insert = this.globalService.usuario.id;
    this.parametro.user_update = this.globalService.usuario.id;
    let config = this.parametro.getParametro();
    Object(config).op_ordenacao = this.opcoesOrdenacao.findIndex(
      (op) => this.parametros.value.ordenacao == op
    );
    Object(config).op_pesquisar = this.opcoesCampo.findIndex(
      (op) => this.parametros.value.campo == op
    );
    Object(config).descricao = this.parametros.value.filtro;
    Object(config).page = 0;
    Object(config).new = false;
    this.parametro.parametro = JSON.stringify(config);
    this.inscricaoParametro = this.parametroService
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
}
