"use strict";(self.webpackChunkinventario=self.webpackChunkinventario||[]).push([[930],{5930:(W,A,i)=>{i.r(A),i.d(A,{CentrocustoModule:()=>z});var v=i(8583),h=i(4655),d=i(9243),C=i(2653),P=i(2979),N=i(5062),u=i(3032),b=i(3430),l=i(6809),t=i(7716),n=i(3679),T=i(3317),O=i(2704),E=i(5626),_=i(789),I=i(2522),j=i(3968),x=i(1095),U=i(1436),y=i(6627),g=i(8295),F=i(7441),q=i(9983),k=i(2458),B=i(7234);function D(r,c){if(1&r&&(t.TgZ(0,"mat-option",18),t._uU(1),t.qZA()),2&r){const o=c.$implicit;t.Q6J("value",o),t.xp6(1),t.hij(" ",o," ")}}function V(r,c){if(1&r&&(t.TgZ(0,"mat-option",18),t._uU(1),t.qZA()),2&r){const o=c.$implicit;t.Q6J("value",o),t.xp6(1),t.hij(" ",o," ")}}function w(r,c){if(1&r){const o=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t.TgZ(2,"div"),t.TgZ(3,"mat-label",19),t._uU(4),t.qZA(),t.qZA(),t.qZA(),t.TgZ(5,"td"),t.TgZ(6,"div"),t.TgZ(7,"mat-label",19),t._uU(8),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"td",20),t.TgZ(10,"barra-acoes",21),t.NdJ("changeOpcao",function(a){const p=t.CHM(o).$implicit;return t.oxw().escolha(a,p)}),t.qZA(),t.qZA(),t.qZA()}if(2&r){const o=c.$implicit;t.xp6(4),t.Oqu(o.codigo),t.xp6(4),t.Oqu(o.descricao),t.xp6(2),t.Q6J("BARRA_VERTICAL",!0)("BARRA_ATIVIDADES",!1)("EXCLUIR",!1)}}let J=(()=>{class r{constructor(o,e,a,s,p,f,m,H){this.formBuilder=o,this.globalService=e,this.centroCustoService=a,this.parametrosService=s,this.router=p,this.appSnackBar=f,this.route=m,this.ngZone=H,this.cc=[],this.erro="",this.opcoesOrdenacao=[],this.opcoesCampo=[],this.tamPagina=50,this.controlePaginas=new b.e(this.tamPagina,0),this.retorno=!1,this.parametro=new C.M,this.parametros=o.group({ordenacao:[null],campo:[null],filtro:[null]}),this.inscricaoRota=m.params.subscribe(X=>{void 0===X.retorno?this.retorno=!1:(this.retorno=!0,this.globalService.estadoFind("cc"))}),this.loadParametros()}ngOnInit(){}ngOnDestroy(){var o,e,a,s,p;null===(o=this.inscricaoGetAll)||void 0===o||o.unsubscribe(),null===(e=this.inscricaoGetFiltro)||void 0===e||e.unsubscribe(),null===(a=this.inscricaoGetGrupo)||void 0===a||a.unsubscribe(),null===(s=this.inscricaoRota)||void 0===s||s.unsubscribe(),null===(p=this.inscricaoParametro)||void 0===p||p.unsubscribe()}escolha(o,e){if(void 0!==e){let a=this.parametro.getParametro();Object(a).new=!1,Object(a).id_retorno=e.codigo,Object(a).page=this.controlePaginas.getPaginalAtual(),Object(a).op_ordenacao=this.opcoesOrdenacao.findIndex(s=>this.parametros.value.ordenacao==s),Object(a).op_pesquisar=this.opcoesCampo.findIndex(s=>this.parametros.value.campo==s),Object(a).descricao=this.parametros.value.filtro,this.parametro.parametro=JSON.stringify(a),this.globalService.estadoSave(this.parametro),this.router.navigate(["/centroscustos/centrocusto",e.id_empresa,e.id_filial,e.codigo,o])}else{let a=this.parametro.getParametro();Object(a).new=!1,Object(a).id_retorno=0,Object(a).page=this.controlePaginas.getPaginalAtual(),Object(a).op_ordenacao=this.opcoesOrdenacao.findIndex(s=>this.parametros.value.ordenacao==s),Object(a).op_pesquisar=this.opcoesCampo.findIndex(s=>this.parametros.value.campo==s),Object(a).descricao=this.parametros.value.filtro,this.parametro.parametro=JSON.stringify(a),this.globalService.estadoSave(this.parametro),this.router.navigate(["/centroscustos/centrocusto",this.globalService.getIdEmpresa(),this.globalService.getLocal().id,0,o])}}getAcoes(){return u.I}setValues(){this.parametros.setValue({ordenacao:this.opcoesOrdenacao[(0,l.P0)(this.parametro.getParametro(),"op_ordenacao")],campo:this.opcoesCampo[(0,l.P0)(this.parametro.getParametro(),"op_pesquisar")],filtro:(0,l.SL)(this.parametro.getParametro(),"descricao")})}getCentroCustos(){let o=new P.D;o.id_empresa=this.globalService.getIdEmpresa(),o.id_filial=this.globalService.getLocal().id,"C\xf3digo"==this.parametros.value.campo&&(o.codigo=this.parametros.value.filtro),"Descri\xe7\xe3o"==this.parametros.value.campo&&(o.descricao=this.parametros.value.filtro.toUpperCase()),o.orderby=this.parametros.value.ordenacao,o.pagina=this.controlePaginas.getPaginalAtual(),o.contador="N",o.tamPagina=this.tamPagina,this.globalService.setSpin(!0),this.inscricaoGetFiltro=this.centroCustoService.getCentroscustosParametro_01(o).subscribe(e=>{this.globalService.setSpin(!1),this.cc=[],this.cc=e;const a=this.cc.findIndex(p=>p.codigo==(0,l.SL)(this.parametro.getParametro(),"id_retorno"));setTimeout(()=>this.viewPort.scrollToIndex(a),10),this.retorno=!1;let s=this.parametro.getParametro();Object(s).id_retorno=0,Object(s).new=!1,this.parametro.parametro=JSON.stringify(s)},e=>{let a=this.parametro.getParametro();Object(a).id_retorno=0,Object(a).new=!1,this.retorno=!1,this.globalService.setSpin(!1),this.cc=[],this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Grupos ${(0,l.bZ)(e)}`,"OK")})}getCentroCustosContador(){let o=new P.D;o.id_empresa=this.globalService.getIdEmpresa(),o.id_filial=this.globalService.getLocal().id,o.orderby="C\xf3digo","C\xf3digo"==this.parametros.value.campo&&(o.codigo=this.parametros.value.filtro),"Descri\xe7\xe3o"==this.parametros.value.campo&&(o.descricao=this.parametros.value.filtro.toUpperCase()),o.orderby=this.parametros.value.ordenacao,o.contador="S",o.tamPagina=this.tamPagina,this.globalService.setSpin(!0),this.inscricaoGetFiltro=this.centroCustoService.getCentroscustosParametro_01(o).subscribe(e=>{if(this.globalService.setSpin(!1),this.controlePaginas=new b.e(this.tamPagina,0==e.total?1:e.total),this.retorno)if((0,l.xc)(this.parametro.getParametro(),"new"))this.controlePaginas.goLast();else{let a=this.parametro.getParametro();this.controlePaginas.setPaginaAtual(Object(a).page)}this.getCentroCustos()},e=>{this.globalService.setSpin(!1),this.controlePaginas=new b.e(this.tamPagina,0),this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Grupos ${(0,l.bZ)(e)}`,"OK")})}getTexto(){return l.fd}onChangePage(){this.getCentroCustos()}onChangeParametros(){this.getCentroCustosContador()}onHome(){this.router.navigate([""])}onSaveConfig(){this.updateParametros()}loadParametros(){if(this.parametro=new C.M,this.parametro.id_empresa=this.globalService.getIdEmpresa(),this.parametro.modulo="cc",this.parametro.assinatura="V1.00 26/08/23",this.parametro.id_usuario=this.globalService.usuario.id,this.parametro.parametro='\n    {\n      "op_ordenacao": 0,\n      "ordenacao": ["C\xf3digo", "Descri\xe7\xe3o"],\n      "op_pesquisar": 1,\n      "pesquisar": ["C\xf3digo", "Descri\xe7\xe3o"],\n      "descricao": "",\n      "page": 1,\n      "new": false,\n      "id_retorno":0\n    }',this.opcoesOrdenacao=(0,l.FO)(this.parametro.getParametro(),"ordenacao"),this.opcoesCampo=(0,l.FO)(this.parametro.getParametro(),"pesquisar"),this.retorno&&null!==this.globalService.estadoFind("cc")){const o=this.globalService.estadoFind("cc");if(null!=o){if((0,l.xc)(o.getParametro(),"new")){let e=this.parametro.getParametro();Object(e).id_retorno=(0,l.P0)(o.getParametro(),"id_retorno"),this.parametro.parametro=JSON.stringify(e),this.setPosicaoInclusao()}else this.controlePaginas.setPaginaAtual((0,l.P0)(o.getParametro(),"page")),this.parametro.setParametro(o.getParametro());this.globalService.estadoDelete(o),this.setValues(),this.getCentroCustosContador()}}else this.getParametro()}setPosicaoInclusao(){const o=this.parametro.getParametro();Object(o).op_ordenacao=0,Object(o).op_pesquisar=0,Object(o).descricao="",Object(o).new=!0,this.parametro.setParametro(o)}getParametro(){this.globalService.setSpin(!0);let o=new N.E;o.id_empresa=this.parametro.id_empresa,o.modulo=this.parametro.modulo,o.assinatura=this.parametro.assinatura,o.id_usuario=this.parametro.id_usuario,o.orderby="Usu\xe1rio",this.inscricaoParametro=this.parametrosService.getParametrosParametro01(o).subscribe(e=>{this.globalService.setSpin(!1),this.parametro=new C.M,this.parametro.id_empresa=e[0].id_empresa,this.parametro.modulo=e[0].modulo,this.parametro.id_usuario=e[0].id_usuario,this.parametro.assinatura=e[0].assinatura,this.parametro.parametro=e[0].parametro,this.parametro.user_insert=e[0].user_insert,this.parametro.user_update=e[0].user_update,this.opcoesOrdenacao=(0,l.FO)(this.parametro.getParametro(),"ordenacao"),this.opcoesCampo=(0,l.FO)(this.parametro.getParametro(),"pesquisar"),this.setValues(),this.getCentroCustosContador()},e=>{this.globalService.setSpin(!1),this.setValues(),this.getCentroCustosContador()})}updateParametros(){this.globalService.setSpin(!0),this.parametro.user_insert=this.globalService.usuario.id,this.parametro.user_update=this.globalService.usuario.id;let o=this.parametro.getParametro();Object(o).op_ordenacao=this.opcoesOrdenacao.findIndex(e=>this.parametros.value.ordenacao==e),Object(o).op_pesquisar=this.opcoesCampo.findIndex(e=>this.parametros.value.campo==e),Object(o).descricao=this.parametros.value.filtro,Object(o).page=0,Object(o).new=!1,this.parametro.parametro=JSON.stringify(o),this.inscricaoParametro=this.parametrosService.ParametroAtualiza(this.parametro).subscribe(e=>{this.globalService.setSpin(!1),this.appSnackBar.openSuccessSnackBar("Par\xe2metros Atualizados","OK")},e=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Grava\xe7\xe3o Dos Parametros ${(0,l.bZ)(e)}`,"OK")})}}return r.\u0275fac=function(o){return new(o||r)(t.Y36(n.qu),t.Y36(T.U),t.Y36(O.T),t.Y36(E.u),t.Y36(h.F0),t.Y36(_.W),t.Y36(h.gz),t.Y36(t.R0b))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-crud-centrocusto"]],viewQuery:function(o,e){if(1&o&&t.Gf(d.N7,5),2&o){let a;t.iGM(a=t.CRH())&&(e.viewPort=a.first)}},decls:43,vars:7,consts:[[1,"div-barra"],[1,"example-spacer"],[3,"controle","changePage"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Atualizar","matTooltipPosition","above",1,"example-icon",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Salvar Par\xe2metros","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Retorno","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above",3,"matTooltip","click"],["autocomplete","off",1,"col-med-4",3,"formGroup"],["field","","appearance","outline",1,"col-max"],["formControlName","ordenacao",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["formControlName","campo",3,"selectionChange"],["appearance","outline",1,"col-max","column-span-2"],["matInput","","formControlName","filtro","oninput","this.value = this.value.toUpperCase()"],[1,"content",3,"itemSize"],[1,"Browse_Lanc"],[1,"coluna-cabec"],[4,"cdkVirtualFor","cdkVirtualForOf"],[3,"value"],[1,"Browse_Lanc_td"],[1,"acoes"],[3,"BARRA_VERTICAL","BARRA_ATIVIDADES","EXCLUIR","changeOpcao"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-toolbar"),t.TgZ(2,"span",1),t._uU(3,"Centro De Custos:"),t.qZA(),t.TgZ(4,"app-navegator",2),t.NdJ("changePage",function(){return e.onChangePage()}),t.qZA(),t.TgZ(5,"button",3),t.NdJ("click",function(){return e.getCentroCustosContador()}),t.TgZ(6,"mat-icon"),t._uU(7,"rotate_right"),t.qZA(),t.qZA(),t.TgZ(8,"button",4),t.NdJ("click",function(){return e.onSaveConfig()}),t.TgZ(9,"mat-icon"),t._uU(10,"brightness_high"),t.qZA(),t.qZA(),t.TgZ(11,"button",5),t.NdJ("click",function(){return e.onHome()}),t.TgZ(12,"mat-icon"),t._uU(13,"home"),t.qZA(),t.qZA(),t.TgZ(14,"button",6),t.NdJ("click",function(){return e.escolha(e.getAcoes().Inclusao)}),t.TgZ(15,"mat-icon"),t._uU(16,"add_circle_outline"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div"),t.TgZ(18,"form",7),t.TgZ(19,"mat-form-field",8),t.TgZ(20,"mat-label"),t._uU(21,"Ordena\xe7\xe3o"),t.qZA(),t.TgZ(22,"mat-select",9),t.NdJ("selectionChange",function(){return e.onChangeParametros()}),t.YNc(23,D,2,2,"mat-option",10),t.qZA(),t.qZA(),t.TgZ(24,"mat-form-field",8),t.TgZ(25,"mat-label"),t._uU(26,"Pesquisar Por"),t.qZA(),t.TgZ(27,"mat-select",11),t.NdJ("selectionChange",function(){return e.onChangeParametros()}),t.YNc(28,V,2,2,"mat-option",10),t.qZA(),t.qZA(),t.TgZ(29,"mat-form-field",12),t.TgZ(30,"mat-label"),t._uU(31,"Descri\xe7\xe3o"),t.qZA(),t._UZ(32,"input",13),t.qZA(),t.qZA(),t.qZA(),t.TgZ(33,"cdk-virtual-scroll-viewport",14),t.TgZ(34,"table",15),t.TgZ(35,"tr",16),t.TgZ(36,"th"),t._uU(37,"Codigo"),t.qZA(),t.TgZ(38,"th"),t._uU(39,"Descri\xe7\xe3o"),t.qZA(),t.TgZ(40,"th"),t._uU(41,"A\xc7\xd5ES"),t.qZA(),t.qZA(),t.YNc(42,w,11,5,"tr",17),t.qZA(),t.qZA()),2&o&&(t.xp6(4),t.Q6J("controle",e.controlePaginas),t.xp6(10),t.Q6J("matTooltip",e.getTexto().incluir),t.xp6(4),t.Q6J("formGroup",e.parametros),t.xp6(5),t.Q6J("ngForOf",e.opcoesOrdenacao),t.xp6(5),t.Q6J("ngForOf",e.opcoesCampo),t.xp6(5),t.Q6J("itemSize",50),t.xp6(9),t.Q6J("cdkVirtualForOf",e.cc))},directives:[I.Ye,j.J,x.lW,U.gM,y.Hw,n._Y,n.JL,n.sg,g.KE,g.hX,F.gD,n.JJ,n.u,v.sg,q.Nt,n.Fj,d.N7,d.xd,d.x0,k.ey,B.C],styles:[".content[_ngcontent-%COMP%]{height:60%;overflow:auto}tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2aa}tr[_ngcontent-%COMP%]:hover{background-color:#caa99d}"]}),r})();var S=i(8239),R=i(9267),Z=i(8786);function M(r,c){if(1&r){const o=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){return t.CHM(o),t.oxw().onSubmit()}),t.TgZ(1,"mat-icon"),t._uU(2,"check"),t.qZA(),t._uU(3),t.qZA()}if(2&r){const o=t.oxw();t.xp6(3),t.hij(" ",o.acao," ")}}function Y(r,c){if(1&r&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&r){const o=t.oxw();t.xp6(1),t.Oqu(o.getMensafield("descricao"))}}const G=[{path:"",redirectTo:"centroscustos",pathMatch:"full"},{path:"centroscustos",component:J},{path:"centroscustos/:retorno",component:J},{path:"centrocusto/:id_empresa/:id_local/:codigo/:acao",component:(()=>{class r{constructor(o,e,a,s,p,f){this.formBuilder=o,this.ccService=e,this.route=a,this.router=s,this.appSnackBar=p,this.globalService=f,this.cc=new Z.P,this.acao="Sem Defini\xe7\xe3o",this.idAcao=u.I.Inclusao,this.readOnly=!0,this.labelCadastro="",this.formulario=o.group({codigo:[{value:""},[n.kI.required,n.kI.min(1)]],descricao:[{value:""},[(0,R.S)(1,80,!0)]]}),this.cc=new Z.P,this.inscricaoRota=a.params.subscribe(m=>{this.cc.id_empresa=m.id_empresa,this.cc.id_filial=m.id_local,this.cc.codigo=m.codigo,this.idAcao=m.acao,this.setAcao(m.acao)})}ngOnInit(){this.idAcao==u.I.Inclusao?(this.cc=new Z.P,this.cc.id_empresa=this.globalService.getIdEmpresa(),this.cc.id_filial=this.globalService.getLocal().id):this.getGrupo(),this.setValue()}ngOnDestroy(){var o,e;null===(o=this.inscricaoRota)||void 0===o||o.unsubscribe(),null===(e=this.inscricaoAcao)||void 0===e||e.unsubscribe()}onSubmit(){this.formulario.valid?this.executaAcao():(this.formulario.markAllAsTouched(),this.appSnackBar.openSuccessSnackBar("Formul\xe1rio Com Campos Inv\xe1lidos.","OK"))}onRetorno(){const o=this.globalService.estadoFind("cc");if(null!=o){let e=o.getParametro();Object(e).new=this.idAcao==u.I.Inclusao,Object(e).id_retorno=this.cc.codigo,o.parametro=JSON.stringify(e),this.globalService.estadoSave(o)}this.router.navigate(["/centroscustos/centroscustos","SIM"])}onCancel(){const o=this.globalService.estadoFind("cc");if(null!=o){let e=o.getParametro();Object(e).new=!1,Object(e).id_retorno=this.idAcao==u.I.Consulta?this.cc.codigo:0,o.parametro=JSON.stringify(e),this.globalService.estadoSave(o)}this.router.navigate(["/centroscustos/centroscustos","SIM"])}getGrupo(){this.globalService.setSpin(!0),this.inscricaoAcao=this.ccService.getCentrocusto(this.cc.id_empresa,this.cc.id_filial,this.cc.codigo.replace("/","_")).subscribe(o=>{this.globalService.setSpin(!1),this.cc=o,this.setValue()},o=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Centros De Custos ${o.error.tabela} - ${o.error.erro} - ${o.error.message}`,"OK")})}setValue(){this.formulario.setValue({codigo:this.cc.codigo,descricao:this.cc.descricao})}getLabelCancel(){return this.idAcao==u.I.Consulta?"Voltar":"Cancelar"}setAcao(o){switch(+o){case u.I.Inclusao:this.acao="Gravar",this.labelCadastro="Centros De Custos - Inclus\xe3o.",this.readOnly=!1;break;case u.I.Edicao:this.acao="Gravar",this.labelCadastro="Centros De Custos - Altera\xe7\xe3o.",this.readOnly=!1;break;case u.I.Consulta:this.acao="Voltar",this.labelCadastro="Centros De Custos - Consulta.",this.readOnly=!0;break;case u.I.Exclusao:this.acao="Excluir",this.labelCadastro="Centros De Custos - Exclus\xe3o.",this.readOnly=!0}}executaAcao(){var o=this;switch(this.cc.codigo=this.formulario.value.codigo,this.cc.descricao=this.formulario.value.descricao,+this.idAcao){case u.I.Inclusao:this.cc.user_insert=this.globalService.getUsuario().id,this.globalService.setSpin(!0),this.inscricaoAcao=this.ccService.centrocustoInsert(this.cc).subscribe(function(){var e=(0,S.Z)(function*(a){o.cc.codigo=a.codigo,o.globalService.setSpin(!1),o.onRetorno()});return function(a){return e.apply(this,arguments)}}(),e=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na INclus\xe3o ${(0,l.bZ)(e)}`,"OK")});break;case u.I.Edicao:this.globalService.setSpin(!0),this.cc.user_update=this.globalService.getUsuario().id,this.inscricaoAcao=this.ccService.centrocustoUpdate(this.cc).subscribe(function(){var e=(0,S.Z)(function*(a){o.globalService.setSpin(!1),o.onRetorno()});return function(a){return e.apply(this,arguments)}}(),e=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na Altera\xe7\xe3o ${e.error.tabela} - ${e.error.erro} - ${e.error.message}`,"OK")});break;case u.I.Exclusao:this.globalService.setSpin(!0),this.inscricaoAcao=this.ccService.centrocustoDelete(this.cc.id_empresa,this.cc.id_filial,this.cc.codigo).subscribe(function(){var e=(0,S.Z)(function*(a){o.globalService.setSpin(!1),o.onRetorno()});return function(a){return e.apply(this,arguments)}}(),e=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar("Erro Na Exclus\xe3o $Mesage ","OK")})}}getAcoes(){return u.I}touchedOrDirty(o){var e,a;return!(!(null===(e=this.formulario.get(o))||void 0===e?void 0:e.touched)&&!(null===(a=this.formulario.get(o))||void 0===a?void 0:a.dirty))}NoValidtouchedOrDirty(o){var e,a,s;return!((null===(e=this.formulario.get(o))||void 0===e?void 0:e.valid)||!(null===(a=this.formulario.get(o))||void 0===a?void 0:a.touched)&&!(null===(s=this.formulario.get(o))||void 0===s?void 0:s.dirty))}getMensafield(o){var e,a;return null===(a=null===(e=this.formulario.get(o))||void 0===e?void 0:e.errors)||void 0===a?void 0:a.message}}return r.\u0275fac=function(o){return new(o||r)(t.Y36(n.qu),t.Y36(O.T),t.Y36(h.gz),t.Y36(h.F0),t.Y36(_.W),t.Y36(T.U))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-centrocusto-view"]],decls:22,vars:7,consts:[[1,"div-barra"],[1,"example-spacer"],[1,"button-container-right"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","accent",3,"click"],["autocomplete","off",3,"formGroup"],[1,"col-med-3"],["appearance","outline",1,"col-max"],["matInput","","formControlName","codigo",3,"readonly"],["appearance","outline",1,"col-max","column-span-2"],["matInput","","formControlName","descricao","oninput","this.value = this.value.toUpperCase()",3,"readonly"],[4,"ngIf"],["mat-raised-button","","color","primary",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-toolbar"),t.TgZ(2,"span",1),t.TgZ(3,"mat-label"),t._uU(4),t.qZA(),t.qZA(),t.TgZ(5,"div",2),t.YNc(6,M,4,1,"button",3),t.TgZ(7,"button",4),t.NdJ("click",function(){return e.onCancel()}),t.TgZ(8,"mat-icon"),t._uU(9,"cancel"),t.qZA(),t._uU(10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"form",5),t.TgZ(12,"div",6),t.TgZ(13,"mat-form-field",7),t.TgZ(14,"mat-label"),t._uU(15,"C\xf3digo"),t.qZA(),t._UZ(16,"input",8),t.qZA(),t.TgZ(17,"mat-form-field",9),t.TgZ(18,"mat-label"),t._uU(19,"Descri\xe7\xe3o"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,Y,2,1,"mat-error",11),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(4),t.Oqu(e.labelCadastro),t.xp6(2),t.Q6J("ngIf",3!=e.idAcao),t.xp6(4),t.hij(" ",e.getLabelCancel()," "),t.xp6(1),t.Q6J("formGroup",e.formulario),t.xp6(5),t.Q6J("readonly",e.idAcao!=e.getAcoes().Inclusao),t.xp6(4),t.Q6J("readonly",e.readOnly),t.xp6(1),t.Q6J("ngIf",e.NoValidtouchedOrDirty("descricao")))},directives:[I.Ye,g.hX,v.O5,x.lW,y.Hw,n._Y,n.JL,n.sg,g.KE,q.Nt,n.Fj,n.JJ,n.u,g.TO],styles:[""]}),r})(),canActivate:[]}];let L=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[h.Bz.forChild(G)],h.Bz]}),r})();var Q=i(9427),$=i(4466),K=i(7325);let z=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[v.ez,L,Q.q,d.Cl,n.u5,n.UX,$.m,K.yI.forChild()]]}),r})()}}]);