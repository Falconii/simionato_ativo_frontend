import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChangeMod01Data } from './change-mod01-data';
import { GlobalService } from 'src/app/services/global.service';
import { AppSnackbar } from '../../classes/app-snackbar';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CadastroAcoes } from '../../classes/cadastro-acoes';

@Component({
  selector: 'app-change-mod01-dialog',
  templateUrl: './change-mod01-dialog.component.html',
  styleUrls: ['./change-mod01-dialog.component.css']
})
export class ChangeMod01DialogComponent implements OnInit {

  inscricaoAcao!: Subscription;
  formulario: FormGroup;
  labelCadastro: string = '';
  readOnly: boolean = false;
  gravando: boolean = false;
  focusEntrada  : boolean = false;
  focusCancelar : boolean = false;
  panelOpenState = false;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ChangeMod01DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChangeMod01Data,
    private globalService: GlobalService,
    private appSnackBar: AppSnackbar,
    private lancamentoService: LancamentoService) {

    this.formulario = formBuilder.group({
      de: [{ value: '' }],
      deDescricao: [{ value: '' }],
      para: [{ value: '' }],
      paraDescricao: [{ value: '' }],
      paraGrupo:[{ value: '' }],
      paraCC:[{ value: '' }]
    });
     }
     ngOnInit(): void {
       this.setValue();
    }

    ngOnDestroy(): void {
      this.inscricaoAcao?.unsubscribe();
    }

    actionFunction() {
      if (this.formulario.valid) {
        this.executaAcao();
      } else {
        this.formulario.markAllAsTouched();
        this.appSnackBar.openSuccessSnackBar(
          `Formulário Com Campos Inválidos.`,
          'OK'
        );
      }
    }

    closeModal() {
      this.dialogRef.close();
    }

    getAcoes() {
      return CadastroAcoes;
    }

    setAcao(op: number) {
      this.focusEntrada = false;
      this.focusCancelar = false;
          this.labelCadastro = `Inclusão`;
          this.readOnly = false;
          this.focusEntrada = true;
    }

    executaAcao() {
      this.data.processar = true;

    }

    getLabelCancel() {
        return 'Cancelar';
    }

    setValue() {
      this.formulario.setValue({
        de: this.data.ativo.id_imobilizado,
        deDescricao:this.data.ativo.imo_descricao,
        para: "",
        paraDescricao:"",
        paraGrupo:"",
        paraCC:""
      });
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


}
