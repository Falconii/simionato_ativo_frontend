import { InventarioService } from 'src/app/services/inventario.service';
import { ImobilizadoinventarioService } from './../../../services/imobilizadoinventario.service';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { GlobalService } from './../../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ParametroLancamentoUsuario } from 'src/app/parametros/parametros-lancamento-usuarios';
import { messageError } from '../../classes/util';
import { AppSnackbar } from '../../classes/app-snackbar';
import { ResumoLancamentosUsuariosModel } from 'src/app/models/resumo-lancamentos-usuario-model';
import { ResumoInventarioModel } from 'src/app/models/resumo-inventario-model';
import { ParametroResumoInventario } from 'src/app/parametros/parametro-resumo-inventario';
declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  inscricaoExecutores!: Subscription;
  inscricaoResumo!: Subscription;

  executores: ResumoLancamentosUsuariosModel[] = [];
  resumo: ResumoInventarioModel = new ResumoInventarioModel();

  constructor(
    private globalService: GlobalService,
    private lancamentoService: LancamentoService,
    private inventarioService: InventarioService,
    private appSnackBar: AppSnackbar
  ) {}

  ngOnInit(): void {
    this.getExecutores();
  }

  ngOnDestroy() {
    this.inscricaoExecutores?.unsubscribe();
    this.inscricaoResumo?.unsubscribe();
  }

  onAtualizar() {
    this.getExecutores();
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
}
