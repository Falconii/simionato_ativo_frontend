import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ValidatorCondicao(required: boolean = false): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const form = control.parent;
    if (!form) return null;

    const situacao = form.get('situacao')?.value;

    // 🔥 Regra nova: se situacao >= 5 → não validar condicao
    if (situacao >= 5) {
      return null;
    }

    const valor = control.value;

    if (!required && valor == null) {
      return null;
    }

    const retorno = parseInt(valor);

    if (isNaN(retorno)) {
      return { ValidatorCondicao: true, message: 'Condição Inválida!' };
    }

    if (retorno === 9) {
      return {
        ValidatorSituacao: true,
        message: 'Condição Precisa De Uma Avaliação!',
      };
    }

    return null;
  };
}
