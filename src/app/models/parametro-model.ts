export class ParametroModel {
  public id_empresa: number = 0;
  public modulo: string = '';
  public assinatura: string = '';
  public id_usuario: number = 0;
  public parametro: string = '';
  public user_insert: number = 0;
  public user_update: number = 0;

  public load(param: any) {
    this.id_empresa = param.id_empresa;
    this.modulo = param.modulo;
    this.assinatura = param.assinatura;
    this.id_usuario = param.id_usuario;
    this.parametro = param.parametro;
    this.user_insert = param.user_insert;
    this.user_update = param.user_update;
  }

  public getParametro(): any {
    if (!this.parametro) {
      return {};
    }

    try {
      return JSON.parse(this.parametro);
    } catch (error: any) {
      return { mensagem: String(error) };
    }
  }

  public setParametro(value: any) {
    this.parametro = JSON.stringify(value ?? {});
  }
}
