"use strict";(self.webpackChunkinventario=self.webpackChunkinventario||[]).push([[644],{8786:(O,d,a)=>{a.d(d,{P:()=>i});class i{constructor(){this.id_empresa=0,this.id_filial=0,this.codigo="",this.descricao="",this.user_insert=0,this.user_update=0}}},604:(O,d,a)=>{a.d(d,{b:()=>i});class i{constructor(){this.id_empresa=0,this.id_filial=0,this.codigo=0,this.descricao="",this.user_insert=0,this.user_update=0}}},6407:(O,d,a)=>{a.d(d,{E:()=>t});var i=a(6809);class t{constructor(){this.id_empresa=0,this.id_filial=0,this.id_inventario=0,this.id_imobilizado=0,this.id_usuario=0,this.id_lanca=0,this.obs="",this.dtlanca=(0,i.zp)(new Date),this.estado=0,this.new_codigo=0,this.new_cc="",this.condicao=9,this.book="N",this.user_insert=0,this.user_update=0,this.imo_inv_status=0,this.inv_descricao="",this.imo_cod_cc="",this.imo_cod_grupo=0,this.imo_descricao="",this.usu_razao=""}}},2979:(O,d,a)=>{a.d(d,{D:()=>i});class i{constructor(){this.id_empresa=0,this.id_filial=0,this.codigo="",this.descricao="",this.pagina=0,this.tamPagina=50,this.contador="N",this.orderby="",this.sharp=!1}}},6924:(O,d,a)=>{a.d(d,{v:()=>i});class i{constructor(){this.id_empresa=0,this.id_local=0,this.id_inventario=0,this.id_imobilizado=0,this.id_pasta="",this.id_file="",this.file_name="",this.imobilizados=[],this.destaque="N",this.pagina=0,this.tamPagina=50,this.contador="N",this.orderby="",this.sharp=!1}}},2174:(O,d,a)=>{a.d(d,{t:()=>i});class i{constructor(){this.id_empresa=0,this.id_filial=0,this.codigo=0,this.descricao="",this.pagina=0,this.tamPagina=50,this.contador="N",this.orderby="",this.sharp=!1}}},2704:(O,d,a)=>{a.d(d,{T:()=>v});var i=a(2340),t=a(7716),c=a(1841);let v=(()=>{class m{constructor(n){this.http=n,this.apiURL=i.N.apiURL}getCentroscustos(){return this.http.get(`${this.apiURL}Centroscustos`)}getCentroscustosParametro_01(n){return this.http.post(`${this.apiURL}centroscustos`,n)}getCentrocusto(n,f,l){return this.http.get(`${this.apiURL}centrocusto/${n}/${f}/${l}`)}centrocustoInsert(n){return this.http.post(`${this.apiURL}centrocusto`,n)}centrocustoUpdate(n){return this.http.put(`${this.apiURL}centrocusto`,n)}centrocustoDelete(n,f,l){return this.http.delete(`${this.apiURL}centrocusto/${n}/${f}/${l}`)}}return m.\u0275fac=function(n){return new(n||m)(t.LFG(c.eN))},m.\u0275prov=t.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},7535:(O,d,a)=>{a.d(d,{X:()=>v});var i=a(2340),t=a(7716),c=a(1841);let v=(()=>{class m{constructor(n){this.http=n,this.apiURL=i.N.apiURL}getFotos(){return this.http.get(`${this.apiURL}Fotos`)}getFotosParametro_01(n){return this.http.post(`${this.apiURL}fotos`,n)}getFoto(n,f,l,_,h,P,A){return this.http.get(`${this.apiURL}foto/${n}/${f}/${l}/${_}/${h}/${P}/${A}`)}fotoInsert(n){return this.http.post(`${this.apiURL}foto`,n)}fotoUpdate(n){return this.http.put(`${this.apiURL}foto`,n)}fotoDelete(n,f,l,_,h,P,A){return this.http.delete(`${this.apiURL}foto/${n}/${f}/${l}/${_}/${h}/${P}/${A}`)}}return m.\u0275fac=function(n){return new(n||m)(t.LFG(c.eN))},m.\u0275prov=t.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},7466:(O,d,a)=>{a.d(d,{Z:()=>v});var i=a(2340),t=a(7716),c=a(1841);let v=(()=>{class m{constructor(n){this.http=n,this.apiURL=i.N.apiURL}getGrupos(){return this.http.get(`${this.apiURL}Grupos`)}getGruposParametro_01(n){return this.http.post(`${this.apiURL}grupos`,n)}getGrupo(n,f,l){return this.http.get(`${this.apiURL}grupo/${n}/${f}/${l}`)}grupoInsert(n){return this.http.post(`${this.apiURL}grupo`,n)}grupoUpdate(n){return this.http.put(`${this.apiURL}grupo`,n)}grupoDelete(n,f,l){return this.http.delete(`${this.apiURL}grupo/${n}/${f}/${l}`)}}return m.\u0275fac=function(n){return new(n||m)(t.LFG(c.eN))},m.\u0275prov=t.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},9631:(O,d,a)=>{function i(t,c){var v,m,C,n,f,l;try{let _=0;""!==(null===(v=Object(c).dtinicial)||void 0===v?void 0:v.trim())&&(t.dtinicial=Object(c).dtinicial),""!==(null===(m=Object(c).dtfinal)||void 0===m?void 0:m.trim())&&(t.dtfinal=Object(c).dtfinal),""!==(null===(C=Object(c).orderby)||void 0===C?void 0:C.trim())&&(t.orderby=Object(c).orderby),""!==Object(c).cc&&(t.id_cc=Object(c).cc),""!==Object(c).cc_novo&&(t.new_cc=Object(c).cc_novo),_=parseInt(Object(c).grupo,10),t.id_grupo=isNaN(_)?0:_,_=parseInt(Object(c).situacao,10),t.status=isNaN(_)?0:_,_=parseInt(Object(c).codigo,10),t.id_imobilizado=isNaN(_)?0:_,_=parseInt(Object(c).novo,10),t.new_codigo=isNaN(_)?0:_,_=parseInt(Object(c).condicao,10),t.condicao=isNaN(_)?0:_,""!==(null===(n=Object(c).book)||void 0===n?void 0:n.trim())&&(t.book=Object(c).book),""!==(null===(f=Object(c).descricao)||void 0===f?void 0:f.trim())&&(t.descricao=Object(c).descricao),""!==(null===(l=Object(c).observacao)||void 0===l?void 0:l.trim())&&(t.observacao=Object(c).observacao),_=parseInt(Object(c).executor,10),t.id_usuario=isNaN(_)?0:_,""!==Object(c).origem.trim()&&(t.origem=Object(c).origem)}catch(_){alert(_)}return t}a.d(d,{W:()=>i})},8117:(O,d,a)=>{a.d(d,{t:()=>i});class i{constructor(c,v){this.idx=0,this.fotos=[],this.idx=c,this.fotos=v}}},1606:(O,d,a)=>{a.d(d,{t:()=>i});class i{constructor(){this.sigla="",this.descricao=""}}},2607:(O,d,a)=>{a.d(d,{c:()=>f});var i=a(7716),t=a(8583),c=a(1769);function v(l,_){if(1&l&&(i.TgZ(0,"td"),i.TgZ(1,"div",4),i._UZ(2,"img",5),i.qZA(),i.qZA()),2&l){const h=i.oxw().$implicit;i.xp6(2),i.MGl("src","https://drive.google.com/thumbnail?id=",h.fotos[0].id_file,"&sz=w400",i.LSH)}}function m(l,_){if(1&l&&(i.TgZ(0,"td"),i.TgZ(1,"div",4),i._UZ(2,"img",5),i.qZA(),i.qZA()),2&l){const h=i.oxw().$implicit;i.xp6(2),i.MGl("src","https://drive.google.com/thumbnail?id=",h.fotos[1].id_file,"&sz=w400",i.LSH)}}function C(l,_){if(1&l&&(i.TgZ(0,"td"),i.TgZ(1,"div",4),i._UZ(2,"img",5),i.qZA(),i.qZA()),2&l){const h=i.oxw().$implicit;i.xp6(2),i.MGl("src","https://drive.google.com/thumbnail?id=",h.fotos[2].id_file,"&sz=w400",i.LSH)}}function n(l,_){if(1&l&&(i.TgZ(0,"tr"),i.YNc(1,v,3,1,"td",3),i.YNc(2,m,3,1,"td",3),i.YNc(3,C,3,1,"td",3),i.qZA()),2&l){const h=_.$implicit,P=i.oxw();i.xp6(1),i.Q6J("ngIf",P.itsOK(0,h)),i.xp6(1),i.Q6J("ngIf",P.itsOK(1,h)),i.xp6(1),i.Q6J("ngIf",P.itsOK(2,h))}}let f=(()=>{class l{constructor(){this.fotos=[]}ngOnInit(){}itsOK(h,P){return h<=P.fotos.length-1}}return l.\u0275fac=function(h){return new(h||l)},l.\u0275cmp=i.Xpm({type:l,selectors:[["app-browser-foto"]],inputs:{fotos:["FOTOS","fotos"]},decls:3,vars:1,consts:[[1,"Browse_Lanc"],[4,"ngFor","ngForOf"],[1,"material-devider"],[4,"ngIf"],[1,"alinha_esquerda"],[3,"src"]],template:function(h,P){1&h&&(i.TgZ(0,"table",0),i.YNc(1,n,4,3,"tr",1),i.qZA(),i._UZ(2,"mat-divider",2)),2&h&&(i.xp6(1),i.Q6J("ngForOf",P.fotos))},directives:[t.sg,c.d,t.O5],styles:[".material-devider[_ngcontent-%COMP%]{color:red;margin:5px}.minha-imagem[_ngcontent-%COMP%]{width:400px;height:400px}"]}),l})()},2818:(O,d,a)=>{a.d(d,{d:()=>Tt});var i=a(3430),t=a(7716),c=a(8002),v=a(5435),m=a(4395),C=a(7519),n=a(3075),f=a(6407),l=a(4635),_=a(604),h=a(8786),P=a(1606),A=a(2979),F=a(2174),b=a(6809),R=a(5062),B=a(8495),w=a(5330),x=a(2238),K=a(7360),W=a(4838),$=a(8656),j=a(9617),I=a(2653),Z=a(3679),J=a(3317),y=a(454),q=a(7466),G=a(5626),Y=a(2704),V=a(6081),H=a(9219),k=a(789),Q=a(1095),z=a(1436),X=a(6627),L=a(8583),tt=a(7539),D=a(8295),ot=a(9983),et=a(8981),at=a(7441),it=a(2458);function rt(s,p){if(1&s){const o=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){return t.CHM(o),t.oxw().onGetExcelToEmailOrDownLoad("e-mail")}),t.TgZ(1,"mat-icon"),t._uU(2,"email"),t.qZA(),t.qZA()}}function st(s,p){if(1&s){const o=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){return t.CHM(o),t.oxw().onGetExcelToEmailOrDownLoad("download")}),t.TgZ(1,"mat-icon"),t._uU(2,"cloud_download"),t.qZA(),t.qZA()}}function nt(s,p){if(1&s&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&s){const o=t.oxw(2);t.xp6(1),t.Oqu(o.getMensafield("dtinicial"))}}function ct(s,p){if(1&s&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&s){const o=t.oxw(2);t.xp6(1),t.Oqu(o.getMensafield("dtfinal"))}}function lt(s,p){if(1&s&&(t.TgZ(0,"mat-option",37),t._uU(1),t.qZA()),2&s){const o=p.$implicit;t.Q6J("value",o.sigla),t.xp6(1),t.hij(" ",o.descricao," ")}}function _t(s,p){if(1&s&&(t.TgZ(0,"mat-option",37),t._uU(1),t.qZA()),2&s){const o=p.$implicit;t.Q6J("value",o.codigo),t.xp6(1),t.hij(" ",o.descricao," ")}}function mt(s,p){if(1&s&&(t.TgZ(0,"mat-option",37),t._uU(1),t.qZA()),2&s){const o=p.$implicit;t.Q6J("value",o.codigo),t.xp6(1),t.hij(" ",o.descricao," ")}}function ut(s,p){if(1&s&&(t.TgZ(0,"mat-option",37),t._uU(1),t.qZA()),2&s){const o=p.$implicit;t.Q6J("value",o.codigo),t.xp6(1),t.hij(" ",o.descricao," ")}}function pt(s,p){if(1&s&&(t.TgZ(0,"mat-option",37),t._uU(1),t.qZA()),2&s){const o=p.$implicit;t.Q6J("value",o.id),t.xp6(1),t.hij(" ",o.descricao," ")}}function dt(s,p){if(1&s&&(t.TgZ(0,"mat-option",37),t._uU(1),t.qZA()),2&s){const o=p.$implicit;t.Q6J("value",o.sigla),t.xp6(1),t.hij(" ",o.descricao," ")}}function ht(s,p){if(1&s&&(t.TgZ(0,"mat-option",37),t._uU(1),t.qZA()),2&s){const o=p.$implicit;t.Q6J("value",o.id_usuario),t.xp6(1),t.hij(" ",o.razao," ")}}function gt(s,p){if(1&s){const o=t.EpF();t.TgZ(0,"button",38),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).clearValue("codigo")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA(),t.qZA()}}function vt(s,p){if(1&s){const o=t.EpF();t.TgZ(0,"button",38),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).clearValue("novo")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA(),t.qZA()}}function ft(s,p){if(1&s&&(t.TgZ(0,"mat-option",37),t._uU(1),t.qZA()),2&s){const o=p.$implicit;t.Q6J("value",o.idx),t.xp6(1),t.hij(" ",o.descricao," ")}}function bt(s,p){if(1&s&&(t.TgZ(0,"mat-option",37),t._uU(1),t.qZA()),2&s){const o=p.$implicit;t.Q6J("value",o.sigla),t.xp6(1),t.hij(" ",o.descricao," ")}}function Ct(s,p){if(1&s){const o=t.EpF();t.TgZ(0,"button",38),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).clearValue("descricao")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA(),t.qZA()}}function Et(s,p){if(1&s){const o=t.EpF();t.TgZ(0,"button",38),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).clearValue("observacao")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA(),t.qZA()}}function Pt(s,p){if(1&s){const o=t.EpF();t.TgZ(0,"form",9),t.TgZ(1,"div",10),t.TgZ(2,"mat-checkbox",11),t.NdJ("change",function(r){return t.CHM(o),t.oxw().onHoje(r)}),t._uU(3,"Hoje"),t.qZA(),t.TgZ(4,"mat-checkbox",12),t.NdJ("change",function(r){return t.CHM(o),t.oxw().onLimpar(r)}),t._uU(5,"Limpar As Datas"),t.qZA(),t.qZA(),t.TgZ(6,"div",13),t.TgZ(7,"mat-form-field",14),t.TgZ(8,"mat-label"),t._uU(9,"Data Inicial"),t.qZA(),t._UZ(10,"input",15),t.YNc(11,nt,2,1,"mat-error",16),t.qZA(),t.TgZ(12,"mat-form-field",14),t.TgZ(13,"mat-label"),t._uU(14,"Data Final"),t.qZA(),t._UZ(15,"input",17),t.YNc(16,ct,2,1,"mat-error",16),t.qZA(),t.TgZ(17,"mat-form-field",18),t.TgZ(18,"mat-label"),t._uU(19,"Ordernado Por"),t.qZA(),t.TgZ(20,"mat-select",19),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(21,lt,2,2,"mat-option",20),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"div",21),t.TgZ(23,"mat-form-field",22),t.TgZ(24,"mat-label"),t._uU(25,"Centro Custo"),t.qZA(),t.TgZ(26,"mat-select",23),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(27,_t,2,2,"mat-option",20),t.qZA(),t.qZA(),t.TgZ(28,"mat-form-field",22),t.TgZ(29,"mat-label"),t._uU(30,"Novo Centro Custo"),t.qZA(),t.TgZ(31,"mat-select",24),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(32,mt,2,2,"mat-option",20),t.qZA(),t.qZA(),t.qZA(),t.TgZ(33,"div",21),t.TgZ(34,"mat-form-field",22),t.TgZ(35,"mat-label"),t._uU(36,"Grupos"),t.qZA(),t.TgZ(37,"mat-select",25),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(38,ut,2,2,"mat-option",20),t.qZA(),t.qZA(),t.TgZ(39,"mat-form-field",22),t.TgZ(40,"mat-label"),t._uU(41,"Situa\xe7\xf5es"),t.qZA(),t.TgZ(42,"mat-select",26),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(43,pt,2,2,"mat-option",20),t.qZA(),t.qZA(),t.qZA(),t.TgZ(44,"div",21),t.TgZ(45,"mat-form-field",22),t.TgZ(46,"mat-label"),t._uU(47,"Origem"),t.qZA(),t.TgZ(48,"mat-select",27),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(49,dt,2,2,"mat-option",20),t.qZA(),t.qZA(),t.TgZ(50,"mat-form-field",22),t.TgZ(51,"mat-label"),t._uU(52,"Executores"),t.qZA(),t.TgZ(53,"mat-select",28),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(54,ht,2,2,"mat-option",20),t.qZA(),t.qZA(),t.qZA(),t.TgZ(55,"div",13),t.TgZ(56,"mat-form-field",14),t.TgZ(57,"mat-label"),t._uU(58,"C\xf3digo"),t.qZA(),t._UZ(59,"input",29),t.YNc(60,gt,3,0,"button",30),t.qZA(),t.TgZ(61,"mat-form-field",14),t.TgZ(62,"mat-label"),t._uU(63,"Novo"),t.qZA(),t._UZ(64,"input",31),t.YNc(65,vt,3,0,"button",30),t.qZA(),t.TgZ(66,"mat-form-field",22),t.TgZ(67,"mat-label"),t._uU(68,"Condi\xe7\xe3o"),t.qZA(),t.TgZ(69,"mat-select",32),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(70,ft,2,2,"mat-option",20),t.qZA(),t.qZA(),t.TgZ(71,"mat-form-field",22),t.TgZ(72,"mat-label"),t._uU(73,"Book"),t.qZA(),t.TgZ(74,"mat-select",33),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeParametros()}),t.YNc(75,bt,2,2,"mat-option",20),t.qZA(),t.qZA(),t.qZA(),t.TgZ(76,"div",34),t.TgZ(77,"mat-form-field",14),t.TgZ(78,"mat-label"),t._uU(79,"Descri\xe7\xe3o"),t.qZA(),t._UZ(80,"input",35),t.YNc(81,Ct,3,0,"button",30),t.qZA(),t.qZA(),t.TgZ(82,"div",34),t.TgZ(83,"mat-form-field",14),t.TgZ(84,"mat-label"),t._uU(85,"Observa\xe7\xe3o"),t.qZA(),t._UZ(86,"input",36),t.YNc(87,Et,3,0,"button",30),t.qZA(),t.qZA(),t.qZA()}if(2&s){const o=t.oxw();t.Q6J("formGroup",o.parametros),t.xp6(11),t.Q6J("ngIf",o.NoValidtouchedOrDirty("dtinicial")),t.xp6(5),t.Q6J("ngIf",o.NoValidtouchedOrDirty("dtfinal")),t.xp6(5),t.Q6J("ngForOf",o.orderby),t.xp6(6),t.Q6J("ngForOf",o.ccs),t.xp6(5),t.Q6J("ngForOf",o.ccs_alterados),t.xp6(6),t.Q6J("ngForOf",o.grupos),t.xp6(5),t.Q6J("ngForOf",o.situacoesInventarioPar),t.xp6(6),t.Q6J("ngForOf",o.Origens),t.xp6(5),t.Q6J("ngForOf",o.executores),t.xp6(6),t.Q6J("ngIf",o.hasValue("codigo")),t.xp6(5),t.Q6J("ngIf",o.hasValue("novo")),t.xp6(5),t.Q6J("ngForOf",o.condicoes),t.xp6(5),t.Q6J("ngForOf",o.respostas),t.xp6(6),t.Q6J("ngIf",o.hasValue("descricao")),t.xp6(6),t.Q6J("ngIf",o.hasValue("observacao"))}}let Tt=(()=>{class s{constructor(o,e,r,g,E,T,N,u,Ot,Zt,At){this.formBuilder=o,this.globalService=e,this.localStorageService=r,this.grupoService=g,this.parametrosService=E,this.centrocustoService=T,this.lancamentoService=N,this.emailService=u,this.appSnackBar=Ot,this.EmailDialog=Zt,this.DownLoadDialog=At,this.paramName="",this.retorno=!1,this.email=!1,this.download=!1,this.controle_paginas=new i.e(50,0),this.hide=!0,this.change=new t.vpe,this.changeHide=new t.vpe,this.grupos=[],this.ccs=[],this.ccs_alterados=[],this.condicoes=[],this.respostas=[],this.situacoesInventario=[],this.situacoesInventarioPar=[],this.Origens=[],this.usuarios=[],this.lancamento=new f.E,this.showFiltro=!0,this.executores=[],this.hideAcao="Ocultar",this.orderby=[{sigla:"001",descricao:"Ativo-Antigo"},{sigla:"002",descricao:"Ativo-Novo"},{sigla:"003",descricao:"CC-Antigo"},{sigla:"004",descricao:"CC-Novo"},{sigla:"005",descricao:"Grupo"},{sigla:"006",descricao:"Descri\xe7\xe3o"},{sigla:"007",descricao:"Observa\xe7\xe3o"},{sigla:"008",descricao:"Data Lan\xe7amento"}],this.parametro=new I.M,this.enable_filter=!0,this.parametros=o.group({hoje:[{value:""}],cleardate:[{value:""}],dtinicial:[{value:""}],dtfinal:[{value:""}],orderby:[{value:""}],ccs:[{value:""}],cc_novo:[{value:""}],grupos:[{value:""}],situacoes:[{value:""}],origem:[{value:""}],executor:[{value:""}],codigo:[{value:""}],novo:[{value:""}],condicao:[{value:""}],book:[{value:""}],descricao:[{value:""}],observacao:[{value:""}]}),this.situacoesInventario=this.globalService.getSituacoesInventario(),this.situacoesInventarioPar=this.globalService.getSituacoesInventarioPar(),this.condicoes=this.globalService.getCondicoes();const M=new P.t;M.sigla="",M.descricao="Todos";const U=new P.t;U.sigla="S",U.descricao="SIM";const S=new P.t;S.sigla="N",S.descricao="N\xc3O",this.respostas.push(M),this.respostas.push(U),this.respostas.push(S),this.Origens.push(new n.x("","Todas")),this.Origens=[...this.Origens,...this.globalService.getOrigens()],this.setHide(),this.setValuesNoParam(),this.getExecutores(),this.getCentroCustos()}ngOnInit(){var o,e,r,g,E,T;this.localStorageService.getParametroModel(this.paramName),null===(o=this.parametros.get("dtinicial"))||void 0===o||o.valueChanges.pipe((0,c.U)(u=>u.trim()),(0,v.h)(u=>u.length>=10),(0,m.b)(350),(0,C.x)()).subscribe(u=>this.onChangeParametros()),null===(e=this.parametros.get("dtfinal"))||void 0===e||e.valueChanges.pipe((0,c.U)(u=>u.trim()),(0,v.h)(u=>u.length>=10),(0,m.b)(350),(0,C.x)()).subscribe(u=>this.onChangeParametros()),null===(r=this.parametros.get("codigo"))||void 0===r||r.valueChanges.pipe((0,c.U)(u=>u.trim()),(0,v.h)(u=>u.length>0),(0,m.b)(350),(0,C.x)()).subscribe(u=>this.onChangeParametros()),null===(g=this.parametros.get("novo"))||void 0===g||g.valueChanges.pipe((0,c.U)(u=>u.trim()),(0,v.h)(u=>u.length>0),(0,m.b)(350),(0,C.x)()).subscribe(u=>this.onChangeParametros()),null===(E=this.parametros.get("descricao"))||void 0===E||E.valueChanges.pipe((0,c.U)(u=>u.trim().toUpperCase()),(0,v.h)(u=>u.length>0),(0,m.b)(350),(0,C.x)()).subscribe(u=>{this.onChangeParametros()}),null===(T=this.parametros.get("observacao"))||void 0===T||T.valueChanges.pipe((0,c.U)(u=>u.trim().toUpperCase()),(0,v.h)(u=>u.length>0),(0,m.b)(350),(0,C.x)()).subscribe(u=>{this.onChangeParametros()})}ngOnDestroy(){var o,e,r,g,E,T;null===(o=this.inscricaoGetGrupo)||void 0===o||o.unsubscribe(),null===(e=this.inscricaoGetCc)||void 0===e||e.unsubscribe(),null===(r=this.inscricaoParametro)||void 0===r||r.unsubscribe(),null===(g=this.inscricaoExecutores)||void 0===g||g.unsubscribe(),null===(E=this.inscricaoExcel)||void 0===E||E.unsubscribe(),null===(T=this.inscricaoEmail)||void 0===T||T.unsubscribe()}getExecutores(){let o=new B.G;o.id_empresa=this.globalService.getEmpresa().id,o.id_filial=this.globalService.getLocal().id,o.id_inventario=this.globalService.getInventario().codigo,this.globalService.setSpin(!0),this.inscricaoExecutores=this.lancamentoService.resumolancamentos(o).subscribe(e=>{this.globalService.setSpin(!1);const r=new l.S;r.id_usuario=0,r.razao="Todos",this.executores.push(r),this.executores=[...this.executores,...e]},e=>{this.globalService.setSpin(!1);const r=new l.S;r.id_usuario=0,r.razao="Todos",this.executores.push(r)})}getCentroCustos(){let o=new A.D;o.id_empresa=this.globalService.getIdEmpresa(),o.id_filial=this.globalService.getLocal().id,o.orderby="Descri\xe7\xe3o",this.globalService.setSpin(!0),this.inscricaoGetCc=this.centrocustoService.getCentroscustosParametro_01(o).subscribe(e=>{this.globalService.setSpin(!1);const r=new h.P;r.codigo="",r.descricao="Todos",this.ccs=[],this.ccs_alterados=[],this.ccs.push(r);const g=new h.P;g.codigo="",g.descricao="Todos N\xe3o Alterados",this.ccs_alterados.push(g),e.forEach(E=>{var T=E.descricao.indexOf("-");T>=0&&(E.descricao=E.descricao.trim().substring(T+1)+" -> "+E.descricao.trim())}),e.sort((E,T)=>E.descricao<T.descricao?-1:E.descricao>T.descricao?1:0),this.ccs=[...this.ccs,...e],this.ccs_alterados=[...this.ccs_alterados,...e],this.getGrupos()},e=>{this.globalService.setSpin(!1),this.ccs=[],this.ccs_alterados=[],this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Grupos ${(0,b.bZ)(e)}`,"OK")})}getGrupos(){let o=new F.t;o.id_empresa=this.globalService.getIdEmpresa(),o.id_filial=this.globalService.getLocal().id,o.orderby="Grupo",this.globalService.setSpin(!0),this.inscricaoGetGrupo=this.grupoService.getGruposParametro_01(o).subscribe(e=>{this.globalService.setSpin(!1);const r=new _.b;r.codigo=0,r.descricao="Todos",this.grupos=[],this.grupos.push(r),this.grupos=[...this.grupos,...e],this.loadParametros()},e=>{this.globalService.setSpin(!1),this.grupos=[],this.setValues(),this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Grupos ${(0,b.bZ)(e)}`,"OK")})}onGetExcelToEmailOrDownLoad(o){"E-MAIL"==o.toUpperCase()?this.openEmailDialog():this.openDownLoadDialog()}sendMail(o){let e=new w.D;e.id_empresa=this.globalService.getIdEmpresa(),e.id_filial=this.globalService.getLocal().id,e.id_inventario=this.globalService.getInventario().codigo,e.assunto="Relat\xf3rio Dos Ativos Do Invent\xe1rio",e.destinatario=this.globalService.usuario.email,e.mensagem="Mensagem enviada automaticamento por solicita\xe7\xe3o do usu\xe1rio. Favor Verificar Anexo.",e.fileName=o,this.globalService.setSpin(!0),this.inscricaoEmail=this.emailService.sendEmailV2(e).subscribe(r=>{this.globalService.setSpin(!1),this.appSnackBar.openSuccessSnackBar("E-Mail Enviado Com Sucesso!","OK")},r=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Produtos De Invent\xe1rio ${(0,b.bZ)(r)}`,"OK")})}setValues(){var o,e;this.enable_filter=!1,this.parametros.setValue({hoje:!1,cleardate:!1,dtinicial:(0,b.SL)(this.parametro.getParametro(),"dtinicial"),dtfinal:(0,b.SL)(this.parametro.getParametro(),"dtfinal"),orderby:(0,b.SL)(this.parametro.getParametro(),"orderby"),ccs:(0,b.SL)(this.parametro.getParametro(),"cc"),cc_novo:(0,b.SL)(this.parametro.getParametro(),"cc_novo"),grupos:(0,b.P0)(this.parametro.getParametro(),"grupo"),situacoes:(0,b.SL)(this.parametro.getParametro(),"situacao"),codigo:null===(o=(0,b.P0)(this.parametro.getParametro(),"codigo"))||void 0===o?void 0:o.toString(),novo:null===(e=(0,b.P0)(this.parametro.getParametro(),"novo"))||void 0===e?void 0:e.toString(),origem:(0,b.SL)(this.parametro.getParametro(),"origem"),executor:(0,b.P0)(this.parametro.getParametro(),"executor"),condicao:(0,b.P0)(this.parametro.getParametro(),"condicao"),book:(0,b.SL)(this.parametro.getParametro(),"book"),descricao:(0,b.SL)(this.parametro.getParametro(),"descricao"),observacao:(0,b.SL)(this.parametro.getParametro(),"observacao")}),this.enable_filter=!0}setValuesNoParam(){this.enable_filter=!1,this.parametros.setValue({hoje:!1,cleardate:!1,dtinicial:"",dtfinal:"",orderby:"001",ccs:"",cc_novo:"",grupos:0,situacoes:-1,codigo:"",novo:"",origem:"",executor:0,condicao:"0",book:"",descricao:"",observacao:""}),this.enable_filter=!0}setHide(){this.hide=!this.hide,this.hideAcao=this.hide?"Mostrar":"Ocultar"}loadParametros(){this.parametro=new I.M,this.parametro.id_empresa=this.globalService.getIdEmpresa(),this.parametro.modulo=this.paramName,this.parametro.assinatura="V1.00 19/09/2024",this.parametro.id_usuario=this.globalService.usuario.id,this.parametro.parametro='\n       {\n         "dtinicial":"",\n         "dtfinal":"",\n         "cc": "",\n         "cc_novo":"",\n         "grupo":0,\n         "situacao":-1,\n         "codigo":0,\n         "novo":0,\n         "origem":"",\n         "executor":0,\n         "condicao":0,\n         "book":"",\n         "descricao": "",\n         "observacao": "",\n         "dtinicial":"",\n         "dtfinal":"",\n         "orderby":"001",\n         "page": 1,\n         "new": false,\n         "id_retorno":0\n       }';const o=this.localStorageService.getParametroModel(this.paramName);null!==o?(this.parametro.load(o),this.setValues()):this.getParametro()}getParametro(){this.globalService.setSpin(!0);let o=new R.E;o.id_empresa=this.parametro.id_empresa,o.modulo=this.parametro.modulo,o.assinatura=this.parametro.assinatura,o.id_usuario=this.parametro.id_usuario,o.orderby="Usu\xe1rio",console.log("pesquisa",o),this.inscricaoParametro=this.parametrosService.getParametrosParametro01(o).subscribe(e=>{this.globalService.setSpin(!1),this.parametro=new I.M,this.parametro.id_empresa=e[0].id_empresa,this.parametro.modulo=e[0].modulo,this.parametro.id_usuario=e[0].id_usuario,this.parametro.assinatura=e[0].assinatura,this.parametro.parametro=e[0].parametro,this.parametro.user_insert=e[0].user_insert,this.parametro.user_update=e[0].user_update,this.setValues(),this.onChangeParametros(!1)},e=>{this.globalService.setSpin(!1),this.setValuesNoParam(),this.onChangeParametros()})}updateParametros(){this.globalService.setSpin(!0),this.parametro.user_insert=this.globalService.usuario.id,this.parametro.user_update=this.globalService.usuario.id,this.refreshParametro(),this.inscricaoParametro=this.parametrosService.ParametroAtualiza(this.parametro).subscribe(o=>{this.globalService.setSpin(!1),this.appSnackBar.openSuccessSnackBar("Par\xe2metros Atualizados","OK")},o=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Grava\xe7\xe3o Dos Parametros ${(0,b.bZ)(o)}`,"OK")})}refreshParametro(o=!0){let e=this.parametro.getParametro();Object(e).cc=this.parametros.value.ccs,Object(e).cc_novo=this.parametros.value.cc_novo,Object(e).grupo=this.parametros.value.grupos,Object(e).situacao=this.parametros.value.situacoes,Object(e).codigo=this.parametros.value.codigo,Object(e).novo=this.parametros.value.novo,Object(e).origem=this.parametros.value.origem,Object(e).executor=this.parametros.value.executor,Object(e).condicao=this.parametros.value.condicao,Object(e).book=this.parametros.value.book,Object(e).descricao=this.parametros.value.descricao.toUpperCase(),Object(e).observacao=this.parametros.value.observacao.toUpperCase(),Object(e).dtinicial=this.parametros.value.dtinicial,Object(e).dtfinal=this.parametros.value.dtfinal,Object(e).orderby=this.parametros.value.orderby,this.parametro.parametro=JSON.stringify(e)}onChangeParametros(o=!0){this.refreshParametro(o),this.enable_filter&&this.change.emit(this.parametro)}onSaveConfig(){this.updateParametros()}onHide(){this.setHide(),this.changeHide.emit(this.hide)}hasValue(o){var e;return""!=(null===(e=this.parametros.get(o))||void 0===e?void 0:e.value)}clearValue(o){"descricao"==o&&this.parametros.patchValue({descricao:""}),"observacao"==o&&this.parametros.patchValue({observacao:""}),"codigo"==o&&this.parametros.patchValue({codigo:""}),"novo"==o&&this.parametros.patchValue({novo:""}),this.onChangeParametros()}ChangeValue(o,e){"descricao"==o&&this.parametros.patchValue({descricao:e}),"observacao"==o&&this.parametros.patchValue({observacao:e})}openEmailDialog(){const o=new K.o;o.titulo="ENVIAR CONSULTA VIA E-MAIL",o.destinatario=this.globalService.usuario.email,o.escopo="T",o.labelBottomNao="Cancelar",o.labelBottonSim="Processar",o.id_empresa=this.globalService.empresa.id,o.id_filial=this.globalService.local.id,o.id_inventario=this.globalService.inventario.codigo,o.pagina=this.controle_paginas.getPaginalAtual(),o.parametro=this.parametro;const e=new x.vA;e.disableClose=!0,e.id="consulta-email",e.width="800px",e.data=o,this.EmailDialog.open(W.G,e).beforeClosed().subscribe(g=>{})}openDownLoadDialog(){console.log("Pagina: ",this.controle_paginas.getPaginalAtual());const o=new $.d;o.titulo="DOWNLOAD DE CONSULTA",o.escopo="T",o.labelBottomNao="Cancelar",o.labelBottonSim="Processar",o.id_empresa=this.globalService.empresa.id,o.id_filial=this.globalService.local.id,o.id_inventario=this.globalService.inventario.codigo,o.pagina=this.controle_paginas.getPaginalAtual(),o.parametro=this.parametro;const e=new x.vA;e.disableClose=!0,e.id="consulta-download",e.width="800px",e.data=o,this.DownLoadDialog.open(j.G,e).beforeClosed().subscribe(g=>{})}NoValidtouchedOrDirty(o){var e,r,g;return!((null===(e=this.parametros.get(o))||void 0===e?void 0:e.valid)||!(null===(r=this.parametros.get(o))||void 0===r?void 0:r.touched)&&!(null===(g=this.parametros.get(o))||void 0===g?void 0:g.dirty))}getMensafield(o){var e,r;return null===(r=null===(e=this.parametros.get(o))||void 0===e?void 0:e.errors)||void 0===r?void 0:r.message}onHoje(o){if(o.checked){let e=new Date(Date.now()).toLocaleString().split(",")[0];this.parametros.patchValue({dtinicial:e,dtfinal:e,hoje:!1}),this.onChangeParametros()}}onLimpar(o){o.checked&&this.parametros.patchValue({dtinicial:"",dtfinal:"",cleardate:!1}),this.onChangeParametros()}}return s.\u0275fac=function(o){return new(o||s)(t.Y36(Z.qu),t.Y36(J.U),t.Y36(y.n),t.Y36(q.Z),t.Y36(G.u),t.Y36(Y.T),t.Y36(V.l),t.Y36(H.j),t.Y36(k.W),t.Y36(x.uw),t.Y36(x.uw))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-filtro-imoinventario"]],inputs:{paramName:["PARAMNAME","paramName"],retorno:["RETORNO","retorno"],email:["EMAIL","email"],download:["DOWNLOAD","download"],controle_paginas:["CONTROLE_PAGINAS","controle_paginas"],hide:["HIDE","hide"]},outputs:{change:"changeParametro",changeHide:"changeHide"},decls:12,vars:3,consts:[[1,"div-barra"],[1,"example-spacer"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Salvar Par\xe2metros","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Enviar Consulta Por E-Mail","matTooltipPosition","above",3,"click",4,"ngIf"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Baixar A Consulta","matTooltipPosition","above",3,"click",4,"ngIf"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Mostrar/Esconder","matTooltipPosition","above",3,"click"],["autocomplete","off",3,"formGroup",4,"ngIf"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Enviar Consulta Por E-Mail","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Baixar A Consulta","matTooltipPosition","above",3,"click"],["autocomplete","off",3,"formGroup"],[1,"check"],["formControlName","hoje",1,"check-margem",3,"change"],["formControlName","cleardate",1,"check-margem",3,"change"],[1,"col-med-4"],["appearance","outline",1,"col-max"],["matInput","","formControlName","dtinicial","mask","00/00/0000","placeholder","dd/mm/aaaa"],[4,"ngIf"],["matInput","","formControlName","dtfinal","mask","00/00/0000","placeholder","dd/mm/aaaa"],["field","","appearance","outline",1,"column-span-2"],["formControlName","orderby",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-med-2"],["field","","appearance","outline",1,"col-max"],["formControlName","ccs",3,"selectionChange"],["formControlName","cc_novo",3,"selectionChange"],["formControlName","grupos",3,"selectionChange"],["formControlName","situacoes",3,"selectionChange"],["formControlName","origem",3,"selectionChange"],["formControlName","executor",3,"selectionChange"],["matInput","","formControlName","codigo"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["matInput","","formControlName","novo"],["formControlName","condicao",3,"selectionChange"],["formControlName","book",3,"selectionChange"],[1,"col-med-1"],["matInput","","formControlName","descricao",1,"uppercase"],["matInput","","formControlName","observacao",1,"uppercase"],[3,"value"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"span",1),t._uU(2,"Filtro Da Pesquisa"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return e.onSaveConfig()}),t.TgZ(4,"mat-icon"),t._uU(5,"brightness_high"),t.qZA(),t.qZA(),t.YNc(6,rt,3,0,"button",3),t.YNc(7,st,3,0,"button",4),t.TgZ(8,"button",5),t.NdJ("click",function(){return e.onHide()}),t.TgZ(9,"mat-icon"),t._uU(10,"remove_red_eye"),t.qZA(),t.qZA(),t.qZA(),t.YNc(11,Pt,88,16,"form",6)),2&o&&(t.xp6(6),t.Q6J("ngIf",e.email),t.xp6(1),t.Q6J("ngIf",e.download),t.xp6(4),t.Q6J("ngIf",!e.hide))},directives:[Q.lW,z.gM,X.Hw,L.O5,Z._Y,Z.JL,Z.sg,tt.oG,Z.JJ,Z.u,D.KE,D.hX,ot.Nt,Z.Fj,et.hx,at.gD,L.sg,D.TO,it.ey,D.R9],styles:[".ckeck[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;height:60px}.check-margem[_ngcontent-%COMP%]{margin:0 10px}"]}),s})()}}]);