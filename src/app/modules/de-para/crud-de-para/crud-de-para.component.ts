import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { DeParaModel } from 'src/app/models/de-para-model';
import { ParametroModel } from 'src/app/models/parametro-model';
import { GlobalService } from 'src/app/services/global.service';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { ControlePaginas } from 'src/app/shared/classes/controle-paginas';

@Component({
  selector: 'app-crud-de-para',
  templateUrl: './crud-de-para.component.html',
  styleUrls: ['./crud-de-para.component.css'],
})
export class CrudDeParaComponent implements OnInit {
  inscricaoGetDe_Para!: Subscription;

  lsDePara: DeParaModel[] = [];

  tamPagina = 50;

  controlePaginas: ControlePaginas = new ControlePaginas(
    this.tamPagina,
    this.tamPagina,
  );

  retorno: boolean = false;

  parametro: ParametroModel = new ParametroModel();

  hide: boolean = false;

  paramName = 'paramdepara';

  constructor(
    private globalService: GlobalService,
    private router: Router,
    private appSnackBar: AppSnackbar,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {}

  onChangePage() {}

  onHome() {
    this.router.navigate(['']);
  }

  onNovaConsulta() {}

  onChangeParametros(param: ParametroModel) {
    console.log('change chamdo', param);
    this.parametro = param;
    //this.getImoIvenContador();
  }

  escolha(op: number, depara: DeParaModel) {}

  onChangeHide(hide: boolean) {
    this.hide = hide;
  }
}
