import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChangeMod01Data } from './change-mod01-data';
import { GlobalService } from 'src/app/services/global.service';
import { AppSnackbar } from '../../classes/app-snackbar';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-change-mod01-dialog',
  templateUrl: './change-mod01-dialog.component.html',
  styleUrls: ['./change-mod01-dialog.component.css']
})
export class ChangeMod01DialogComponent implements OnInit {

  inscricaoAcao!: Subscription;
  formulario: FormGroup;
  idAcao: number = 0;
  acao: string = '';
  labelCadastro: string = '';
  readOnly: boolean = false;
  gravando: boolean = false;
  focusEntrada  : boolean = false;
  focusCancelar : boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ChangeMod01DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChangeMod01Data,
    private globalService: GlobalService,
    private appSnackBar: AppSnackbar,
    private lancamentoService: LancamentoService) {

    this.formulario = formBuilder.group({
      usuario: [{ value: '' }],
      nlanc: [{ value: '' }],
      data: [{ value: '' }],
      situacao: [{ value: '' }],
      situacao_: [{ value: '' }],
      codigo: [{ value: '' }],
      novo_codigo: [{ value: '' }],
      descricao: [{ value: '' }],
      cc_original: [{ value: '' }],
      cc_novo: [{ value: '' }],
      cc_novo_: [{ value: '' }],
      condicao: [{ value: '' }],
      condicao_: [{ value: '' }],
      book: [{ value: '' }],
      book_: [{ value: '' }],
      obs: [{ value: '' }],
    });

    //this.setValue();
     }

  ngOnInit(): void {
  }

}
