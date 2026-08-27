import { FotoModel } from "./foto-model";

export class ParsedFileName {
  public id_empresa: number = 0;
  public id_local: number = 0;
  public id_inventario: number = 0;
  public id_imobilizado: number = 0;
  public uuid: string = "";
  public handle: FileSystemFileHandle | null = null;
  public foto:FotoModel = new FotoModel();
  public status:string = "0";
}

