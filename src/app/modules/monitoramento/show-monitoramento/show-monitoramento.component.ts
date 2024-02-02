import { ParametroModel } from 'src/app/models/parametro-model';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CentrocustoModel } from 'src/app/models/centrocusto-model';
import { GrupoModel } from 'src/app/models/grupo-model';
import { ImobilizadoinventarioModel } from 'src/app/models/imobilizadoinventario-model';
import { LancamentoModel } from 'src/app/models/lancamento-model';
import { SituacaoInventario } from 'src/app/shared/classes/situacao-inventario';
import { GlobalService } from 'src/app/services/global.service';
import { ImobilizadoinventarioService } from 'src/app/services/imobilizadoinventario.service';
import { ParametrosService } from 'src/app/services/parametros.service';
import { GrupoService } from 'src/app/services/grupo.service';
import { CentrocustoService } from 'src/app/services/centrocusto.service';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import {
  GetValueJsonNumber,
  GetValueJsonString,
  messageError,
} from 'src/app/shared/classes/util';
import { ParametroCentrocusto01 } from 'src/app/parametros/parametro-centrocusto01';
import { ParametroGrupo01 } from 'src/app/parametros/parametro-grupo01';
import { ParametroParametro01 } from 'src/app/parametros/parametro-parametro01';
import { InventarioModel } from 'src/app/models/inventario-model';
import { ParametroImobilizadoinventario01 } from 'src/app/parametros/parametro-imobilizadoinventario01';
import { WorkInventario } from 'src/app/shared/classes/work-inventario';
import { ExecInventario } from 'src/app/shared/classes/exec-inventario';
import { FirstNamePipe } from 'src/app/shared/pipes/first-name.pipe';
import { SituacaoPipe } from 'src/app/shared/pipes/situacao.pipe';

declare var google: any;

@Component({
  selector: 'app-show-monitoramento',
  templateUrl: './show-monitoramento.component.html',
  styleUrls: ['./show-monitoramento.component.css'],
})
export class ShowMonitoramentoComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewPort!: CdkVirtualScrollViewport;

  inscricaoGetInventario!: Subscription;
  inscricaoGetGrupo!: Subscription;
  inscricaoGetCc!: Subscription;
  inscricaoGetLancamento!: Subscription;
  inscricaoParametro!: Subscription;
  inscricaoLancamento!: Subscription;

  imoinv: ImobilizadoinventarioModel[] = [];

  grupos: GrupoModel[] = [];

  ccs: CentrocustoModel[] = [];

  parametros: FormGroup;

  erro: string = '';

  parametro: ParametroModel = new ParametroModel();

  situacoesInventario: SituacaoInventario[] = [];

  lancamento: LancamentoModel = new LancamentoModel();

  inventario: InventarioModel = this.globalService.getInventario();

  resumo: WorkInventario[] = [];

  executores: ExecInventario[] = [];

  totalAtivos: number = 0;

  id_exec: number = 0;

  currentStyles: Record<string, string> = {};

  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalService,
    private imoInventarioService: ImobilizadoinventarioService,
    private parametrosService: ParametrosService,
    private grupoService: GrupoService,
    private centrocustoService: CentrocustoService,
    private appSnackBar: AppSnackbar,
    private firstName: FirstNamePipe,
    private situacao: SituacaoPipe
  ) {
    google.charts.load('current', { packages: ['corechart'] });
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
  }

  ngOnInit(): void {
    this.getCentroCustos();
  }

  ngOnDestroy(): void {
    this.inscricaoGetInventario?.unsubscribe();
    this.inscricaoGetGrupo?.unsubscribe();
    this.inscricaoGetCc?.unsubscribe();
    this.inscricaoGetLancamento?.unsubscribe();
    this.inscricaoParametro?.unsubscribe();
    this.inscricaoLancamento?.unsubscribe();
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

  getImoIven() {
    let par = new ParametroImobilizadoinventario01();

    par.id_empresa = this.globalService.getIdEmpresa();

    par.id_filial = this.globalService.getLocal().id;

    par.id_inventario = this.globalService.getInventario().codigo;

    if (this.parametros.value.ccs !== '') {
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

    par.tamPagina = 0;

    par.pagina = 0;

    par.orderby = 'Imobilizado';

    this.globalService.setSpin(true);
    this.inscricaoLancamento = this.imoInventarioService
      .getImobilizadosinventariosParametro_01(par)
      .subscribe(
        (data: ImobilizadoinventarioModel[]) => {
          this.globalService.setSpin(false);
          this.imoinv = data;
          this.resumo = [];
          this.executores = [];
          this.imoinv.forEach((lan) => {
            //resumo
            let idx = this.resumo.findIndex((res) => res.id == lan.status);
            if (idx == -1) {
              const resumo: WorkInventario = new WorkInventario();
              resumo.id = lan.status;
              resumo.situacao = this.situacao.transform(lan.status);
              resumo.ativos = 1;
              this.resumo.push(resumo);
            } else {
              this.resumo[idx].ativos += 1;
            }
            //executores
            idx = this.executores.findIndex(
              (exec) => exec.id == lan.lanc_id_usuario
            );
            if (idx == -1) {
              const exec: ExecInventario = new ExecInventario();
              exec.id = lan.lanc_id_usuario;
              exec.nome = lan.usu_razao;
              exec.ativos += 1;
              this.executores.push(exec);
            } else {
              this.executores[idx].ativos += 1;
            }
          });
          this.setCurrentStyles();
          this.Atualizar();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.imoinv = [];
          this.resumo = [];
          this.executores = [];
          this.setCurrentStyles();
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Produtos De Inventário ${messageError(error)}`,
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

  onChangeParametros() {
    this.getImoIven();
  }

  onSaveConfig() {
    this.updateParametros();
  }

  loadParametros() {
    this.parametro = new ParametroModel();
    this.parametro.id_empresa = this.globalService.getIdEmpresa();
    this.parametro.modulo = 'monitor';
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
          this.getImoIven();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          let config = this.parametro.getParametro();
          Object(config).new = false;
          Object(config).id_retorno = 0;
          Object(config).page = 0;
          Object(config).cc = this.ccs[0].codigo;
          Object(config).grupo = this.grupos[0].codigo;
          Object(config).situacao = 0;
          Object(config).codigo = 0;
          Object(config).descricao = '';
          this.parametro.parametro = JSON.stringify(config);
          this.setValues();
          this.getImoIven();
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

  Atualizar() {
    this.buidChartExecutores(this.resumo);
  }

  buidChartExecutores(dados: WorkInventario[]) {
    var func = (chart: any) => {
      var ativos: number = 0;
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      dados.forEach((res) => {
        data.addRows([[res.situacao, res.ativos]]);
        ativos += res.ativos;
      });
      var options = {
        title: `Total De Ativos ${ativos}`,
        width: 400,
        height: 300,
      };
      chart().draw(data, options);
    };
    var chart = () =>
      new google.visualization.PieChart(document.getElementById('chart_div'));
    var callBack = () => func(chart);
    google.charts.setOnLoadCallback(callBack);
  }

  onFiltro(executor: ExecInventario) {
    this.id_exec = executor.id;
  }

  onTodos() {
    this.id_exec = 0;
  }

  getApontatamentos(): ImobilizadoinventarioModel[] {
    if (this.id_exec == 0) return this.imoinv;
    return this.imoinv.filter((apo) => apo.lanc_id_usuario == this.id_exec);
  }

  setCurrentStyles() {
    this.currentStyles = {
      visibility: this.resumo.length > 0 ? 'false' : 'false',
    };
  }
}
