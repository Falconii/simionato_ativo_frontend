"use strict";(self.webpackChunkinventario=self.webpackChunkinventario||[]).push([[999],{7999:(qa,y,n)=>{n.r(y),n.d(y,{InventarioModule:()=>Oa});var g=n(8583),m=n(4655),f=n(9243),b=n(2653),k=n(3010),l=n(3032),A=n(3430),u=n(6809),$=n(5062),a=n(7716),c=n(3679),I=n(789),T=n(3317),S=n(9297),Y=n(5626),C=n(2522),L=n(3968),O=n(1095),N=n(1436),q=n(6627),h=n(8295),E=n(7441),U=n(9983),J=n(2458),j=n(7234);function M(i,s){if(1&i&&(a.TgZ(0,"mat-option",18),a._uU(1),a.qZA()),2&i){const t=s.$implicit;a.Q6J("value",t),a.xp6(1),a.hij(" ",t," ")}}function Q(i,s){if(1&i&&(a.TgZ(0,"mat-option",18),a._uU(1),a.qZA()),2&i){const t=s.$implicit;a.Q6J("value",t),a.xp6(1),a.hij(" ",t," ")}}function D(i,s){if(1&i){const t=a.EpF();a.TgZ(0,"tr"),a.TgZ(1,"td"),a.TgZ(2,"div"),a.TgZ(3,"mat-label",19),a._uU(4),a.qZA(),a.qZA(),a.qZA(),a.TgZ(5,"td"),a.TgZ(6,"div"),a.TgZ(7,"mat-label",19),a._uU(8),a.qZA(),a.qZA(),a.qZA(),a.TgZ(9,"td"),a.TgZ(10,"div"),a.TgZ(11,"mat-label",19),a._uU(12),a.qZA(),a.qZA(),a.qZA(),a.TgZ(13,"td"),a.TgZ(14,"div"),a.TgZ(15,"mat-label",19),a._uU(16),a.qZA(),a.qZA(),a.qZA(),a.TgZ(17,"td"),a.TgZ(18,"div"),a.TgZ(19,"mat-label",19),a._uU(20),a.qZA(),a.qZA(),a.qZA(),a.TgZ(21,"td",20),a.TgZ(22,"barra-acoes",21),a.NdJ("changeOpcao",function(o){const p=a.CHM(t).$implicit;return a.oxw().escolha(o,p)}),a.qZA(),a.qZA(),a.qZA()}if(2&i){const t=s.$implicit;a.xp6(4),a.Oqu(t.codigo),a.xp6(4),a.Oqu(t.descricao),a.xp6(4),a.Oqu(t.local_razao),a.xp6(4),a.Oqu(t.data_inicial),a.xp6(4),a.Oqu(t.data_final),a.xp6(2),a.Q6J("BARRA_VERTICAL",!0)("BARRA_ATIVIDADES",!1)("EXCLUIR",!1)("BARRA_USUARIOS",!0)}}let w=(()=>{class i{constructor(t,e,o,r,p,v){this.formBuilder=t,this.router=e,this.appSnackBar=o,this.globalService=r,this.inventarioService=p,this.parametroService=v,this.inventarios=[],this.erro="",this.opcoesOrdenacao=[],this.opcoesCampo=[],this.tamPagina=50,this.controlePaginas=new A.e(this.tamPagina,0),this.retorno=!1,this.parametro=new b.M,this.parametros=t.group({ordenacao:[null],campo:[null],filtro:[null]}),this.loadParametros()}ngOnInit(){}setValues(){this.parametros.setValue({ordenacao:this.opcoesOrdenacao[(0,u.P0)(this.parametro.getParametro(),"op_ordenacao")],campo:this.opcoesCampo[(0,u.P0)(this.parametro.getParametro(),"op_pesquisar")],filtro:(0,u.SL)(this.parametro.getParametro(),"descricao")})}escolha(t,e){if(void 0!==e)if(96==t){let o=this.parametro.getParametro();Object(o).new=!1,Object(o).id_retorno=e.codigo,Object(o).page=this.controlePaginas.getPaginalAtual(),Object(o).op_ordenacao=this.opcoesOrdenacao.findIndex(r=>this.parametros.value.ordenacao==r),Object(o).op_pesquisar=this.opcoesCampo.findIndex(r=>this.parametros.value.campo==r),Object(o).descricao=this.parametros.value.filtro,this.parametro.parametro=JSON.stringify(o),this.globalService.estadoSave(this.parametro),this.router.navigate(["/inventarios/usuarios",this.globalService.getEmpresa().id,this.globalService.getLocal().id,e.codigo])}else{let o=this.parametro.getParametro();Object(o).new=!1,Object(o).id_retorno=e.codigo,Object(o).page=this.controlePaginas.getPaginalAtual(),Object(o).op_ordenacao=this.opcoesOrdenacao.findIndex(r=>this.parametros.value.ordenacao==r),Object(o).op_pesquisar=this.opcoesCampo.findIndex(r=>this.parametros.value.campo==r),Object(o).descricao=this.parametros.value.filtro,this.parametro.parametro=JSON.stringify(o),this.globalService.estadoSave(this.parametro),this.router.navigate(["/inventarios/inventario",e.id_empresa,e.id_filial,e.codigo,t])}else{let o=this.parametro.getParametro();Object(o).new=!1,Object(o).id_retorno=0,Object(o).page=this.controlePaginas.getPaginalAtual(),Object(o).op_ordenacao=this.opcoesOrdenacao.findIndex(r=>this.parametros.value.ordenacao==r),Object(o).op_pesquisar=this.opcoesCampo.findIndex(r=>this.parametros.value.campo==r),Object(o).descricao=this.parametros.value.filtro,this.parametro.parametro=JSON.stringify(o),this.globalService.estadoSave(this.parametro),this.router.navigate(["/inventarios/inventario",this.globalService.getEmpresa().id,this.globalService.getLocal().id,0,t])}}getAcoes(){return l.I}getInventariosContador(){let t=new k.T;if(t.id_empresa=this.globalService.getEmpresa().id,"Id"==this.parametros.value.campo){let e=parseInt(this.parametros.value.filtro,10);t.codigo=isNaN(e)?0:e}"Descri\xe7\xe3o"==this.parametros.value.campo&&(t.descricao=this.parametros.value.filtro.toUpperCase()),t.orderby=this.parametros.value.ordenacao,t.contador="S",t.tamPagina=this.tamPagina,this.globalService.setSpin(!0),this.inscricaoGetContador=this.inventarioService.getInventariosParametro_01(t).subscribe(e=>{if(this.globalService.setSpin(!1),0==e.total&&(e.total=1),this.controlePaginas=new A.e(this.tamPagina,e.total),this.retorno)if((0,u.xc)(this.parametro.getParametro(),"new"))this.controlePaginas.goLast();else{let o=this.parametro.getParametro();this.controlePaginas.setPaginaAtual(Object(o).page)}this.getInventarios()},e=>{console.log("error => ",e),this.globalService.setSpin(!1),this.controlePaginas=new A.e(this.tamPagina,0),this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Invent\xe1rios Contador  ${(0,u.bZ)(e)}`,"OK")})}getInventarios(){let t=new k.T;if(t.id_empresa=this.globalService.empresa.id,"C\xf3digo"==this.parametros.value.campo){let e=parseInt(this.parametros.value.filtro,10);console.log("key",e),t.codigo=isNaN(e)?0:e}"Descri\xe7\xe3o"==this.parametros.value.campo&&(t.descricao=this.parametros.value.filtro.toUpperCase()),t.orderby=this.parametros.value.ordenacao,t.contador="N",t.tamPagina=this.tamPagina,t.pagina=this.controlePaginas.getPaginalAtual(),this.globalService.setSpin(!0),this.inscricaoGetFiltro=this.inventarioService.getInventariosParametro_01(t).subscribe(e=>{this.globalService.setSpin(!1),this.inventarios=e;const o=this.inventarios.findIndex(p=>p.codigo==(0,u.P0)(this.parametro.getParametro(),"id_retorno"));setTimeout(()=>this.viewPort.scrollToIndex(o),10),this.retorno=!1;let r=this.parametro.getParametro();Object(r).id_retorno=0,Object(r).new=!1,this.parametro.parametro=JSON.stringify(r)},e=>{this.globalService.setSpin(!1),this.inventarios=[],this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Invent\xe1rios  ${(0,u.bZ)(e)}`,"OK")})}onChangePage(){this.getInventarios()}getTexto(){return u.fd}onHome(){this.router.navigate([""])}onSaveConfig(){this.updateParametros()}loadParametros(){if(this.parametro=new b.M,this.parametro.id_empresa=this.globalService.getIdEmpresa(),this.parametro.modulo="inventario",this.parametro.assinatura="V1.00 26/08/23",this.parametro.id_usuario=this.globalService.usuario.id,this.parametro.parametro='\n        {\n          "op_ordenacao": 0,\n          "ordenacao": ["C\xf3digo", "Descri\xe7\xe3o"],\n          "op_pesquisar": 1,\n          "pesquisar": ["C\xf3digo", "Descricao"],\n          "descricao": "",\n          "page": 1,\n          "new": false,\n          "id_retorno":0\n        }',this.opcoesOrdenacao=(0,u.FO)(this.parametro.getParametro(),"ordenacao"),this.opcoesCampo=(0,u.FO)(this.parametro.getParametro(),"pesquisar"),this.retorno&&null!==this.globalService.estadoFind("inventario")){const t=this.globalService.estadoFind("inventario");if(null!=t){if((0,u.xc)(t.getParametro(),"new")){let e=this.parametro.getParametro();Object(e).id_retorno=(0,u.P0)(t.getParametro(),"id_retorno"),this.parametro.parametro=JSON.stringify(e),this.setPosicaoInclusao()}else this.controlePaginas.setPaginaAtual((0,u.P0)(t.getParametro(),"page")),this.parametro.setParametro(t.getParametro());this.globalService.estadoDelete(t),this.setValues(),this.getInventariosContador()}}else this.getParametro()}setPosicaoInclusao(){const t=this.parametro.getParametro();Object(t).op_ordenacao=0,Object(t).op_pesquisar=0,Object(t).descricao="",Object(t).new=!0,this.parametro.setParametro(t)}getParametro(){this.globalService.setSpin(!0);let t=new $.E;t.id_empresa=this.parametro.id_empresa,t.modulo=this.parametro.modulo,t.assinatura=this.parametro.assinatura,t.id_usuario=this.parametro.id_usuario,t.orderby="Usu\xe1rio",this.inscricaoParametro=this.parametroService.getParametrosParametro01(t).subscribe(e=>{this.globalService.setSpin(!1),this.parametro=new b.M,this.parametro.id_empresa=e[0].id_empresa,this.parametro.modulo=e[0].modulo,this.parametro.id_usuario=e[0].id_usuario,this.parametro.assinatura=e[0].assinatura,this.parametro.parametro=e[0].parametro,this.parametro.user_insert=e[0].user_insert,this.parametro.user_update=e[0].user_update,this.opcoesOrdenacao=(0,u.FO)(this.parametro.getParametro(),"ordenacao"),this.opcoesCampo=(0,u.FO)(this.parametro.getParametro(),"pesquisar"),this.setValues(),this.getInventariosContador()},e=>{this.globalService.setSpin(!1),this.setValues(),this.getInventariosContador()})}updateParametros(){this.globalService.setSpin(!0),this.parametro.user_insert=this.globalService.usuario.id,this.parametro.user_update=this.globalService.usuario.id;let t=this.parametro.getParametro();Object(t).op_ordenacao=this.opcoesOrdenacao.findIndex(e=>this.parametros.value.ordenacao==e),Object(t).op_pesquisar=this.opcoesCampo.findIndex(e=>this.parametros.value.campo==e),Object(t).descricao=this.parametros.value.filtro,Object(t).page=0,Object(t).new=!1,this.parametro.parametro=JSON.stringify(t),this.inscricaoParametro=this.parametroService.ParametroAtualiza(this.parametro).subscribe(e=>{this.globalService.setSpin(!1),this.appSnackBar.openWarningnackBar("Par\xe2metros Atualizados","OK")},e=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Grava\xe7\xe3o Dos Parametros ${(0,u.bZ)(e)}`,"OK")})}}return i.\u0275fac=function(t){return new(t||i)(a.Y36(c.qu),a.Y36(m.F0),a.Y36(I.W),a.Y36(T.U),a.Y36(S.I),a.Y36(Y.u))},i.\u0275cmp=a.Xpm({type:i,selectors:[["app-crud-inventario"]],viewQuery:function(t,e){if(1&t&&a.Gf(f.N7,5),2&t){let o;a.iGM(o=a.CRH())&&(e.viewPort=o.first)}},decls:49,vars:7,consts:[[1,"div-barra"],[1,"example-spacer"],[3,"controle","changePage"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Atualizar","matTooltipPosition","above",1,"example-icon",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Salvar Par\xe2metros","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Retorno","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above",3,"matTooltip","click"],["autocomplete","off",1,"col-med-4",3,"formGroup"],["field","","appearance","outline",1,"col-max"],["formControlName","ordenacao"],[3,"value",4,"ngFor","ngForOf"],["formControlName","campo"],["appearance","outline",1,"col-max","column-span-2"],["matInput","","formControlName","filtro"],[1,"content",3,"itemSize"],[1,"Browse_Lanc"],[1,"coluna-cabec"],[4,"cdkVirtualFor","cdkVirtualForOf"],[3,"value"],[1,"Browse_Lanc_td"],[1,"acoes"],[3,"BARRA_VERTICAL","BARRA_ATIVIDADES","EXCLUIR","BARRA_USUARIOS","changeOpcao"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"mat-toolbar"),a.TgZ(2,"span",1),a._uU(3,"Invent\xe1rios:"),a.qZA(),a.TgZ(4,"app-navegator",2),a.NdJ("changePage",function(){return e.onChangePage()}),a.qZA(),a.TgZ(5,"button",3),a.NdJ("click",function(){return e.getInventariosContador()}),a.TgZ(6,"mat-icon"),a._uU(7,"rotate_right"),a.qZA(),a.qZA(),a.TgZ(8,"button",4),a.NdJ("click",function(){return e.onSaveConfig()}),a.TgZ(9,"mat-icon"),a._uU(10,"brightness_high"),a.qZA(),a.qZA(),a.TgZ(11,"button",5),a.NdJ("click",function(){return e.onHome()}),a.TgZ(12,"mat-icon"),a._uU(13,"home"),a.qZA(),a.qZA(),a.TgZ(14,"button",6),a.NdJ("click",function(){return e.escolha(e.getAcoes().Inclusao)}),a.TgZ(15,"mat-icon"),a._uU(16,"add_circle_outline"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(17,"div"),a.TgZ(18,"form",7),a.TgZ(19,"mat-form-field",8),a.TgZ(20,"mat-label"),a._uU(21,"Ordena\xe7\xe3o"),a.qZA(),a.TgZ(22,"mat-select",9),a.YNc(23,M,2,2,"mat-option",10),a.qZA(),a.qZA(),a.TgZ(24,"mat-form-field",8),a.TgZ(25,"mat-label"),a._uU(26,"Pesquisar Por"),a.qZA(),a.TgZ(27,"mat-select",11),a.YNc(28,Q,2,2,"mat-option",10),a.qZA(),a.qZA(),a.TgZ(29,"mat-form-field",12),a.TgZ(30,"mat-label"),a._uU(31,"Descri\xe7\xe3o"),a.qZA(),a._UZ(32,"input",13),a.qZA(),a.qZA(),a.qZA(),a.TgZ(33,"cdk-virtual-scroll-viewport",14),a.TgZ(34,"table",15),a.TgZ(35,"tr",16),a.TgZ(36,"th"),a._uU(37,"Codigo"),a.qZA(),a.TgZ(38,"th"),a._uU(39,"Descri\xe7ao"),a.qZA(),a.TgZ(40,"th"),a._uU(41,"Local"),a.qZA(),a.TgZ(42,"th"),a._uU(43,"Data Inicial"),a.qZA(),a.TgZ(44,"th"),a._uU(45,"Data Final"),a.qZA(),a.TgZ(46,"th"),a._uU(47,"A\xc7\xd5ES"),a.qZA(),a.qZA(),a.YNc(48,D,23,9,"tr",17),a.qZA(),a.qZA()),2&t&&(a.xp6(4),a.Q6J("controle",e.controlePaginas),a.xp6(10),a.Q6J("matTooltip",e.getTexto().incluir),a.xp6(4),a.Q6J("formGroup",e.parametros),a.xp6(5),a.Q6J("ngForOf",e.opcoesOrdenacao),a.xp6(5),a.Q6J("ngForOf",e.opcoesCampo),a.xp6(5),a.Q6J("itemSize",50),a.xp6(15),a.Q6J("cdkVirtualForOf",e.inventarios))},directives:[C.Ye,L.J,O.lW,N.gM,q.Hw,c._Y,c.JL,c.sg,h.KE,h.hX,E.gD,c.JJ,c.u,g.sg,U.Nt,c.Fj,f.N7,f.xd,f.x0,J.ey,j.C],styles:[".content[_ngcontent-%COMP%]{height:60%;overflow:auto}tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2aa}tr[_ngcontent-%COMP%]:hover{background-color:#caa99d}"]}),i})();var x=n(8239),_=n(1878),z=n(6825),G=n(6468),F=n(2401),K=n(9267),R=n(1209),X=n(5298),V=n(7325);function H(i,s){if(1&i){const t=a.EpF();a.TgZ(0,"button",18),a.NdJ("click",function(){return a.CHM(t),a.oxw().onSubmit()}),a.TgZ(1,"mat-icon"),a._uU(2,"check"),a.qZA(),a._uU(3),a.qZA()}if(2&i){const t=a.oxw();a.xp6(3),a.hij(" ",t.acao," ")}}function W(i,s){if(1&i&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&i){const t=a.oxw();a.xp6(1),a.Oqu(t.getMensafield("descricao"))}}function aa(i,s){if(1&i&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&i){const t=a.oxw();a.xp6(1),a.Oqu(t.getMensafield("data_inicial"))}}function ta(i,s){if(1&i&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&i){const t=a.oxw();a.xp6(1),a.Oqu(t.getMensafield("data_final"))}}function ea(i,s){if(1&i&&(a.TgZ(0,"mat-option",22),a._uU(1),a.qZA()),2&i){const t=s.$implicit;a.Q6J("value",t.id),a.xp6(1),a.hij(" ",t.razao," ")}}function ia(i,s){if(1&i&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&i){const t=a.oxw(2);a.xp6(1),a.Oqu(t.getMensafield("id_filial"))}}function oa(i,s){if(1&i&&(a.TgZ(0,"mat-form-field",19),a.TgZ(1,"mat-label"),a._uU(2,"Local"),a.qZA(),a.TgZ(3,"mat-select",20),a.YNc(4,ea,2,2,"mat-option",21),a.qZA(),a.YNc(5,ia,2,1,"mat-error",11),a.qZA()),2&i){const t=a.oxw();a.xp6(4),a.Q6J("ngForOf",t.locais),a.xp6(1),a.Q6J("ngIf",t.NoValidtouchedOrDirty("id_filial"))}}function ra(i,s){if(1&i&&(a.TgZ(0,"mat-form-field",19),a.TgZ(1,"mat-label"),a._uU(2,"Local"),a.qZA(),a._UZ(3,"input",23),a.qZA()),2&i){const t=a.oxw();a.xp6(3),a.Q6J("readonly",t.readOnly)}}function na(i,s){if(1&i&&(a.TgZ(0,"mat-option",22),a._uU(1),a.qZA()),2&i){const t=s.$implicit;a.Q6J("value",t.id),a.xp6(1),a.hij(" ",t.razao," ")}}function sa(i,s){if(1&i&&(a.TgZ(0,"mat-form-field",19),a.TgZ(1,"mat-label"),a._uU(2,"Respons\xe1vel"),a.qZA(),a.TgZ(3,"mat-select",24),a.YNc(4,na,2,2,"mat-option",21),a.qZA(),a.qZA()),2&i){const t=a.oxw();a.xp6(4),a.Q6J("ngForOf",t.responsaveis)}}function la(i,s){if(1&i&&(a.TgZ(0,"mat-form-field",19),a.TgZ(1,"mat-label"),a._uU(2,"Respons\xe1vel"),a.qZA(),a._UZ(3,"input",25),a.qZA()),2&i){const t=a.oxw();a.xp6(3),a.Q6J("readonly",t.readOnly)}}let ca=(()=>{class i{constructor(t,e,o,r,p,v,Z,P){this.formBuilder=t,this.inventarioService=e,this.usuariosServices=o,this.globalService=r,this.locaisService=p,this.route=v,this.router=Z,this.appSnackBar=P,this.inventario=new _.q,this.locais=[],this.responsaveis=[],this.acao="Sem Defini\xe7\xe3o",this.idAcao=l.I.Inclusao,this.readOnly=!0,this.labelCadastro="",this.formulario=t.group({id:[{value:"",disabled:!0}],descricao:[{value:""},[(0,K.S)(3,100,!0)]],data_inicial:[{value:""},[(0,F.K)(!0)]],data_final:[{value:""},[(0,F.K)(!0)]],data_encerramento:[{value:""}],id_filial:[{value:0},[c.kI.required,c.kI.min(1)]],id_filial_:[{value:""}],responsavel:[{value:0},[c.kI.required,c.kI.min(1)]],responsavel_:[{value:""}]}),this.inventario=new _.q,this.inscricaoRota=v.params.subscribe(d=>{this.inventario.id_empresa=d.id_empresa,this.inventario.id_filial=d.id_local,this.inventario.codigo=d.codigo,this.idAcao=d.acao,this.setAcao(d.acao)}),this.idAcao!=l.I.Inclusao?this.getInventario():this.setValue()}ngOnInit(){this.getResponsaveis(),this.getLocais()}ngOnDestroy(){var t,e,o,r;null===(t=this.inscricaoGetInventario)||void 0===t||t.unsubscribe(),null===(e=this.inscricaoRota)||void 0===e||e.unsubscribe(),null===(o=this.inscricaoAcao)||void 0===o||o.unsubscribe(),null===(r=this.inscricaoResponsaveis)||void 0===r||r.unsubscribe(),this.inscricaoLocais.unsubscribe()}getInventario(){this.inscricaoGetInventario=this.inventarioService.getInventario(this.inventario.id_empresa,this.inventario.id_filial,this.inventario.codigo).subscribe(t=>{console.log("Deu certo getInventario",t),this.inventario=t,this.setValue()},t=>{this.inventario=new _.q,this.appSnackBar.openFailureSnackBar(`${t.error.tabela} - ${t.error.erro} - ${t.error.message}`,"OK"),this.setValue()})}getLocais(){let t=new z.X;t.id_empresa=1,t.orderby="Raz\xe3o",this.inscricaoLocais=this.locaisService.getLocaisParametro_01(t).subscribe(e=>{this.locais=e},e=>{this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Locais ${e.error.tabela} - ${e.error.erro} - ${e.error.message}`,"OK")})}getResponsaveis(){const t=new G.w;t.id_empresa=this.globalService.getIdEmpresa(),t.orderby="Raz\xe3o",this.inscricaoResponsaveis=this.usuariosServices.getusuarios_01(t).subscribe(e=>{this.responsaveis=e},e=>{this.appSnackBar.openFailureSnackBar(`${e.error.tabela} - ${e.error.erro} - ${e.error.message}`,"OK")})}setValue(){this.formulario.setValue({id:this.idAcao==l.I.Inclusao?"NOVO":this.inventario.codigo,descricao:this.inventario.descricao,data_inicial:this.inventario.data_inicial.toString(),data_final:this.inventario.data_final.toString(),data_encerramento:null==this.inventario.data_encerra?"EM ABERTO":this.inventario.data_encerra,responsavel:this.inventario.id_responsavel,responsavel_:this.idAcao==l.I.Consulta||this.idAcao==l.I.Exclusao?this.inventario.resp_razao:"",id_filial:this.inventario.id_filial,id_filial_:this.idAcao==l.I.Consulta||this.idAcao==l.I.Exclusao?this.inventario.local_razao:""})}onSubmit(){this.formulario.valid?this.executaAcao():(this.formulario.markAllAsTouched(),this.appSnackBar.openSuccessSnackBar("Formul\xe1rio Com Campos Inv\xe1lidos.","OK"))}getLabelCancel(){return this.idAcao==l.I.Consulta?"Voltar":"Cancelar"}onCancel(){this.router.navigate(["/inventarios/inventarios"])}setAcao(t){switch(+t){case l.I.Inclusao:this.acao="Gravar",this.labelCadastro="Invent\xe1rios - Inclus\xe3o.",this.readOnly=!1;break;case l.I.Edicao:this.acao="Gravar",this.labelCadastro="Invent\xe1rios - Altera\xe7\xe3o.",this.readOnly=!1;break;case l.I.Consulta:this.acao="Voltar",this.labelCadastro="Invent\xe1rios - Consulta.",this.readOnly=!0;break;case l.I.Exclusao:this.acao="Excluir",this.labelCadastro="Invent\xe1rios - Exclus\xe3o.",this.readOnly=!0}}executaAcao(){var t=this;switch(console.log("Formulario=>",this.formulario.value),this.inventario.descricao=this.formulario.value.descricao,this.inventario.data_inicial=this.formulario.value.data_inicial,this.inventario.data_final=this.formulario.value.data_final,this.inventario.id_filial=this.formulario.value.id_filial,this.inventario.id_responsavel=this.formulario.value.responsavel,console.log("Inventario=>",this.inventario),+this.idAcao){case l.I.Inclusao:this.inventario.user_insert=this.globalService.getUsuario().id,this.globalService.setSpin(!0),this.inscricaoAcao=this.inventarioService.inventarioInsert(this.inventario).subscribe(function(){var e=(0,x.Z)(function*(o){t.globalService.setSpin(!1),t.onCancel()});return function(o){return e.apply(this,arguments)}}(),e=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na INclus\xe3o ${e.error.tabela} - ${e.error.erro} - ${e.error.message}`,"OK")});break;case l.I.Edicao:this.inventario.user_update=this.globalService.getUsuario().id,this.inscricaoAcao=this.inventarioService.inventarioUpdate(this.inventario).subscribe(function(){var e=(0,x.Z)(function*(o){t.globalService.setSpin(!1),t.onCancel()});return function(o){return e.apply(this,arguments)}}(),e=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na Altera\xe7\xe3o ${e.error.tabela} - ${e.error.erro} - ${e.error.message}`,"OK")});break;case l.I.Exclusao:this.globalService.setSpin(!0),this.inscricaoAcao=this.inventarioService.inventarioDelete(this.inventario.id_empresa,this.inventario.id_filial,this.inventario.codigo).subscribe(function(){var e=(0,x.Z)(function*(o){t.globalService.setSpin(!1),t.onCancel()});return function(o){return e.apply(this,arguments)}}(),e=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na Exclusao ${e.error.tabela} - ${e.error.erro} - ${e.error.message}`,"OK")})}}getAcoes(){return l.I}NoValidtouchedOrDirty(t){var e,o,r;return!((null===(e=this.formulario.get(t))||void 0===e?void 0:e.valid)||!(null===(o=this.formulario.get(t))||void 0===o?void 0:o.touched)&&!(null===(r=this.formulario.get(t))||void 0===r?void 0:r.dirty))}touchedOrDirty(t){var e,o;return!(!(null===(e=this.formulario.get(t))||void 0===e?void 0:e.touched)&&!(null===(o=this.formulario.get(t))||void 0===o?void 0:o.dirty))}getValidfield(t){var e,o;return(null===(o=null===(e=this.formulario.get(t))||void 0===e?void 0:e.errors)||void 0===o?void 0:o.ValidatorStringLen)&&this.touchedOrDirty(t)}getMensafield(t){var e,o;return null===(o=null===(e=this.formulario.get(t))||void 0===e?void 0:e.errors)||void 0===o?void 0:o.message}}return i.\u0275fac=function(t){return new(t||i)(a.Y36(c.qu),a.Y36(S.I),a.Y36(R.J),a.Y36(T.U),a.Y36(X.C),a.Y36(m.gz),a.Y36(m.F0),a.Y36(I.W))},i.\u0275cmp=a.Xpm({type:i,selectors:[["app-inventario-view"]],decls:42,vars:14,consts:[[1,"div-barra"],[1,"example-spacer"],[1,"button-container-right"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","accent",3,"click"],["autocomplete","off",3,"formGroup"],[1,"col-med-3"],["appearance","outline",1,"col-70"],["matInput","","formControlName","id"],["appearance","outline",1,"col-max","column-span-2"],["matInput","","formControlName","descricao","oninput","this.value = this.value.toUpperCase()","autofocus","",3,"readonly"],[4,"ngIf"],["appearance","outline",1,"col-max"],["matInput","","formControlName","data_inicial","mask","00/00/0000","placeholder","00/00/0000",3,"readonly"],["matInput","","formControlName","data_final","mask","00/00/0000","placeholder","21/11/1987",3,"readonly"],["matInput","","formControlName","data_encerramento","readonly","true"],[1,"col-med-2"],["field","","appearance","outline","class","col-max",4,"ngIf"],["mat-raised-button","","color","primary",3,"click"],["field","","appearance","outline",1,"col-max"],["formControlName","id_filial"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["matInput","","formControlName","id_filial_",3,"readonly"],["formControlName","responsavel"],["matInput","","formControlName","responsavel_",3,"readonly"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"mat-toolbar"),a.TgZ(2,"span",1),a.TgZ(3,"mat-label"),a._uU(4),a.qZA(),a.qZA(),a.TgZ(5,"div",2),a.YNc(6,H,4,1,"button",3),a.TgZ(7,"button",4),a.NdJ("click",function(){return e.onCancel()}),a.TgZ(8,"mat-icon"),a._uU(9,"cancel"),a.qZA(),a._uU(10),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(11,"form",5),a.TgZ(12,"div",6),a.TgZ(13,"mat-form-field",7),a.TgZ(14,"mat-label"),a._uU(15,"ID"),a.qZA(),a._UZ(16,"input",8),a.qZA(),a.TgZ(17,"mat-form-field",9),a.TgZ(18,"mat-label"),a._uU(19,"Descri\xe7\xe3o"),a.qZA(),a._UZ(20,"input",10),a.YNc(21,W,2,1,"mat-error",11),a.qZA(),a.qZA(),a.TgZ(22,"div",6),a.TgZ(23,"mat-form-field",12),a.TgZ(24,"mat-label"),a._uU(25,"Data Inicial"),a.qZA(),a._UZ(26,"input",13),a.YNc(27,aa,2,1,"mat-error",11),a.qZA(),a.TgZ(28,"mat-form-field",12),a.TgZ(29,"mat-label"),a._uU(30,"Data Final"),a.qZA(),a._UZ(31,"input",14),a.YNc(32,ta,2,1,"mat-error",11),a.qZA(),a.TgZ(33,"mat-form-field",12),a.TgZ(34,"mat-label"),a._uU(35,"Data Encerramento"),a.qZA(),a._UZ(36,"input",15),a.qZA(),a.qZA(),a.TgZ(37,"div",16),a.YNc(38,oa,6,2,"mat-form-field",17),a.YNc(39,ra,4,1,"mat-form-field",17),a.YNc(40,sa,5,1,"mat-form-field",17),a.YNc(41,la,4,1,"mat-form-field",17),a.qZA(),a.qZA()),2&t&&(a.xp6(4),a.Oqu(e.labelCadastro),a.xp6(2),a.Q6J("ngIf",3!=e.idAcao),a.xp6(4),a.hij(" ",e.getLabelCancel()," "),a.xp6(1),a.Q6J("formGroup",e.formulario),a.xp6(9),a.Q6J("readonly",e.readOnly),a.xp6(1),a.Q6J("ngIf",e.getValidfield("descricao")),a.xp6(5),a.Q6J("readonly",e.readOnly),a.xp6(1),a.Q6J("ngIf",e.getValidfield("data_inicial")),a.xp6(4),a.Q6J("readonly",e.readOnly),a.xp6(1),a.Q6J("ngIf",e.getValidfield("data_final")),a.xp6(6),a.Q6J("ngIf",e.idAcao!=e.getAcoes().Consulta&&e.idAcao!=e.getAcoes().Exclusao),a.xp6(1),a.Q6J("ngIf",e.idAcao==e.getAcoes().Consulta||e.idAcao==e.getAcoes().Exclusao),a.xp6(1),a.Q6J("ngIf",e.idAcao!=e.getAcoes().Consulta&&e.idAcao!=e.getAcoes().Exclusao),a.xp6(1),a.Q6J("ngIf",e.idAcao==e.getAcoes().Consulta||e.idAcao==e.getAcoes().Exclusao))},directives:[C.Ye,h.hX,g.O5,O.lW,q.Hw,c._Y,c.JL,c.sg,h.KE,U.Nt,c.Fj,c.JJ,c.u,V.hx,h.TO,E.gD,g.sg,J.ey],styles:[""]}),i})();class ua{constructor(){this.acao=l.I.None,this.id_empresa=0,this.id_filial=0,this.id_inventario=0,this.id_usuario=0,this.user_insert=0,this.user_update=0}}class pa{constructor(){this.id_empresa=0,this.id_local=0,this.id_inventario=0}}class da{constructor(){this.id_usuario=0,this.razao="",this.inventario=0,this.codigo_inventario=0}}class B{constructor(){this.checked=!1,this.acao=l.I.None,this.vazia=!1,this.auditor=new da}}var ma=n(2340),ha=n(1841);let va=(()=>{class i{constructor(t){this.http=t,this.apiURL=ma.N.apiURL}getUsuariosinventarios(){return this.http.get(`${this.apiURL}Usuariosinventarios`)}getUsuariosinventariosParametro_01(t){return this.http.post(`${this.apiURL}usuariosinventarios`,t)}getUsuarioinventario(t,e,o,r){return this.http.get(`${this.apiURL}usuarioinventario/${t}/${e}/${o}/${r}`)}usuarioinventarioInsert(t){return this.http.post(`${this.apiURL}usuarioinventario`,t)}usuarioinventarioMulti(t){return this.http.post(`${this.apiURL}multlanca`,t)}usuarioinventarioUpdate(t){return this.http.put(`${this.apiURL}usuarioinventario`,t)}usuarioinventarioDelete(t,e,o,r){return this.http.delete(`${this.apiURL}usuarioinventario/${t}/${e}/${o}/${r}`)}}return i.\u0275fac=function(t){return new(t||i)(a.LFG(ha.eN))},i.\u0275prov=a.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var ga=n(7539);let fa=(()=>{class i{transform(t){let e="";switch(t){case l.I.None:e="";break;case l.I.Inclusao:e="INCLUS\xc3O";break;case l.I.Exclusao:e="EXCLUS\xc3O";break;case l.I.Edicao:e="ALTERA\xc7\xc3O";break;default:e=""}return e}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275pipe=a.Yjl({name:"cadastroAcoesPipe",type:i,pure:!0}),i})();function _a(i,s){if(1&i){const t=a.EpF();a.TgZ(0,"div"),a.TgZ(1,"mat-checkbox",19),a.NdJ("change",function(o){a.CHM(t);const r=a.oxw().$implicit;return a.oxw(2).setItens(o.checked,r)}),a.TgZ(2,"mat-label",20),a._uU(3),a.qZA(),a.qZA(),a.qZA()}if(2&i){const t=a.oxw().$implicit;a.xp6(1),a.Q6J("checked",t.checked),a.xp6(2),a.hij(" ",t.auditor.razao," ")}}function Za(i,s){if(1&i&&(a.TgZ(0,"div"),a.TgZ(1,"mat-label",20),a._uU(2),a.qZA(),a.qZA()),2&i){const t=a.oxw().$implicit;a.xp6(2),a.Oqu(t.auditor.inventario)}}function ba(i,s){if(1&i&&(a.TgZ(0,"tr"),a._UZ(1,"td"),a.TgZ(2,"td"),a.YNc(3,_a,4,2,"div",12),a.qZA(),a.TgZ(4,"td"),a.YNc(5,Za,3,1,"div",12),a.qZA(),a.TgZ(6,"td"),a.TgZ(7,"div"),a.TgZ(8,"mat-label",20),a._uU(9),a.ALo(10,"cadastroAcoesPipe"),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&i){const t=s.$implicit;a.xp6(3),a.Q6J("ngIf",!t.vazia),a.xp6(2),a.Q6J("ngIf",!t.vazia),a.xp6(4),a.Oqu(a.lcZ(10,3,t.acao))}}function Aa(i,s){if(1&i){const t=a.EpF();a.TgZ(0,"div"),a.TgZ(1,"table",16),a.TgZ(2,"tr",17),a.TgZ(3,"th",18),a.TgZ(4,"div"),a.TgZ(5,"mat-checkbox",19),a.NdJ("change",function(o){return a.CHM(t),a.oxw().setAllItens(o.checked)}),a.TgZ(6,"mat-label",20),a._uU(7,"TODOS"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(8,"th"),a.TgZ(9,"mat-label",20),a._uU(10,"Auditores"),a.qZA(),a.qZA(),a.TgZ(11,"th",21),a.TgZ(12,"div"),a.TgZ(13,"mat-label",20),a._uU(14,"Pontes"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(15,"th",18),a.TgZ(16,"div"),a.TgZ(17,"mat-label",20),a._uU(18,"A\xe7\xe3o"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.YNc(19,ba,11,5,"tr",22),a.qZA(),a.qZA()}if(2&i){const t=a.oxw();a.xp6(5),a.Q6J("checked",t.displayAuditores[0].checked),a.xp6(14),a.Q6J("ngForOf",t.getVisiblesAuditores())}}const Ia=[{path:"",redirectTo:"inventarios",pathMatch:"full"},{path:"inventarios",component:w},{path:"inventarios/:retorno",component:w},{path:"inventario/:id_empresa/:id_local/:codigo/:acao",component:ca},{path:"usuarios/:id_empresa/:id_local/:codigo",component:(()=>{class i{constructor(t,e,o,r,p,v,Z,P){this.formBuilder=t,this.inventarioService=e,this.usuarioService=o,this.globalService=r,this.usuarioInventario=p,this.appSnackBar=v,this.route=Z,this.router=P,this.id_empresa=0,this.id_local=0,this.codigo=0,this.gravando=!1,this.readOnly=!0,this.inventario=new _.q,this.displayAuditores=[],this.parametroLanca_usuario=[],this.inscricaoRota=Z.params.subscribe(d=>{this.id_empresa=d.id_empresa,this.id_local=d.id_local,this.codigo=d.codigo}),this.formulario=t.group({codigo:[{value:0}],descricao:[{value:""}]}),this.getInventario()}ngOnInit(){}ngOnDestroy(){var t,e,o,r;null===(t=this.inscricaoGetInventario)||void 0===t||t.unsubscribe(),null===(e=this.inscricaoCrud)||void 0===e||e.unsubscribe(),null===(o=this.inscricaoRota)||void 0===o||o.unsubscribe(),null===(r=this.inscricaoAuditor)||void 0===r||r.unsubscribe()}getInventario(){this.globalService.setSpin(!0),this.inscricaoGetInventario=this.inventarioService.getInventario(this.id_empresa,this.id_local,this.codigo).subscribe(t=>{this.globalService.setSpin(!1),this.inventario=t,this.setValue(),this.getUsuariosInventario()},t=>{this.globalService.setSpin(!1),this.inventario=new _.q,this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Usu\xe1rios X Inventarios ${(0,u.bZ)(t)}`,"OK"),this.setValue()})}getUsuariosInventario(){const t=new pa;t.id_empresa=this.inventario.id_empresa,t.id_local=this.inventario.id_empresa,t.id_inventario=this.inventario.codigo,this.globalService.setSpin(!0),this.inscricaoAuditor=this.usuarioService.getUsuarioInventario(t).subscribe(e=>{console.log(e),this.globalService.setSpin(!1),this.loadDisplayItens(e)},e=>{this.globalService.setSpin(!1),this.displayAuditores=[],this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Usu\xe1rios X Inventarios ${(0,u.bZ)(e)}`,"OK")})}saveUsuariosInventario(){this.globalService.setSpin(!0),this.inscricaoCrud=this.usuarioInventario.usuarioinventarioMulti(this.parametroLanca_usuario).subscribe(t=>{this.globalService.setSpin(!1),this.loadDisplayItens(t),this.appSnackBar.openSuccessSnackBar(`${(0,u.bZ)(t)}`,"OK")},t=>{this.globalService.setSpin(!1),this.displayAuditores=[],this.appSnackBar.openFailureSnackBar(`Falha Na Grava\xe7\xe3o Usu\xe1rios X Inventarios ${(0,u.bZ)(t)}`,"OK")})}setValue(){this.formulario.setValue({codigo:this.inventario.codigo,descricao:this.inventario.descricao})}onRetorno(){this.router.navigate(["/inventarios/inventarios","SIM"])}onHome(){this.router.navigate([""])}loadDisplayItens(t){this.displayAuditores=[];const e=new B;e.checked=!1,e.vazia=!0,this.displayAuditores.push(e),t.forEach(o=>{const r=new B;r.checked=!1,r.vazia=!1,r.acao=l.I.None,r.auditor=o,this.displayAuditores.push(r)})}onSaveUsuariosInventarios(){this.parametroLanca_usuario=[],this.displayAuditores.forEach(t=>{if(t.checked){const e=new ua;(t.acao==l.I.Inclusao||t.acao==l.I.Exclusao)&&(e.acao=t.acao,e.id_empresa=this.globalService.getEmpresa().id,e.id_filial=this.id_local,e.id_inventario=this.codigo,e.id_usuario=t.auditor.id_usuario,e.user_insert=this.globalService.getUsuario().id,this.parametroLanca_usuario.push(e))}}),0!==this.parametroLanca_usuario.length?this.saveUsuariosInventario():this.appSnackBar.openSuccessSnackBar("Nenhum lan\xe7amento Gerado","OK")}setAllItens(t){this.displayAuditores.forEach(e=>{e.checked=t,0!==e.auditor.codigo_inventario&&e.checked&&(e.acao=l.I.Exclusao),0==e.auditor.codigo_inventario&&e.checked&&(e.acao=l.I.Inclusao),e.checked||(e.acao=l.I.None)})}setItens(t,e){e.checked=t,0!==e.auditor.codigo_inventario&&e.checked&&(e.acao=l.I.Exclusao),0==e.auditor.codigo_inventario&&e.checked&&(e.acao=l.I.Inclusao),e.checked||(e.acao=l.I.None),this.displayAuditores[0].checked=!0}getVisiblesAuditores(){return this.displayAuditores.filter(t=>!t.vazia)}}return i.\u0275fac=function(t){return new(t||i)(a.Y36(c.qu),a.Y36(S.I),a.Y36(R.J),a.Y36(T.U),a.Y36(va),a.Y36(I.W),a.Y36(m.gz),a.Y36(m.F0))},i.\u0275cmp=a.Xpm({type:i,selectors:[["app-inventario-usuario"]],decls:29,vars:4,consts:[[1,"div-barra"],[1,"example-spacer"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","P\xe1gina Inicial","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Retorno","matTooltipPosition","above",1,"example-icon",3,"click"],["autocomplete","off",3,"formGroup"],[1,"box","padding"],[1,"alinha_centro"],[1,"col-med-3"],["appearance","outline",1,"col-max"],["matInput","","formControlName","codigo",3,"readonly"],["appearance","outline",1,"column-span-2"],["matInput","","formControlName","descricao",3,"readonly"],[4,"ngIf"],[1,"button-container-right"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","accent"],[1,"Browse_Lanc"],[1,"coluna-cabec-gerador"],[1,"acoes"],["color","accent",3,"checked","change"],[1,"Browse_Lanc_td"],[1,"pontes"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"mat-toolbar"),a.TgZ(2,"span",1),a._uU(3,"Usu\xe1rios Do Invent\xe1rio"),a.qZA(),a.TgZ(4,"button",2),a.NdJ("click",function(){return e.onHome()}),a.TgZ(5,"mat-icon"),a._uU(6,"home"),a.qZA(),a.qZA(),a.TgZ(7,"button",3),a.NdJ("click",function(){return e.onRetorno()}),a.TgZ(8,"mat-icon"),a._uU(9,"arrow_back"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(10,"form",4),a.TgZ(11,"div",5),a.TgZ(12,"h3",6),a._uU(13,"ROTINA PARA ASSOCIAR O USU\xc1RIO AO INVENT\xc1RIO"),a.qZA(),a.TgZ(14,"div",7),a.TgZ(15,"mat-form-field",8),a.TgZ(16,"mat-label"),a._uU(17,"C\xf3digo"),a.qZA(),a._UZ(18,"input",9),a.qZA(),a.TgZ(19,"mat-form-field",10),a.TgZ(20,"mat-label"),a._uU(21,"Descri\xe7\xe3o"),a.qZA(),a._UZ(22,"input",11),a.qZA(),a.qZA(),a.YNc(23,Aa,20,2,"div",12),a.TgZ(24,"div",13),a.TgZ(25,"button",14),a.NdJ("click",function(){return e.onSaveUsuariosInventarios()}),a._uU(26,"Gravar"),a.qZA(),a.TgZ(27,"button",15),a._uU(28,"Cancelar"),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(10),a.Q6J("formGroup",e.formulario),a.xp6(8),a.Q6J("readonly",e.readOnly),a.xp6(4),a.Q6J("readonly",e.readOnly),a.xp6(1),a.Q6J("ngIf",e.displayAuditores.length>0))},directives:[C.Ye,O.lW,N.gM,q.Hw,c._Y,c.JL,c.sg,h.KE,h.hX,U.Nt,c.Fj,c.JJ,c.u,g.O5,ga.oG,g.sg],pipes:[fa],styles:["tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2aa}tr[_ngcontent-%COMP%]:hover{background-color:#caa99d}.acoes[_ngcontent-%COMP%]{color:#8b0000;width:100px}.pontes[_ngcontent-%COMP%]{width:30%}.rodape[_ngcontent-%COMP%]{width:100%;height:25px}.padding[_ngcontent-%COMP%]{padding:5px}.example-section[_ngcontent-%COMP%]{margin:12px 0}.example-margin[_ngcontent-%COMP%]{margin:0 12px}ul[_ngcontent-%COMP%]{list-style-type:none;margin-top:4px}li[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2aa}li[_ngcontent-%COMP%]:hover{background-color:#caa99d}h1[_ngcontent-%COMP%]{text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:x-large;color:#00f}"]}),i})()}];let Ta=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=a.oAB({type:i}),i.\u0275inj=a.cJS({imports:[[m.Bz.forChild(Ia)],m.Bz]}),i})();var Sa=n(3436),Ca=n(4466);let Oa=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=a.oAB({type:i}),i.\u0275inj=a.cJS({imports:[[g.ez,Ta,Sa.q,f.Cl,c.u5,c.UX,Ca.m,V.yI.forChild()]]}),i})()}}]);