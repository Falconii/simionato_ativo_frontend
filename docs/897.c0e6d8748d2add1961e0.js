"use strict";(self.webpackChunkinventario=self.webpackChunkinventario||[]).push([[897],{4897:(D,T,s)=>{s.r(T),s.d(T,{UsuarioModule:()=>Pa});var a=s(7716);let Z=(()=>{class t{canActivate(o,e){return console.log("route - ACAO",o.params.acao),!0}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=s(8583),h=s(8239),l=s(3679),n=s(3032),p=s(9267),g=s(2546),M=s(2401),B=s(3e3),_=s(9019),c=s(6809),I=s(1209),y=s(8064),N=s(3317),z=s(1841);let $=(()=>{class t{constructor(o){this.http=o,this.estados=[]}getEstados(){return this.http.get("assets/dados/estadosbr.json")}}return t.\u0275fac=function(o){return new(o||t)(a.LFG(z.eN))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=s(4655),P=s(789),J=s(3073),w=s(2522),A=s(8295),E=s(1095),V=s(6627),Q=s(9983),F=s(8981),k=s(7441),Y=s(2458);function R(t,i){if(1&t){const o=a.EpF();a.TgZ(0,"button",29),a.NdJ("click",function(){return a.CHM(o),a.oxw().onSubmit()}),a.TgZ(1,"mat-icon"),a._uU(2,"check"),a.qZA(),a._uU(3),a.qZA()}if(2&t){const o=a.oxw();a.xp6(3),a.hij(" ",o.acao," ")}}function L(t,i){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const o=a.oxw();a.xp6(1),a.Oqu(o.getMensafield("razao"))}}function K(t,i){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const o=a.oxw();a.xp6(1),a.Oqu(o.getMensafield("cadastr"))}}function H(t,i){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const o=a.oxw();a.xp6(1),a.Oqu(o.getMensafield("senha"))}}function X(t,i){if(1&t&&(a.TgZ(0,"mat-option",33),a._uU(1),a.qZA()),2&t){const o=i.$implicit;a.Q6J("value",o.codigo),a.xp6(1),a.hij(" ",o.descricao," ")}}function W(t,i){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const o=a.oxw(2);a.xp6(1),a.Oqu(o.getMensafield("grupo"))}}function aa(t,i){if(1&t&&(a.TgZ(0,"mat-form-field",30),a.TgZ(1,"mat-label"),a._uU(2,"Grupo Do Usu\xe1rio"),a.qZA(),a.TgZ(3,"mat-select",31),a.YNc(4,X,2,2,"mat-option",32),a.qZA(),a.YNc(5,W,2,1,"mat-error",11),a.qZA()),2&t){const o=a.oxw();a.xp6(4),a.Q6J("ngForOf",o.grupos),a.xp6(1),a.Q6J("ngIf",o.NoValidtouchedOrDirty("grupo"))}}function oa(t,i){if(1&t&&(a.TgZ(0,"mat-form-field",30),a.TgZ(1,"mat-label"),a._uU(2,"Grupo"),a.qZA(),a._UZ(3,"input",34),a.qZA()),2&t){const o=a.oxw();a.xp6(3),a.Q6J("readonly",o.readOnly)}}function ea(t,i){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const o=a.oxw();a.xp6(1),a.Oqu(o.getMensafield("cnpj_cpf"))}}function ta(t,i){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const o=a.oxw();a.xp6(1),a.Oqu(o.getMensafield("rua"))}}function ra(t,i){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const o=a.oxw();a.xp6(1),a.Oqu(o.getMensafield("nro"))}}function ia(t,i){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const o=a.oxw();a.xp6(1),a.Oqu(o.getMensafield("complemento"))}}function sa(t,i){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const o=a.oxw();a.xp6(1),a.Oqu(o.getMensafield("bairro"))}}function na(t,i){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const o=a.oxw();a.xp6(1),a.Oqu(o.getMensafield("cidade"))}}function ua(t,i){if(1&t&&(a.TgZ(0,"mat-option",33),a._uU(1),a.qZA()),2&t){const o=i.$implicit;a.Q6J("value",o.sigla),a.xp6(1),a.AsE(" ",o.sigla,"-",o.nome," ")}}function la(t,i){if(1&t&&(a.TgZ(0,"mat-form-field",35),a.TgZ(1,"mat-label"),a._uU(2,"Estado:"),a.qZA(),a.TgZ(3,"mat-select",36),a.YNc(4,ua,2,3,"mat-option",32),a.qZA(),a.qZA()),2&t){const o=a.oxw();a.xp6(4),a.Q6J("ngForOf",o.ufs)}}function ca(t,i){if(1&t&&(a.TgZ(0,"mat-form-field",35),a.TgZ(1,"mat-label"),a._uU(2,"Estado:"),a.qZA(),a._UZ(3,"input",37),a.qZA()),2&t){const o=a.oxw();a.xp6(3),a.Q6J("readonly",o.readOnly)}}function ma(t,i){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const o=a.oxw();a.xp6(1),a.Oqu(o.getMensafield("cep"))}}function pa(t,i){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const o=a.oxw();a.xp6(1),a.Oqu(o.getMensafield("email"))}}function da(t,i){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const o=a.oxw();a.xp6(1),a.Oqu(o.getMensafield("tel1"))}}function ha(t,i){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const o=a.oxw();a.xp6(1),a.Oqu(o.getMensafield("tel2"))}}let ga=(()=>{class t{constructor(o,e,r,u,m,v,O,x,q){this.formBuilder=o,this.usuariosService=e,this.grupoUserService=r,this.globalService=u,this.estadosSrv=m,this.route=v,this.router=O,this.appSnackBar=x,this.simNaoPipe=q,this.usuario=new _.g,this.grupos=[],this.acao="Sem Defini\xe7\xe3o",this.idAcao=n.I.Inclusao,this.readOnly=!0,this.durationInSeconds=2,this.labelCadastro="",this.ufs=[],this.respostas=[{sigla:"S",descricao:"SIM"},{sigla:"N",descricao:"N\xc3O"}],this.formulario=o.group({id:[{value:"",disabled:!0}],ativo:[{value:"",disabled:!0}],razao:[{value:""},[(0,p.S)(3,40,!0)]],cadastr:[{value:""},[(0,M.K)(!0)]],cnpj_cpf:[{value:""},[(0,B.x)(!1)]],senha:[{value:""},[l.kI.required,l.kI.minLength(3),l.kI.maxLength(200)]],grupo:[{value:""},[l.kI.required,l.kI.min(1)]],grupo_:[{value:""}],rua:[{value:""},[(0,p.S)(3,80,!1)]],nro:[{value:""},[(0,p.S)(1,10,!1)]],complemento:[{value:""},[(0,p.S)(0,30)]],bairro:[{value:""},[(0,p.S)(3,40,!1)]],cidade:[{value:""},[(0,p.S)(3,40,!1)]],uf:[{value:""},[(0,p.S)(2,2,!1)]],uf_:[{value:""}],cep:[{value:""},[(0,g.l)(!1)]],tel1:[{value:""},[(0,p.S)(0,23,!1)]],tel2:[{value:""},[(0,p.S)(0,23)]],email:[{value:""},[l.kI.required,l.kI.email]]}),this.usuario=new _.g,this.usuario.cadastr=(0,c.zp)(new Date),this.grupos=[],this.inscricaoRota=v.params.subscribe(C=>{this.usuario.id_empresa=C.id_empresa,this.usuario.id=C.id,this.usuario.senha="",this.usuario.grupo=1,this.idAcao=C.acao,this.setAcao(C.acao)})}ngOnInit(){this.idAcao==n.I.Inclusao?(this.usuario=new _.g,this.usuario.id_empresa=this.globalService.getEmpresa().id,this.usuario.cadastr=(0,c.zp)(new Date),this.setValue()):this.getUsuario(),this.getUfs(),this.getGrupos()}ngOnDestroy(){var o,e,r,u,m;null===(o=this.incricaoGetUsuario)||void 0===o||o.unsubscribe(),null===(e=this.inscricaoGetGrupo)||void 0===e||e.unsubscribe(),null===(r=this.inscricaoRota)||void 0===r||r.unsubscribe(),null===(u=this.inscricaoAcao)||void 0===u||u.unsubscribe(),null===(m=this.inscricaoUf)||void 0===m||m.unsubscribe()}onSubmit(){this.formulario.valid||this.idAcao==n.I.Exclusao?this.executaAcao():(this.formulario.markAllAsTouched(),this.appSnackBar.openFailureSnackBar("Formul\xe1rio Com Campos Inv\xe1lidos.","OK"))}onRetorno(){const o=this.globalService.estadoFind("usuario");if(null!=o){let e=o.getParametro();Object(e).new=this.idAcao==n.I.Inclusao,Object(e).id_retorno=this.usuario.id,o.parametro=JSON.stringify(e),this.globalService.estadoSave(o)}this.router.navigate(["/usuarios/usuarios","SIM"])}onCancel(){if(this.idAcao==n.I.Atualizacao)this.router.navigate(["/"]);else{const o=this.globalService.estadoFind("usuario");if(null!=o){let e=o.getParametro();Object(e).new=!1,Object(e).id_retorno=this.idAcao==n.I.Consulta?this.usuario.id:0,o.parametro=JSON.stringify(e),this.globalService.estadoSave(o)}this.router.navigate(["/usuarios/usuarios","SIM"])}}getUfs(){this.inscricaoUf=this.estadosSrv.getEstados().subscribe(o=>{this.ufs=o},o=>{this.appSnackBar.openFailureSnackBar(`Pesquisa Cadastrado De Estados ${o.error.tabela} - ${o.error.erro} - ${o.error.message}`,"OK")})}getUsuario(){this.incricaoGetUsuario=this.usuariosService.getUsuario(this.usuario.id_empresa,this.usuario.id).subscribe(o=>{console.log(o),this.usuario=o,this.setValue()},o=>{this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Usu\xe1rios ${o.error.tabela} - ${o.error.erro} - ${o.error.message}`,"OK")})}setReadOnly(o){}getGrupos(){this.idAcao==n.I.Consulta||this.idAcao==n.I.Exclusao||(this.inscricaoGetGrupo=this.grupoUserService.getGruposusuarios().subscribe(o=>{this.grupos=o},o=>{this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Grupos ${o.error.tabela} - ${o.error.erro} - ${o.error.message}`,"OK")}))}setValue(){this.formulario.setValue({id:this.usuario.id,ativo:this.simNaoPipe.transform(this.usuario.ativo),razao:this.usuario.razao,cadastr:this.usuario.cadastr,senha:this.usuario.senha,grupo:this.usuario.grupo,grupo_:this.idAcao==n.I.Consulta||this.idAcao==n.I.Exclusao?this.usuario.grupo_descricao:"",cnpj_cpf:this.usuario.cnpj_cpf,rua:this.usuario.rua,nro:this.usuario.nro,complemento:this.usuario.complemento,bairro:this.usuario.bairro,cidade:this.usuario.cidade,uf:this.usuario.uf,uf_:this.idAcao==n.I.Consulta||this.idAcao==n.I.Exclusao?this.usuario.uf:"",cep:this.usuario.cep,tel1:this.usuario.tel1,tel2:this.usuario.tel2,email:this.usuario.email})}getLabelCancel(){return this.idAcao==n.I.Consulta?"Voltar":"Cancelar"}setAcao(o){switch(+o){case n.I.Inclusao:this.acao="Gravar",this.labelCadastro="Usu\xe1rios - Inclus\xe3o.",this.readOnly=!1;break;case n.I.Edicao:this.acao="Gravar",this.labelCadastro="Usu\xe1rios - Altera\xe7\xe3o.",this.readOnly=!1;break;case n.I.Consulta:this.acao="Voltar",this.labelCadastro="Usu\xe1rios - Consulta.",this.readOnly=!0;break;case n.I.Exclusao:this.acao="Excluir",this.labelCadastro="Usu\xe1rios - Exclus\xe3o.",this.readOnly=!0;break;case n.I.Atualizacao:this.acao="Gravar",this.labelCadastro="Usu\xe1rios - Atualiza\xe7\xe3o",this.readOnly=!1}}executaAcao(){var o=this;switch(this.usuario.razao=this.formulario.value.razao,this.usuario.cnpj_cpf=this.formulario.value.cnpj_cpf,this.usuario.cadastr=this.formulario.value.cadastr,this.usuario.rua=this.formulario.value.rua,this.usuario.nro=this.formulario.value.nro,this.usuario.complemento=this.formulario.value.complemento,this.usuario.bairro=this.formulario.value.bairro,this.usuario.cidade=this.formulario.value.cidade,this.usuario.uf=this.formulario.value.uf,this.usuario.cep=this.formulario.value.cep,this.usuario.tel1=this.formulario.value.tel1,this.usuario.tel2=this.formulario.value.tel2,this.usuario.email=this.formulario.value.email,this.usuario.senha=this.formulario.value.senha,this.usuario.grupo=this.formulario.value.grupo,+this.idAcao){case n.I.Inclusao:this.usuario.user_insert=this.globalService.getUsuario().id,console.log("usuario =>",this.usuario),this.inscricaoAcao=this.usuariosService.UsuarioInsert(this.usuario).subscribe(function(){var e=(0,h.Z)(function*(r){o.onCancel()});return function(r){return e.apply(this,arguments)}}(),e=>{this.appSnackBar.openFailureSnackBar(`Erro Na INclus\xe3o ${e.error.tabela} - ${e.error.erro} - ${e.error.message}`,"OK")});break;case n.I.Edicao:this.usuario.user_update=this.globalService.getUsuario().id,this.inscricaoAcao=this.usuariosService.UsuarioUpdate(this.usuario).subscribe(function(){var e=(0,h.Z)(function*(r){o.usuario.id==o.globalService.getUsuario().id?(o.globalService.setUsuario(new _.g),o.globalService.setLogado(!1)):o.onCancel()});return function(r){return e.apply(this,arguments)}}(),e=>{this.appSnackBar.openFailureSnackBar(`Erro Na Altera\xe7\xe3o ${e.error.tabela} - ${e.error.erro} - ${e.error.message}`,"OK")});break;case n.I.Atualizacao:this.inscricaoAcao=this.usuariosService.UsuarioUpdate(this.usuario).subscribe(function(){var e=(0,h.Z)(function*(r){o.globalService.setUsuario(new _.g),o.globalService.setLogado(!1)});return function(r){return e.apply(this,arguments)}}(),e=>{console.log("Error",e.error),this.appSnackBar.openFailureSnackBar(`Erro Na Altera\xe7\xe3o ${e.error.tabela} - ${e.error.erro} - ${e.error.message}`,"OK")});break;case n.I.Exclusao:this.inscricaoAcao=this.usuariosService.UsuarioDelete(this.usuario.id_empresa,this.usuario.id).subscribe(function(){var e=(0,h.Z)(function*(r){o.onCancel()});return function(r){return e.apply(this,arguments)}}(),e=>{this.appSnackBar.openFailureSnackBar(`Erro Na Exclusao ${e.error.tabela} - ${e.error.erro} - ${e.error.message}`,"OK")})}}delay(o){return new Promise(e=>setTimeout(e,o))}getAcoes(){return n.I}NoValidtouchedOrDirty(o){var e,r,u;return!((null===(e=this.formulario.get(o))||void 0===e?void 0:e.valid)||!(null===(r=this.formulario.get(o))||void 0===r?void 0:r.touched)&&!(null===(u=this.formulario.get(o))||void 0===u?void 0:u.dirty))}getMensafield(o){var e,r;return null===(r=null===(e=this.formulario.get(o))||void 0===e?void 0:e.errors)||void 0===r?void 0:r.message}setEmailReadOnly(){return 5==this.idAcao||this.readOnly}}return t.\u0275fac=function(o){return new(o||t)(a.Y36(l.qu),a.Y36(I.J),a.Y36(y.i),a.Y36(N.U),a.Y36($),a.Y36(f.gz),a.Y36(f.F0),a.Y36(P.W),a.Y36(J.r))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-usuario-view"]],decls:96,vars:37,consts:[[1,"example-spacer"],[1,"button-container-right"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","accent",3,"click"],["autocomplete","off",3,"formGroup"],[1,"moldura"],[1,"col-med-4"],["appearance","outline",1,"col-max"],["matInput","","formControlName","id"],["matInput","","formControlName","ativo"],["matInput","","formControlName","razao","oninput","this.value = this.value.toUpperCase()","autofocus","",3,"readonly"],[4,"ngIf"],["matInput","","formControlName","cadastr","mask","00/00/0000","placeholder","DD/MM/AAAA","readonly","true"],["type","password","matInput","","formControlName","senha",3,"readonly"],["field","","appearance","outline","class","col-max column-span-2",4,"ngIf"],["matInput","","formControlName","cnpj_cpf","mask","00.000.000/0000-00||000.000.000-00",3,"dropSpecialCharacters","readonly"],[1,"col-med-3"],["appearance","outline",1,"col-max","column-span-2"],["matInput","","formControlName","rua","oninput","this.value = this.value.toUpperCase()",3,"readonly"],["matInput","","formControlName","nro","oninput","this.value = this.value.toUpperCase()",3,"readonly"],[1,"col-med-1"],["matInput","","formControlName","complemento","oninput","this.value = this.value.toUpperCase()",3,"readonly"],["matInput","","formControlName","bairro","oninput","this.value = this.value.toUpperCase()",3,"readonly"],["matInput","","formControlName","cidade","oninput","this.value = this.value.toUpperCase()",3,"readonly"],["field","","appearance","outline","class","col-max",4,"ngIf"],["matInput","","formControlName","cep","mask","99999-999",3,"dropSpecialCharacters","readonly"],["matInput","","formControlName","email",3,"readonly"],["matInput","","formControlName","tel1","mask","(00) 0 0000-0000||(00) 0000-0000",3,"dropSpecialCharacters","readonly"],["matInput","","formControlName","tel2","mask","(00) 0 0000-0000||(00) 0000-0000",3,"dropSpecialCharacters","readonly"],["mat-raised-button","","color","primary",3,"click"],["field","","appearance","outline",1,"col-max","column-span-2"],["formControlName","grupo"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["matInput","","formControlName","grupo_",3,"readonly"],["field","","appearance","outline",1,"col-max"],["formControlName","uf"],["matInput","","formControlName","uf_",3,"readonly"]],template:function(o,e){1&o&&(a.TgZ(0,"p"),a.TgZ(1,"mat-toolbar"),a.TgZ(2,"span",0),a.TgZ(3,"mat-label"),a._uU(4),a.qZA(),a.qZA(),a.TgZ(5,"div",1),a.YNc(6,R,4,1,"button",2),a.TgZ(7,"button",3),a.NdJ("click",function(){return e.onCancel()}),a.TgZ(8,"mat-icon"),a._uU(9,"cancel"),a.qZA(),a._uU(10),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(11,"form",4),a.TgZ(12,"div",5),a.TgZ(13,"div",6),a.TgZ(14,"mat-form-field",7),a.TgZ(15,"mat-label"),a._uU(16,"C\xd3DIGO"),a.qZA(),a._UZ(17,"input",8),a.qZA(),a.TgZ(18,"mat-form-field",7),a.TgZ(19,"mat-label"),a._uU(20,"Ativo"),a.qZA(),a._UZ(21,"input",9),a.qZA(),a.TgZ(22,"mat-form-field",7),a.TgZ(23,"mat-label"),a._uU(24,"Raz\xe3o Social"),a.qZA(),a._UZ(25,"input",10),a.YNc(26,L,2,1,"mat-error",11),a.qZA(),a.TgZ(27,"mat-form-field",7),a.TgZ(28,"mat-label"),a._uU(29,"Cadastro"),a.qZA(),a._UZ(30,"input",12),a.YNc(31,K,2,1,"mat-error",11),a.qZA(),a.qZA(),a.TgZ(32,"div",6),a.TgZ(33,"mat-form-field",7),a.TgZ(34,"mat-label"),a._uU(35,"Senha"),a.qZA(),a._UZ(36,"input",13),a.YNc(37,H,2,1,"mat-error",11),a.qZA(),a.YNc(38,aa,6,2,"mat-form-field",14),a.YNc(39,oa,4,1,"mat-form-field",14),a.TgZ(40,"mat-form-field",7),a.TgZ(41,"mat-label"),a._uU(42,"CNPJ/CPF"),a.qZA(),a._UZ(43,"input",15),a.YNc(44,ea,2,1,"mat-error",11),a.qZA(),a.qZA(),a.TgZ(45,"div",16),a.TgZ(46,"mat-form-field",17),a.TgZ(47,"mat-label"),a._uU(48,"Endere\xe7o:"),a.qZA(),a._UZ(49,"input",18),a.YNc(50,ta,2,1,"mat-error",11),a.qZA(),a.TgZ(51,"mat-form-field",7),a.TgZ(52,"mat-label"),a._uU(53,"N\xfamero"),a.qZA(),a._UZ(54,"input",19),a.YNc(55,ra,2,1,"mat-error",11),a.qZA(),a.qZA(),a.TgZ(56,"div",20),a.TgZ(57,"mat-form-field",7),a.TgZ(58,"mat-label"),a._uU(59,"Complemento:"),a.qZA(),a._UZ(60,"input",21),a.YNc(61,ia,2,1,"mat-error",11),a.qZA(),a.qZA(),a.TgZ(62,"div",16),a.TgZ(63,"mat-form-field",7),a.TgZ(64,"mat-label"),a._uU(65,"Bairro:"),a.qZA(),a._UZ(66,"input",22),a.YNc(67,sa,2,1,"mat-error",11),a.qZA(),a.TgZ(68,"mat-form-field",7),a.TgZ(69,"mat-label"),a._uU(70,"Cidade:"),a.qZA(),a._UZ(71,"input",23),a.YNc(72,na,2,1,"mat-error",11),a.qZA(),a.YNc(73,la,5,1,"mat-form-field",24),a.YNc(74,ca,4,1,"mat-form-field",24),a.TgZ(75,"mat-form-field",7),a.TgZ(76,"mat-label"),a._uU(77,"CEP:"),a.qZA(),a._UZ(78,"input",25),a.YNc(79,ma,2,1,"mat-error",11),a.qZA(),a.qZA(),a.TgZ(80,"div",16),a.TgZ(81,"mat-form-field",7),a.TgZ(82,"mat-label"),a._uU(83,"E-Mail:"),a.qZA(),a._UZ(84,"input",26),a.YNc(85,pa,2,1,"mat-error",11),a.qZA(),a.TgZ(86,"mat-form-field",7),a.TgZ(87,"mat-label"),a._uU(88,"Telefone 1:"),a.qZA(),a._UZ(89,"input",27),a.YNc(90,da,2,1,"mat-error",11),a.qZA(),a.TgZ(91,"mat-form-field",7),a.TgZ(92,"mat-label"),a._uU(93,"Telefone 2:"),a.qZA(),a._UZ(94,"input",28),a.YNc(95,ha,2,1,"mat-error",11),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&o&&(a.xp6(4),a.Oqu(e.labelCadastro),a.xp6(2),a.Q6J("ngIf",3!=e.idAcao),a.xp6(4),a.hij(" ",e.getLabelCancel()," "),a.xp6(1),a.Q6J("formGroup",e.formulario),a.xp6(14),a.Q6J("readonly",e.readOnly),a.xp6(1),a.Q6J("ngIf",e.NoValidtouchedOrDirty("razao")),a.xp6(5),a.Q6J("ngIf",e.NoValidtouchedOrDirty("cadastr")),a.xp6(5),a.Q6J("readonly",e.readOnly),a.xp6(1),a.Q6J("ngIf",e.NoValidtouchedOrDirty("senha")),a.xp6(1),a.Q6J("ngIf",e.idAcao!=e.getAcoes().Consulta&&e.idAcao!=e.getAcoes().Exclusao&&e.idAcao!=e.getAcoes().Atualizacao),a.xp6(1),a.Q6J("ngIf",e.idAcao==e.getAcoes().Consulta||e.idAcao==e.getAcoes().Exclusao),a.xp6(4),a.Q6J("dropSpecialCharacters",!0)("readonly",e.readOnly),a.xp6(1),a.Q6J("ngIf",e.NoValidtouchedOrDirty("cnpj_cpf")),a.xp6(5),a.Q6J("readonly",e.readOnly),a.xp6(1),a.Q6J("ngIf",e.NoValidtouchedOrDirty("rua")),a.xp6(4),a.Q6J("readonly",e.readOnly),a.xp6(1),a.Q6J("ngIf",e.NoValidtouchedOrDirty("nro")),a.xp6(5),a.Q6J("readonly",e.readOnly),a.xp6(1),a.Q6J("ngIf",e.NoValidtouchedOrDirty("complemento")),a.xp6(5),a.Q6J("readonly",e.readOnly),a.xp6(1),a.Q6J("ngIf",e.NoValidtouchedOrDirty("bairro")),a.xp6(4),a.Q6J("readonly",e.readOnly),a.xp6(1),a.Q6J("ngIf",e.NoValidtouchedOrDirty("cidade")),a.xp6(1),a.Q6J("ngIf",e.idAcao!=e.getAcoes().Consulta&&e.idAcao!=e.getAcoes().Exclusao),a.xp6(1),a.Q6J("ngIf",e.idAcao==e.getAcoes().Consulta||e.idAcao==e.getAcoes().Exclusao),a.xp6(4),a.Q6J("dropSpecialCharacters",!0)("readonly",e.readOnly),a.xp6(1),a.Q6J("ngIf",e.NoValidtouchedOrDirty("cep")),a.xp6(5),a.Q6J("readonly",e.setEmailReadOnly()),a.xp6(1),a.Q6J("ngIf",e.NoValidtouchedOrDirty("email")),a.xp6(4),a.Q6J("dropSpecialCharacters",!0)("readonly",e.readOnly),a.xp6(1),a.Q6J("ngIf",e.NoValidtouchedOrDirty("tel1")),a.xp6(4),a.Q6J("dropSpecialCharacters",!0)("readonly",e.readOnly),a.xp6(1),a.Q6J("ngIf",e.NoValidtouchedOrDirty("tel2")))},directives:[w.Ye,A.hX,d.O5,E.lW,V.Hw,l._Y,l.JL,l.sg,A.KE,Q.Nt,l.Fj,l.JJ,l.u,F.hx,A.TO,k.gD,d.sg,Y.ey],styles:["tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2aa}tr[_ngcontent-%COMP%]:hover{background-color:#caa99d}"]}),t})();var j=s(6468),U=s(3430),S=s(2653),fa=s(5062),b=s(9243),va=s(7934),Za=s(5626),_a=s(3968),Aa=s(1436),ba=s(7234);function Ca(t,i){if(1&t&&(a.TgZ(0,"mat-option",19),a._uU(1),a.qZA()),2&t){const o=i.$implicit;a.Q6J("value",o),a.xp6(1),a.hij(" ",o," ")}}function Ta(t,i){if(1&t&&(a.TgZ(0,"mat-option",19),a._uU(1),a.qZA()),2&t){const o=i.$implicit;a.Q6J("value",o),a.xp6(1),a.hij(" ",o," ")}}function Ua(t,i){if(1&t&&(a.TgZ(0,"mat-option",19),a._uU(1),a.qZA()),2&t){const o=i.$implicit;a.Q6J("value",o.codigo),a.xp6(1),a.hij(" ",o.descricao," ")}}function Sa(t,i){if(1&t){const o=a.EpF();a.TgZ(0,"mat-form-field",20),a.TgZ(1,"mat-label"),a._uU(2,"Pesquisar Por"),a.qZA(),a.TgZ(3,"mat-select",21),a.NdJ("selectionChange",function(){return a.CHM(o),a.oxw().onChangeParametros()}),a.YNc(4,Ua,2,2,"mat-option",11),a.qZA(),a.qZA()}if(2&t){const o=a.oxw();a.xp6(4),a.Q6J("ngForOf",o.grupos)}}function Oa(t,i){1&t&&(a.TgZ(0,"mat-form-field",22),a.TgZ(1,"mat-label"),a._uU(2,"Descri\xe7\xe3o"),a.qZA(),a._UZ(3,"input",23),a.qZA())}function xa(t,i){if(1&t){const o=a.EpF();a.TgZ(0,"tr"),a.TgZ(1,"td"),a.TgZ(2,"div"),a.TgZ(3,"mat-label",24),a._uU(4),a.qZA(),a.qZA(),a.qZA(),a.TgZ(5,"td"),a.TgZ(6,"div"),a.TgZ(7,"mat-label",24),a._uU(8),a.ALo(9,"simNao"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(10,"td"),a.TgZ(11,"div"),a.TgZ(12,"mat-label",24),a._uU(13),a.qZA(),a.qZA(),a.qZA(),a.TgZ(14,"td"),a.TgZ(15,"div"),a.TgZ(16,"mat-label",24),a._uU(17),a.qZA(),a.qZA(),a.qZA(),a.TgZ(18,"td"),a.TgZ(19,"div"),a.TgZ(20,"mat-label",25),a._uU(21),a.qZA(),a.qZA(),a.qZA(),a.TgZ(22,"td",26),a.TgZ(23,"barra-acoes",27),a.NdJ("changeOpcao",function(r){const m=a.CHM(o).$implicit;return a.oxw().escolha(r,m)}),a.qZA(),a.qZA(),a.qZA()}if(2&t){const o=i.$implicit;a.xp6(4),a.Oqu(o.id),a.xp6(4),a.Oqu(a.lcZ(9,8,o.ativo)),a.xp6(5),a.Oqu(o.razao),a.xp6(4),a.Oqu(o.grupo_descricao),a.xp6(4),a.Oqu(o.email),a.xp6(2),a.Q6J("BARRA_VERTICAL",!0)("BARRA_ATIVIDADES",!1)("EXCLUIR",!1)}}let G=(()=>{class t{constructor(o,e,r,u,m,v,O,x){this.formBuilder=o,this.usuariosService=e,this.grupoUserService=r,this.parametrosService=u,this.globalService=m,this.route=v,this.router=O,this.appSnackBar=x,this.usuarios=[],this.grupos=[],this.erro="",this.opcoesOrdenacao=[],this.opcoesCampo=[],this.controlePaginas=new U.e(0,0),this.tamPagina=50,this.retorno=!1,this.parametro=new S.M,this.parametros=o.group({ordenacao:[null],campo:[null],filtro:[null],grupo:[]}),this.inscricaoRota=v.params.subscribe(q=>{void 0===q.retorno?this.retorno=!1:(this.retorno=!0,this.globalService.estadoFind("usuario"))}),this.loadParametros(),this.getGrupos()}ngOnInit(){this.getUsuariosContador()}ngOnDestroy(){var o,e,r,u,m;null===(o=this.inscricaoGetAll)||void 0===o||o.unsubscribe(),null===(e=this.inscricaoGetFiltro)||void 0===e||e.unsubscribe(),null===(r=this.inscricaoGetGrupo)||void 0===r||r.unsubscribe(),null===(u=this.inscricaoParametro)||void 0===u||u.unsubscribe(),null===(m=this.inscricaoRota)||void 0===m||m.unsubscribe()}escolha(o,e){if(void 0!==e){let r=this.parametro.getParametro();Object(r).new=!1,Object(r).id_retorno=e.id,Object(r).page=this.controlePaginas.getPaginalAtual(),Object(r).op_ordenacao=this.opcoesOrdenacao.findIndex(u=>this.parametros.value.ordenacao==u),Object(r).op_pesquisar=this.opcoesCampo.findIndex(u=>this.parametros.value.campo==u),Object(r).descricao=this.parametros.value.filtro,this.parametro.parametro=JSON.stringify(r),this.globalService.estadoSave(this.parametro),this.router.navigate(["/usuarios/usuario",e.id_empresa,e.id,o])}else{let r=this.parametro.getParametro();Object(r).new=!1,Object(r).id_retorno=0,Object(r).page=this.controlePaginas.getPaginalAtual(),Object(r).op_ordenacao=this.opcoesOrdenacao.findIndex(u=>this.parametros.value.ordenacao==u),Object(r).op_pesquisar=this.opcoesCampo.findIndex(u=>this.parametros.value.campo==u),Object(r).descricao=this.parametros.value.filtro,this.parametro.parametro=JSON.stringify(r),this.globalService.estadoSave(this.parametro),this.router.navigate(["/usuarios/usuario",this.globalService.getEmpresa().id,0,o])}}onHome(){this.router.navigate([""])}getAcoes(){return n.I}getUsuarios(){let o=new j.w;if(o.id_empresa=this.globalService.getIdEmpresa(),"C\xf3digo"==this.parametros.value.campo){let e=parseInt(this.parametros.value.filtro,10);o.id=isNaN(e)?0:e}"Raz\xe3o"==this.parametros.value.campo&&(o.razao=this.parametros.value.filtro.toUpperCase()),"Grupo"==this.parametros.value.campo&&(o.grupo=this.parametros.value.grupo),o.orderby=this.parametros.value.ordenacao,o.pagina=this.controlePaginas.getPaginalAtual(),this.globalService.setSpin(!0),this.inscricaoGetFiltro=this.usuariosService.getusuarios_01(o).subscribe(e=>{this.globalService.setSpin(!1),this.usuarios=e;const r=this.usuarios.findIndex(m=>m.id==(0,c.P0)(this.parametro.getParametro(),"id_retorno"));setTimeout(()=>this.viewPort.scrollToIndex(r),10),this.retorno=!1;let u=this.parametro.getParametro();Object(u).id_retorno=0,Object(u).new=!1,this.parametro.parametro=JSON.stringify(u)},e=>{this.globalService.setSpin(!1),this.usuarios=[],this.appSnackBar.openSuccessSnackBar(`Pesquisa Nos Usu\xe1rios ${(0,c.bZ)(e)}`,"OK")})}getUsuariosContador(){let o=new j.w;if(o.id_empresa=this.globalService.getIdEmpresa(),"C\xf3digo"==this.parametros.value.campo){let e=parseInt(this.parametros.value.filtro,10);o.id=isNaN(e)?0:e}"Raz\xe3o"==this.parametros.value.campo&&(o.razao=this.parametros.value.filtro.toUpperCase()),"Grupo"==this.parametros.value.campo&&(o.grupo=this.parametros.value.grupo),o.orderby=this.parametros.value.ordenacao,o.contador="S",this.globalService.setSpin(!0),this.inscricaoGetFiltro=this.usuariosService.getusuarios_01(o).subscribe(e=>{if(this.globalService.setSpin(!1),this.controlePaginas=new U.e(this.tamPagina,0==e.total?1:e.total),this.retorno)if((0,c.xc)(this.parametro.getParametro(),"new"))this.controlePaginas.goLast();else{let r=this.parametro.getParametro();this.controlePaginas.setPaginaAtual(Object(r).page)}this.getUsuarios()},e=>{this.globalService.setSpin(!1),this.controlePaginas=new U.e(this.tamPagina,0),this.usuarios=[],this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Usu\xe1rios ${(0,c.bZ)(e)}`,"OK")})}getGrupos(){(new va.$).id_empresa=this.globalService.getIdEmpresa(),this.globalService.setSpin(!0),this.inscricaoGetGrupo=this.grupoUserService.getGruposusuarios().subscribe(e=>{this.globalService.setSpin(!1),this.grupos=e},e=>{this.globalService.setSpin(!1),this.erro=e,this.grupos=[],console.log("this.erro",this.erro)})}isGrupo(){return"Grupo"==this.parametros.value.campo}setValues(){this.parametros.setValue({ordenacao:this.opcoesOrdenacao[(0,c.P0)(this.parametro.getParametro(),"op_ordenacao")],campo:this.opcoesCampo[(0,c.P0)(this.parametro.getParametro(),"op_pesquisar")],filtro:(0,c.SL)(this.parametro.getParametro(),"descricao"),grupo:900})}getTexto(){return c.fd}onChangePage(){this.getUsuariosContador()}onChangeParametros(){this.getUsuariosContador()}onSaveConfig(){this.updateParametros()}loadParametros(){if(this.parametro=new S.M,this.parametro.id_empresa=this.globalService.getIdEmpresa(),this.parametro.modulo="usuario",this.parametro.assinatura="V1.00 29/08/23",this.parametro.id_usuario=this.globalService.usuario.id,this.parametro.parametro='\n    {\n      "op_ordenacao": 0,\n      "ordenacao": ["C\xf3digo", "Raz\xe3o", "Grupo"],\n      "op_pesquisar": 1,\n      "pesquisar": ["C\xf3digo", "Raz\xe3o", "Grupo"],\n      "descricao": "",\n      "page": 1,\n      "new": false,\n      "id_retorno":0\n    }',this.opcoesOrdenacao=(0,c.FO)(this.parametro.getParametro(),"ordenacao"),this.opcoesCampo=(0,c.FO)(this.parametro.getParametro(),"pesquisar"),this.retorno&&null!==this.globalService.estadoFind("usuario")){const o=this.globalService.estadoFind("usuario");if(null!=o){if((0,c.xc)(o.getParametro(),"new")){let e=this.parametro.getParametro();Object(e).id_retorno=(0,c.P0)(o.getParametro(),"id_retorno"),this.parametro.parametro=JSON.stringify(e),this.setPosicaoInclusao()}else this.controlePaginas.setPaginaAtual((0,c.P0)(o.getParametro(),"page")),this.parametro.setParametro(o.getParametro());this.globalService.estadoDelete(o),this.setValues()}}else this.getParametro()}setPosicaoInclusao(){const o=this.parametro.getParametro();Object(o).op_ordenacao=0,Object(o).op_pesquisar=0,Object(o).descricao="",Object(o).new=!0,this.parametro.setParametro(o)}getParametro(){this.globalService.setSpin(!0);let o=new fa.E;o.id_empresa=this.parametro.id_empresa,o.modulo=this.parametro.modulo,o.assinatura=this.parametro.assinatura,o.id_usuario=this.parametro.id_usuario,o.orderby="Usu\xe1rio",this.inscricaoParametro=this.parametrosService.getParametrosParametro01(o).subscribe(e=>{this.globalService.setSpin(!1),this.parametro=new S.M,this.parametro.id_empresa=e[0].id_empresa,this.parametro.modulo=e[0].modulo,this.parametro.id_usuario=e[0].id_usuario,this.parametro.assinatura=e[0].assinatura,this.parametro.parametro=e[0].parametro,this.parametro.user_insert=e[0].user_insert,this.parametro.user_update=e[0].user_update,this.opcoesOrdenacao=(0,c.FO)(this.parametro.getParametro(),"ordenacao"),this.opcoesCampo=(0,c.FO)(this.parametro.getParametro(),"pesquisar"),this.setValues()},e=>{this.globalService.setSpin(!1),this.setValues()})}updateParametros(){this.globalService.setSpin(!0),this.parametro.user_insert=this.globalService.usuario.id,this.parametro.user_update=this.globalService.usuario.id;let o=this.parametro.getParametro();Object(o).op_ordenacao=this.opcoesOrdenacao.findIndex(e=>this.parametros.value.ordenacao==e),Object(o).op_pesquisar=this.opcoesCampo.findIndex(e=>this.parametros.value.campo==e),Object(o).descricao=this.parametros.value.filtro,Object(o).page=0,Object(o).new=!1,this.parametro.parametro=JSON.stringify(o),this.inscricaoParametro=this.parametrosService.ParametroAtualiza(this.parametro).subscribe(e=>{this.globalService.setSpin(!1),this.appSnackBar.openSuccessSnackBar("Par\xe2metros Atualizados","OK")},e=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Grava\xe7\xe3o Dos Parametros ${(0,c.bZ)(e)}`,"OK")})}}return t.\u0275fac=function(o){return new(o||t)(a.Y36(l.qu),a.Y36(I.J),a.Y36(y.i),a.Y36(Za.u),a.Y36(N.U),a.Y36(f.gz),a.Y36(f.F0),a.Y36(P.W))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-crud-usuario"]],viewQuery:function(o,e){if(1&o&&a.Gf(b.N7,5),2&o){let r;a.iGM(r=a.CRH())&&(e.viewPort=r.first)}},decls:47,vars:9,consts:[[1,"div-barra"],[1,"example-spacer"],[3,"controle","changePage"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Retorno","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Atualizar","matTooltipPosition","above",1,"example-icon",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Salvar Par\xe2metros","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above",3,"matTooltip","click"],[1,"parametros"],["autocomplete","off",1,"col-med-4",3,"formGroup"],["field","","appearance","outline",1,"col-max"],["formControlName","ordenacao",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["formControlName","campo",3,"selectionChange"],["field","","appearance","outline","class","col-max column-span-2",4,"ngIf"],["appearance","outline","class","col-max column-span-2",4,"ngIf"],[1,"content",3,"itemSize"],[1,"Browse_Lanc"],[1,"coluna-cabec"],[4,"cdkVirtualFor","cdkVirtualForOf"],[3,"value"],["field","","appearance","outline",1,"col-max","column-span-2"],["formControlName","grupo",3,"selectionChange"],["appearance","outline",1,"col-max","column-span-2"],["matInput","","formControlName","filtro","oninput","this.value = this.value.toUpperCase()"],[1,"Browse_Lanc_td"],[1,"Browse_Lanc_td_medium"],[1,"acoes"],[3,"BARRA_VERTICAL","BARRA_ATIVIDADES","EXCLUIR","changeOpcao"]],template:function(o,e){1&o&&(a.TgZ(0,"div",0),a.TgZ(1,"mat-toolbar"),a.TgZ(2,"span",1),a._uU(3,"Usu\xe1rios: "),a.qZA(),a.TgZ(4,"app-navegator",2),a.NdJ("changePage",function(){return e.onChangePage()}),a.qZA(),a.TgZ(5,"button",3),a.NdJ("click",function(){return e.onHome()}),a.TgZ(6,"mat-icon"),a._uU(7,"home"),a.qZA(),a.qZA(),a.TgZ(8,"button",4),a.NdJ("click",function(){return e.getUsuarios()}),a.TgZ(9,"mat-icon"),a._uU(10,"rotate_right"),a.qZA(),a.qZA(),a.TgZ(11,"button",5),a.NdJ("click",function(){return e.onSaveConfig()}),a.TgZ(12,"mat-icon"),a._uU(13,"brightness_high"),a.qZA(),a.qZA(),a.TgZ(14,"button",6),a.NdJ("click",function(){return e.escolha(e.getAcoes().Inclusao)}),a.TgZ(15,"mat-icon"),a._uU(16,"add_circle_outline"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(17,"div",7),a.TgZ(18,"form",8),a.TgZ(19,"mat-form-field",9),a.TgZ(20,"mat-label"),a._uU(21,"Ordena\xe7\xe3o"),a.qZA(),a.TgZ(22,"mat-select",10),a.NdJ("selectionChange",function(){return e.onChangeParametros()}),a.YNc(23,Ca,2,2,"mat-option",11),a.qZA(),a.qZA(),a.TgZ(24,"mat-form-field",9),a.TgZ(25,"mat-label"),a._uU(26,"Pesquisar Por"),a.qZA(),a.TgZ(27,"mat-select",12),a.NdJ("selectionChange",function(){return e.onChangeParametros()}),a.YNc(28,Ta,2,2,"mat-option",11),a.qZA(),a.qZA(),a.YNc(29,Sa,5,1,"mat-form-field",13),a.YNc(30,Oa,4,0,"mat-form-field",14),a.qZA(),a.qZA(),a.TgZ(31,"cdk-virtual-scroll-viewport",15),a.TgZ(32,"table",16),a.TgZ(33,"tr",17),a.TgZ(34,"th"),a._uU(35,"C\xf3digo"),a.qZA(),a.TgZ(36,"th"),a._uU(37,"Ativo"),a.qZA(),a.TgZ(38,"th"),a._uU(39,"Raz\xe3o"),a.qZA(),a.TgZ(40,"th"),a._uU(41,"Grupo"),a.qZA(),a.TgZ(42,"th"),a._uU(43,"E-Mail"),a.qZA(),a.TgZ(44,"th"),a._uU(45,"A\xc7\xd5ES"),a.qZA(),a.qZA(),a.YNc(46,xa,24,10,"tr",18),a.qZA(),a.qZA()),2&o&&(a.xp6(4),a.Q6J("controle",e.controlePaginas),a.xp6(10),a.Q6J("matTooltip",e.getTexto().incluir),a.xp6(4),a.Q6J("formGroup",e.parametros),a.xp6(5),a.Q6J("ngForOf",e.opcoesOrdenacao),a.xp6(5),a.Q6J("ngForOf",e.opcoesCampo),a.xp6(1),a.Q6J("ngIf",e.isGrupo()),a.xp6(1),a.Q6J("ngIf",!e.isGrupo()),a.xp6(1),a.Q6J("itemSize",50),a.xp6(15),a.Q6J("cdkVirtualForOf",e.usuarios))},directives:[w.Ye,_a.J,E.lW,Aa.gM,V.Hw,l._Y,l.JL,l.sg,A.KE,A.hX,k.gD,l.JJ,l.u,d.sg,d.O5,b.N7,b.xd,b.x0,Y.ey,Q.Nt,l.Fj,ba.C],pipes:[J.r],styles:[".content[_ngcontent-%COMP%]{height:60%;overflow:auto}tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2aa}tr[_ngcontent-%COMP%]:hover{background-color:#caa99d}"]}),t})();const qa=[{path:"",redirectTo:"usuarios",pathMatch:"full"},{path:"usuarios",component:G},{path:"usuarios/:retorno",component:G},{path:"usuario/:id_empresa/:id/:acao",component:ga,canActivate:[]}];let Ia=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[f.Bz.forChild(qa)],f.Bz]}),t})();var ya=s(7666),Na=s(4466);let Pa=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({providers:[Z],imports:[[d.ez,Ia,ya.q,l.u5,b.Cl,l.UX,Na.m,F.yI.forChild()]]}),t})()},9267:(D,T,s)=>{function a(Z,d,h=!1){return l=>{let n="",p=!0;const g=l.value;return h||null!=g?h&&null==g||h&&0==g.length?{ValidatorStringLen:!0,message:"Dado Obrigat\xf3rio"}:h||0!=g.length?(Z>0&&g.length<Z&&(n=`Campo Dever\xe1 Ter No Minimo ${Z} Caracteres.`,p=!1),d>0&&g.length>d&&(n=`Campo Dever\xe1 Ter No M\xe1ximo ${d} Caracteres.`,p=!1),p?null:{ValidatorStringLen:!0,message:n}):null:null}}s.d(T,{S:()=>a})}}]);