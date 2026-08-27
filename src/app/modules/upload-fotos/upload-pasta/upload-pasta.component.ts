import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FotoModel } from 'src/app/models/foto-model';
import { ParsedFileName } from 'src/app/models/ParsedFileName';
import { ParametroFoto01 } from 'src/app/parametros/parametro-foto01';
import { ParametroProduto01 } from 'src/app/parametros/parametro-produto01';
import { FotoService } from 'src/app/services/foto.service';
import { GlobalService } from 'src/app/services/global.service';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { ControlePaginas } from 'src/app/shared/classes/controle-paginas';
import { messageError, parseFileName } from 'src/app/shared/classes/util';

@Component({
  selector: 'app-upload-pasta',
  templateUrl: './upload-pasta.component.html',
  styleUrls: ['./upload-pasta.component.scss']
})
export class UploadPastaComponent implements OnInit {

  inscricaoFotos!: Subscription;
  inscricaoUpload!: Subscription;

  pastaOk: boolean = false;

  filtroPasta: boolean = true;

  progress: number = 0;

  formulario: FormGroup;

  arquivosLocais: FileSystemFileHandle[] = [];

  lsFiles: ParsedFileName[] = [];

  lsFotos: FotoModel[] = [];

  controlePaginas: ControlePaginas = new ControlePaginas(0, 0);

  tamPagina: number = 3;

  isUploading: boolean = false;

  isCancelando: boolean = false;

  isFiltroExiste: boolean = false;

  botoesOn: boolean = false;

  constructor(
    private globalService: GlobalService,
    private fotoSrv:FotoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private appSnackBar: AppSnackbar
  ) {
    this.formulario = formBuilder.group({
      caminho: [{ value: '' }],
    });
    this.setValue();
    this.getFotos();
  }
  ngOnInit() {
    this.inicio();
  }

  ngOnDestroy() {
    this.inscricaoFotos?.unsubscribe();
    this.inscricaoUpload?.unsubscribe();
  }

  onHome() {
    this.router.navigate(['']);
  }

  setValue(path: string = '') {
    this.formulario.setValue({
      caminho: path,
    });
  }

  onUpload() {};

/*   async onUpload() {
    const arquivos = this.lsContratos.filter((c) => c.handle);
    if (arquivos.length === 0) {
      this.appSnackBar.openWarningnackBar(
        'Nenhum Arquivo Apto Para Upload.',
        'OK',
      );
      return;
    }
    if (this.lsContratos.length === 0) {
      this.appSnackBar.openWarningnackBar('Nenhum Arquivo Para Upload.', 'OK');
      return;
    }
    this.isUploading = true;
    this.botoesOn = false;
    try {
      for (let i = 0; i < this.getContratosFiltrados().length; i++) {
        const handle = this.getContratosFiltrados()[i].handle;

        if (!handle) continue;

        const file = await handle.getFile();

        await this.UploadFile(
          this.getContratosFiltrados()[i].id_cab,
          this.getContratosFiltrados()[i],
          file,
        );
        if (this.isCancelando) {
          break;
        }
      }
    } finally {
      this.processado();
      this.botoesOn = false;
    }
  }
 *//*
  UploadFile(
    id_empresa: number,id_filial: number, id_inventario: number, id_imobilizado: number,

    file: File,
  ): Promise<void> {
    let isShowSnackBar = false;
    return new Promise((resolve, reject) => {
      this.contratoSrv.uploadPaf(id_cab_paf, file).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            contrato.status_upload =
              Math.round((100 * event.loaded) / event.total).toString() + '%';
            if (!isShowSnackBar && this.isCancelando) {
              isShowSnackBar = true;
              this.appSnackBar.openWarningnackBar(
                'Upload Cancelado pelo Usuário.',
                'OK',
              );
            }
          } else if (event.type === HttpEventType.Response) {
            contrato.status_upload = 'Enviado Com Sucesso';
            resolve();
          }
        },
        error: (error) => {
          contrato.status_upload = 'Erro no Upload';
          this.appSnackBar.openFailureSnackBar(
            `Erro No UpLoad ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
            'OK',
          );

          reject(error);
        },
      });
    });
  }
*/
  onCancelar() {
    this.isCancelando = true;
    if (!this.isUploading) {
      this.onHome();
    }
  }


  async selecionarPasta() {

    const dirHandle = await (window as any).showDirectoryPicker();

    this.arquivosLocais = [];

    for await (const entry of dirHandle.values()) {
      if (entry.kind === 'file') {
        this.arquivosLocais.push(entry);
        const parsedFileName = parseFileName(entry.name);
        const lancaIdx = this.lsFotos.findIndex ((l) => l.id_empresa === parsedFileName.id_empresa && l.id_local === parsedFileName.id_local && l.id_inventario === parsedFileName.id_inventario && l.id_imobilizado === parsedFileName.id_imobilizado);
        if (lancaIdx >= 0) {
          parsedFileName.foto = this.lsFotos[lancaIdx];
        } else {
          parsedFileName.status = "5";
        }
        parsedFileName.handle = entry;
        this.lsFiles.push(parsedFileName);
      }
    }
    this.setValue(dirHandle.name);
    console.log("lsFiles",this.lsFiles);
    if (this.arquivosLocais.length === 0) {
      this.appSnackBar.openFailureSnackBar(
        'A Pasta Selecionada Está Vazia.',
        'Fechar',
      );
      this.botoesOn = false;
    } else {
      this.pastaOk = true;
      this.botoesOn = true;
      this.isCancelando = false;
    }

    return { dirHandle };
  }

  onClickFiltro(): boolean {
    this.isFiltroExiste = !this.isFiltroExiste;
    return this.isFiltroExiste;
  }

  onClickPasta() {
    if (!this.pastaOk) {
      this.appSnackBar.openFailureSnackBar(
        'Defina Uma Pasta Válida Para Continuar.',
        'OK',
      );
      return;
    }
    if (this.filtroPasta) {
      this.filtroPasta = false;
      //this.getContratos(TipoOperacao.Contador);
      this.isFiltroExiste = false;
      return 'Filtrar Pasta';
    } else {
      this.filtroPasta = true;
      this.isFiltroExiste = false;
      //this.getContratos(TipoOperacao.Contador);
      return 'Remover Filtro Pasta';
    }
  }

  textoFiltro() {
    if (!this.filtroPasta) {
      return 'Filtrar Pasta';
    } else {
      return 'Remover Filtro Pasta';
    }
  }

  textoFiltroExiste() {
    if (!this.isFiltroExiste) {
      return 'Existe "SIM"';
    } else {
      return 'Todos';
    }
  }

  inicio() {
    this.isCancelando = false;
    this.isUploading = false;
    this.pastaOk = false;
    this.arquivosLocais = [];
    //this.lsContratos = [];
    this.setValue('');
  }

  processado() {
    this.isUploading = false;
    this.pastaOk = false;
  }


  getFotos() {
      let par = new ParametroFoto01();

      par.id_empresa = this.globalService.getIdEmpresa();

      par.id_local = this.globalService.getLocal().id;

      par.id_inventario = this.globalService.getInventario().codigo

     par.id_pasta = "1Oc4S6bEQy_TPPPSsxzl1gYkOs8wvwuWq";

      par.orderby = "";

      par.pagina = 0;

      par.contador = 'N';

      par.tamPagina = this.tamPagina;

      this.globalService.setSpin(true);

      this.inscricaoFotos= this.fotoSrv
        .getFotosParametro_01(par)
        .subscribe(
          (data: FotoModel[]) => {
            this.globalService.setSpin(false);
            this.lsFotos = data;
            console.log("lsFotos",this.lsFotos);
          },
          (error: any) => {
            this.globalService.setSpin(false);
            this.lsFotos = [];
            this.appSnackBar.openFailureSnackBar(
              `Pesquisa Nas Fotos ${messageError(error)}`,
              'OK'
            );
          }
        );
    }

}
