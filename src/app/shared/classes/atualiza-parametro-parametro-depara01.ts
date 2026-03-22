import { ParametroDepara01 } from 'src/app/parametros/parametro-depara01';
export function AtualizaParametroDepara01(
  par: ParametroDepara01,
  config: JSON,
): ParametroDepara01 {
  try {
    let key: number = 0;

    if (Object(config).orderby?.trim() !== '') {
      par.orderby = Object(config).orderby;
    }

    key = parseInt(Object(config).de, 10);

    if (isNaN(key)) {
      par.de = 0;
    } else {
      par.de = key;
    }

    key = parseInt(Object(config).para, 10);

    if (isNaN(key)) {
      par.para = 0;
    } else {
      par.para = key;
    }

    key = parseInt(Object(config).status, 10);

    if (isNaN(key)) {
      par.status = -1;
    } else {
      par.status = key;
    }

    key = parseInt(Object(config).id_usuario, 10);

    if (isNaN(key)) {
      par.id_usuario = 0;
    } else {
      par.id_usuario = key;
    }

    return par;
  } catch (error) {
    throw error;
  }
}
