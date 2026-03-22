import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppSnackbar } from './../../../shared/classes/app-snackbar';
import { ControlePaginasV2 } from './../../../shared/classes/controle-paginasv2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { DeparaModel } from 'src/app/models/depara-model';
import { ParametroModel } from 'src/app/models/parametro-model';
import { ParametroDepara01 } from 'src/app/parametros/parametro-depara01';
import { ConfirmDialogService } from 'src/app/services/ConfirmDialog.service';
import { DeparaService } from 'src/app/services/depara.service';
import { GlobalService } from 'src/app/services/global.service';
import { AtualizaParametroDepara01 } from 'src/app/shared/classes/atualiza-parametro-parametro-depara01';
import { CadastroAcoes } from 'src/app/shared/classes/cadastro-acoes';
import { ControlePaginas } from 'src/app/shared/classes/controle-paginas';
import { TipoOperacao } from 'src/app/shared/classes/tipo-operacao';
import { ProcessaLoteDeparaData } from 'src/app/shared/components/processa-lote-depara-dialog/processa-lote-deparaData';
import { ProcessaLoteDeparaDialogComponent } from 'src/app/shared/components/processa-lote-depara-dialog/processa-lote-depara-dialog.component';
import { messageError } from 'src/app/shared/classes/util';
import { DeparaCustomService } from 'src/app/services/depara-custom.service';
import { ParametroDeparaAtivo } from 'src/app/parametros/parametro-depara-ativo';

@Component({
  selector: 'app-crud-de-para',
  templateUrl: './crud-de-para.component.html',
  styleUrls: ['./crud-de-para.component.css'],
})
export class CrudDeParaComponent implements OnInit {
  inscricaoGetDe_Para!: Subscription;
  inscricaoProcessaDePara!: Subscription;

  tamPagina = 50;

  lsDeparas: DeparaModel[] = [];

  controlePaginas: ControlePaginasV2 = new ControlePaginasV2(
    this.tamPagina,
    this.tamPagina,
  );

  retorno: boolean = false;

  parametro: ParametroModel = new ParametroModel();

  hide: boolean = false;

  paramName = 'paramdepara';

  constructor(
    private globalService: GlobalService,
    private deparaSrv: DeparaService,
    private deparaCustomSrv: DeparaCustomService,
    private router: Router,
    private appSnackBar: AppSnackbar,
    private route: ActivatedRoute,
    private confirmDialog: ConfirmDialogService,
    private Snackbar: AppSnackbar,
    private processaLoteDialog: MatDialog,
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.inscricaoGetDe_Para?.unsubscribe();
    this.inscricaoProcessaDePara?.unsubscribe();
  }

  onChangePage() {
    this.getDeparas();
  }

  onNovaConsulta() {
    this.getDeparas(TipoOperacao.Contador);
  }

  onHome() {
    this.router.navigate(['']);
  }

  onChangeParametros(param: ParametroModel) {
    console.log('Parametro Retornado', param);
    this.parametro = param;
    this.getDeparas(TipoOperacao.Contador);
  }

  escolha(op: number, depara: DeparaModel, index: number) {
    this.executaDepara(depara, index, op);
  }

  onChangeHide(hide: boolean) {
    this.hide = hide;
  }

  getDeparas(tipoOperacao: TipoOperacao = TipoOperacao.Pesquisa) {
    let par = new ParametroDepara01();

    par.id_empresa = this.globalService.getIdEmpresa();

    par.id_local = this.globalService.local.id;

    par.id_inventario = this.globalService.inventario.codigo;

    par = AtualizaParametroDepara01(par, this.parametro.getParametro());

    if (tipoOperacao == TipoOperacao.Contador) {
      par.contador = 'S';
    } else {
      par.pagina = this.controlePaginas.getPaginalAtual();
      par.tamPagina = this.controlePaginas.getTamPagina();
    }

    this.globalService.setSpin(true);

    console.log('Parametros para pesquisa', par);

    this.inscricaoGetDe_Para = this.deparaSrv
      .getDeparasParametro_01(par)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.globalService.setSpin(false);
          if (tipoOperacao == TipoOperacao.Pesquisa) {
            this.lsDeparas = data;
            console.log('de paras', this.lsDeparas);
          } else {
            this.controlePaginas = new ControlePaginasV2(
              this.tamPagina,
              data.total == 0 ? 1 : data.total,
            );
            this.getDeparas();
          }
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.lsDeparas = [];
          this.controlePaginas = new ControlePaginasV2(this.tamPagina, 0);
        },
      );
  }

  executaDepara(
    model: DeparaModel,
    index: number,
    acao: number = CadastroAcoes.Consulta,
  ) {
    if (acao == CadastroAcoes.Consulta) {
      this.inscricaoGetDe_Para = this.deparaSrv
        .getDepara(
          model.id_empresa,
          model.id_local,
          model.id_inventario,
          model.de,
          model.para,
        )
        .subscribe(
          (data: any) => {
            console.log(data);
            this.globalService.setSpin(false);
          },
          (error: any) => {
            this.globalService.setSpin(false);
            console.log(error);
          },
        );
    }
    if (acao == CadastroAcoes.Processar_DePara_Um) {
      this.confirmDialog
        .open({
          title: 'Processar "DE PARA"',
          message: `Deseja Relamente Transferir De  ${model.de} P/ ${model.para} ?`,
          icon: 'warning',
          iconColor: 'warn',
          confirmText: 'Processar',
          cancelText: 'Cancelar',
        })
        .subscribe(async (result) => {
          if (result) {
            try {
              const par = new ParametroDeparaAtivo();
              par.id_empresa = model.id_empresa;
              par.id_local = model.id_local;
              par.id_inventario = model.id_inventario;
              par.id_imobilizado = model.de;
              par.id_usuario = this.globalService.getUsuario().id;

              this.globalService.setSpin(true);

              try {
                const proc = await this.deparaCustomSrv
                  .deparaativo(par)
                  .toPromise();

                const atualizado = await this.deparaSrv
                  .getDepara(
                    model.id_empresa,
                    model.id_local,
                    model.id_inventario,
                    model.de,
                    model.para,
                  )
                  .toPromise();

                this.globalService.setSpin(false);
                this.Snackbar.openSuccessSnackBar(
                  'DE PARA Processado Com Sucesso!',
                  'OK',
                );
                this.getDeparas(TipoOperacao.Contador);
              } catch (error) {
                this.globalService.setSpin(false);
                this.appSnackBar.openFailureSnackBar(
                  `Falha No Ativo ${model.de} - ${error}`,
                  'OK',
                );
              }
            } catch (error) {
              this.globalService.setSpin(false);
              this.appSnackBar.openFailureSnackBar(
                `Pesquisa Nas Nfes ${messageError(error)}`,
                'OK',
              );
            }
          }
        });
    }
    if (acao == CadastroAcoes.Exclusao) {
      this.confirmDialog
        .open({
          title: 'Excluir registro',
          message: 'Deseja realmente excluir este item?',
          icon: 'delete',
          iconColor: 'warn',
          confirmText: 'Excluir',
          cancelText: 'Cancelar',
        })
        .subscribe((result) => {
          if (result) {
            this.inscricaoGetDe_Para = this.deparaSrv
              .deparaDelete(
                model.id_empresa,
                model.id_local,
                model.id_inventario,
                model.de,
                model.para,
              )
              .subscribe(
                (data: any) => {
                  this.globalService.setSpin(false);
                  this.Snackbar.openSuccessSnackBar(
                    'Registro Excluído Com Sucesso!',
                    'OK',
                  );
                  this.lsDeparas.splice(index, 1);
                },
                (error: any) => {
                  this.globalService.setSpin(false);
                  this.appSnackBar.openFailureSnackBar(
                    `Pesquisa Nos Usuários ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
                    'OK',
                  );
                },
              );
          }
        });
    }
  }

  onProcessarLote() {
    this.openProcessaLote();
  }
  openProcessaLote(): void {
    const data: ProcessaLoteDeparaData = new ProcessaLoteDeparaData();
    data.processar = false;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'processaLote';
    dialogConfig.panelClass = 'fullscreen-dialog';
    dialogConfig.data = data;
    const modalDialog = this.processaLoteDialog
      .open(ProcessaLoteDeparaDialogComponent, dialogConfig)
      .beforeClosed()
      .subscribe((data: ProcessaLoteDeparaData) => {
        if (data?.processar) {
          this.getDeparas(TipoOperacao.Contador);
        }
      });
  }
}
