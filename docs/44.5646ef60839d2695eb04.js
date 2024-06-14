"use strict";(self.webpackChunkinventario=self.webpackChunkinventario||[]).push([[44],{2653:(f,m,i)=>{i.d(m,{M:()=>p});class p{constructor(){this.id_empresa=0,this.modulo="",this.assinatura="",this.id_usuario=0,this.parametro="",this.user_insert=0,this.user_update=0}getParametro(){try{return JSON.parse(this.parametro)}catch(u){return JSON.parse('{"mensagem":"error"}')}}setParametro(u){this.parametro=JSON.stringify(u)}}},6044:(f,m,i)=>{i.r(m),i.d(m,{SobreModule:()=>D});var p=i(8583),d=i(4655),u=i(8239),v=i(2653),n=i(3679),s=i(3032),h=i(6809),a=i(7716),S=i(2340),b=i(1841);let y=(()=>{class e{constructor(t){this.http=t,this.apiURL=S.N.apiURL}getParametros(){return this.http.get(`${this.apiURL}Parametros`)}getParametrosParametro_01(t){return this.http.post(`${this.apiURL}parametros`,t)}getParametro(t,r,o,c){return this.http.get(`${this.apiURL}parametro/${t}/${r}/${o}/${c}`)}parametroInsert(t){return this.http.post(`${this.apiURL}parametro`,t)}parametroUpdate(t){return this.http.put(`${this.apiURL}parametro`,t)}parametroDelete(t,r,o,c){return this.http.delete(`${this.apiURL}parametro/${t}/${r}/${o}/${c}`)}parametroInstallKey(){return this.http.post(`${this.apiURL}fotokey`,{chave:"nada"})}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(b.eN))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var C=i(789),k=i(3317),I=i(2522),g=i(8295),Z=i(1095),A=i(6627),K=i(9983);function O(e,l){if(1&e){const t=a.EpF();a.TgZ(0,"button",11),a.NdJ("click",function(){return a.CHM(t),a.oxw().onSubmit()}),a.TgZ(1,"mat-icon"),a._uU(2,"check"),a.qZA(),a._uU(3),a.qZA()}if(2&e){const t=a.oxw();a.xp6(3),a.hij(" ",t.acao," ")}}function x(e,l){if(1&e&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&e){const t=a.oxw();a.xp6(1),a.Oqu(t.getMensafield("key"))}}const B=[{path:"",redirectTo:"keys",pathMatch:"full"},{path:"keys",component:(()=>{class e{constructor(t,r,o,c,E){this.formBuilder=t,this.parametroService=r,this.router=o,this.appSnackBar=c,this.globalService=E,this.parametro=new v.M,this.acao="Sem Defini\xe7\xe3o",this.idAcao=s.I.Inclusao,this.readOnly=!0,this.labelCadastro="",this.formulario=t.group({key:[{value:""},[n.kI.required]]}),this.parametro=new v.M,this.parametro.id_empresa=this.globalService.getIdEmpresa(),this.parametro.modulo="key",this.parametro.assinatura="googledrive",this.parametro.id_usuario=999,this.parametro.parametro="{}",this.setValue()}ngOnInit(){this.getParametro()}ngOnDestroy(){var t,r;null===(t=this.inscricaoCrud)||void 0===t||t.unsubscribe(),null===(r=this.inscricaoInstall)||void 0===r||r.unsubscribe()}onSubmit(){this.formulario.valid?this.executaAcao():(this.formulario.markAllAsTouched(),this.appSnackBar.openSuccessSnackBar("Formul\xe1rio Com Campos Inv\xe1lidos.","OK"))}onRetorno(){this.router.navigate(["/"])}onCancel(){this.router.navigate(["/"])}getParametro(){this.globalService.setSpin(!0),this.inscricaoCrud=this.parametroService.getParametro(this.parametro.id_empresa,this.parametro.modulo,this.parametro.assinatura,this.parametro.id_usuario).subscribe(t=>{this.globalService.setSpin(!1),this.parametro=t,this.setValue(),this.idAcao=s.I.Edicao,this.setAcao(this.idAcao)},t=>{this.globalService.setSpin(!1),console.log("==>",t.error.message,"Parametro N\xe3o Encontrado."),"Parametro N\xe3o Encontrado."==t.error.message.trim()?(this.idAcao=s.I.Inclusao,this.setAcao(this.idAcao)):(this.appSnackBar.openFailureSnackBar(`Pesquisa ${(0,h.bZ)(t)}`,"OK"),this.idAcao=s.I.Consulta,this.setAcao(this.idAcao))})}setValue(){this.formulario.setValue({key:this.parametro.parametro})}getLabelCancel(){return this.idAcao==s.I.Consulta?"Voltar":"Cancelar"}setAcao(t){switch(+t){case s.I.Inclusao:this.acao="Gravar",this.labelCadastro="Google Drive Key - Inclus\xe3o.",this.readOnly=!1;break;case s.I.Edicao:this.acao="Gravar",this.labelCadastro="Google Drive Key - Altera\xe7\xe3o.",this.readOnly=!1;break;case s.I.Consulta:this.acao="Voltar",this.labelCadastro="Google Drive Key - Consulta.",this.readOnly=!0;break;case s.I.Exclusao:this.acao="Excluir",this.labelCadastro="Google Drive Key - Exclus\xe3o.",this.readOnly=!0}}executaAcao(){var t=this;switch(this.parametro.parametro=this.formulario.value.key,+this.idAcao){case s.I.Inclusao:this.parametro.user_insert=this.globalService.getUsuario().id,this.globalService.setSpin(!0),this.inscricaoCrud=this.parametroService.parametroInsert(this.parametro).subscribe(function(){var r=(0,u.Z)(function*(o){t.globalService.setSpin(!1),t.appSnackBar.openSuccessSnackBar("Chave Salva No Banco De Dados...","OK"),t.instalKey()});return function(o){return r.apply(this,arguments)}}(),r=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na Inclus\xe3o ${(0,h.bZ)(r)}`,"OK")});break;case s.I.Edicao:this.globalService.setSpin(!0),this.parametro.user_update=this.globalService.getUsuario().id,this.inscricaoCrud=this.parametroService.parametroUpdate(this.parametro).subscribe(function(){var r=(0,u.Z)(function*(o){t.globalService.setSpin(!1),t.appSnackBar.openSuccessSnackBar("Chave Atualizado No Banco De Dados...","OK"),t.instalKey()});return function(o){return r.apply(this,arguments)}}(),r=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na Atualiza\xe7\xe3o ${(0,h.bZ)(r)}`,"OK")});break;case s.I.Exclusao:this.globalService.setSpin(!0),this.inscricaoCrud=this.parametroService.parametroDelete(this.parametro.id_empresa,this.parametro.modulo,this.parametro.assinatura,this.parametro.id_usuario).subscribe(function(){var r=(0,u.Z)(function*(o){t.globalService.setSpin(!1),t.onRetorno()});return function(o){return r.apply(this,arguments)}}(),r=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na Exclus\xe3o ${(0,h.bZ)(r)}`,"OK")})}}instalKey(){var t=this;this.inscricaoInstall=this.parametroService.parametroInstallKey().subscribe(function(){var r=(0,u.Z)(function*(o){t.globalService.setSpin(!1),t.appSnackBar.openSuccessSnackBar("Chave Instalada Com Sucesso!","OK"),t.onRetorno()});return function(o){return r.apply(this,arguments)}}(),r=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Instala\xe7\xe3o Da Chave ${(0,h.bZ)(r)}`,"OK")})}getAcoes(){return s.I}touchedOrDirty(t){var r,o;return!(!(null===(r=this.formulario.get(t))||void 0===r?void 0:r.touched)&&!(null===(o=this.formulario.get(t))||void 0===o?void 0:o.dirty))}NoValidtouchedOrDirty(t){var r,o,c;return!((null===(r=this.formulario.get(t))||void 0===r?void 0:r.valid)||!(null===(o=this.formulario.get(t))||void 0===o?void 0:o.touched)&&!(null===(c=this.formulario.get(t))||void 0===c?void 0:c.dirty))}getMensafield(t){var r,o;return null===(o=null===(r=this.formulario.get(t))||void 0===r?void 0:r.errors)||void 0===o?void 0:o.message}inicializaParametro(){this.parametro=new v.M,this.parametro.id_empresa=this.globalService.getIdEmpresa(),this.parametro.modulo="key",this.parametro.assinatura="googledrive",this.parametro.id_usuario=999,this.parametro.parametro="{}"}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(n.qu),a.Y36(y),a.Y36(d.F0),a.Y36(C.W),a.Y36(k.U))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-keys"]],decls:19,vars:6,consts:[[1,"div-barra"],[1,"example-spacer"],[1,"button-container-right"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","accent",3,"click"],["autocomplete","off",3,"formGroup"],[1,"col-med-1"],["appearance","outline",1,"col-max"],["matInput","","formControlName","key",1,"altura_key",3,"readonly"],[4,"ngIf"],["ngSrc","https://drive.google.com/uc?export=view&id=1QSfT3hO40mN-9znlqq7hmdHWQRBe2kRi","width","1080","height","720"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,r){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"mat-toolbar"),a.TgZ(2,"span",1),a.TgZ(3,"mat-label"),a._uU(4),a.qZA(),a.qZA(),a.TgZ(5,"div",2),a.YNc(6,O,4,1,"button",3),a.TgZ(7,"button",4),a.NdJ("click",function(){return r.onCancel()}),a.TgZ(8,"mat-icon"),a._uU(9,"cancel"),a.qZA(),a._uU(10),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(11,"form",5),a.TgZ(12,"div",6),a.TgZ(13,"mat-form-field",7),a.TgZ(14,"mat-label"),a._uU(15,"Google Drive Key"),a.qZA(),a._UZ(16,"textarea",8),a.YNc(17,x,2,1,"mat-error",9),a.qZA(),a.qZA(),a.qZA(),a._UZ(18,"img",10)),2&t&&(a.xp6(4),a.Oqu(r.labelCadastro),a.xp6(2),a.Q6J("ngIf",3!=r.idAcao),a.xp6(4),a.hij(" ",r.getLabelCancel()," "),a.xp6(1),a.Q6J("formGroup",r.formulario),a.xp6(5),a.Q6J("readonly",r.readOnly),a.xp6(1),a.Q6J("ngIf",r.NoValidtouchedOrDirty("key")))},directives:[I.Ye,g.hX,p.O5,Z.lW,A.Hw,n._Y,n.JL,n.sg,g.KE,K.Nt,n.Fj,n.JJ,n.u,g.TO],styles:[".altura_key[_ngcontent-%COMP%]{height:200px}"]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[d.Bz.forChild(B)],d.Bz]}),e})();var U=i(9427),N=i(9243),$=i(7325),P=i(4466);let D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[p.ez,T,U.q,N.Cl,n.u5,n.UX,P.m,$.yI.forChild()]]}),e})()}}]);