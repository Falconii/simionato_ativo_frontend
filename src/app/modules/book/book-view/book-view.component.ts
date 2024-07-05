import { CentrocustoService } from 'src/app/services/centrocusto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CentrocustoModel } from 'src/app/models/centrocusto-model';
import { GrupoModel } from 'src/app/models/grupo-model';
import { ParametroCentrocusto01 } from 'src/app/parametros/parametro-centrocusto01';
import { ParametroGrupo01 } from 'src/app/parametros/parametro-grupo01';
import { GlobalService } from 'src/app/services/global.service';
import { GrupoService } from 'src/app/services/grupo.service';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { ControlePaginas } from 'src/app/shared/classes/controle-paginas';
import { SituacaoInventario } from 'src/app/shared/classes/situacao-inventario';
import {
  GetValueJsonString,
  MensagensBotoes,
  messageError,
} from 'src/app/shared/classes/util';
import { Condicoes } from 'src/app/shared/classes/condicoes';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css'],
})
export class BookViewComponent implements OnInit {
  situacoesInventario: SituacaoInventario[] = [];

  parametros: FormGroup;

  grupos: GrupoModel[] = [];

  ccs: CentrocustoModel[] = [];

  condicoes:Condicoes[] = [];

  tamPagina = 50;

  controlePaginas: ControlePaginas = new ControlePaginas(this.tamPagina, 0);

  //inscricaoGetAll!: Subscription;
  inscricaoGetGrupo!: Subscription;
  inscricaoGetCc!: Subscription;
  //inscricaoGetLancamento!: Subscription;
  //inscricaoRota!: Subscription;
  //inscricaoParametro!: Subscription;
  //inscricaoNfe!: Subscription;
  //inscricaoValores!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalService,
    private grupoService: GrupoService,
    private centrocustoService: CentrocustoService,
    private router: Router,
    private appSnackBar: AppSnackbar,
    private route: ActivatedRoute
  ) {
    this.parametros = formBuilder.group({
      ccs: [{ value: '' }],
      grupos: [{ value: '' }],
      situacoes: [{ value: '' }],
      codigo: [{ value: '' }],
      novo: [{ value: '' }],
      condicao: [{ value: '' }],
      book: [{ value: '' }],
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

    this.condicoes = this.globalService.getCondicoes();

    this.getCentroCustos();

  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    //this.inscricaoGetAll?.unsubscribe();
    this.inscricaoGetGrupo?.unsubscribe();
    this.inscricaoGetCc?.unsubscribe();
    //this.inscricaoGetLancamento?.unsubscribe();
    //this.inscricaoRota?.unsubscribe();
    //this.inscricaoParametro?.unsubscribe();
    //this.inscricaoNfe?.unsubscribe();
    //this.inscricaoValores?.unsubscribe();
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
          this.setValues();
          //this.loadParametros();
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

  getTexto() {
    return MensagensBotoes;
  }
  /*
  setValues() {
    this.parametros.setValue({
      ccs: GetValueJsonString(this.parametro.getParametro(), 'cc'),
      grupos: GetValueJsonNumber(this.parametro.getParametro(), 'grupo'),
      situacoes: GetValueJsonString(this.parametro.getParametro(), 'situacao'),
      codigo: GetValueJsonString(this.parametro.getParametro(), 'codigo'),
      descricao: GetValueJsonString(this.parametro.getParametro(), 'descricao'),
    });
  }
*/

  setValues() {
    this.parametros.setValue({
      ccs: '1',
      grupos: '1-22',
      situacoes: 0,
      codigo: '',
      novo: '',
      book: 'N',
      descricao: '',
    });
  }

  onChangeParametros() {}

  onChangePage() {}

  getImoIvenContador() {}

  onSaveConfig() {}

  onHome() {}
}
