"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6849],{6849:(A,p,c)=>{c.r(p),c.d(p,{Tab1PageModule:()=>M});var r=c(3582),g=c(6814),u=c(95),d=c(3554),_=c(6958),e=c(6689);function h(a,i){if(1&a&&(e.TgZ(0,"ion-select-option",12),e._uU(1),e.qZA()),2&a){const o=i.$implicit;e.Q6J("value",o.base),e.xp6(1),e.Oqu(o.label)}}function m(a,i){if(1&a&&(e.TgZ(0,"ion-select-option",12),e._uU(1),e.qZA()),2&a){const o=i.$implicit;e.Q6J("value",o.base),e.xp6(1),e.Oqu(o.label)}}function f(a,i){if(1&a){const o=e.EpF();e.TgZ(0,"ion-col",3)(1,"ion-textarea",14),e.NdJ("ngModelChange",function(t){e.CHM(o);const l=e.oxw(2);return e.KtG(l.conta=t)}),e.qZA()()}if(2&a){const o=e.oxw(2);e.xp6(1),e.Q6J("autoGrow",!0)("ngModel",o.conta)}}function v(a,i){if(1&a&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&a){const o=i.$implicit;e.xp6(1),e.Oqu(o)}}function T(a,i){if(1&a&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2,"Ou"),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.TgZ(5,"strong"),e._uU(6),e.qZA(),e._uU(7),e.qZA(),e.BQk()),2&a){const o=e.oxw(3);e.xp6(4),e.AsE("",o.entrada," em ",o.nomeBase[o.valorDe]," \xe9 igual a "),e.xp6(2),e.Oqu(o.resultado.toUpperCase()),e.xp6(1),e.hij(" em ",o.nomeBase[o.valorPara],"")}}function P(a,i){if(1&a&&(e.TgZ(0,"ion-col",3)(1,"ion-label"),e._uU(2),e.qZA(),e.TgZ(3,"ul"),e.YNc(4,v,2,1,"li",15),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.TgZ(7,"strong"),e._uU(8),e.qZA(),e._uU(9),e.qZA(),e.YNc(10,T,8,4,"ng-container",11),e.qZA()),2&a){const o=e.oxw(2);e.xp6(2),e.hij("Convers\xe3o p/ ",o.nomeBase[o.valorPara],""),e.xp6(2),e.Q6J("ngForOf",o.conversao),e.xp6(2),e.hij("",o.decimal," em Decimal \xe9 igual a "),e.xp6(2),e.Oqu(o.resultado.toUpperCase()),e.xp6(1),e.hij(" em ",o.nomeBase[o.valorPara],""),e.xp6(1),e.Q6J("ngIf",10!==o.valorDe)}}function b(a,i){if(1&a&&(e.TgZ(0,"ion-col",3)(1,"p"),e._uU(2),e.TgZ(3,"strong"),e._uU(4),e.qZA(),e._uU(5),e.qZA()()),2&a){const o=e.oxw(2);e.xp6(2),e.AsE("",o.entrada," em ",o.nomeBase[o.valorDe]," \xe9 igual a "),e.xp6(2),e.Oqu(o.resultado.toUpperCase()),e.xp6(1),e.hij(" em ",o.nomeBase[o.valorPara],"")}}function x(a,i){if(1&a&&(e.TgZ(0,"ion-row"),e.YNc(1,f,2,2,"ion-col",13),e.YNc(2,P,11,6,"ion-col",13),e.YNc(3,b,6,4,"ion-col",13),e.qZA()),2&a){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",10!==o.valorDe),e.xp6(1),e.Q6J("ngIf",10!==o.valorPara&&o.resultado),e.xp6(1),e.Q6J("ngIf",10===o.valorPara&&o.resultado)}}const Z=[{path:"",component:(()=>{var a;class i{constructor(){this.tipos=[{base:2,label:"Bin\xe1rio"},{base:8,label:"Octal"},{base:10,label:"Decimal"},{base:16,label:"Hexadecimal"}],this.nomeBase={2:"Bin\xe1rio",8:"Octal",10:"Decimal",16:"Hexadecimal"},this.tiposValores={10:["0","1","2","3","4","5","6","7","8","9"],16:["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],8:["0","1","2","3","4","5","6","7"],2:["0","1"]},this.valorDe=10,this.valorPara=2,this.entrada="",this.resultado="",this.decimal=0,this.mostraConta=!0,this.conta="",this.conversao=[]}ngOnInit(){}verificar(){return this.entrada?this.valorDe===this.valorPara?(alert("N\xe3o \xe9 poss\xedvel converter o mesmo tipo !"),this.resultado="",!1):!!{16:/^[0-9A-Fa-f]+$/,10:/^(0|[1-9][0-9]*)$/,2:/^[0-1]+$/,8:/^(0|[1-7][0-7]*)$/}[this.valorDe].test(this.entrada)||(alert(`Valores aceitos: ${this.tiposValores[this.valorDe].join(" ,")}`),!1):(alert("Coloque um valor para ser convertido"),!1)}converter(){this.verificar()?(this.converterDePara(),this.mostrarConta()):this.mostraConta=!1}converterDePara(){10!==this.valorDe?(this.decimal=parseInt(this.entrada,this.valorDe),this.resultado=this.decimal.toString(),10!==this.valorPara&&(this.resultado=Number(this.resultado).toString(this.valorPara))):(this.decimal=parseInt(this.entrada),this.resultado=this.decimal.toString(this.valorPara))}limpar(){this.mostraConta=!1,this.conta="",this.conversao=[],this.resultado=""}mostrarConta(){if(this.mostraConta=!0,10!==this.valorDe){const t=this.entrada.split("").reverse().map((l,s)=>`${this.verificarLetra(l)} * ${this.valorDe}^${s}`).reverse().join(" + ");this.conta=`${t} = ${this.decimal}`}let n=this.decimal;for(this.conversao=[];n>0;)this.conversao.push(`${n} / ${this.valorPara} com um resto de ${n%this.valorPara}`),n=Math.floor(n/this.valorPara)}verificarLetra(n){return n=n.toLocaleUpperCase(),16===this.valorDe&&{A:"10",B:"11",C:"12",D:"13",E:"14",F:"15"}[n]||n}}return(a=i).\u0275fac=function(n){return new(n||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-tab1"]],decls:26,vars:11,consts:[[3,"translucent"],[3,"fullscreen"],[2,"max-width","420px","margin","0 auto"],["size","12"],["labelPlacement","floating","fill","outline","type","text","label","Entrada",3,"ngModel","ngModelChange"],["size","6"],[3,"value","ngModel","ionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["expand","block",3,"click"],["slot","start","name","add"],["labelPlacement","floating","fill","outline","label","Resultado","type","text",2,"pointer-events","none",3,"ngModel","ngModelChange"],[4,"ngIf"],[3,"value"],["size","12",4,"ngIf"],["labelPlacement","floating","fill","outline","label","Convers\xe3o p/ Decimal","type","text",2,"pointer-events","none",3,"autoGrow","ngModel","ngModelChange"],[4,"ngFor","ngForOf"]],template:function(n,t){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," Conversor "),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"div",2)(6,"ion-grid")(7,"ion-row")(8,"ion-col",3)(9,"ion-input",4),e.NdJ("ngModelChange",function(s){return t.entrada=s}),e.qZA()()(),e.TgZ(10,"ion-row")(11,"ion-col",5)(12,"ion-select",6),e.NdJ("ionChange",function(){return t.limpar()})("ngModelChange",function(s){return t.valorDe=s}),e.YNc(13,h,2,2,"ion-select-option",7),e.qZA()(),e.TgZ(14,"ion-col",5)(15,"ion-select",6),e.NdJ("ionChange",function(){return t.limpar()})("ngModelChange",function(s){return t.valorPara=s}),e.YNc(16,m,2,2,"ion-select-option",7),e.qZA()()(),e.TgZ(17,"ion-row")(18,"ion-col",3)(19,"ion-button",8),e.NdJ("click",function(){return t.converter()}),e._UZ(20,"ion-icon",9),e._uU(21," Converter "),e.qZA()()(),e.TgZ(22,"ion-row")(23,"ion-col",3)(24,"ion-input",10),e.NdJ("ngModelChange",function(s){return t.resultado=s}),e.qZA()()(),e.YNc(25,x,4,3,"ion-row",11),e.qZA()()()),2&n&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(5),e.Q6J("ngModel",t.entrada),e.xp6(3),e.Q6J("value",10)("ngModel",t.valorDe),e.xp6(1),e.Q6J("ngForOf",t.tipos),e.xp6(2),e.Q6J("value",2)("ngModel",t.valorPara),e.xp6(1),e.Q6J("ngForOf",t.tipos),e.xp6(8),e.Q6J("ngModel",t.resultado),e.xp6(1),e.Q6J("ngIf",t.mostraConta))},dependencies:[r.YG,r.wI,r.W2,r.jY,r.Gu,r.gu,r.pK,r.Q$,r.Nd,r.t9,r.n0,r.g2,r.wd,r.sr,r.QI,r.j9,g.sg,g.O5,u.JJ,u.On]}),i})()}];let C=(()=>{var a;class i{}return(a=i).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[_.Bz.forChild(Z),_.Bz]}),i})(),M=(()=>{var a;class i{}return(a=i).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[r.Pc,g.ez,u.u5,d.e,C,u.UX]}),i})()}}]);