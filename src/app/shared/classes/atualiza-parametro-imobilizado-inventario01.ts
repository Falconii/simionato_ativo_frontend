import { ParametroImobilizadoinventario01 } from "src/app/parametros/parametro-imobilizadoinventario01";

export function AtualizaParametroImobilizadoInventario01(par : ParametroImobilizadoinventario01 , config : JSON):ParametroImobilizadoinventario01 {

    let key:number = 0;

    if (Object(config).cc !== '') {
      par.id_cc = Object(config).cc;
    }
    if (Object(config).cc_novo !== '') {
      par.new_cc = Object(config).cc_novo;
    }

    key = parseInt(Object(config).grupo, 10);

    if (isNaN(key)) {
      par.id_grupo = 0;
    } else {
      par.id_grupo = key;
    }

    key = parseInt(Object(config).situacao, 10);

    if (isNaN(key)) {
      par.status = 0;
    } else {
      par.status = key;
    }

    key = parseInt(Object(config).codigo, 10);

    if (isNaN(key)) {
      par.id_imobilizado = 0;
    } else {
      par.id_imobilizado = key;
    }

    key = parseInt(Object(config).novo, 10);

    if (isNaN(key)) {
      par.new_codigo = 0;
    } else {
      par.new_codigo = key;
    }

    key = parseInt(Object(config).condicao, 10);

    if (isNaN(key)) {
      par.condicao = 0;
    } else {
      par.condicao = key;
    }

    if (Object(config).book?.trim() !== '') {
      par.book = Object(config).book;
    }

    if (Object(config).descricao?.trim() !== '') {
      par.descricao = Object(config).descricao;
    }

    if (Object(config).observacao?.trim() !== '') {
      par.observacao = Object(config).observacao;
    }

    key = parseInt(Object(config).executor, 10);

    if (isNaN(key)) {
      par.id_usuario = 0;
    } else {
      par.id_usuario = key;
    }

    if (Object(config).origem.trim() !== '') {
      par.origem = Object(config).origem;
    }

    return par;
}
