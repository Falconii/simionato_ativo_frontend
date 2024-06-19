import { InventarioService } from 'src/app/services/inventario.service';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { GlobalService } from './../../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ParametroLancamentoUsuario } from 'src/app/parametros/parametros-lancamento-usuarios';
import { messageError } from '../../classes/util';
import { AppSnackbar } from '../../classes/app-snackbar';
import { ResumoLancamentosUsuariosModel } from 'src/app/models/resumo-lancamentos-usuario-model';
import { ResumoInventarioModel } from 'src/app/models/resumo-inventario-model';
import { InventarioModel } from 'src/app/models/inventario-model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AmbienteModel } from 'src/app/models/ambiente-model';
declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  inscricaoExecutores!: Subscription;
  inscricaoResumo!: Subscription;
  inscricaoAmbiente!: Subscription;

  executores: ResumoLancamentosUsuariosModel[] = [];
  resumo: ResumoInventarioModel = new ResumoInventarioModel();
  inventario: InventarioModel = new InventarioModel();
  ambiente: AmbienteModel = new AmbienteModel();

  constructor(
    private globalService: GlobalService,
    private lancamentoService: LancamentoService,
    private inventarioService: InventarioService,
    private usuarioService: UsuariosService,
    private appSnackBar: AppSnackbar
  ) {
    google.charts.load('current', { packages: ['corechart'] });
  }

  ngOnInit(): void {
    this.inventario = this.globalService.getInventario();
    this.getAmbiente();
  }

  ngOnDestroy() {
    this.inscricaoExecutores?.unsubscribe();
    this.inscricaoResumo?.unsubscribe();
    this.inscricaoAmbiente?.unsubscribe();
  }

  onAtualizar() {
    this.getAmbiente();
  }

  getAmbiente() {
    this.globalService.setSpin(true);
    this.ambiente.id_retorno = 400;
    this.ambiente.mensa_retorno = 'Buscando Dados Do Inventário';
    this.inscricaoAmbiente = this.usuarioService
      .getambiente(
        this.globalService.getEmpresa().id,
        this.globalService.getUsuario().id
      )
      .subscribe(
        (data: AmbienteModel) => {
          this.globalService.setSpin(false);
          this.ambiente = data;
          if (this.ambiente.id_retorno == 200) {
            this.getExecutores();
          }
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.ambiente = new AmbienteModel();
          this.ambiente.id_retorno = 409;
          this.ambiente.mensa_retorno =
            'Ambiente Não Encontado Ou Incomplento!';
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Ambiente ${messageError(error)}`,
            'OK'
          );
        }
      );
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
          this.executores = data;
          this.getResumo();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.executores = [];
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Apontamentos ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  getResumo() {
    this.globalService.setSpin(true);
    this.inscricaoResumo = this.inventarioService
      .resumoInventario(
        this.globalService.getEmpresa().id,
        this.globalService.getLocal().id,
        this.globalService.getInventario().codigo
      )
      .subscribe(
        (data: ResumoInventarioModel) => {
          this.globalService.setSpin(false);
          this.resumo.descricao = data.descricao;
          this.resumo.responsavel = data.responsavel;
          this.resumo.situacao = data.situacao;
          this.resumo.total_ativos = data.total_ativos;
          this.resumo.total_inventariados = data.total_inventariados;
          this.resumo.situacao_0 = data.situacao_0;
          this.resumo.situacao_1 = data.situacao_1;
          this.resumo.situacao_2 = data.situacao_2;
          this.resumo.situacao_3 = data.situacao_3;
          this.resumo.situacao_4 = data.situacao_4;
          this.resumo.situacao_5 = data.situacao_5;
          this.resumo.fotos = data.fotos;
          this.Atualizar();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.resumo = new ResumoInventarioModel();
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Resumo Inventarios ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  Atualizar() {
    if (this.globalService.logado) {
      this.buidChartExecutores();
    }
  }

  buidChartExecutores() {
    var func = (chart: any) => {
      var horas: number = 0;
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      const qtd_inventario =
        this.resumo.situacao_1 +
        this.resumo.situacao_2 +
        this.resumo.situacao_3 +
        this.resumo.situacao_4 +
        this.resumo.situacao_5;
      data.addRows([['Não Inventariado', this.resumo.situacao_0]]);
      data.addRows([['Inventariado', qtd_inventario]]);
      // dados.forEach((exec) => {
      //  data.addRows([[this.firstName.transform(exec.nome), exec.horas]]);
      //   horas += exec.horas;
      // });
      var options = {
        title: `SITUAÇÃO DO INVENTÁRIO `,
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
}
