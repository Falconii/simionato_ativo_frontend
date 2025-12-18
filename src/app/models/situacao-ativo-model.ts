export class SituacaoAtivoModel {
  public codigo: number = 0;
  public descricao: string = '';
  public qtd: number = 0;

  constructor(codigo: number, descricao: string, qtd: number) {
    this.codigo = codigo;
    this.descricao = descricao;
    this.qtd = qtd;
  }
}
