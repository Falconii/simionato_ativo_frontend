import { Component, Inject, OnInit } from '@angular/core';
import { CadastroAcoes } from '../classes/cadastro-acoes';
import { NfeModel } from 'src/app/models/nfe-model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NfeService } from 'src/app/services/nfe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSnackbar } from '../classes/app-snackbar';
import { GlobalService } from 'src/app/services/global.service';
import { messageError } from '../classes/util';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NfeData } from './nfe-data';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-nfe-dialog',
  templateUrl: './nfe-dialog.component.html',
  styleUrls: ['./nfe-dialog.component.css'],
})
export class NfeDialogComponent implements OnInit {
  formulario: FormGroup;

  nfe: NfeModel = new NfeModel();

  erro: any;

  acao: string = 'Sem Definição';

  idAcao: number = CadastroAcoes.Consulta;

  readOnly: boolean = true;

  labelCadastro: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private nfeService: NfeService,
    private route: ActivatedRoute,
    private router: Router,
    private appSnackBar: AppSnackbar,
    private globalService: GlobalService,
    private decimalPipe: DecimalPipe,
    public dialogRef: MatDialogRef<NfeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NfeData
  ) {
    this.formulario = formBuilder.group({
      cnpj_fornecedor: [{ value: '' }],
      razao_fornecedor: [{ value: '' }],
      id_imobilizado: [{ value: '' }],
      imo_descricao: [{ value: '' }],
      nfe: [{ value: '' }],
      serie: [{ value: '' }],
      item: [{ value: '' }],
      dtemissao: [{ value: '' }],
      dtlancamento: [{ value: '' }],
      chavee: [{ value: '' }],
      qtd: [{ value: '' }],
      punit: [{ value: '' }],
      totalitem: [{ value: '' }],
      vlrcontabil: [{ value: '' }],
      baseicms: [{ value: '' }],
      percicms: [{ value: '' }],
      vlrcicms: [{ value: '' }],
    });
    this.nfe = new NfeModel();
    this.setAcao(CadastroAcoes.Consulta);
  }

  ngOnInit(): void {
    this.nfe = this.data.nfe;
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
      cnpj_fornecedor: this.nfe.cnpj_fornecedor,
      razao_fornecedor: this.nfe.razao_fornecedor,
      id_imobilizado: this.nfe.id_imobilizado,
      imo_descricao: this.nfe.imo_descricao,
      nfe: this.nfe.nfe,
      serie: this.nfe.serie,
      item: this.nfe.item,
      dtemissao: this.nfe.dtemissao,
      dtlancamento: this.nfe.dtlancamento,
      chavee: this.nfe.chavee,
      qtd: this.decimalPipe.transform(this.nfe.qtd, '1.2-2', 'pt'),
      punit: this.decimalPipe.transform(this.nfe.punit, '1.2-2', 'pt'),
      totalitem: this.decimalPipe.transform(this.nfe.totalitem, '1.2-2', 'pt'),
      vlrcontabil: this.decimalPipe.transform(
        this.nfe.vlrcontabil,
        '1.2-2',
        'pt'
      ),
      baseicms: this.decimalPipe.transform(this.nfe.vlrcontabil, '1.2-2', 'pt'),
      percicms: this.decimalPipe.transform(this.nfe.percicms, '1.2-2', 'pt'),
      vlrcicms: this.decimalPipe.transform(this.nfe.vlrcicms, '1.2-2', 'pt'),
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
        this.labelCadastro = 'Nfes - Consulta.';
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
