export class DeparaModel {
  public id_empresa: number = 0;
  public id_local: number = 0;
  public id_inventario: number = 0;
  public de: number = 0;
  public para: number = 0;
  public status: number = 0;
  public de_descricao: string = '';
  public id_usuario: number = 0;
  public dt_processamento: Date = new Date();
  public updated_at: Date = new Date();
  public user_insert: number = 0;
  public user_update: number = 0;
  public imob_descricao: string = '';
  public exec_nome: string = '';
  public proc_nome: string = '';
}
