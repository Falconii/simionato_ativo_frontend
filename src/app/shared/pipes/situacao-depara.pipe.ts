import { GlobalService } from 'src/app/services/global.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'situacaoDepara',
})

export class SituacaoDeparaPipe implements PipeTransform {

  constructor(private globalService:GlobalService){}

  transform(value: number): string {
    const situacoes = this.globalService.getSituacoesDePara();

    if (value < 0 || value > situacoes.length - 1) {
      return '';
    } else {
      return situacoes[value].descricao;
    }
  }
}
