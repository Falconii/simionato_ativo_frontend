"use strict";(self.webpackChunkinventario=self.webpackChunkinventario||[]).push([[514],{2653:(A,l,i)=>{i.d(l,{M:()=>t});class t{constructor(){this.id_empresa=0,this.modulo="",this.assinatura="",this.id_usuario=0,this.parametro="",this.user_insert=0,this.user_update=0}getParametro(){try{return JSON.parse(this.parametro)}catch(_){return JSON.parse('{"mensagem":"error"}')}}setParametro(_){this.parametro=JSON.stringify(_)}}},5062:(A,l,i)=>{i.d(l,{E:()=>t});class t{constructor(){this.id_empresa=0,this.modulo="",this.assinatura="",this.id_usuario=0,this.pagina=0,this.tamPagina=50,this.contador="N",this.orderby="",this.sharp=!1}}},5626:(A,l,i)=>{i.d(l,{u:()=>g});var t=i(2340),m=i(7716),_=i(1841);let g=(()=>{class s{constructor(c){this.http=c,this.apiURL=t.N.apiURL}getParametros(){return this.http.get(`${this.apiURL}parametros`)}getParametrosParametro01(c){return this.http.post(`${this.apiURL}parametros`,c)}getParametro(c,p,u,h){return this.http.get(`${this.apiURL}parametro/${c}/${p}/${u}/${h}`)}ParametroInsert(c){return this.http.post(`${this.apiURL}parametro/`,c)}ParametroUpdate(c){return this.http.put(`${this.apiURL}parametro/`,c)}ParametroAtualiza(c){return this.http.post(`${this.apiURL}atualizarparametro/`,c)}ParametroDelete(c,p,u,h){return this.http.delete(`${this.apiURL}parametro/${c}/${p}/${u}/${h}`)}}return s.\u0275fac=function(c){return new(c||s)(m.LFG(_.eN))},s.\u0275prov=m.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},3430:(A,l,i)=>{i.d(l,{e:()=>t});class t{constructor(_,g){this.tamPagina=_,this.totalRegistros=g,this.paginaInicial=1,this.paginaFinal=1,this.totalPaginas=1,this.setTamPagina(this.tamPagina),this.paginaAtual=1}goFirst(){return this.paginaAtual=this.paginaInicial,this.paginaAtual}goLast(){return this.paginaAtual=this.paginaFinal,this.paginaAtual}nextPage(){this.paginaAtual++,this.paginaAtual>this.paginaFinal&&(this.paginaAtual=this.paginaFinal)}forwardPage(){this.paginaAtual--,this.paginaAtual<1&&(this.paginaAtual=1)}getPaginalAtual(){return this.paginaAtual}getTotalPaginas(){return this.totalPaginas}setTamPagina(_){this.tamPagina=_,this.totalPaginas=this.totalRegistros%this.tamPagina==0?Math.trunc(this.totalRegistros/this.tamPagina):Math.trunc(this.totalRegistros/this.tamPagina)+1,this.paginaFinal=this.totalPaginas}setPaginaAtual(_){this.paginaAtual=_}}},7234:(A,l,i)=>{i.d(l,{C:()=>w});var t=i(7716),m=i(6809),_=i(3032),g=i(8583),s=i(3935),b=i(1095),c=i(1436),p=i(6627);function u(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return n.onChangeOpcao(n.getAcoes().Copy_Estrutura)}),t.TgZ(1,"mat-icon",10),t._uU(2,"file_copy"),t.qZA(),t.qZA()}}function h(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return n.onChangeOpcao(n.getAcoes().Visualizar_Estrtura)}),t.TgZ(1,"mat-icon",10),t._uU(2,"fullscreen"),t.qZA(),t.qZA()}}function T(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return n.onChangeOpcao(n.getAcoes().Fotos)}),t.TgZ(1,"mat-icon",10),t._uU(2,"fullscreen"),t.qZA(),t.qZA()}}function f(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return n.onChangeOpcao(n.getAcoes().Sub_Conta)}),t.TgZ(1,"mat-icon",10),t._uU(2,"assignment"),t.qZA(),t.qZA()}if(2&o){const a=t.oxw();t.Q6J("matTooltip",a.getTexto().sub_conta)}}function x(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return n.onChangeOpcao(n.getAcoes().Consulta)}),t.TgZ(1,"mat-icon",10),t._uU(2,"remove_red_eye"),t.qZA(),t.qZA()}if(2&o){const a=t.oxw();t.Q6J("matTooltip",a.getTexto().consultar)}}function C(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return n.onChangeOpcao(n.getAcoes().Fotos)}),t.TgZ(1,"mat-icon",10),t._uU(2,"photo"),t.qZA(),t.qZA()}if(2&o){const a=t.oxw();t.Q6J("matTooltip",a.getTexto().foto)}}function d(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return n.onChangeOpcao(n.getAcoes().Edicao)}),t.TgZ(1,"mat-icon",10),t._uU(2,"edit"),t.qZA(),t.qZA()}if(2&o){const a=t.oxw();t.Q6J("matTooltip",a.getTexto().alterar)}}function Z(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return n.onChangeOpcao(n.getAcoes().EdicaoMultipla)}),t.TgZ(1,"mat-icon",10),t._uU(2,"add_comment"),t.qZA(),t.qZA()}if(2&o){const a=t.oxw();t.Q6J("matTooltip",a.getTexto().multi_edicao)}}function E(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return n.onChangeOpcao(n.getAcoes().Exclusao)}),t.TgZ(1,"mat-icon",10),t._uU(2,"delete"),t.qZA(),t.qZA()}if(2&o){const a=t.oxw();t.Q6J("matTooltip",a.getTexto().excluir)}}function P(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return n.onChangeOpcao(n.getAcoes().Exclusao)}),t.TgZ(1,"mat-icon",10),t._uU(2,"attach_money"),t.qZA(),t.qZA()}if(2&o){const a=t.oxw();t.Q6J("matTooltip",a.getTexto().financeiro)}}function O(o,r){if(1&o&&(t.TgZ(0,"button",15),t.TgZ(1,"mat-icon"),t._uU(2,"more_vert"),t.qZA(),t.qZA()),2&o){t.oxw();const a=t.MAs(13);t.Q6J("matMenuTriggerFor",a)}}function v(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(a);const n=t.oxw(2);return n.onChangeOpcao(n.getAcoes().EdicaoMultipla)}),t.TgZ(1,"mat-icon"),t._uU(2,"add_comment"),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.qZA(),t.qZA()}if(2&o){const a=t.oxw(2);t.xp6(4),t.Oqu(a.getTexto().multi_edicao)}}function U(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(a);const n=t.oxw(2);return n.onChangeOpcao(n.getAcoes().Exclusao)}),t.TgZ(1,"mat-icon"),t._uU(2,"delete"),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.qZA(),t.qZA()}if(2&o){const a=t.oxw(2);t.xp6(4),t.Oqu(a.getTexto().excluir)}}function M(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){return t.CHM(a),t.oxw(2).onChangeOpcao(99)}),t.TgZ(1,"mat-icon"),t._uU(2,"assignment"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Atividades"),t.qZA(),t.qZA()}}function B(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){return t.CHM(a),t.oxw(2).onChangeOpcao(98)}),t.TgZ(1,"mat-icon"),t._uU(2,"assignment"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Horas Executadas"),t.qZA(),t.qZA()}}function I(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){return t.CHM(a),t.oxw(2).onChangeOpcao(97)}),t.TgZ(1,"mat-icon"),t._uU(2,"attach_money"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Financeiro"),t.qZA(),t.qZA()}}function N(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){return t.CHM(a),t.oxw(2).onChangeOpcao(96)}),t.TgZ(1,"mat-icon"),t._uU(2,"person"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Usu\xe1rios"),t.qZA(),t.qZA()}}function R(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){return t.CHM(a),t.oxw(2).onChangeOpcao(95)}),t.TgZ(1,"mat-icon"),t._uU(2,"person"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"NFE"),t.qZA(),t.qZA()}}function k(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){return t.CHM(a),t.oxw(2).onChangeOpcao(94)}),t.TgZ(1,"mat-icon"),t._uU(2,"person"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Valores"),t.qZA(),t.qZA()}}function J(o,r){if(1&o&&(t.YNc(0,v,5,1,"button",16),t.YNc(1,U,5,1,"button",16),t.YNc(2,M,5,0,"button",16),t.YNc(3,B,5,0,"button",16),t.YNc(4,I,5,0,"button",16),t.YNc(5,N,5,0,"button",16),t.YNc(6,R,5,0,"button",16),t.YNc(7,k,5,0,"button",16)),2&o){const a=t.oxw();t.Q6J("ngIf",a.barra_mult_edicao),t.xp6(1),t.Q6J("ngIf",a.barra_excluir),t.xp6(1),t.Q6J("ngIf",a.barra_atividades),t.xp6(1),t.Q6J("ngIf",a.barra_dashboardv1),t.xp6(1),t.Q6J("ngIf",a.barra_financeiro),t.xp6(1),t.Q6J("ngIf",a.barra_usuarios),t.xp6(1),t.Q6J("ngIf",a.barra_nfe),t.xp6(1),t.Q6J("ngIf",a.barra_valores)}}let w=(()=>{class o{constructor(){this.copy=!1,this.visualizar=!1,this.subconta=!1,this.consulta=!0,this.fotos=!0,this.alterar=!0,this.excluir=!0,this.financeiro=!1,this.mult_edicao=!1,this.barra=!1,this.barra_excluir=!0,this.barra_atividades=!0,this.barra_dashboardv1=!1,this.barra_financeiro=!1,this.barra_mult_edicao=!1,this.barra_usuarios=!1,this.barra_valores=!1,this.barra_nfe=!1,this.changeOpcao=new t.vpe}ngOnInit(){}getTexto(){return m.fd}getAcoes(){return _.I}onChangeOpcao(a){this.changeOpcao.emit(a)}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["barra-acoes"]],inputs:{copy:["COPY_ESTRUTURA","copy"],visualizar:["VISUALIZAR_ESTRUTURA","visualizar"],subconta:["SUBCONTA","subconta"],consulta:["CONSULTAR","consulta"],fotos:["FOTOS","fotos"],alterar:["ALTERAR","alterar"],excluir:["EXCLUIR","excluir"],financeiro:["FINACEIRO","financeiro"],mult_edicao:["MULTEDICAO","mult_edicao"],barra:["BARRA_VERTICAL","barra"],barra_excluir:["BARRA_EXCLUIR","barra_excluir"],barra_atividades:["BARRA_ATIVIDADES","barra_atividades"],barra_dashboardv1:["BARRA_DASHBOARDV1","barra_dashboardv1"],barra_financeiro:["BARRA_FINANCEIRO","barra_financeiro"],barra_mult_edicao:["BARRA_MULTEDICAO","barra_mult_edicao"],barra_usuarios:["BARRA_USUARIOS","barra_usuarios"],barra_valores:["BARRA_VALORES","barra_valores"],barra_nfe:["BARRA_NFE","barra_nfe"]},outputs:{changeOpcao:"changeOpcao"},decls:15,vars:11,consts:[[1,"barras2"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Copiar A Estrutura","matTooltipPosition","above",3,"click",4,"ngIf"],["mat-icon-button","","aria-label","Example icon-button with share icon ","class","botoes","matTooltip","Visualizar Estrtutura","matTooltipPosition","above","class","botoes",3,"click",4,"ngIf"],["mat-icon-button","","aria-label","Example icon-button with share icon ","class","botoes","matTooltip","Fotos","matTooltipPosition","above","class","botoes",3,"click",4,"ngIf"],["mat-icon-button","","aria-label","Example icon-button with share icon ","class","botoes","matTooltipPosition","above",3,"matTooltip","click",4,"ngIf"],["mat-icon-button","","class","botoes","matTooltipPosition","above",3,"matTooltip","click",4,"ngIf"],["mat-icon-button","","aria-label","Example icon-button with share icon ",3,"matMenuTriggerFor",4,"ngIf"],["appMenu","matMenu"],["matMenuContent",""],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Copiar A Estrutura","matTooltipPosition","above",3,"click"],[1,"icon-size"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Visualizar Estrtutura","matTooltipPosition","above",1,"botoes",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Fotos","matTooltipPosition","above",1,"botoes",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above",1,"botoes",3,"matTooltip","click"],["mat-icon-button","","matTooltipPosition","above",1,"botoes",3,"matTooltip","click"],["mat-icon-button","","aria-label","Example icon-button with share icon ",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click",4,"ngIf"],["mat-menu-item","",3,"click"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0),t.YNc(1,u,3,0,"button",1),t.YNc(2,h,3,0,"button",2),t.YNc(3,T,3,0,"button",3),t.YNc(4,f,3,1,"button",4),t.YNc(5,x,3,1,"button",4),t.YNc(6,C,3,1,"button",4),t.YNc(7,d,3,1,"button",4),t.YNc(8,Z,3,1,"button",4),t.YNc(9,E,3,1,"button",5),t.YNc(10,P,3,1,"button",5),t.YNc(11,O,3,1,"button",6),t.TgZ(12,"mat-menu",null,7),t.YNc(14,J,8,8,"ng-template",8),t.qZA(),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngIf",e.copy),t.xp6(1),t.Q6J("ngIf",e.visualizar),t.xp6(1),t.Q6J("ngIf",e.visualizar),t.xp6(1),t.Q6J("ngIf",e.subconta),t.xp6(1),t.Q6J("ngIf",e.consulta),t.xp6(1),t.Q6J("ngIf",e.fotos),t.xp6(1),t.Q6J("ngIf",e.alterar),t.xp6(1),t.Q6J("ngIf",e.mult_edicao),t.xp6(1),t.Q6J("ngIf",e.excluir),t.xp6(1),t.Q6J("ngIf",e.financeiro),t.xp6(1),t.Q6J("ngIf",e.barra))},directives:[g.O5,s.VK,s.KA,b.lW,c.gM,p.Hw,s.p6,s.OP],styles:[".barras2[_ngcontent-%COMP%]{width:inherit;margin:0 auto;display:grid;grid-template-columns:20% 20% 20% 20%}mat-icon[_ngcontent-%COMP%]{font-size:20px}"]}),o})()},3968:(A,l,i)=>{i.d(l,{J:()=>s});var t=i(7716),m=i(1095),_=i(1436),g=i(6627);let s=(()=>{class b{constructor(){this.change=new t.vpe}ngOnInit(){}getAtual(){return`${this.controlePaginas.getPaginalAtual()}/${this.controlePaginas.getTotalPaginas()}`}firstPage(){this.controlePaginas.goFirst(),this.change.emit("")}lastPage(){this.controlePaginas.goLast(),this.change.emit("")}forwardPage(){this.controlePaginas.forwardPage(),this.change.emit("")}nextPage(){this.controlePaginas.nextPage(),this.change.emit("")}}return b.\u0275fac=function(p){return new(p||b)},b.\u0275cmp=t.Xpm({type:b,selectors:[["app-navegator"]],inputs:{controlePaginas:["controle","controlePaginas"]},outputs:{change:"changePage"},decls:15,vars:1,consts:[[1,"pagina"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","In\xedcio","matTooltipPosition","above",1,"mat-icon-button",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Voltar","matTooltipPosition","above",1,"mat-icon-button",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Avan\xe7ar","matTooltipPosition","above",1,"mat-icon-button",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Final","matTooltipPosition","above",1,"mat-icon-button",3,"click"]],template:function(p,u){1&p&&(t.TgZ(0,"div",0),t.TgZ(1,"button",1),t.NdJ("click",function(){return u.firstPage()}),t.TgZ(2,"mat-icon"),t._uU(3,"first_page"),t.qZA(),t.qZA(),t.TgZ(4,"button",2),t.NdJ("click",function(){return u.forwardPage()}),t.TgZ(5,"mat-icon"),t._uU(6,"chevron_left"),t.qZA(),t.qZA(),t.TgZ(7,"span"),t._uU(8),t.qZA(),t.TgZ(9,"button",3),t.NdJ("click",function(){return u.nextPage()}),t.TgZ(10,"mat-icon"),t._uU(11,"chevron_right"),t.qZA(),t.qZA(),t.TgZ(12,"button",4),t.NdJ("click",function(){return u.lastPage()}),t.TgZ(13,"mat-icon"),t._uU(14,"last_page"),t.qZA(),t.qZA(),t.qZA()),2&p&&(t.xp6(8),t.Oqu(u.getAtual()))},directives:[m.lW,_.gM,g.Hw],styles:[".pagina[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;font-size:inherit;font-weight:inherit;font:inherit}.pagina[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:2px}"]}),b})()}}]);