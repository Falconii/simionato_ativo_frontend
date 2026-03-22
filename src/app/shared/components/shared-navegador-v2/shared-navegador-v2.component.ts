import { ControlePaginasV2 } from './../../classes/controle-paginasv2';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navegador-v2',
  templateUrl: './shared-navegador-v2.component.html',
  styleUrls: ['./shared-navegador-v2.component.css'],
})
export class SharedNavegadorV2Component implements OnInit {
  @Input('controle') controlePaginas!: ControlePaginasV2;

  @Output('changePage') change = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getAtual(): string {
    return `${this.controlePaginas.getPaginalAtual()}/${this.controlePaginas.getTotalPaginas()}`;
  }

  firstPage() {
    this.controlePaginas.goFirst();
    this.change.emit('');
  }

  lastPage() {
    this.controlePaginas.goLast();
    this.change.emit('');
  }

  forwardPage() {
    this.controlePaginas.forwardPage();
    this.change.emit('');
  }

  nextPage() {
    this.controlePaginas.nextPage();
    this.change.emit('');
  }

  get pageDisplay(): string {
    const pad = (n: number) => n.toString().padStart(2, '0');
    if (this.controlePaginas.getTotalRegistros() == 0) {
      return 'Pesquisa Em Branco!';
    } else {
      return `${pad(this.controlePaginas.getPaginalAtual())}/${pad(this.controlePaginas.getTotalPaginas())} - ${this.controlePaginas.getTotalRegistros()}`;
    }
  }
}
