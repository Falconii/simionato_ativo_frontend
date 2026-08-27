import { DecimalPipe } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlterObsDialogData } from './alter-obs-dialog-Data';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ImobilizadoinventarioModel } from 'src/app/models/imobilizadoinventario-model';
import { GlobalService } from 'src/app/services/global.service';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { ImobilizadoinventarioService } from 'src/app/services/imobilizadoinventario.service';
import { ImobilizadoService } from 'src/app/services/imobilizado.service';
import { ImobilizadoModel } from 'src/app/models/imobilizado-model';
import { OrigemPipe } from 'src/app/shared/pipes/origem.pipe';
import { PreencheZerosPipe } from 'src/app/shared/pipes/preenchezeros.pipe';
import { ValidatorStringLen } from 'src/app/shared/Validators/validator-string-len';
import { Subscriber, Subscription } from 'rxjs';
import { LancamentoModel } from 'src/app/models/lancamento-model';
import { messageError } from 'src/app/shared/classes/util';

@Component({
  selector: 'app-alter-obs-dialog',
  templateUrl: './alter-obs-dialog.component.html',
  styleUrls: ['./alter-obs-dialog.component.css'],
})
export class AlterObsDialogComponent implements OnInit {
  formulario: FormGroup;

  imobilizado: ImobilizadoModel = new ImobilizadoModel();

  inscricaoAcao!: Subscription;

  erro: any;

  acao: string = 'Sem Definição';

  labelCadastro: string = 'Alterar Observação';

  constructor(
    private formBuilder: FormBuilder,
    private imoInvSrv: ImobilizadoinventarioService,
    private imobilizadoSrv: ImobilizadoService,
    private route: ActivatedRoute,
    private router: Router,
    private appSnackBar: AppSnackbar,
    private globalService: GlobalService,
    private decimalPipe: DecimalPipe,
    private dialogRef: MatDialogRef<AlterObsDialogComponent>,
    private origemPipe: OrigemPipe,
    private preencheZerosPipe: PreencheZerosPipe,
    @Inject(MAT_DIALOG_DATA) public data: AlterObsDialogData,
  ) {
    this.formulario = formBuilder.group({
      codigo: [{ value: '' }],
      descricao: [{ value: '' }],
      origem: [{ value: '' }],
      obs: [{ value: '' }, [ValidatorStringLen(1, 255, false)]],
      sugestao: [{ value: '' }],
    });
    this.imobilizado = new ImobilizadoModel();
  }

  ngOnInit(): void {
    this.setValue();
  }

  ngOnDestroy(): void {
    this.inscricaoAcao?.unsubscribe();
  }

  onProcessar() {
    this.alterarObs();
  }

  alterarObs() {
    const par = {
      id_empresa: this.data.imoInven.id_empresa,
      id_filial: this.data.imoInven.id_filial,
      id_inventario: this.data.imoInven.id_inventario,
      id_imobilizado: this.data.imoInven.id_imobilizado,
      id_usuario: this.globalService.getUsuario().id,
      obs: this.formulario.get('obs')?.value.toUpperCase().trim(),
    };

    this.globalService.setSpin(true);
    this.inscricaoAcao = this.imoInvSrv.alter_obs(par).subscribe(
      async (data: any) => {
        this.globalService.setSpin(false);
        this.data.imoInven.lanc_obs = par.obs;
        if (this.data.imoInven.imo_origem == 'M') {
          this.data.imoInven.imo_descricao = par.obs;
        }
        this.appSnackBar.openSuccessSnackBar(
          `Observação alterada com Sucesso!`,
          'OK',
        );
        this.data.result = true;
        this.closeModal();
      },
      (error: any) => {
        this.globalService.setSpin(false);
        this.appSnackBar.openFailureSnackBar(` ${messageError(error)}`, 'OK');
      },
    );
  }

  onCancel() {
    this.data.result = false;
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close(this.data);
  }

  setValue() {
    this.formulario.setValue({
      codigo: this.preencheZerosPipe.transform(
        this.data.imoInven.id_imobilizado,
      ),
      descricao: this.data.imoInven.imo_descricao,
      origem: this.origemPipe.transform(this.data.imoInven.imo_origem),
      obs: this.data.imoInven.lanc_obs,
      sugestao: this.formatarDescricao(this.data.imoInven.lanc_obs.trim()),
    });
  }

  getLabelCancel() {
    return 'Cancelar';
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
  formatarDescricao(valor: string): string {
    if (!valor) {
      return '';
    }

    // Já está correto
    if (valor.startsWith('FERRAMENTA MOLDE - ')) {
      return valor;
    }

    // Começa com "FERRAMENTA MOLDE " (sem o traço)
    if (valor.startsWith('FERRAMENTA MOLDE ')) {
      return (
        'FERRAMENTA MOLDE - ' + valor.substring('FERRAMENTA MOLDE '.length)
      );
    }

    // Começa com "MOLDE - "
    if (valor.startsWith('MOLDE - ')) {
      return 'FERRAMENTA MOLDE - ' + valor.substring('MOLDE - '.length);
    }

    // Começa com "MOLDE " (sem traço)
    if (valor.startsWith('MOLDE ')) {
      return 'FERRAMENTA MOLDE - ' + valor.substring('MOLDE '.length);
    }

    // Começa com "MOLDE" colado em algo (ex: "MOLDEABC")
    if (valor.startsWith('MOLDE')) {
      const resto = valor.substring('MOLDE'.length);
      // remove apenas espaços à esquerda, sem usar trimStart
      const restoSemEspacos = resto.replace(/^ +/, '');
      return 'FERRAMENTA MOLDE - ' + restoSemEspacos;
    }

    // Nenhuma tratativa atendida → retorna vazio
    return '';
  }

  copySugestao() {
    this.formulario.patchValue({
      obs: this.formulario.get('sugestao')?.value.toUpperCase().trim() || '',
    });
  }

  hasValue(campo: string): boolean {
    if (this.formulario.get(campo)?.value == '') {
      return false;
    }
    return true;
  }
}
