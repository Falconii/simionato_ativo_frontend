import { Component, OnInit } from '@angular/core';
import { ParametroModel } from 'src/app/models/parametro-model';
import { ControlePaginas } from 'src/app/shared/classes/controle-paginas';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { ParametroImobilizadoinventario01 } from 'src/app/parametros/parametro-imobilizadoinventario01';
import { GlobalService } from 'src/app/services/global.service';
import { ImobilizadoinventarioService } from 'src/app/services/imobilizadoinventario.service';
import { Subscription } from 'rxjs';
import { messageError } from 'src/app/shared/classes/util';
import { ImobilizadoinventarioModel } from 'src/app/models/imobilizadoinventario-model';
import { ParametroFoto01 } from 'src/app/parametros/parametro-foto01';
import { FotoService } from 'src/app/services/foto.service';
import { FotoModel } from 'src/app/models/foto-model';
import { FotosAtivo } from 'src/app/shared/classes/fotos-ativo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foto-view',
  templateUrl: './foto-view.component.html',
  styleUrls: ['./foto-view.component.css']
})
export class FotoViewComponent implements OnInit {


  inscricaoGetAll!: Subscription;
  inscricaoFoto!: Subscription;


  tamPagina = 50;

  controlePaginas: ControlePaginas = new ControlePaginas(
    this.tamPagina,
    this.tamPagina
  );

  parametro: ParametroModel = new ParametroModel()


  imoinv: ImobilizadoinventarioModel[] = [];


  listaAtivos: number[] = [];


  fotos: FotoModel[] = [];

  constructor(
    private appSnackBar: AppSnackbar,
    private globalService: GlobalService,
    private imoInventarioService: ImobilizadoinventarioService,
    private fotoService:FotoService,
    private router: Router,
  ) { }

  ngOnInit(): void {}

  ngOnDestroy(){
    this.inscricaoGetAll?.unsubscribe();
    this.inscricaoFoto?.unsubscribe();
  }


  filtrarAtivos(){

    this.listaAtivos = [];
    this.imoinv.forEach(item => {
    let count = this.listaAtivos.filter(x => x == item.id_imobilizado).length;
    if(count == 0) {
      this.listaAtivos.push(item.id_imobilizado)
    }
})
  }

  getFotos() {
    let par = new ParametroFoto01();

    par.id_empresa = this.globalService.getIdEmpresa();

    par.id_local = this.globalService.getLocal().id;

    par.id_inventario = this.globalService.getInventario().codigo;

    par.imobilizados = this.listaAtivos;

    par.contador = 'N';

    this.globalService.setSpin(true);

    this.inscricaoFoto = this.fotoService.getFotosParametro_01(par).subscribe(
      (data: FotoModel[]) => {
        this.globalService.setSpin(false);
        this.fotos = data;
      },
      (error: any) => {
        this.globalService.setSpin(false);
        this.fotos = [];
        this.appSnackBar.openFailureSnackBar(
          `Pesquisa Nas Fotos  ${messageError(error)}`,
          'OK'
        );
      }
    );
  }

  getFotosAtivo(ativo:number):FotosAtivo[]{

    let  result:FotosAtivo[] =  [];

    let  idx:number = 1;

    let ct:number = 0;

    if (this.fotos.length == 0){
      return result;
    }

    let allFotos = this.fotos.filter(foto => foto.id_imobilizado == ativo);

    //console.log("allFotos",ativo,allFotos);

    let tempo:FotosAtivo = new FotosAtivo(idx,[]);

    if(allFotos.length > 0) {
      allFotos.forEach(item => {

        if (ct ==3){
           result.push(tempo);
           ct = 0;
           idx++;
           tempo = new FotosAtivo(idx,[]);
        }
        tempo.fotos.push(item);
        ct++;
      });
      if (tempo.fotos.length > 0){
        result.push(tempo);
      }
    }
    return result;
  }

  getImoIven() {
    let par = new ParametroImobilizadoinventario01();

    par.id_empresa = this.globalService.getIdEmpresa();

    par.id_filial = this.globalService.getLocal().id;

    par.id_inventario = this.globalService.getInventario().codigo;

    par = this.atualizaParametro(par);

    par.contador = 'N';

    par.tamPagina = this.tamPagina;

    par.pagina = this.controlePaginas.getPaginalAtual();

    par.orderby = 'Imobilizado';


	  this.fotos = [];

	  this.listaAtivos = [];

    this.globalService.setSpin(true);
    this.inscricaoGetAll = this.imoInventarioService
      .getImobilizadosinventariosFotos(par)
      .subscribe(
        (data: ImobilizadoinventarioModel[]) => {
          this.globalService.setSpin(false);
          this.imoinv = data;
          this.filtrarAtivos();
          this.getFotos();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.imoinv = [];
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Produtos De Inventário ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  getImoIvenContador() {
    let par = new ParametroImobilizadoinventario01();

    par.id_empresa = this.globalService.getIdEmpresa();

    par.id_filial = this.globalService.getLocal().id;

    par.id_inventario = this.globalService.getInventario().codigo;

    par = this.atualizaParametro(par);

    par.contador = 'S';

    par.tamPagina = this.tamPagina;

    par.orderby = 'Imobilizado';

    this.globalService.setSpin(true);
    this.inscricaoGetAll = this.imoInventarioService
      .getImobilizadosinventariosFotos(par)
      .subscribe(
        (data: any) => {
          this.globalService.setSpin(false);
          if (data.total == 0){
            this.imoinv = [];
            this.controlePaginas = new ControlePaginas(this.tamPagina, 1);
            return;
          } else {
          this.controlePaginas = new ControlePaginas(
            this.tamPagina,
            data.total == 0 ? 1 : data.total
          );
          this.getImoIven();
        }
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.imoinv = [];
          this.controlePaginas = new ControlePaginas(this.tamPagina, 1);
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Não Gerou Resultado.\nPor Não Ter Os Produtos Ou As Fotos`,
            'OK'
          );
        }
      );
  }


  atualizaParametro(par : ParametroImobilizadoinventario01 ) : ParametroImobilizadoinventario01{

    let config = this.parametro.getParametro();

    let key:number = 0;

    if (Object(config).cc !== '') {
      par.id_cc = Object(config).cc;
    }
    if (Object(config).cc_novo !== '') {
      par.new_cc = Object(config).cc_novo;
    }

    key = parseInt(Object(config).id_grupo, 10);

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

    if (Object(config).book.trim() !== '') {
      par.book = Object(config).book;
    }

    if (Object(config).descricao.trim() !== '') {
      par.descricao = Object(config).descricao;
    }

    if (Object(config).observacao.trim() !== '') {
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

  onChangePage() {
    this.getImoIven();
  }

  onChangeParametros(param:ParametroModel) {
    this.parametro = param;
    this.getImoIvenContador();
  }

  onHome() {
    this.router.navigate(['']);
  }





}