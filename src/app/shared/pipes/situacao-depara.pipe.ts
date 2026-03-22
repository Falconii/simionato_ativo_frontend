import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'situacaoDepara',
})
export class SituacaoDeparaPipe implements PipeTransform {
  transform(value: number): string {
    const situacoes: string[] = [
      'Não Processado',
      'Estágio 1',
      'Estagio 2',
      'Fotos',
      'Encerrado',
    ];

    if (value < 0 || value > situacoes.length - 1) {
      return '';
    } else {
      return situacoes[value];
    }
  }
}
