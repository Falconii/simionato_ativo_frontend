"use strict";(self.webpackChunkinventario=self.webpackChunkinventario||[]).push([[644],{8786:(E,p,i)=>{i.d(p,{P:()=>a});class a{constructor(){this.id_empresa=0,this.id_filial=0,this.codigo="",this.descricao="",this.user_insert=0,this.user_update=0}}},604:(E,p,i)=>{i.d(p,{b:()=>a});class a{constructor(){this.id_empresa=0,this.id_filial=0,this.codigo=0,this.descricao="",this.user_insert=0,this.user_update=0}}},6407:(E,p,i)=>{i.d(p,{E:()=>t});var a=i(6809);class t{constructor(){this.id_empresa=0,this.id_filial=0,this.id_inventario=0,this.id_imobilizado=0,this.id_usuario=0,this.id_lanca=0,this.obs="",this.dtlanca=(0,a.zp)(new Date),this.estado=0,this.new_codigo=0,this.new_cc="",this.condicao=9,this.book="N",this.user_insert=0,this.user_update=0,this.imo_inv_status=0,this.inv_descricao="",this.imo_cod_cc="",this.imo_cod_grupo=0,this.imo_descricao="",this.usu_razao=""}}},1023:(E,p,i)=>{i.d(p,{H:()=>a});class a{constructor(){this.id_empresa=0,this.id_filial=0,this.codigo=0,this.descricao="",this.user_insert=0,this.user_update=0}}},2979:(E,p,i)=>{i.d(p,{D:()=>a});class a{constructor(){this.id_empresa=0,this.id_filial=0,this.codigo="",this.descricao="",this.pagina=0,this.tamPagina=50,this.contador="N",this.orderby="",this.sharp=!1}}},6924:(E,p,i)=>{i.d(p,{v:()=>a});class a{constructor(){this.id_empresa=0,this.id_local=0,this.id_inventario=0,this.id_imobilizado=0,this.id_pasta="",this.id_file="",this.file_name="",this.imobilizados=[],this.destaque="N",this.pagina=0,this.tamPagina=50,this.contador="N",this.orderby="",this.sharp=!1}}},2174:(E,p,i)=>{i.d(p,{t:()=>a});class a{constructor(){this.id_empresa=0,this.id_filial=0,this.codigo=0,this.descricao="",this.pagina=0,this.tamPagina=50,this.contador="N",this.orderby="",this.sharp=!1}}},2992:(E,p,i)=>{i.d(p,{h:()=>a});class a{constructor(){this.id_empresa=0,this.id_filial=0,this.codigo=0,this.descricao="",this.pagina=0,this.tamPagina=50,this.contador="N",this.orderby="",this.sharp=!1}}},2704:(E,p,i)=>{i.d(p,{T:()=>v});var a=i(2340),t=i(7716),c=i(1841);let v=(()=>{class l{constructor(s){this.http=s,this.apiURL=a.N.apiURL}getCentroscustos(){return this.http.get(`${this.apiURL}Centroscustos`)}getCentroscustosParametro_01(s){return this.http.post(`${this.apiURL}centroscustos`,s)}getCentrocusto(s,h,_){return this.http.get(`${this.apiURL}centrocusto/${s}/${h}/${_}`)}centrocustoInsert(s){return this.http.post(`${this.apiURL}centrocusto`,s)}centrocustoUpdate(s){return this.http.put(`${this.apiURL}centrocusto`,s)}centrocustoDelete(s,h,_){return this.http.delete(`${this.apiURL}centrocusto/${s}/${h}/${_}`)}}return l.\u0275fac=function(s){return new(s||l)(t.LFG(c.eN))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},7535:(E,p,i)=>{i.d(p,{X:()=>v});var a=i(2340),t=i(7716),c=i(1841);let v=(()=>{class l{constructor(s){this.http=s,this.apiURL=a.N.apiURL}getFotos(){return this.http.get(`${this.apiURL}Fotos`)}getFotosParametro_01(s){return this.http.post(`${this.apiURL}fotos`,s)}getFoto(s,h,_,m,g,T,x){return this.http.get(`${this.apiURL}foto/${s}/${h}/${_}/${m}/${g}/${T}/${x}`)}fotoInsert(s){return this.http.post(`${this.apiURL}foto`,s)}fotoUpdate(s){return this.http.put(`${this.apiURL}foto`,s)}fotoDelete(s,h,_,m,g,T,x){return this.http.delete(`${this.apiURL}foto/${s}/${h}/${_}/${m}/${g}/${T}/${x}`)}}return l.\u0275fac=function(s){return new(s||l)(t.LFG(c.eN))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},7466:(E,p,i)=>{i.d(p,{Z:()=>v});var a=i(2340),t=i(7716),c=i(1841);let v=(()=>{class l{constructor(s){this.http=s,this.apiURL=a.N.apiURL}getGrupos(){return this.http.get(`${this.apiURL}Grupos`)}getGruposParametro_01(s){return this.http.post(`${this.apiURL}grupos`,s)}getGrupo(s,h,_){return this.http.get(`${this.apiURL}grupo/${s}/${h}/${_}`)}grupoInsert(s){return this.http.post(`${this.apiURL}grupo`,s)}grupoUpdate(s){return this.http.put(`${this.apiURL}grupo`,s)}grupoDelete(s,h,_){return this.http.delete(`${this.apiURL}grupo/${s}/${h}/${_}`)}}return l.\u0275fac=function(s){return new(s||l)(t.LFG(c.eN))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},7708:(E,p,i)=>{i.d(p,{x:()=>v});var a=i(2340),t=i(7716),c=i(1841);let v=(()=>{class l{constructor(s){this.http=s,this.apiURL=a.N.apiURL}getPrincipais(){return this.http.get(`${this.apiURL}Principais`)}getPrincipaisParametro_01(s){return this.http.post(`${this.apiURL}principais`,s)}getPrincipal(s,h,_){return this.http.get(`${this.apiURL}principal/${s}/${h}/${_}`)}principalInsert(s){return this.http.post(`${this.apiURL}principal`,s)}principalUpdate(s){return this.http.put(`${this.apiURL}principal`,s)}principalDelete(s,h,_){return this.http.delete(`${this.apiURL}principal/${s}/${h}/${_}`)}}return l.\u0275fac=function(s){return new(s||l)(t.LFG(c.eN))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},9631:(E,p,i)=>{function a(t,c){var v,l,b,s,h,_;try{let m=0;return""!==(null===(v=Object(c).dtinicial)||void 0===v?void 0:v.trim())&&(t.dtinicial=Object(c).dtinicial),""!==(null===(l=Object(c).dtfinal)||void 0===l?void 0:l.trim())&&(t.dtfinal=Object(c).dtfinal),""!==(null===(b=Object(c).orderby)||void 0===b?void 0:b.trim())&&(t.orderby=Object(c).orderby),""!==Object(c).cc&&(t.id_cc=Object(c).cc),""!==Object(c).cc_novo&&(t.new_cc=Object(c).cc_novo),m=parseInt(Object(c).grupo,10),t.id_grupo=isNaN(m)?0:m,m=parseInt(Object(c).situacao,10),t.status=isNaN(m)?0:m,m=parseInt(Object(c).codigo,10),t.id_imobilizado=isNaN(m)?0:m,m=parseInt(Object(c).novo,10),t.new_codigo=isNaN(m)?0:m,m=parseInt(Object(c).condicao,10),t.condicao=isNaN(m)?0:m,""!==(null===(s=Object(c).book)||void 0===s?void 0:s.trim())&&(t.book=Object(c).book),""!==(null===(h=Object(c).descricao)||void 0===h?void 0:h.trim())&&(t.descricao=Object(c).descricao),""!==(null===(_=Object(c).observacao)||void 0===_?void 0:_.trim())&&(t.observacao=Object(c).observacao),m=parseInt(Object(c).executor,10),t.id_usuario=isNaN(m)?0:m,m=parseInt(Object(c).id_principal,10),t.id_principal=isNaN(m)?0:m,""!==Object(c).origem.trim()&&(t.origem=Object(c).origem),t}catch(m){throw m}}i.d(p,{W:()=>a})},8117:(E,p,i)=>{i.d(p,{t:()=>a});class a{constructor(c,v){this.idx=0,this.fotos=[],this.idx=c,this.fotos=v}}},1606:(E,p,i)=>{i.d(p,{t:()=>a});class a{constructor(){this.sigla="",this.descricao=""}}},2607:(E,p,i)=>{i.d(p,{c:()=>h});var a=i(7716),t=i(8583),c=i(1769);function v(_,m){if(1&_&&(a.TgZ(0,"td"),a.TgZ(1,"div",4),a._UZ(2,"img",5),a.qZA(),a.qZA()),2&_){const g=a.oxw().$implicit;a.xp6(2),a.MGl("src","https://drive.google.com/thumbnail?id=",g.fotos[0].id_file,"&sz=w400",a.LSH)}}function l(_,m){if(1&_&&(a.TgZ(0,"td"),a.TgZ(1,"div",4),a._UZ(2,"img",5),a.qZA(),a.qZA()),2&_){const g=a.oxw().$implicit;a.xp6(2),a.MGl("src","https://drive.google.com/thumbnail?id=",g.fotos[1].id_file,"&sz=w400",a.LSH)}}function b(_,m){if(1&_&&(a.TgZ(0,"td"),a.TgZ(1,"div",4),a._UZ(2,"img",5),a.qZA(),a.qZA()),2&_){const g=a.oxw().$implicit;a.xp6(2),a.MGl("src","https://drive.google.com/thumbnail?id=",g.fotos[2].id_file,"&sz=w400",a.LSH)}}function s(_,m){if(1&_&&(a.TgZ(0,"tr"),a.YNc(1,v,3,1,"td",3),a.YNc(2,l,3,1,"td",3),a.YNc(3,b,3,1,"td",3),a.qZA()),2&_){const g=m.$implicit,T=a.oxw();a.xp6(1),a.Q6J("ngIf",T.itsOK(0,g)),a.xp6(1),a.Q6J("ngIf",T.itsOK(1,g)),a.xp6(1),a.Q6J("ngIf",T.itsOK(2,g))}}let h=(()=>{class _{constructor(){this.fotos=[]}ngOnInit(){}itsOK(g,T){return g<=T.fotos.length-1}}return _.\u0275fac=function(g){return new(g||_)},_.\u0275cmp=a.Xpm({type:_,selectors:[["app-browser-foto"]],inputs:{fotos:["FOTOS","fotos"]},decls:3,vars:1,consts:[[1,"Browse_Lanc"],[4,"ngFor","ngForOf"],[1,"material-devider"],[4,"ngIf"],[1,"alinha_esquerda"],[3,"src"]],template:function(g,T){1&g&&(a.TgZ(0,"table",0),a.YNc(1,s,4,3,"tr",1),a.qZA(),a._UZ(2,"mat-divider",2)),2&g&&(a.xp6(1),a.Q6J("ngForOf",T.fotos))},directives:[t.sg,c.d,t.O5],styles:[".material-devider[_ngcontent-%COMP%]{color:red;margin:5px}.minha-imagem[_ngcontent-%COMP%]{width:400px;height:400px}"]}),_})()},2818:(E,p,i)=>{i.d(p,{d:()=>xt});var a=i(3430),t=i(7716),c=i(8002),v=i(5435),l=i(4395),b=i(7519),s=i(3075),h=i(6407),_=i(4635),m=i(604),g=i(8786),T=i(1606),x=i(2979),R=i(2174),C=i(6809),B=i(5062),$=i(8495),K=i(5330),D=i(2238),w=i(7360),W=i(4838),j=i(8656),J=i(9617),I=i(2653),y=i(2992),N=i(1023),Z=i(3679),G=i(3317),q=i(454),Y=i(7466),H=i(5626),V=i(2704),Q=i(6081),k=i(7708),z=i(9219),X=i(789),tt=i(1095),ot=i(1436),et=i(6627),F=i(8583),it=i(7539),M=i(8295),at=i(9983),rt=i(8981),st=i(7441),nt=i(2458);function ct(n,u){if(1&n){const o=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){return t.CHM(o),t.oxw().onGetExcelToEmailOrDownLoad("e-mail")}),t.TgZ(1,"mat-icon"),t._uU(2,"email"),t.qZA(),t.qZA()}}function lt(n,u){if(1&n){const o=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){return t.CHM(o),t.oxw().onGetExcelToEmailOrDownLoad("download")}),t.TgZ(1,"mat-icon"),t._uU(2,"cloud_download"),t.qZA(),t.qZA()}}function _t(n,u){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const o=t.oxw(2);t.xp6(1),t.Oqu(o.getMensafield("dtinicial"))}}function mt(n,u){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const o=t.oxw(2);t.xp6(1),t.Oqu(o.getMensafield("dtfinal"))}}function pt(n,u){if(1&n&&(t.TgZ(0,"mat-option",38),t._uU(1),t.qZA()),2&n){const o=u.$implicit;t.Q6J("value",o.sigla),t.xp6(1),t.hij(" ",o.descricao," ")}}function ut(n,u){if(1&n&&(t.TgZ(0,"mat-option",38),t._uU(1),t.qZA()),2&n){const o=u.$implicit;t.Q6J("value",o.codigo),t.xp6(1),t.hij(" ",o.descricao," ")}}function dt(n,u){if(1&n&&(t.TgZ(0,"mat-option",38),t._uU(1),t.qZA()),2&n){const o=u.$implicit;t.Q6J("value",o.codigo),t.xp6(1),t.hij(" ",o.descricao," ")}}function ht(n,u){if(1&n&&(t.TgZ(0,"mat-option",38),t._uU(1),t.qZA()),2&n){const o=u.$implicit;t.Q6J("value",o.codigo),t.xp6(1),t.hij(" ",o.descricao," ")}}function gt(n,u){if(1&n&&(t.TgZ(0,"mat-option",38),t._uU(1),t.qZA()),2&n){const o=u.$implicit;t.Q6J("value",o.id),t.xp6(1),t.hij(" ",o.descricao," ")}}function vt(n,u){if(1&n&&(t.TgZ(0,"mat-option",38),t._uU(1),t.qZA()),2&n){const o=u.$implicit;t.Q6J("value",o.sigla),t.xp6(1),t.hij(" ",o.descricao," ")}}function ft(n,u){if(1&n&&(t.TgZ(0,"mat-option",38),t._uU(1),t.qZA()),2&n){const o=u.$implicit;t.Q6J("value",o.id_usuario),t.xp6(1),t.hij(" ",o.razao," ")}}function bt(n,u){if(1&n){const o=t.EpF();t.TgZ(0,"button",39),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).clearValue("codigo")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA(),t.qZA()}}function Ct(n,u){if(1&n){const o=t.EpF();t.TgZ(0,"button",39),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).clearValue("novo")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA(),t.qZA()}}function Pt(n,u){if(1&n&&(t.TgZ(0,"mat-option",38),t._uU(1),t.qZA()),2&n){const o=u.$implicit;t.Q6J("value",o.idx),t.xp6(1),t.hij(" ",o.descricao," ")}}function Et(n,u){if(1&n&&(t.TgZ(0,"mat-option",38),t._uU(1),t.qZA()),2&n){const o=u.$implicit;t.Q6J("value",o.sigla),t.xp6(1),t.hij(" ",o.descricao," ")}}function Tt(n,u){if(1&n&&(t.TgZ(0,"mat-option",38),t._uU(1),t.qZA()),2&n){const o=u.$implicit;t.Q6J("value",o.codigo),t.xp6(1),t.hij(" ",o.descricao," ")}}function Ot(n,u){if(1&n){const o=t.EpF();t.TgZ(0,"button",39),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).clearValue("descricao")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA(),t.qZA()}}function Zt(n,u){if(1&n){const o=t.EpF();t.TgZ(0,"button",39),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).clearValue("observacao")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA(),t.qZA()}}function At(n,u){if(1&n){const o=t.EpF();t.TgZ(0,"form",9),t.TgZ(1,"div",10),t.TgZ(2,"mat-checkbox",11),t.NdJ("change",function(r){return t.CHM(o),t.oxw().onHoje(r)}),t._uU(3,"Hoje"),t.qZA(),t.TgZ(4,"mat-checkbox",12),t.NdJ("change",function(r){return t.CHM(o),t.oxw().onLimpar(r)}),t._uU(5,"Limpar As Datas"),t.qZA(),t.qZA(),t.TgZ(6,"div",13),t.TgZ(7,"mat-form-field",14),t.TgZ(8,"mat-label"),t._uU(9,"Data Inicial"),t.qZA(),t._UZ(10,"input",15),t.YNc(11,_t,2,1,"mat-error",16),t.qZA(),t.TgZ(12,"mat-form-field",14),t.TgZ(13,"mat-label"),t._uU(14,"Data Final"),t.qZA(),t._UZ(15,"input",17),t.YNc(16,mt,2,1,"mat-error",16),t.qZA(),t.TgZ(17,"mat-form-field",18),t.TgZ(18,"mat-label"),t._uU(19,"Ordernado Por"),t.qZA(),t.TgZ(20,"mat-select",19),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(21,pt,2,2,"mat-option",20),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"div",21),t.TgZ(23,"mat-form-field",22),t.TgZ(24,"mat-label"),t._uU(25,"Centro Custo"),t.qZA(),t.TgZ(26,"mat-select",23),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(27,ut,2,2,"mat-option",20),t.qZA(),t.qZA(),t.TgZ(28,"mat-form-field",22),t.TgZ(29,"mat-label"),t._uU(30,"Novo Centro Custo"),t.qZA(),t.TgZ(31,"mat-select",24),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(32,dt,2,2,"mat-option",20),t.qZA(),t.qZA(),t.qZA(),t.TgZ(33,"div",21),t.TgZ(34,"mat-form-field",22),t.TgZ(35,"mat-label"),t._uU(36,"Grupos"),t.qZA(),t.TgZ(37,"mat-select",25),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(38,ht,2,2,"mat-option",20),t.qZA(),t.qZA(),t.TgZ(39,"mat-form-field",22),t.TgZ(40,"mat-label"),t._uU(41,"Situa\xe7\xf5es"),t.qZA(),t.TgZ(42,"mat-select",26),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(43,gt,2,2,"mat-option",20),t.qZA(),t.qZA(),t.qZA(),t.TgZ(44,"div",21),t.TgZ(45,"mat-form-field",22),t.TgZ(46,"mat-label"),t._uU(47,"Origem"),t.qZA(),t.TgZ(48,"mat-select",27),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(49,vt,2,2,"mat-option",20),t.qZA(),t.qZA(),t.TgZ(50,"mat-form-field",22),t.TgZ(51,"mat-label"),t._uU(52,"Executores"),t.qZA(),t.TgZ(53,"mat-select",28),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(54,ft,2,2,"mat-option",20),t.qZA(),t.qZA(),t.qZA(),t.TgZ(55,"div",13),t.TgZ(56,"mat-form-field",14),t.TgZ(57,"mat-label"),t._uU(58,"C\xf3digo"),t.qZA(),t._UZ(59,"input",29),t.YNc(60,bt,3,0,"button",30),t.qZA(),t.TgZ(61,"mat-form-field",14),t.TgZ(62,"mat-label"),t._uU(63,"Novo"),t.qZA(),t._UZ(64,"input",31),t.YNc(65,Ct,3,0,"button",30),t.qZA(),t.TgZ(66,"mat-form-field",22),t.TgZ(67,"mat-label"),t._uU(68,"Condi\xe7\xe3o"),t.qZA(),t.TgZ(69,"mat-select",32),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(70,Pt,2,2,"mat-option",20),t.qZA(),t.qZA(),t.TgZ(71,"mat-form-field",22),t.TgZ(72,"mat-label"),t._uU(73,"Book"),t.qZA(),t.TgZ(74,"mat-select",33),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(75,Et,2,2,"mat-option",20),t.qZA(),t.qZA(),t.qZA(),t.TgZ(76,"div",34),t.TgZ(77,"mat-form-field",22),t.TgZ(78,"mat-label"),t._uU(79,"Principal"),t.qZA(),t.TgZ(80,"mat-select",35),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(81,Tt,2,2,"mat-option",20),t.qZA(),t.qZA(),t.qZA(),t.TgZ(82,"div",34),t.TgZ(83,"mat-form-field",14),t.TgZ(84,"mat-label"),t._uU(85,"Descri\xe7\xe3o"),t.qZA(),t._UZ(86,"input",36),t.YNc(87,Ot,3,0,"button",30),t.qZA(),t.qZA(),t.TgZ(88,"div",34),t.TgZ(89,"mat-form-field",14),t.TgZ(90,"mat-label"),t._uU(91,"Observa\xe7\xe3o"),t.qZA(),t._UZ(92,"input",37),t.YNc(93,Zt,3,0,"button",30),t.qZA(),t.qZA(),t.qZA()}if(2&n){const o=t.oxw();t.Q6J("formGroup",o.parametros),t.xp6(11),t.Q6J("ngIf",o.NoValidtouchedOrDirty("dtinicial")),t.xp6(5),t.Q6J("ngIf",o.NoValidtouchedOrDirty("dtfinal")),t.xp6(5),t.Q6J("ngForOf",o.orderby),t.xp6(6),t.Q6J("ngForOf",o.ccs),t.xp6(5),t.Q6J("ngForOf",o.ccs_alterados),t.xp6(6),t.Q6J("ngForOf",o.grupos),t.xp6(5),t.Q6J("ngForOf",o.situacoesInventarioPar),t.xp6(6),t.Q6J("ngForOf",o.Origens),t.xp6(5),t.Q6J("ngForOf",o.executores),t.xp6(6),t.Q6J("ngIf",o.hasValue("codigo")),t.xp6(5),t.Q6J("ngIf",o.hasValue("novo")),t.xp6(5),t.Q6J("ngForOf",o.condicoes),t.xp6(5),t.Q6J("ngForOf",o.respostas),t.xp6(6),t.Q6J("ngForOf",o.principais),t.xp6(6),t.Q6J("ngIf",o.hasValue("descricao")),t.xp6(6),t.Q6J("ngIf",o.hasValue("observacao"))}}let xt=(()=>{class n{constructor(o,e,r,f,P,O,A,d,Dt,Mt,It,Ut){this.formBuilder=o,this.globalService=e,this.localStorageService=r,this.grupoService=f,this.parametrosService=P,this.centrocustoService=O,this.lancamentoService=A,this.principalService=d,this.emailService=Dt,this.appSnackBar=Mt,this.EmailDialog=It,this.DownLoadDialog=Ut,this.paramName="",this.retorno=!1,this.email=!1,this.download=!1,this.controle_paginas=new a.e(50,0),this.hide=!0,this.change=new t.vpe,this.changeHide=new t.vpe,this.grupos=[],this.ccs=[],this.ccs_alterados=[],this.condicoes=[],this.respostas=[],this.situacoesInventario=[],this.situacoesInventarioPar=[],this.Origens=[],this.usuarios=[],this.lancamento=new h.E,this.principais=[],this.showFiltro=!0,this.executores=[],this.hideAcao="Ocultar",this.orderby=[{sigla:"001",descricao:"Ativo-Antigo"},{sigla:"002",descricao:"Ativo-Novo"},{sigla:"003",descricao:"CC-Antigo"},{sigla:"004",descricao:"CC-Novo"},{sigla:"005",descricao:"Grupo"},{sigla:"006",descricao:"Descri\xe7\xe3o"},{sigla:"007",descricao:"Observa\xe7\xe3o"},{sigla:"008",descricao:"Data Lan\xe7amento"}],this.parametro=new I.M,this.enable_filter=!0,this.parametros=o.group({hoje:[{value:""}],cleardate:[{value:""}],dtinicial:[{value:""}],dtfinal:[{value:""}],orderby:[{value:""}],ccs:[{value:""}],cc_novo:[{value:""}],grupos:[{value:""}],situacoes:[{value:""}],origem:[{value:""}],executor:[{value:""}],codigo:[{value:""}],novo:[{value:""}],id_principal:[{value:""}],condicao:[{value:""}],book:[{value:""}],descricao:[{value:""}],observacao:[{value:""}]}),this.situacoesInventario=this.globalService.getSituacoesInventario(),this.situacoesInventarioPar=this.globalService.getSituacoesInventarioPar(),this.condicoes=this.globalService.getCondicoes();const U=new T.t;U.sigla="",U.descricao="Todos";const S=new T.t;S.sigla="S",S.descricao="SIM";const L=new T.t;L.sigla="N",L.descricao="N\xc3O",this.respostas.push(U),this.respostas.push(S),this.respostas.push(L),this.Origens.push(new s.x("","Todas")),this.Origens=[...this.Origens,...this.globalService.getOrigens()],this.setHide(),this.setValuesNoParam(),this.getExecutores(),this.getCentroCustos()}ngOnInit(){var o,e,r,f,P,O;this.localStorageService.getParametroModel(this.paramName),null===(o=this.parametros.get("dtinicial"))||void 0===o||o.valueChanges.pipe((0,c.U)(d=>d.trim()),(0,v.h)(d=>d.length>=10),(0,l.b)(350),(0,b.x)()).subscribe(d=>this.onChangeParametros()),null===(e=this.parametros.get("dtfinal"))||void 0===e||e.valueChanges.pipe((0,c.U)(d=>d.trim()),(0,v.h)(d=>d.length>=10),(0,l.b)(350),(0,b.x)()).subscribe(d=>this.onChangeParametros()),null===(r=this.parametros.get("codigo"))||void 0===r||r.valueChanges.pipe((0,c.U)(d=>d.trim()),(0,v.h)(d=>d.length>0),(0,l.b)(350),(0,b.x)()).subscribe(d=>this.onChangeParametros()),null===(f=this.parametros.get("novo"))||void 0===f||f.valueChanges.pipe((0,c.U)(d=>d.trim()),(0,v.h)(d=>d.length>0),(0,l.b)(350),(0,b.x)()).subscribe(d=>this.onChangeParametros()),null===(P=this.parametros.get("descricao"))||void 0===P||P.valueChanges.pipe((0,c.U)(d=>d.trim().toUpperCase()),(0,v.h)(d=>d.length>0),(0,l.b)(350),(0,b.x)()).subscribe(d=>{this.onChangeParametros()}),null===(O=this.parametros.get("observacao"))||void 0===O||O.valueChanges.pipe((0,c.U)(d=>d.trim().toUpperCase()),(0,v.h)(d=>d.length>0),(0,l.b)(350),(0,b.x)()).subscribe(d=>{this.onChangeParametros()})}ngOnDestroy(){var o,e,r,f,P,O,A;null===(o=this.inscricaoGetGrupo)||void 0===o||o.unsubscribe(),null===(e=this.inscricaoGetCc)||void 0===e||e.unsubscribe(),null===(r=this.inscricaoParametro)||void 0===r||r.unsubscribe(),null===(f=this.inscricaoExecutores)||void 0===f||f.unsubscribe(),null===(P=this.inscricaoExcel)||void 0===P||P.unsubscribe(),null===(O=this.inscricaoEmail)||void 0===O||O.unsubscribe(),null===(A=this.inscricaoPrincipais)||void 0===A||A.unsubscribe()}getExecutores(){let o=new $.G;o.id_empresa=this.globalService.getEmpresa().id,o.id_filial=this.globalService.getLocal().id,o.id_inventario=this.globalService.getInventario().codigo,this.globalService.setSpin(!0),this.inscricaoExecutores=this.lancamentoService.resumolancamentos(o).subscribe(e=>{this.globalService.setSpin(!1);const r=new _.S;r.id_usuario=0,r.razao="Todos",this.executores.push(r),this.executores=[...this.executores,...e]},e=>{this.globalService.setSpin(!1);const r=new _.S;r.id_usuario=0,r.razao="Todos",this.executores.push(r)})}getCentroCustos(){let o=new x.D;o.id_empresa=this.globalService.getIdEmpresa(),o.id_filial=this.globalService.getLocal().id,o.orderby="Descri\xe7\xe3o",this.globalService.setSpin(!0),this.inscricaoGetCc=this.centrocustoService.getCentroscustosParametro_01(o).subscribe(e=>{this.globalService.setSpin(!1);const r=new g.P;r.codigo="",r.descricao="Todos",this.ccs=[],this.ccs_alterados=[],this.ccs.push(r);const f=new g.P;f.codigo="",f.descricao="Todos N\xe3o Alterados",this.ccs_alterados.push(f),e.forEach(P=>{var O=P.descricao.indexOf("-");O>=0&&(P.descricao=P.descricao.trim().substring(O+1)+" -> "+P.descricao.trim())}),e.sort((P,O)=>P.descricao<O.descricao?-1:P.descricao>O.descricao?1:0),this.ccs=[...this.ccs,...e],this.ccs_alterados=[...this.ccs_alterados,...e],this.getGrupos()},e=>{this.globalService.setSpin(!1),this.ccs=[],this.ccs_alterados=[],this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Grupos ${(0,C.bZ)(e)}`,"OK")})}getGrupos(){let o=new R.t;o.id_empresa=this.globalService.getIdEmpresa(),o.id_filial=this.globalService.getLocal().id,o.orderby="Grupo",this.globalService.setSpin(!0),this.inscricaoGetGrupo=this.grupoService.getGruposParametro_01(o).subscribe(e=>{this.globalService.setSpin(!1);const r=new m.b;r.codigo=0,r.descricao="Todos",this.grupos=[],this.grupos.push(r),this.grupos=[...this.grupos,...e],this.getPrincipais()},e=>{this.globalService.setSpin(!1),this.grupos=[],this.setValues(),this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Grupos ${(0,C.bZ)(e)}`,"OK")})}getPrincipais(){let o=new y.h;o.id_empresa=this.globalService.getIdEmpresa(),o.id_filial=this.globalService.getLocal().id,o.orderby="Descri\xe7\xe3o",this.globalService.setSpin(!0),this.inscricaoPrincipais=this.principalService.getPrincipaisParametro_01(o).subscribe(e=>{this.globalService.setSpin(!1);const r=new N.H;r.codigo=0,r.descricao="Todos",this.principais=[],this.principais.push(r),this.principais=[...this.principais,...e],this.loadParametros()},e=>{this.globalService.setSpin(!1);const r=new N.H;r.codigo=0,r.descricao="Todos",this.principais=[],this.principais.push(r),this.loadParametros()})}onGetExcelToEmailOrDownLoad(o){"E-MAIL"==o.toUpperCase()?this.openEmailDialog():this.openDownLoadDialog()}sendMail(o){let e=new K.D;e.id_empresa=this.globalService.getIdEmpresa(),e.id_filial=this.globalService.getLocal().id,e.id_inventario=this.globalService.getInventario().codigo,e.assunto="Relat\xf3rio Dos Ativos Do Invent\xe1rio",e.destinatario=this.globalService.usuario.email,e.mensagem="Mensagem enviada automaticamento por solicita\xe7\xe3o do usu\xe1rio. Favor Verificar Anexo.",e.fileName=o,this.globalService.setSpin(!0),this.inscricaoEmail=this.emailService.sendEmailV2(e).subscribe(r=>{this.globalService.setSpin(!1),this.appSnackBar.openSuccessSnackBar("E-Mail Enviado Com Sucesso!","OK")},r=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Produtos De Invent\xe1rio ${(0,C.bZ)(r)}`,"OK")})}setValues(){var o,e,r;this.enable_filter=!1,this.parametros.setValue({hoje:!1,cleardate:!1,dtinicial:(0,C.SL)(this.parametro.getParametro(),"dtinicial"),dtfinal:(0,C.SL)(this.parametro.getParametro(),"dtfinal"),orderby:(0,C.SL)(this.parametro.getParametro(),"orderby"),ccs:(0,C.SL)(this.parametro.getParametro(),"cc"),cc_novo:(0,C.SL)(this.parametro.getParametro(),"cc_novo"),grupos:(0,C.P0)(this.parametro.getParametro(),"grupo"),situacoes:(0,C.SL)(this.parametro.getParametro(),"situacao"),codigo:null===(o=(0,C.P0)(this.parametro.getParametro(),"codigo"))||void 0===o?void 0:o.toString(),id_principal:null===(e=(0,C.P0)(this.parametro.getParametro(),"id_principal"))||void 0===e?void 0:e.toString(),novo:null===(r=(0,C.P0)(this.parametro.getParametro(),"novo"))||void 0===r?void 0:r.toString(),origem:(0,C.SL)(this.parametro.getParametro(),"origem"),executor:(0,C.P0)(this.parametro.getParametro(),"executor"),condicao:(0,C.P0)(this.parametro.getParametro(),"condicao"),book:(0,C.SL)(this.parametro.getParametro(),"book"),descricao:(0,C.SL)(this.parametro.getParametro(),"descricao"),observacao:(0,C.SL)(this.parametro.getParametro(),"observacao")}),this.enable_filter=!0}setValuesNoParam(){this.enable_filter=!1,this.parametros.setValue({hoje:!1,cleardate:!1,dtinicial:"",dtfinal:"",orderby:"001",ccs:"",cc_novo:"",grupos:0,situacoes:-1,codigo:"",novo:"",id_principal:0,origem:"",executor:0,condicao:"0",book:"",descricao:"",observacao:""}),this.enable_filter=!0}setHide(){this.hide=!this.hide,this.hideAcao=this.hide?"Mostrar":"Ocultar"}loadParametros(){this.parametro=new I.M,this.parametro.id_empresa=this.globalService.getIdEmpresa(),this.parametro.modulo=this.paramName,this.parametro.assinatura="V1.00 18/11/2024",this.parametro.id_usuario=this.globalService.usuario.id,this.parametro.parametro='\n       {\n         "dtinicial":"",\n         "dtfinal":"",\n         "cc": "",\n         "cc_novo":"",\n         "grupo":0,\n         "situacao":-1,\n         "codigo":0,\n         "novo":0,\n         "origem":"",\n         "executor":0,\n         "condicao":0,\n         "book":"",\n         "descricao": "",\n         "observacao": "",\n         "dtinicial":"",\n         "dtfinal":"",\n         "id_principal":0,\n         "orderby":"001",\n         "page": 1,\n         "new": false,\n         "id_retorno":0\n       }';const o=this.localStorageService.getParametroModel(this.paramName);null!==o?(this.parametro.load(o),this.setValues()):this.getParametro()}getParametro(){this.globalService.setSpin(!0);let o=new B.E;o.id_empresa=this.parametro.id_empresa,o.modulo=this.parametro.modulo,o.assinatura=this.parametro.assinatura,o.id_usuario=this.parametro.id_usuario,o.orderby="Usu\xe1rio",console.log("pesquisa",o),this.inscricaoParametro=this.parametrosService.getParametrosParametro01(o).subscribe(e=>{this.globalService.setSpin(!1),this.parametro=new I.M,this.parametro.id_empresa=e[0].id_empresa,this.parametro.modulo=e[0].modulo,this.parametro.id_usuario=e[0].id_usuario,this.parametro.assinatura=e[0].assinatura,this.parametro.parametro=e[0].parametro,this.parametro.user_insert=e[0].user_insert,this.parametro.user_update=e[0].user_update,this.setValues(),this.onChangeParametros(!1)},e=>{this.globalService.setSpin(!1),this.setValuesNoParam(),this.onChangeParametros()})}updateParametros(){this.globalService.setSpin(!0),this.parametro.user_insert=this.globalService.usuario.id,this.parametro.user_update=this.globalService.usuario.id,this.refreshParametro(),this.inscricaoParametro=this.parametrosService.ParametroAtualiza(this.parametro).subscribe(o=>{this.globalService.setSpin(!1),this.appSnackBar.openSuccessSnackBar("Par\xe2metros Atualizados","OK")},o=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Grava\xe7\xe3o Dos Parametros ${(0,C.bZ)(o)}`,"OK")})}refreshParametro(o=!0){let e=this.parametro.getParametro();Object(e).cc=this.parametros.value.ccs,Object(e).cc_novo=this.parametros.value.cc_novo,Object(e).grupo=this.parametros.value.grupos,Object(e).situacao=this.parametros.value.situacoes,Object(e).codigo=this.parametros.value.codigo,Object(e).novo=this.parametros.value.novo,Object(e).origem=this.parametros.value.origem,Object(e).executor=this.parametros.value.executor,Object(e).condicao=this.parametros.value.condicao,Object(e).book=this.parametros.value.book,Object(e).descricao=this.parametros.value.descricao.toUpperCase(),Object(e).observacao=this.parametros.value.observacao.toUpperCase(),Object(e).dtinicial=this.parametros.value.dtinicial,Object(e).dtfinal=this.parametros.value.dtfinal,Object(e).id_principal=this.parametros.value.id_principal,Object(e).orderby=this.parametros.value.orderby,this.parametro.parametro=JSON.stringify(e)}onChangeParametros(o=!0){this.refreshParametro(o),this.enable_filter&&this.change.emit(this.parametro)}onSaveConfig(){this.updateParametros()}onHide(){this.setHide(),this.changeHide.emit(this.hide)}hasValue(o){var e;return""!=(null===(e=this.parametros.get(o))||void 0===e?void 0:e.value)}clearValue(o){"descricao"==o&&this.parametros.patchValue({descricao:""}),"observacao"==o&&this.parametros.patchValue({observacao:""}),"codigo"==o&&this.parametros.patchValue({codigo:""}),"novo"==o&&this.parametros.patchValue({novo:""}),"id_principal"==o&&this.parametros.patchValue({id_principal:""}),this.onChangeParametros()}ChangeValue(o,e){"descricao"==o&&this.parametros.patchValue({descricao:e}),"observacao"==o&&this.parametros.patchValue({observacao:e})}openEmailDialog(){const o=new w.o;o.titulo="ENVIAR CONSULTA VIA E-MAIL",o.destinatario=this.globalService.usuario.email,o.escopo="T",o.labelBottomNao="Cancelar",o.labelBottonSim="Processar",o.id_empresa=this.globalService.empresa.id,o.id_filial=this.globalService.local.id,o.id_inventario=this.globalService.inventario.codigo,o.pagina=this.controle_paginas.getPaginalAtual(),o.parametro=this.parametro;const e=new D.vA;e.disableClose=!0,e.id="consulta-email",e.width="800px",e.data=o,this.EmailDialog.open(W.G,e).beforeClosed().subscribe(f=>{})}openDownLoadDialog(){console.log("Pagina: ",this.controle_paginas.getPaginalAtual());const o=new j.d;o.titulo="DOWNLOAD DE CONSULTA",o.escopo="T",o.labelBottomNao="Cancelar",o.labelBottonSim="Processar",o.id_empresa=this.globalService.empresa.id,o.id_filial=this.globalService.local.id,o.id_inventario=this.globalService.inventario.codigo,o.pagina=this.controle_paginas.getPaginalAtual(),o.parametro=this.parametro;const e=new D.vA;e.disableClose=!0,e.id="consulta-download",e.width="800px",e.data=o,this.DownLoadDialog.open(J.G,e).beforeClosed().subscribe(f=>{})}NoValidtouchedOrDirty(o){var e,r,f;return!((null===(e=this.parametros.get(o))||void 0===e?void 0:e.valid)||!(null===(r=this.parametros.get(o))||void 0===r?void 0:r.touched)&&!(null===(f=this.parametros.get(o))||void 0===f?void 0:f.dirty))}getMensafield(o){var e,r;return null===(r=null===(e=this.parametros.get(o))||void 0===e?void 0:e.errors)||void 0===r?void 0:r.message}onHoje(o){if(o.checked){let e=new Date(Date.now()).toLocaleString().split(",")[0];this.parametros.patchValue({dtinicial:e,dtfinal:e,hoje:!1}),this.onChangeParametros()}}onLimpar(o){o.checked&&this.parametros.patchValue({dtinicial:"",dtfinal:"",cleardate:!1}),this.onChangeParametros()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(Z.qu),t.Y36(G.U),t.Y36(q.n),t.Y36(Y.Z),t.Y36(H.u),t.Y36(V.T),t.Y36(Q.l),t.Y36(k.x),t.Y36(z.j),t.Y36(X.W),t.Y36(D.uw),t.Y36(D.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-filtro-imoinventario"]],inputs:{paramName:["PARAMNAME","paramName"],retorno:["RETORNO","retorno"],email:["EMAIL","email"],download:["DOWNLOAD","download"],controle_paginas:["CONTROLE_PAGINAS","controle_paginas"],hide:["HIDE","hide"]},outputs:{change:"changeParametro",changeHide:"changeHide"},decls:12,vars:3,consts:[[1,"div-barra"],[1,"example-spacer"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Salvar Par\xe2metros","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Enviar Consulta Por E-Mail","matTooltipPosition","above",3,"click",4,"ngIf"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Baixar A Consulta","matTooltipPosition","above",3,"click",4,"ngIf"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Mostrar/Esconder","matTooltipPosition","above",3,"click"],["autocomplete","off",3,"formGroup",4,"ngIf"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Enviar Consulta Por E-Mail","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Baixar A Consulta","matTooltipPosition","above",3,"click"],["autocomplete","off",3,"formGroup"],[1,"check"],["formControlName","hoje",1,"check-margem",3,"change"],["formControlName","cleardate",1,"check-margem",3,"change"],[1,"col-med-4"],["appearance","outline",1,"col-max"],["matInput","","formControlName","dtinicial","mask","00/00/0000","placeholder","dd/mm/aaaa"],[4,"ngIf"],["matInput","","formControlName","dtfinal","mask","00/00/0000","placeholder","dd/mm/aaaa"],["field","","appearance","outline",1,"column-span-2"],["formControlName","orderby",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-med-2"],["field","","appearance","outline",1,"col-max"],["formControlName","ccs",3,"selectionChange"],["formControlName","cc_novo",3,"selectionChange"],["formControlName","grupos",3,"selectionChange"],["formControlName","situacoes",3,"selectionChange"],["formControlName","origem",3,"selectionChange"],["formControlName","executor",3,"selectionChange"],["matInput","","formControlName","codigo"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["matInput","","formControlName","novo"],["formControlName","condicao",3,"selectionChange"],["formControlName","book",3,"selectionChange"],[1,"col-med-1"],["formControlName","id_principal",3,"selectionChange"],["matInput","","formControlName","descricao",1,"uppercase"],["matInput","","formControlName","observacao",1,"uppercase"],[3,"value"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"span",1),t._uU(2,"Filtro Da Pesquisa"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return e.onSaveConfig()}),t.TgZ(4,"mat-icon"),t._uU(5,"brightness_high"),t.qZA(),t.qZA(),t.YNc(6,ct,3,0,"button",3),t.YNc(7,lt,3,0,"button",4),t.TgZ(8,"button",5),t.NdJ("click",function(){return e.onHide()}),t.TgZ(9,"mat-icon"),t._uU(10,"remove_red_eye"),t.qZA(),t.qZA(),t.qZA(),t.YNc(11,At,94,17,"form",6)),2&o&&(t.xp6(6),t.Q6J("ngIf",e.email),t.xp6(1),t.Q6J("ngIf",e.download),t.xp6(4),t.Q6J("ngIf",!e.hide))},directives:[tt.lW,ot.gM,et.Hw,F.O5,Z._Y,Z.JL,Z.sg,it.oG,Z.JJ,Z.u,M.KE,M.hX,at.Nt,Z.Fj,rt.hx,st.gD,F.sg,M.TO,nt.ey,M.R9],styles:[".ckeck[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;height:60px}.check-margem[_ngcontent-%COMP%]{margin:0 10px}"]}),n})()}}]);