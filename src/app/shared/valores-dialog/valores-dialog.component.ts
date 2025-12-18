import { Component, Inject, OnInit } from '@angular/core';
import { ValorModel } from 'src/app/models/valor-model';
import { CadastroAcoes } from '../classes/cadastro-acoes';
import { ValorService } from 'src/app/services/valor.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppSnackbar } from '../classes/app-snackbar';
import { ValorData } from './valor-data';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-valores-dialog',
  templateUrl: './valores-dialog.component.html',
  styleUrls: ['./valores-dialog.component.css'],
  providers: [DecimalPipe],
})
export class ValoresDialogComponent implements OnInit {
  formulario: FormGroup;

  valor: ValorModel = new ValorModel();

  erro: any;

  acao: string = 'Sem Definição';

  idAcao: number = CadastroAcoes.Consulta;

  readOnly: boolean = true;

  labelCadastro: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private valorService: ValorService,
    private route: ActivatedRoute,
    private router: Router,
    private appSnackBar: AppSnackbar,
    private globalService: GlobalService,
    private decimalPipe: DecimalPipe,
    public dialogRef: MatDialogRef<ValoresDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ValorData
  ) {
    this.formulario = formBuilder.group({
      id_imobilizado: [{ value: '' }],
      imo_descricao: [{ value: '' }],
      dtaquisicao: [{ value: '' }],
      vlraquisicao: [{ value: '' }],
      totaldepreciado: [{ value: '' }],
      vlrresidual: [{ value: '' }],
      reavalicao: [{ value: '' }],
      deemed: [{ value: '' }],
      vlrconsolidado: [{ value: '' }],
    });
    this.valor = new ValorModel();
    this.idAcao = data.opcao;
    this.setAcao(this.idAcao);
  }

  ngOnInit(): void {
    this.valor = this.data.valor;
    this.setValue();
  }

  ngOnDestroy(): void {}

  actionFunction() {
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

  setValue() {
    this.formulario.setValue({
      id_imobilizado: this.valor.id_imobilizado,
      imo_descricao: this.valor.imo_descricao,
      dtaquisicao: this.valor.dtaquisicao,
      vlraquisicao: this.decimalPipe.transform(
        this.valor.vlraquisicao,
        '1.2-2',
        'pt'
      ),
      totaldepreciado: this.decimalPipe.transform(
        this.valor.totaldepreciado,
        '1.2-2',
        'pt'
      ),
      vlrresidual: this.decimalPipe.transform(
        this.valor.vlrresidual,
        '1.2-2',
        'pt'
      ),
      reavalicao: this.decimalPipe.transform(
        this.valor.reavalicao,
        '1.2-2',
        'pt'
      ),
      deemed: this.decimalPipe.transform(this.valor.reavalicao, '1.2-2', 'pt'),
      vlrconsolidado: this.decimalPipe.transform(
        this.valor.vlrconsolidado,
        '1.2-2',
        'pt'
      ),
    });
  }

  getLabelCancel() {
    if (this.idAcao == CadastroAcoes.Consulta) {
      return 'Voltar';
    } else {
      return 'Cancelar';
    }
  }

  setAcao(op: number) {
    switch (+op) {
      case CadastroAcoes.Consulta:
        this.acao = 'Voltar';
        this.labelCadastro = 'Valores - Consulta.';
        this.readOnly = true;
        break;
      default:
        break;
    }
  }

  getAcoes() {
    return CadastroAcoes;
  }
}
