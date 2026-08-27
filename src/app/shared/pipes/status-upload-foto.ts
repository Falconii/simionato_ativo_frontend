import { Pipe, PipeTransform } from '@angular/core';
import { CadastroAcoes } from '../classes/cadastro-acoes';

@Pipe({
  name: 'SituacaoUploadFotoPipe',
})
export class SituacaoUploadFotoPipe implements PipeTransform {
  transform(value: string): string {
    let retorno = '';
    switch (value) {
      case '0':
        retorno = 'Aguardando Envio';
        break;
      case '1':
        retorno = 'Enviado Com Sucesso';
        break;
      case '2':
        retorno = 'Falha No Envio';
        break;
      case '3':
        retorno = 'Arquivo Já Enviado';
        break;
      case '4':
        retorno = 'Erro Ao Enviar No Google Drive';
        break;
      case '5':
        retorno = 'Sem Lançamento Para Esta Foto';
        break;
      case '7':
        retorno = 'Erro Nos Parametros';
        break;
      default:
        retorno = '';
        break;
    }
    return retorno;
  }
}
