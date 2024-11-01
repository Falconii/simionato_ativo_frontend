import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParametroModel } from 'src/app/models/parametro-model';
import { GlobalService } from 'src/app/services/global.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { CadastroAcoes } from 'src/app/shared/classes/cadastro-acoes';
import { ControlePaginas } from 'src/app/shared/classes/controle-paginas';

@Component({
  selector: 'app-crud-padrao-cadastro',
  templateUrl: './crud-padrao-cadastro.component.html',
  styleUrls: ['./crud-padrao-cadastro.component.css']
})
export class CrudPadraoCadastroComponent implements OnInit {



  retorno: boolean = false;

  parametro: ParametroModel = new ParametroModel();


  tamPagina = 50;

  controlePaginas: ControlePaginas = new ControlePaginas(
    this.tamPagina,
    this.tamPagina
  );

  browse: boolean = true;

  idAcao: CadastroAcoes = CadastroAcoes.Consulta;

  hide: boolean = false;

  targetRowId = 0;

  paramName = 'paramimoinv';

  constructor(

    private globalService: GlobalService,
    private localStorageService:  LocalStorageService,
    private router: Router,
    private appSnackBar: AppSnackbar,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }


  onChangeParametros(param:ParametroModel) {
    console.log("change chamdo",param);
    this.parametro = param;
    let page:number = 1;
    var pag = this.localStorageService.getNumber("page");
    console.log("page:",pag);
    if (pag != null) {
       page =  pag;
    }
    this.controlePaginas.setPaginaAtual(page);
    this.localStorageService.removeItem("page");
    //this.getImoIvenContador();
  }


  onChangeHide(hide:boolean){
    this.hide = hide;
  }

}
