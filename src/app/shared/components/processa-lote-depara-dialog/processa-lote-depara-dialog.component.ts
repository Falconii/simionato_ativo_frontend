import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProcessaLoteDeparaData } from './processa-lote-deparaData';
import { GlobalService } from 'src/app/services/global.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppSnackbar } from '../../classes/app-snackbar';
import { DeparaService } from 'src/app/services/depara.service';
import { Observable, Subscription } from 'rxjs';
import { ParametroDepara01 } from 'src/app/parametros/parametro-depara01';
import { DeparaModel } from 'src/app/models/depara-model';
import { DeparaCustomService } from 'src/app/services/depara-custom.service';
import { ParametroDeparaAtivo } from 'src/app/parametros/parametro-depara-ativo';
import { messageError } from '../../classes/util';

@Component({
  selector: 'app-processa-lote-depara-dialog',
  templateUrl: './processa-lote-depara-dialog.component.html',
  styleUrls: ['./processa-lote-depara-dialog.component.css'],
})
export class ProcessaLoteDeparaDialogComponent implements OnInit {
  inscricaoDePara!: Subscription;

  inscricaoProcessaDePara!: Subscription;

  labelCadastro: string = '';

  totalRegistros: number = 0;

  totalProcessados: number = 0;

  lsDeparas: DeparaModel[] = [];

  processando: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ProcessaLoteDeparaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProcessaLoteDeparaData,
    private globalService: GlobalService,
    private appSnackBar: AppSnackbar,
    private deparaSrv: DeparaService,
    private deparaCustomSrv: DeparaCustomService,
  ) {}

  ngOnInit(): void {
    this.getDeparas();
  }

  ngOnDestroy(): void {
    this.inscricaoDePara?.unsubscribe();
    this.inscricaoProcessaDePara?.unsubscribe();
  }

  getDeparas() {
    let par = new ParametroDepara01();

    par.id_empresa = this.globalService.getIdEmpresa();

    par.id_local = this.globalService.local.id;

    par.id_inventario = this.globalService.inventario.codigo;

    par.status = 0;

    this.globalService.setSpin(true);

    console.log('Parametros para pesquisa', par);

    this.inscricaoDePara = this.deparaSrv.getDeparasParametro_01(par).subscribe(
      (data: any) => {
        this.globalService.setSpin(false);
        this.lsDeparas = data;
        if (this.lsDeparas.length == 0) {
          this.appSnackBar.openWarningnackBar(
            'Nenhum Registro Para Processar',
            'OK',
          );
        }
        this.totalRegistros = this.lsDeparas.length;
      },
      (error: any) => {
        this.globalService.setSpin(false);
        this.totalRegistros = 0;
        if (error.status == 409) {
          this.appSnackBar.openWarningnackBar(
            'Nenhum Registro Para Processar',
            'OK',
          );
        } else {
          this.lsDeparas = [];
          this.appSnackBar.openFailureSnackBar(
            'Falha Na Consulta Em Lote',
            'OK',
          );
        }
      },
    );
  }

  async onProcessar() {
    this.processando = true;

    this.globalService.setSpin(true);
    for (const depara of this.lsDeparas) {
      try {
        const par = new ParametroDeparaAtivo();
        par.id_empresa = depara.id_empresa;
        par.id_local = depara.id_local;
        par.id_inventario = depara.id_inventario;
        par.id_imobilizado = depara.de;
        par.id_usuario = this.globalService.getUsuario().id;

        try {
          const proc = await this.deparaCustomSrv.deparaativo(par).toPromise();

          const atualizado = await this.deparaSrv
            .getDepara(
              depara.id_empresa,
              depara.id_local,
              depara.id_inventario,
              depara.de,
              depara.para,
            )
            .toPromise();

          const index = this.lsDeparas.indexOf(depara);
          this.lsDeparas[index] = { ...atualizado };
        } catch (error) {
          console.log(error);
          this.appSnackBar.openFailureSnackBar(
            `Falha No Ativo ${depara.de} - ${error}`,
            'OK',
          );
        }
      } catch (error) {
        console.log(error);
        this.appSnackBar.openFailureSnackBar(
          `DEPARA ${messageError(error)}`,
          'OK',
        );
      }
    }
    this.globalService.setSpin(false);
    this.appSnackBar.openSuccessSnackBar(`Fim Do Procesamento!`, 'OK');
    this.data.processar = true;
  }

  onVoltar() {
    this.closeModal();
  }

  onCancelar() {
    this.data.processar = false;
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close(this.data);
  }
}
