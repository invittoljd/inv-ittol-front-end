import{a as D,b as ue}from"./chunk-LXDBTXRH.js";import{a as T}from"./chunk-X56DS3MY.js";import{a as X,b as F}from"./chunk-Q246NPBN.js";import{a as A,b,c as U,d as P,e as x,f as w,g as N,i as Y,j as O,k as W,l as V}from"./chunk-DGV2J3K2.js";import{d as Q,g as me,h as M}from"./chunk-VS5WYRA5.js";import{a as y}from"./chunk-IX6UVRFC.js";import{Da as _,Ea as Z,Fa as l,Ha as r,Ia as n,Ja as d,Ka as H,La as J,Ma as $,Na as u,Oa as q,Pa as o,Qa as C,Ra as h,Sa as de,T as c,Ua as f,V as p,a as se,b as le,ba as L,c as v,ca as G,ja as I,pb as R,qb as k,sa as s,zb as z}from"./chunk-MCQ37Y2Z.js";function Me(i,g){if(i&1&&(H(0),r(1,"div",5)(2,"label",23),o(3,"Fecha de inicio de uso del equipo"),n(),r(4,"p",24),o(5),n()(),r(6,"div",5)(7,"label",25),o(8,"Fecha de termino de uso del equipo"),n(),r(9,"p",26),o(10),n()(),J()),i&2){let t=q();s(5),h(" ",t.getDate(t.request==null?null:t.request.startDate)," "),s(5),h(" ",t.getDate(t.request==null?null:t.request.endDate)," ")}}function xe(i,g){if(i&1&&(r(0,"div",5)(1,"label",27),o(2,"Cantidad solicitada del reactivo"),n(),r(3,"p",28),o(4),n()()),i&2){let t=q();s(4),h(" ",t.request==null?null:t.request.quantity," ")}}var ce=(()=>{class i{requestSelectedEvent=new I;request;setRequestSelected(t){t&&this.requestSelectedEvent.emit(t)}getDate(t){return t?new Date(t).toDateString():"Sin informaci\xF3n"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["app-request-card"]],inputs:{request:"request"},outputs:{requestSelectedEvent:"requestSelectedEvent"},standalone:!0,features:[f],decls:36,vars:7,consts:[[1,"card","mt-3"],[1,"card-header"],[1,"my-2"],[1,"fw-bold"],[1,"card-body"],[1,"mb-3"],["for","title",1,"fw-bold"],["id","title"],["for","about",1,"fw-bold"],["id","about"],["for","date",1,"fw-bold"],["id","date"],[4,"ngIf"],["class","mb-3",4,"ngIf"],["for","status",1,"fw-bold"],["id","status"],[1,"card-footer","d-flex","justify-content-between"],["data-bs-toggle","modal","data-bs-target","#modalDelete","type","button","title","Cancelar solicitud",1,"btn",3,"click"],["src","assets/icons/danger.svg","alt","Eliminar",1,"icon"],["data-bs-toggle","modal","data-bs-target","#modalWarning","type","button","title","Reportar imprevisto con la solicitud",1,"btn",3,"click"],["src","assets/icons/warning.svg","alt","Advertencias",1,"icon"],["data-bs-toggle","modal","data-bs-target","#modalShow","type","button","title","Mostrar informaci\xF3n del Item solicitado",1,"btn",3,"click"],["src","assets/icons/show.svg","alt","Mostrar",1,"icon"],["for","dateStart",1,"fw-bold"],["id","dateStart"],["for","dateEnd",1,"fw-bold"],["id","dateEnd"],["for","quantity",1,"fw-bold"],["id","quantity"]],template:function(a,e){a&1&&(r(0,"div",0)(1,"div",1)(2,"p",2)(3,"span",3),o(4,"ID de la solicitud: "),n(),o(5),n()(),r(6,"div",4)(7,"div",5)(8,"label",6),o(9,"Nombre del Item"),n(),r(10,"p",7),o(11),n()(),r(12,"div",5)(13,"label",8),o(14,"Informaci\xF3n de la solicitud"),n(),r(15,"p",9),o(16),n()(),r(17,"div",5)(18,"label",10),o(19,"Fecha de la solicitud"),n(),r(20,"p",11),o(21),n()(),_(22,Me,11,2,"ng-container",12)(23,xe,5,1,"div",13),r(24,"div",5)(25,"label",14),o(26,"Estatus de la solicitud"),n(),r(27,"p",15),o(28),n()()(),r(29,"div",16)(30,"button",17),u("click",function(){return e.setRequestSelected(e.request)}),d(31,"img",18),n(),r(32,"button",19),u("click",function(){return e.setRequestSelected(e.request)}),d(33,"img",20),n(),r(34,"button",21),u("click",function(){return e.setRequestSelected(e.request)}),d(35,"img",22),n()()()),a&2&&(s(5),C(e.request==null?null:e.request._id),s(6),h(" ",e.request==null||e.request.item==null?null:e.request.item.name," "),s(5),h(" ",e.request==null?null:e.request.about," "),s(5),h(" ",e.getDate(e.request==null?null:e.request.date)," "),s(),l("ngIf",(e.request==null||e.request.item==null?null:e.request.item.type)==1),s(),l("ngIf",(e.request==null||e.request.item==null?null:e.request.item.type)==2&&(e.request==null?null:e.request.quantity)),s(5),h(" ",e.request!=null&&e.request.status?"Aprobado":"Pendiente"," "))},dependencies:[k],styles:[".icon[_ngcontent-%COMP%]{width:2.5rem}.danger[_ngcontent-%COMP%]:hover{background-color:var(--background-color-4)!important}.btn[_ngcontent-%COMP%]:hover{background-color:var(--background-color-3);border:dotted}"]})}return i})();function Ie(i,g){if(i&1&&(r(0,"div",8)(1,"label",32),o(2,"Cantidad solicitada"),n(),r(3,"p",33),o(4),n()()),i&2){let t=q();s(4),h(" ",t.request==null?null:t.request.quantity," ")}}function Re(i,g){if(i&1&&(r(0,"p",41),o(1),n()),i&2){let t=q(2);s(),C(t.status)}}function Fe(i,g){if(i&1&&(r(0,"p",45),o(1),n()),i&2){let t=g.$implicit;s(),C(t._id)}}function De(i,g){if(i&1&&(r(0,"div",42)(1,"p",43),o(2,"ID de las solicitudes aprobadas con conflicto:"),n(),_(3,Fe,2,1,"p",44),n()),i&2){let t=q(2);s(3),l("ngForOf",t.overlappingRequests)}}function Te(i,g){if(i&1){let t=$();H(0),r(1,"div",8)(2,"p",3),o(3,"Revisar disponibilidad en horario:"),n(),_(4,Re,2,1,"p",34)(5,De,4,1,"div",35),r(6,"button",36),u("click",function(){L(t);let e=q();return G(e.checkAvailability())}),o(7," Revisar "),n()(),r(8,"div",8)(9,"label",37),o(10,"Fecha de inicio de uso del equipo"),n(),r(11,"p",38),o(12),n()(),r(13,"div",8)(14,"label",39),o(15,"Fecha de termino de uso del equipo"),n(),r(16,"p",40),o(17),n()(),J()}if(i&2){let t=q();s(4),l("ngIf",t.status),s(),l("ngIf",t.overlappingRequests),s(7),h(" ",t.getDate(t.request==null?null:t.request.startDate)," "),s(5),h(" ",t.getDate(t.request==null?null:t.request.endDate)," ")}}var pe=(()=>{class i{requestSelectedEvent=new I;request;overlappingRequests;status;_requestService=c(D);_waitingModalService=c(M);setRequestSelected(t){t&&this.requestSelectedEvent.emit(t)}setStatus(t,a){return v(this,null,function*(){a&&(yield this._requestService.updateRequest(le(se({},a),{status:t})))&&(a.status=t)})}getDate(t){return t?new Date(t).toDateString():"Sin informaci\xF3n"}checkAvailability(){return v(this,null,function*(){if(this._waitingModalService.setIsWaiting(!0),this.request){let{requests:t}=yield this._requestService.checkAvailability(this.request);!t||t.length==0?this.status="Equipo Disponible":t?(this.status="Equipo Ocupado",this.overlappingRequests=t):this.status="Error al revisar, favor de verificar"}this._waitingModalService.setIsWaiting(!1)})}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["app-request-card-admin"]],inputs:{request:"request"},outputs:{requestSelectedEvent:"requestSelectedEvent"},standalone:!0,features:[f],decls:47,vars:8,consts:[[1,"card","mt-3"],[1,"card-header"],[1,"my-2"],[1,"fw-bold"],[1,"card-body"],[1,"mb-3","text-center"],["for","title",1,"fw-bold","text-danger"],["id","title",1,"h1","text-danger"],[1,"mb-3"],["for","name",1,"fw-bold"],["id","name"],["for","about",1,"fw-bold"],["id","about"],["class","mb-3",4,"ngIf"],["for","date",1,"fw-bold"],["id","date"],[4,"ngIf"],["for","status",1,"fw-bold"],["id","status",1,"h2"],[1,"card-footer"],[1,"row"],[1,"col-12","d-flex","justify-content-between"],["type","button","title","Rechazar Solicitud",1,"btn","btn-custom",3,"click"],["src","assets/icons/reject.svg","alt","Rechazar",1,"icon"],["data-bs-toggle","modal","data-bs-target","#modalDelete","type","button","title","Eliminar solicitud",1,"btn","btn-custom",3,"click"],["src","assets/icons/danger.svg","alt","Eliminar",1,"icon"],["data-bs-toggle","modal","data-bs-target","#modalWarning","type","button","title","Reportar imprevisto con la solicitud",1,"btn","btn-custom",3,"click"],["src","assets/icons/warning.svg","alt","Advertencias",1,"icon"],["data-bs-toggle","modal","data-bs-target","#modalShow","type","button","title","Mostrar informaci\xF3n del Item solicitado",1,"btn","btn-custom",3,"click"],["src","assets/icons/show.svg","alt","Mostrar",1,"icon"],["type","button","title","Aceptar Solicitud",1,"btn","btn-custom",3,"click"],["src","assets/icons/ok.svg","alt","Aceptar",1,"icon"],["for","quantity",1,"fw-bold"],["id","quantity"],["class","text-danger h4",4,"ngIf"],["class","mt-4 mb-5",4,"ngIf"],[1,"btn","btn-outline-danger",3,"click"],["for","startDate",1,"fw-bold"],["id","startDate"],["for","endDate",1,"fw-bold"],["id","endDate"],[1,"text-danger","h4"],[1,"mt-4","mb-5"],[1,"h5"],["class","h6",4,"ngFor","ngForOf"],[1,"h6"]],template:function(a,e){a&1&&(r(0,"div",0)(1,"div",1)(2,"p",2)(3,"span",3),o(4,"ID de la solicitud: "),n(),o(5),n()(),r(6,"div",4)(7,"div",5)(8,"label",6),o(9,"Usuario solicitante"),n(),r(10,"p",7),o(11),n()(),r(12,"div",8)(13,"label",9),o(14,"Nombre del Item"),n(),r(15,"p",10),o(16),n()(),r(17,"div",8)(18,"label",11),o(19,"Informaci\xF3n de la solicitud"),n(),r(20,"p",12),o(21),n()(),_(22,Ie,5,1,"div",13),r(23,"div",8)(24,"label",14),o(25,"Fecha de la solicitud"),n(),r(26,"p",15),o(27),n()(),_(28,Te,18,4,"ng-container",16),r(29,"div",8)(30,"label",17),o(31,"Estatus de la solicitud"),n(),r(32,"p",18),o(33),n()()(),r(34,"div",19)(35,"div",20)(36,"div",21)(37,"button",22),u("click",function(){return e.setRequestSelected(e.request),e.setStatus(!1,e.request)}),d(38,"img",23),n(),r(39,"button",24),u("click",function(){return e.setRequestSelected(e.request)}),d(40,"img",25),n(),r(41,"button",26),u("click",function(){return e.setRequestSelected(e.request)}),d(42,"img",27),n(),r(43,"button",28),u("click",function(){return e.setRequestSelected(e.request)}),d(44,"img",29),n(),r(45,"button",30),u("click",function(){return e.setRequestSelected(e.request),e.setStatus(!0,e.request)}),d(46,"img",31),n()()()()()),a&2&&(s(5),C(e.request==null?null:e.request._id),s(6),h(" ",e.request==null?null:e.request.author," "),s(5),h(" ",e.request==null||e.request.item==null?null:e.request.item.name," "),s(5),h(" ",e.request==null?null:e.request.about," "),s(),l("ngIf",(e.request==null||e.request.item==null?null:e.request.item.type)==2),s(5),h(" ",e.getDate(e.request==null?null:e.request.date)," "),s(),l("ngIf",(e.request==null||e.request.item==null?null:e.request.item.type)==1),s(5),h(" ",e.request!=null&&e.request.status?"Aprobado":"Pendiente"," "))},dependencies:[k,R],styles:[".icon[_ngcontent-%COMP%]{width:2rem}.danger[_ngcontent-%COMP%]:hover{background-color:var(--background-color-4)!important}.btn.btn-custom[_ngcontent-%COMP%]:hover{background-color:var(--background-color-3);border:dotted}"]})}return i})();function Ae(i,g){if(i&1){let t=$();r(0,"app-request-card",4),u("requestSelectedEvent",function(e){L(t);let m=q(2);return G(m.setRequestSelected(e))}),n()}if(i&2){let t=q().$implicit;l("request",t)}}function Ue(i,g){if(i&1){let t=$();r(0,"app-request-card-admin",4),u("requestSelectedEvent",function(e){L(t);let m=q(2);return G(m.setRequestSelected(e))}),n()}if(i&2){let t=q().$implicit;l("request",t)}}function Pe(i,g){if(i&1&&(r(0,"div",2),_(1,Ae,1,1,"app-request-card",3)(2,Ue,1,1,"app-request-card-admin",3),n()),i&2){let t=q();s(),l("ngIf",!t.isAdmin()),s(),l("ngIf",t.isAdmin())}}var fe=(()=>{class i{requestSelectedEvent=new I;requests;_sessionService=c(me);isAdmin(){return this._sessionService.isAdmin()}setRequestSelected(t){this.requestSelectedEvent.emit(t)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["app-request-cards"]],inputs:{requests:"requests"},outputs:{requestSelectedEvent:"requestSelectedEvent"},standalone:!0,features:[f],decls:2,vars:1,consts:[[1,"row","mt-4"],["class","",4,"ngFor","ngForOf"],[1,""],[3,"request","requestSelectedEvent",4,"ngIf"],[3,"requestSelectedEvent","request"]],template:function(a,e){a&1&&(r(0,"div",0),_(1,Pe,3,2,"div",1),n()),a&2&&(s(),l("ngForOf",e.requests))},dependencies:[ce,pe,R,k]})}return i})();var ge=(()=>{class i{requests;request;_requestService=c(D);_alertService=c(T);_waitingModelService=c(M);deleteRequest(){return v(this,null,function*(){this._waitingModelService.setIsWaiting(!0);let t={keep:!1,text:"Error al eliminar Solicitud, favor de revisar",type:y.Danger};this.requests&&this.request?._id&&(yield this._requestService.deleteRequest(this.requests,this.request._id))&&(t={keep:!1,text:"Solicitud eliminada con \xE9xito",type:y.Success}),this._alertService.addAlert(t),this._waitingModelService.setIsWaiting(!1)})}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["app-request-delete"]],inputs:{requests:"requests",request:"request"},standalone:!0,features:[f],decls:10,vars:0,consts:[["id","modalDelete","tabindex","-1","aria-labelledby","modalDeleteLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","modalDeleteLabel",1,"modal-title","fs-5","h1","ms-2"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-footer","justify-content-center"],["data-bs-dismiss","modal","type","button","title","Eliminar",1,"btn","danger",3,"click"],["src","assets/icons/danger.svg","alt","Eliminar",1,"icon"]],template:function(a,e){a&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),o(5,"\xBFEliminar Solicitud?"),n(),d(6,"button",5),n(),r(7,"div",6)(8,"button",7),u("click",function(){return e.deleteRequest()}),d(9,"img",8),n()()()()())},styles:[".icon[_ngcontent-%COMP%]{width:2.5rem}.danger[_ngcontent-%COMP%]:hover{background-color:var(--background-color-4)!important}.btn[_ngcontent-%COMP%]:hover{background-color:var(--background-color-3);border:dotted}"]})}return i})();var ve=(()=>{class i{message;accordionParent="";static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["app-request-message"]],inputs:{message:"message",accordionParent:"accordionParent"},standalone:!0,features:[f],decls:12,vars:7,consts:[[1,"accordion-item"],[1,"accordion-header"],["type","button","data-bs-toggle","collapse","aria-expanded","false",1,"accordion-button","collapsed","h2"],[1,"accordion-collapse","collapse",3,"id"],[1,"accordion-body"],[1,"h4"]],template:function(a,e){a&1&&(r(0,"div",0)(1,"h2",1)(2,"button",2),o(3),n()(),r(4,"div",3)(5,"div",4)(6,"p",5),o(7),n(),r(8,"p"),o(9,"ID: "),r(10,"small"),o(11),n()()()()()),a&2&&(s(2),Z("data-bs-target","#"+(e.message==null?null:e.message._id))("aria-controls",e.message==null?null:e.message._id),s(),h(" ",e.message==null?null:e.message.author," "),s(),l("id",e.message==null?null:e.message._id),Z("data-bs-parent","#"+e.accordionParent),s(3),C(e.message==null?null:e.message.message),s(4),h(" ",e.message==null?null:e.message._id," "))}})}return i})();function Ne(i,g){if(i&1&&d(0,"app-request-message",2),i&2){let t=g.$implicit;l("message",t)}}var _e=(()=>{class i{request;static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["app-request-messages"]],inputs:{request:"request"},standalone:!0,features:[f],decls:2,vars:1,consts:[["id","accordion-parent",1,"accordion","accordion-flush"],["accordionParent","accordion-parent",3,"message",4,"ngFor","ngForOf"],["accordionParent","accordion-parent",3,"message"]],template:function(a,e){a&1&&(r(0,"div",0),_(1,Ne,1,1,"app-request-message",1),n()),a&2&&(s(),l("ngForOf",e.request==null?null:e.request.messages))},dependencies:[ve,R]})}return i})();var be=(()=>{class i{request;static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["app-request-warning-messages"]],inputs:{request:"request"},standalone:!0,features:[f],decls:9,vars:1,consts:[["id","modalWarningMessages","tabindex","-1","aria-labelledby","modalWarningMessagesLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","modalWarningMessagesLabel",1,"modal-title","fs-5","h1","ms-2"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[3,"request"]],template:function(a,e){a&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),o(5,"Historial de reportes de la solicitud"),n(),d(6,"button",5),n(),r(7,"div",6),d(8,"app-request-messages",7),n()()()()),a&2&&(s(8),l("request",e.request))},dependencies:[_e]})}return i})();var Se=(()=>{class i{request;formMessageNew=new x({});_requestService=c(D);_alertService=c(T);ngOnInit(){this.formMessageNew=new x({message:new w("",[b.required,b.minLength(1),b.maxLength(255)])})}sendMessage(){return v(this,null,function*(){let t={keep:!1,text:"Error al enviar mensaje, favor de revisar",type:y.Danger};if(this.request&&this.formMessageNew.valid){let{message:a}=this.formMessageNew.value;(yield this._requestService.addMessage(this.request,a))&&(this.formMessageNew.reset(),t={keep:!1,text:"Mensaje enviado con \xE9xito",type:y.Success})}this._alertService.addAlert(t)})}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["app-request-warning"]],inputs:{request:"request"},standalone:!0,features:[f],decls:18,vars:4,consts:[["id","modalWarning","tabindex","-1","aria-labelledby","modalWarningLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","modalWarningLabel",1,"modal-title","fs-5","h1","ms-2"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body",3,"formGroup"],[1,"mb-3"],["for","message",1,"form-label"],["formControlName","message","id","message","rows","3",1,"form-control",3,"maxLength","minLength"],[1,"modal-footer","justify-content-between"],["data-bs-toggle","modal","data-bs-target","#modalWarningMessages","type","button","title","Mostrar mensajes enviados",1,"btn"],["src","assets/icons/history.svg","alt","Mostrar",1,"icon"],["type","button","title","Enviar mensaje al/los administrador(es)",1,"btn",3,"click"],["src","assets/icons/send.svg","alt","Enviar",1,"icon"],[3,"request"]],template:function(a,e){a&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),o(5,"Reportar imprevisto con la solicitud"),n(),d(6,"button",5),n(),r(7,"form",6)(8,"div",7)(9,"label",8),o(10,"Mensaje de reporte: "),n(),d(11,"textarea",9),n()(),r(12,"div",10)(13,"button",11),d(14,"img",12),n(),r(15,"button",13),u("click",function(){return e.sendMessage()}),d(16,"img",14),n()()()()(),d(17,"app-request-warning-messages",15)),a&2&&(s(7),l("formGroup",e.formMessageNew),s(4),l("maxLength",255)("minLength",1),s(6),l("request",e.request))},dependencies:[be,V,N,A,U,P,O,W],styles:[".icon[_ngcontent-%COMP%]{width:2.5rem}.btn[_ngcontent-%COMP%]:hover{background-color:var(--background-color-3);border:dotted}"]})}return i})();var he=(()=>{class i{requests;filteredRequests;requestSelected;filterValue="pending";searchTerm="";_requestService=c(D);_waitingModalService=c(M);ngOnInit(){return v(this,null,function*(){this._waitingModalService.setIsWaiting(!0),this.requests=yield this._requestService.getRequests(),this.applySearchTerm(),this._waitingModalService.setIsWaiting(!1)})}setRequestSelected(t){this.requestSelected=t}filterRequests(t){return v(this,null,function*(){this._waitingModalService.setIsWaiting(!0),this.filterValue=t.target.value,this.requests=yield this._requestService.getRequests(),this.applySearchTerm(),this._waitingModalService.setIsWaiting(!1)})}searchRequests(t){this.searchTerm=t.target.value.toLowerCase(),this.applySearchTerm()}applySearchTerm(){this.filterValue=="all"?this.filteredRequests=this.requests:this.filterValue=="pending"?this.filteredRequests=this.requests?.filter(t=>t.status==!1):this.filterValue=="approved"&&(this.filteredRequests=this.requests?.filter(t=>t.status==!0)),this.filteredRequests=this.filteredRequests?.filter(t=>t._id?.toLowerCase().includes(this.searchTerm)||t.author?.toLowerCase().includes(this.searchTerm))}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["app-request-page"]],standalone:!0,features:[f],decls:26,vars:5,consts:[[1,"container"],[1,"col-12"],[1,"custom-header","p-5","rounded","mt-3"],[1,"title","fw-bold","text-center"],[1,"col-12","mt-3"],[1,"d-flex","justify-content-center"],["role","group","aria-label","Filtro de solicitudes",1,"btn-group"],["type","radio","name","filterOptions","id","filterAll","value","all",1,"btn-check",3,"change"],["for","filterAll",1,"btn","btn-outline-dark"],["type","radio","name","filterOptions","id","filterPending","value","pending","checked","",1,"btn-check",3,"change"],["for","filterPending",1,"btn","btn-outline-dark"],["type","radio","name","filterOptions","id","filterApproved","value","approved",1,"btn-check",3,"change"],["for","filterApproved",1,"btn","btn-outline-dark"],[1,"row","justify-content-center"],[1,"col-12","col-lg-8","mt-3"],["type","text","placeholder","Buscar por id o nombre de usuario",1,"form-control","text-center",3,"input"],[1,"row"],[3,"requestSelectedEvent","requests"],[3,"item"],[3,"requests","request"],[3,"request"]],template:function(a,e){a&1&&(r(0,"main",0)(1,"div",1)(2,"div",2)(3,"p",3),o(4,"Solicitudes"),n()()(),r(5,"div",4)(6,"div",5)(7,"div",6)(8,"input",7),u("change",function(S){return e.filterRequests(S)}),n(),r(9,"label",8),o(10,"Todas"),n(),r(11,"input",9),u("change",function(S){return e.filterRequests(S)}),n(),r(12,"label",10),o(13,"Pendientes"),n(),r(14,"input",11),u("change",function(S){return e.filterRequests(S)}),n(),r(15,"label",12),o(16,"Aprobadas"),n()()(),r(17,"div",13)(18,"div",14)(19,"input",15),u("input",function(S){return e.searchRequests(S)}),n()()()(),r(20,"div",1)(21,"div",16)(22,"app-request-cards",17),u("requestSelectedEvent",function(S){return e.setRequestSelected(S)}),n()()()(),d(23,"app-item-show",18)(24,"app-request-delete",19)(25,"app-request-warning",20)),a&2&&(s(22),l("requests",e.filteredRequests),s(),l("item",e.requestSelected==null?null:e.requestSelected.item),s(),l("requests",e.filteredRequests)("request",e.requestSelected),s(),l("request",e.requestSelected))},dependencies:[fe,ue,ge,Se],styles:["p[_ngcontent-%COMP%]{text-align:justify}.title[_ngcontent-%COMP%]{font-size:2rem}.custom-header[_ngcontent-%COMP%]{background-color:#fff6}"]})}return i})();function Oe(i,g){i&1&&(r(0,"p",9),o(1," Visitante "),n())}function We(i,g){i&1&&(r(0,"p",9),o(1," Administrador "),n())}function Ve(i,g){i&1&&(r(0,"p",9),o(1," Usuario "),n())}var qe=(()=>{class i{userSelectedEvent=new I;user;getAdminType(){return z.typeAdmin}setUserSelected(t){t&&this.userSelectedEvent.emit(t)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["app-user-card"]],inputs:{user:"user"},outputs:{userSelectedEvent:"userSelectedEvent"},standalone:!0,features:[f],decls:12,vars:4,consts:[[1,"card","border-dark","mt-3"],[1,"card-header"],["class","h4 text-center",4,"ngIf"],[1,"card-body"],[1,"h2","text-center"],[1,"card-footer"],[1,"d-flex","justify-content-center",3,"click"],["data-bs-toggle","modal","data-bs-target","#modalEdit","type","button","title","Modificar",1,"btn"],["src","assets/icons/edit.svg","alt","Editar",1,"icon"],[1,"h4","text-center"]],template:function(a,e){a&1&&(r(0,"div",0)(1,"div",1),_(2,Oe,2,0,"p",2)(3,We,2,0,"p",2)(4,Ve,2,0,"p",2),n(),r(5,"div",3)(6,"p",4),o(7),n()(),r(8,"div",5)(9,"div",6),u("click",function(){return e.setUserSelected(e.user)}),r(10,"button",7),d(11,"img",8),n()()()()),a&2&&(s(2),l("ngIf",(e.user==null?null:e.user.type)==0),s(),l("ngIf",(e.user==null?null:e.user.type)==e.getAdminType()),s(),l("ngIf",(e.user==null?null:e.user.type)!=e.getAdminType()&&(e.user==null?null:e.user.type)!=0),s(3),C(e.user==null?null:e.user.username))},dependencies:[k],styles:[".icon[_ngcontent-%COMP%]{width:1.25rem}.btn[_ngcontent-%COMP%]:hover{background-color:var(--background-color-3)}"]})}return i})();function je(i,g){if(i&1){let t=$();r(0,"div",2)(1,"app-user-card",3),u("userSelectedEvent",function(e){L(t);let m=q();return G(m.setUserSelected(e))}),n()()}if(i&2){let t=g.$implicit;s(),l("user",t)}}var Ce=(()=>{class i{userSelectedEvent=new I;users;setUserSelected(t){this.userSelectedEvent.emit(t)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["app-user-cards"]],inputs:{users:"users"},outputs:{userSelectedEvent:"userSelectedEvent"},standalone:!0,features:[f],decls:2,vars:1,consts:[[1,"row"],["class","col-6 col-md-4 col-lg-3",4,"ngFor","ngForOf"],[1,"col-6","col-md-4","col-lg-3"],[3,"userSelectedEvent","user"]],template:function(a,e){a&1&&(r(0,"div",0),_(1,je,2,1,"div",1),n()),a&2&&(s(),l("ngForOf",e.users))},dependencies:[R,qe]})}return i})();function Le(i,g){i&1&&(r(0,"div",7)(1,"label",21),o(2,"Tipo de usuario:"),n(),r(3,"div",22),d(4,"input",23),r(5,"label",24),o(6,"Administrador"),n(),d(7,"input",25),r(8,"label",26),o(9,"Usuario"),n(),d(10,"input",27),r(11,"label",28),o(12,"Visitante"),n()()())}function Ge(i,g){i&1&&(H(0),r(1,"div",7)(2,"label",29),o(3,"Nueva contrase\xF1a"),n(),d(4,"input",30),n(),r(5,"div",7)(6,"label",31),o(7,"Confirmar contrase\xF1a"),n(),d(8,"input",32),n(),J())}var ye=(()=>{class i{users;user;formUser=new x({});_alertService=c(T);_authService=c(F);_waitingModalService=c(M);isPasswordChangeChecked=!1;isTypeChangeChecked=!1;ngOnInit(){return v(this,null,function*(){this.formUser=new x({type:new w("",[b.min(0)]),password:new w("",[b.minLength(4),b.maxLength(20)]),passwordConfirm:new w("",[b.minLength(4),b.maxLength(20)])})})}sendUser(){return v(this,null,function*(){this._waitingModalService.setIsWaiting(!0);let t={keep:!1,text:"Error al modificar usuario, favor de revisar",type:y.Danger};if(this.formUser.valid&&this.users&&this.user){let a=!0,{type:e,password:m,passwordConfirm:S}=this.formUser.value;e!=null&&(this.user.type=e),m&&S&&(m===S?this.user.password=m:a=!1),e>=0&&a&&(yield this._authService.updateUser(this.users,this.user))&&(this.formUser.reset(),t={keep:!1,text:"Usuario actualizado con \xE9xito",type:y.Success})}this._alertService.addAlert(t),this._waitingModalService.setIsWaiting(!1)})}deleteUser(){return v(this,null,function*(){this._waitingModalService.setIsWaiting(!0);let t={keep:!1,text:"Error al eliminar Usuario, favor de revisar",type:y.Danger};this.users&&this.user?._id&&(yield this._authService.deleteUser(this.users,this.user._id))&&(t={keep:!1,text:"Usuario eliminado con \xE9xito",type:y.Success}),this._alertService.addAlert(t),this._waitingModalService.setIsWaiting(!1)})}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["app-user-edit"]],inputs:{users:"users",user:"user"},standalone:!0,features:[f],decls:26,vars:4,consts:[["id","modalEdit","tabindex","-1","aria-labelledby","modalEditLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","modalEditLabel",1,"modal-title","fs-5","h1","ms-2"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body",3,"submit","formGroup"],[1,"mb-3"],[1,"h2"],[1,"form-check","form-switch","mb-3"],["type","checkbox","role","switch","id","changeAccess",1,"form-check-input",3,"change"],["for","changeAccess",1,"form-check-label"],["class","mb-3",4,"ngIf"],["type","checkbox","role","switch","id","changePassword",1,"form-check-input",3,"change"],["for","changePassword",1,"form-check-label"],[4,"ngIf"],[1,"modal-footer","justify-content-between"],["data-bs-dismiss","modal","type","button","title","Eliminar",1,"btn","danger",3,"click"],["src","assets/icons/danger.svg","alt","Eliminar",1,"icon"],["data-bs-dismiss","modal","type","submit","title","Editar",1,"btn",3,"click"],["src","assets/icons/ok.svg","alt","Aceptar",1,"icon"],["for","name"],["role","group","aria-label","Filtro de solicitudes",1,"btn-group"],["type","radio","formControlName","type","name","type","id","admin","value","1",1,"btn-check"],["for","admin",1,"btn","btn-outline-dark"],["type","radio","formControlName","type","name","type","id","user","value","2",1,"btn-check"],["for","user",1,"btn","btn-outline-dark"],["type","radio","formControlName","type","name","type","id","guest","value","0",1,"btn-check"],["for","guest",1,"btn","btn-outline-dark"],["for","password"],["formControlName","password","type","password","id","password","placeholder","Nueva contrase\xF1a",1,"form-control"],["for","passwordConfirm"],["formControlName","passwordConfirm","type","password","id","passwordConfirm","placeholder","Confirmar contrase\xF1a",1,"form-control"]],template:function(a,e){a&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),o(5,"Editar usuario:"),n(),d(6,"button",5),n(),r(7,"form",6),u("submit",function(){return e.sendUser()}),r(8,"div",7)(9,"p",8),o(10),n()(),r(11,"div",9)(12,"input",10),u("change",function(){return e.isTypeChangeChecked=!e.isTypeChangeChecked}),n(),r(13,"label",11),o(14,"\xBFCambiar acceso?"),n()(),_(15,Le,13,0,"div",12),r(16,"div",9)(17,"input",13),u("change",function(){return e.isPasswordChangeChecked=!e.isPasswordChangeChecked}),n(),r(18,"label",14),o(19,"\xBFCambiar contrase\xF1a?"),n()(),_(20,Ge,9,0,"ng-container",15),n(),r(21,"div",16)(22,"button",17),u("click",function(){return e.deleteUser()}),d(23,"img",18),n(),r(24,"button",19),u("click",function(){return e.sendUser()}),d(25,"img",20),n()()()()()),a&2&&(s(7),l("formGroup",e.formUser),s(3),C(e.user==null?null:e.user.username),s(5),l("ngIf",e.isTypeChangeChecked),s(5),l("ngIf",e.isPasswordChangeChecked))},dependencies:[V,N,A,Y,U,P,O,W,k],styles:[".img[_ngcontent-%COMP%]:hover, .selected[_ngcontent-%COMP%]{background-color:var(--background-color-3)}.img[_ngcontent-%COMP%]{width:4rem;cursor:pointer;border:none}.icon[_ngcontent-%COMP%]{width:2.5rem}.btn[_ngcontent-%COMP%]:hover{background-color:var(--background-color-3);border:dotted}"]})}return i})();var Ee=(()=>{class i{users;_authService=c(F);_alertService=c(T);formUser=new x({});ngOnInit(){return v(this,null,function*(){this.formUser=new x({username:new w("",[b.required,b.min(0)]),type:new w("",[b.required,b.min(0)]),password:new w("",[b.required,b.minLength(4),b.maxLength(20)]),passwordConfirm:new w("",[b.required,b.minLength(4),b.maxLength(20)])})})}sendUser(){return v(this,null,function*(){let t={keep:!1,text:"Error al agregar usuario, favor de revisar",type:y.Danger};if(this.formUser.valid&&this.users){let{username:a,type:e,password:m,passwordConfirm:S}=this.formUser.value;if(m===S){let j={username:a,type:e,password:m};(yield this._authService.signIn(this.users,j))&&(this.formUser.reset(),t={keep:!1,text:"Usuario agregado con \xE9xito",type:y.Success})}}this._alertService.addAlert(t)})}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["app-user-add"]],inputs:{users:"users"},standalone:!0,features:[f],decls:37,vars:1,consts:[["id","modalAddArea","tabindex","-1","aria-labelledby","modalAddAreaLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","modalAddAreaLabel",1,"modal-title","fs-5","h1","ms-2"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body",3,"ngSubmit","formGroup"],[1,"mb-3"],["for","username"],["formControlName","username","type","text","id","username","placeholder","Nombre de usuario",1,"form-control"],["for","name"],[1,"d-flex","flex-wrap","justify-content-center"],["role","group","aria-label","Filtro de solicitudes",1,"btn-group"],["type","radio","formControlName","type","name","type","id","admin","value","1",1,"btn-check"],["for","admin",1,"btn","btn-outline-dark"],["type","radio","formControlName","type","name","type","id","user","value","2",1,"btn-check"],["for","user",1,"btn","btn-outline-dark"],["type","radio","formControlName","type","name","type","id","guest","value","0",1,"btn-check"],["for","guest",1,"btn","btn-outline-dark"],["for","password"],["formControlName","password","type","password","id","password","placeholder","Nueva contrase\xF1a",1,"form-control"],["for","passwordConfirm"],["formControlName","passwordConfirm","type","password","id","passwordConfirm","placeholder","Confirmar contrase\xF1a",1,"form-control"],[1,"modal-footer"],["data-bs-dismiss","modal","type","submit","title","Agregar",1,"btn",3,"click"],["src","assets/icons/ok.svg","alt","",1,"icon"]],template:function(a,e){a&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),o(5,"Agregar Usuario"),n(),d(6,"button",5),n(),r(7,"form",6),u("ngSubmit",function(){return e.sendUser()}),r(8,"div",7)(9,"label",8),o(10,"Nombre de usuario"),n(),d(11,"input",9),n(),r(12,"div",7)(13,"label",10),o(14,"Tipo de usuario:"),n(),r(15,"div",11)(16,"div",12),d(17,"input",13),r(18,"label",14),o(19,"Administrador"),n(),d(20,"input",15),r(21,"label",16),o(22,"Usuario"),n(),d(23,"input",17),r(24,"label",18),o(25,"Visitante"),n()()()(),r(26,"div",7)(27,"label",19),o(28,"Nueva contrase\xF1a"),n(),d(29,"input",20),n(),r(30,"div",7)(31,"label",21),o(32,"Confirmar contrase\xF1a"),n(),d(33,"input",22),n()(),r(34,"div",23)(35,"button",24),u("click",function(){return e.sendUser()}),d(36,"img",25),n()()()()()),a&2&&(s(7),l("formGroup",e.formUser))},dependencies:[V,N,A,Y,U,P,O,W],styles:[".img[_ngcontent-%COMP%]:hover, .selected[_ngcontent-%COMP%]{background-color:var(--background-color-3)}.img[_ngcontent-%COMP%]{width:4rem;cursor:pointer;border:none}.icon[_ngcontent-%COMP%]{width:2.5rem}.btn[_ngcontent-%COMP%]:hover{background-color:var(--background-color-3);border:dotted}"]})}return i})();var we=(()=>{class i{users;userSelected;_authService=c(F);_waitingModalService=c(M);ngOnInit(){return v(this,null,function*(){this._waitingModalService.setIsWaiting(!0),this.users=yield this._authService.getUsers(),this._waitingModalService.setIsWaiting(!1)})}setUserSelected(t){this.userSelected=t}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["app-user-page"]],standalone:!0,features:[f],decls:14,vars:4,consts:[[1,"container"],[1,"col-12"],[1,"custom-header","p-5","rounded","text-center","mt-3"],[1,"title","fw-bold"],[1,"row"],["data-bs-toggle","modal","data-bs-target","#modalAddArea",1,"btn","mt-4","mb-2"],["src","assets/icons/add.svg","alt","Agregar \xC1rea","title","Agregar Usuario",1,"icon"],[3,"userSelectedEvent","users"],[3,"users","user"],[3,"users"]],template:function(a,e){a&1&&(r(0,"main",0)(1,"div",1)(2,"div",2)(3,"p",3),o(4,"Usuarios"),n()()(),r(5,"div",1)(6,"div",4)(7,"div",1)(8,"button",5),d(9,"img",6),n()(),r(10,"div",1)(11,"app-user-cards",7),u("userSelectedEvent",function(S){return e.setUserSelected(S)}),n()()()()(),d(12,"app-user-edit",8)(13,"app-user-add",9)),a&2&&(s(11),l("users",e.users),s(),l("users",e.users)("user",e.userSelected),s(),l("users",e.users))},dependencies:[Ce,ye,Ee],styles:[".title[_ngcontent-%COMP%]{font-size:2rem}.custom-header[_ngcontent-%COMP%]{background-color:#fff6}.img[_ngcontent-%COMP%]:hover{background:#00000080}.img[_ngcontent-%COMP%]{cursor:pointer}.icon[_ngcontent-%COMP%]{width:2.5rem}.btn[_ngcontent-%COMP%]:hover{background-color:var(--background-color-3)}"]})}return i})();function $e(i,g){if(i&1&&(r(0,"p"),o(1),n()),i&2){let t=g.$implicit;s(),de(" ",t.item==null?null:t.item.name," (User: ",t.author,") (ID: ",t._id,") ")}}function ze(i,g){if(i&1&&(r(0,"tr")(1,"th",18),o(2),n(),r(3,"td",19),_(4,$e,2,3,"p",17),n()()),i&2){let t=g.$implicit;s(2),C(t.time),s(2),l("ngForOf",t.requests)}}function Be(i,g){if(i&1&&(r(0,"div",1)(1,"div",4)(2,"div",12)(3,"table",13)(4,"thead",14)(5,"tr")(6,"th",15),o(7,"Hora"),n(),r(8,"th",15),o(9,"Informaci\xF3n"),n()()(),r(10,"tbody",16),_(11,ze,5,2,"tr",17),n()()()()()),i&2){let t=q();s(11),l("ngForOf",t.schedule)}}function He(i,g){i&1&&(r(0,"div",20),o(1," No se encontraron solicitudes para esta fecha. "),n())}var ke=(()=>{class i{requests;schedule=[];formDate=new x({});_waitingModalService=c(M);_requestService=c(D);ngOnInit(){let a=new Date().toISOString().substring(0,10);this.formDate=new x({date:new w(a,[b.required])})}submit(){return v(this,null,function*(){if(this.formDate.valid){let{date:t}=this.formDate.value;this._waitingModalService.setIsWaiting(!0),this.requests=yield this._requestService.getRequestsToday(t),this.generateSchedule(this.requests,t),this._waitingModalService.setIsWaiting(!1)}})}generateSchedule(t,a){let e=[],[m,S,j]=a.split("-").map(Number),ie=new Date(m,S-1,j);for(let B=0;B<24;B++){let re=new Date(ie);re.setHours(B,0,0,0);let ae=new Date(ie);ae.setHours(B+1,0,0,0);let oe=t.filter(K=>K.startDate&&K.endDate?new Date(K.startDate).getTime()<ae.getTime()&&new Date(K.endDate).getTime()>re.getTime():!1);oe.length>0&&e.push({time:`${B}:00 - ${B+1}:00`,requests:oe})}this.schedule=e}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["app-itinerary-page"]],standalone:!0,features:[f],decls:13,vars:3,consts:[[1,"container-fluid","mt-4","p-4","custom-background","rounded"],[1,"row"],[1,"col-12","mb-4"],[1,"h1","text-center"],[1,"col-12"],[1,"row","justify-content-center",3,"submit","formGroup"],[1,"col-12","col-md-6","col-lg-3","mb-3","mb-lg-0"],["formControlName","date","type","date","name","date","id","date",1,"form-control","text-center"],[1,"col-12","col-md-auto","mt-3","mt-md-0","d-flex","justify-content-center"],["type","submit","name","submit","id","submit","value","Obtener",1,"btn","btn-lg","btn-outline-dark"],["class","row",4,"ngIf"],["class","alert alert-info mt-4",4,"ngIf"],[1,"table-responsive"],[1,"table","table-bordered","mt-4","table-striped"],[1,"table-dark","text-center"],["scope","col"],[1,"text-center"],[4,"ngFor","ngForOf"],["scope","row"],[1,"text-break"],[1,"alert","alert-info","mt-4"]],template:function(a,e){a&1&&(r(0,"main",0)(1,"div",1)(2,"div",2)(3,"p",3),o(4,"Itinerario del d\xEDa"),n()(),r(5,"div",4)(6,"form",5),u("submit",function(){return e.submit()}),r(7,"div",6),d(8,"input",7),n(),r(9,"div",8),d(10,"input",9),n()()()(),_(11,Be,12,1,"div",10)(12,He,2,0,"div",11),n()),a&2&&(s(6),l("formGroup",e.formDate),s(5),l("ngIf",e.schedule.length>0),s(),l("ngIf",e.schedule.length===0))},dependencies:[V,N,A,U,P,O,W,k,R]})}return i})();var te=(i,g)=>v(void 0,null,function*(){let t=c(X),a=c(Q);if(t.get(z.tokenName)){let S=yield c(F).getUserInfo(),{type:j}=S;if(j==z.typeAdmin)return!0}return a.navigate(["/","auth"]),!1});var ne=(i,g)=>v(void 0,null,function*(){let t=c(X),a=c(Q);if(t.get(z.tokenName)){let S=yield c(F).getUserInfo(),{type:j}=S;if(j)return!0}return a.navigate(["/","auth"]),!1});var _i=[{path:"inventory",loadChildren:()=>import("./chunk-JRSXH3CS.js").then(i=>i.routes)},{path:"request",component:he,canActivate:[ne]},{path:"itinerary",component:ke,canActivate:[ne]},{path:"user",component:we,canActivate:[te]},{path:"data",loadChildren:()=>import("./chunk-B6VBARVF.js").then(i=>i.routes),canActivate:[te]},{path:"**",redirectTo:"inventory"}];export{_i as routes};
