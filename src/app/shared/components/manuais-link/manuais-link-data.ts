import { DeparaModel } from 'src/app/models/depara-model';
import { ImobilizadoinventarioModel } from 'src/app/models/imobilizadoinventario-model';

export class ManuaisLinkData {
  public processar: boolean = false;
  public ativo: ImobilizadoinventarioModel = new ImobilizadoinventarioModel();
  public depara?: DeparaModel = new DeparaModel();
}
