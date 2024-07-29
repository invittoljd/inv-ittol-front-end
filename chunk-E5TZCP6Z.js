import{Da as _,Fa as s,Ha as r,Ia as l,Ja as S,N as b,Oa as c,Pa as o,Ra as d,T as E,Ua as I,V as w,c as u,p as v,qb as y,sa as a,vb as g,zb as h}from"./chunk-YELC52QC.js";var J=(()=>{class i{apiUrl=`${h.url}/api/request`;http=E(g);showError(e,n){console.log("Error en el archivo: request.service.ts"),console.log(e,`
	`,h.showErrors?n:"")}addRequest(e,n){return u(this,null,function*(){try{let t=yield v(this.http.post(this.apiUrl,{request:e,item_id:n}));if(t){let{request:m}=t;if(m)return m;this.showError("Error al solicitar item:",t.message)}}catch(t){this.showError("Error al realizar la solicitud:",t)}})}getRequests(){return u(this,null,function*(){try{let e=yield v(this.http.get(this.apiUrl));if(e){let{requests:n}=e;if(n)return n;this.showError("Error al obtener solicitudes:",e.message)}}catch(e){this.showError("Error al realizar la solicitud:",e)}return[]})}updateRequest(e){return u(this,null,function*(){try{let n=yield this.http.put(this.apiUrl+"/"+e._id,{request:e}).toPromise();if(n){let{message:t,request:m}=n;if(m)return m;this.showError("Error al modificar solicitud:",t)}}catch(n){this.showError("Error al realizar la solicitud:",n)}})}checkAvailability(e){return u(this,null,function*(){try{let n=yield this.http.get(this.apiUrl+"/checkAvailability/"+e._id).toPromise();if(n){let{message:t,requests:m}=n;if(m)return{requests:m};this.showError("Error al revisar la disponibilidad:",t)}}catch(n){this.showError("Error al realizar la solicitud:",n)}return{}})}deleteRequest(e,n){return u(this,null,function*(){try{let t=yield this.http.delete(this.apiUrl+"/"+n).toPromise();if(t){let{message:m,request:f}=t;if(f){let x=e.findIndex(C=>C._id===n);if(x!==-1)return e.splice(x,1)[0]}this.showError("Error al eliminar el solicitud:",m)}}catch(t){this.showError("Error al realizar la solicitud:",t)}})}addMessage(e,n){return u(this,null,function*(){try{let t=yield this.http.put(this.apiUrl+"/message/"+e._id,{message:n}).toPromise();if(t){let{messageSaved:m,message:f}=t;if(m)return e.messages?.push(m),m;this.showError("Error al mandar mensaje:",f)}}catch(t){this.showError("Error al realizar la solicitud:",t)}})}getRequestsToday(e){return u(this,null,function*(){try{let n=yield this.http.get(this.apiUrl+"/toDate/"+e).toPromise();if(n){let{message:t,requests:m}=n;if(m)return m;this.showError("Error al obtener solicitudes:",t)}}catch(n){this.showError("Error al realizar la solicitud:",n)}return[]})}static \u0275fac=function(n){return new(n||i)};static \u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function T(i,p){if(i&1&&(r(0,"div",7)(1,"label",11),o(2,"Marca del item"),l(),r(3,"p",12),o(4),l()()),i&2){let e=c();a(4),d(" ",e.item==null?null:e.item.brand," ")}}function F(i,p){if(i&1&&(r(0,"div",7)(1,"label",13),o(2,"Modelo del item"),l(),r(3,"p",14),o(4),l()()),i&2){let e=c();a(4),d(" ",e.item==null?null:e.item.model," ")}}function U(i,p){if(i&1&&(r(0,"div",7)(1,"label",15),o(2,"N\xFAmero de serie del item"),l(),r(3,"p",16),o(4),l()()),i&2){let e=c();a(4),d(" ",e.item==null?null:e.item.serial," ")}}function k(i,p){if(i&1&&(r(0,"div",7)(1,"label",17),o(2,"N\xFAmero de inventario del item"),l(),r(3,"p",18),o(4),l()()),i&2){let e=c();a(4),d(" ",e.item==null?null:e.item.inventory," ")}}function z(i,p){if(i&1&&(r(0,"div",7)(1,"label",19),o(2,"NUI del item"),l(),r(3,"p",20),o(4),l()()),i&2){let e=c();a(4),d(" ",e.item==null?null:e.item.nui," ")}}function D(i,p){if(i&1&&(r(0,"div",7)(1,"label",21),o(2,"Ubicaci\xF3n del item"),l(),r(3,"p",22),o(4),l()()),i&2){let e=c();a(4),d(" ",e.item==null?null:e.item.location," ")}}function P(i,p){if(i&1&&(r(0,"div",7)(1,"label",23),o(2,"Encargado del item"),l(),r(3,"p",24),o(4),l()()),i&2){let e=c();a(4),d(" ",e.item==null?null:e.item.manager," ")}}function M(i,p){if(i&1&&(r(0,"div",7)(1,"label",25),o(2,"Stock del item"),l(),r(3,"p",26),o(4),l()()),i&2){let e=c();a(4),d(" ",e.item==null?null:e.item.stock," ")}}function N(i,p){if(i&1&&(r(0,"div",7)(1,"label",27),o(2,"Formula del item"),l(),r(3,"p",28),o(4),l()()),i&2){let e=c();a(4),d(" ",e.item==null?null:e.item.formula," ")}}function R(i,p){if(i&1&&(r(0,"div",7)(1,"label",29),o(2,"Presentaci\xF3n del item"),l(),r(3,"p",30),o(4),l()()),i&2){let e=c();a(4),d(" ",e.item==null?null:e.item.presentation," ")}}function j(i,p){if(i&1&&(r(0,"div",7)(1,"label",31),o(2,"Lote del item"),l(),r(3,"p",32),o(4),l()()),i&2){let e=c();a(4),d(" ",e.item==null?null:e.item.lot," ")}}function A(i,p){if(i&1&&(r(0,"div",7)(1,"label",33),o(2,"Fecha de caducidad del item"),l(),r(3,"p",34),o(4),l()()),i&2){let e=c();a(4),d(" ",e.item==null?null:e.item.expirationDate," ")}}function L(i,p){if(i&1&&(r(0,"div",7)(1,"label",35),o(2,"Cantidad por unidad del item"),l(),r(3,"p",36),o(4),l()()),i&2){let e=c();a(4),d(" ",e.item==null?null:e.item.quantity," ")}}var W=(()=>{class i{item;static \u0275fac=function(n){return new(n||i)};static \u0275cmp=w({type:i,selectors:[["app-item-show"]],inputs:{item:"item"},standalone:!0,features:[I],decls:26,vars:14,consts:[["id","modalShow","tabindex","-1","aria-labelledby","modalShowLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","modalShowLabel",1,"modal-title","fs-5","h1","ms-2"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"mb-3"],["for","name",1,"fw-bold"],["id","name"],["class","mb-3",4,"ngIf"],["for","brand",1,"form-label","fw-bold"],["id","brand"],["for","model",1,"form-label","fw-bold"],["id","model"],["for","serial",1,"form-label","fw-bold"],["id","serial"],["for","inventory",1,"form-label","fw-bold"],["id","inventory"],["for","nui",1,"form-label","fw-bold"],["id","nui"],["for","location",1,"form-label","fw-bold"],["id","location"],["for","manager",1,"form-label","fw-bold"],["id","manager"],["for","stock",1,"form-label","fw-bold"],["id","stock"],["for","formula",1,"form-label","fw-bold"],["id","formula"],["for","presentation",1,"form-label","fw-bold"],["id","presentation"],["for","lot",1,"form-label","fw-bold"],["id","lot"],["for","expirationDate",1,"form-label","fw-bold"],["id","expirationDate"],["for","quantity",1,"form-label","fw-bold"],["id","quantity"]],template:function(n,t){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),o(5,"Informaci\xF3n del item"),l(),S(6,"button",5),l(),r(7,"div",6)(8,"div",7)(9,"label",8),o(10,"Nombre del item:"),l(),r(11,"p",9),o(12),l()(),_(13,T,5,1,"div",10)(14,F,5,1,"div",10)(15,U,5,1,"div",10)(16,k,5,1,"div",10)(17,z,5,1,"div",10)(18,D,5,1,"div",10)(19,P,5,1,"div",10)(20,M,5,1,"div",10)(21,N,5,1,"div",10)(22,R,5,1,"div",10)(23,j,5,1,"div",10)(24,A,5,1,"div",10)(25,L,5,1,"div",10),l()()()()),n&2&&(a(12),d(" ",t.item==null?null:t.item.name," "),a(),s("ngIf",t.item==null?null:t.item.brand),a(),s("ngIf",t.item==null?null:t.item.model),a(),s("ngIf",t.item==null?null:t.item.serial),a(),s("ngIf",t.item==null?null:t.item.inventory),a(),s("ngIf",t.item==null?null:t.item.nui),a(),s("ngIf",t.item==null?null:t.item.location),a(),s("ngIf",t.item==null?null:t.item.manager),a(),s("ngIf",t.item==null?null:t.item.stock),a(),s("ngIf",t.item==null?null:t.item.formula),a(),s("ngIf",t.item==null?null:t.item.presentation),a(),s("ngIf",t.item==null?null:t.item.lot),a(),s("ngIf",t.item==null?null:t.item.expirationDate),a(),s("ngIf",t.item==null?null:t.item.quantity))},dependencies:[y]})}return i})();export{J as a,W as b};
