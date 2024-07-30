import{b as w,f as x,g as U,q as p,r as y}from"./chunk-Y2WJQO3N.js";import{P as d,U as k,V as m,c as h,pa as I,q as f}from"./chunk-6XJW72D3.js";var v=(()=>{let c=class c{constructor(e,t){this.document=e,this.platformId=t,this.documentIsAccessible=x(this.platformId)}static getCookieRegExp(e){let t=e.replace(/([\[\]{}()|=;+?,.*^$])/gi,"\\$1");return new RegExp("(?:^"+t+"|;\\s*"+t+")=(.*?)(?:;|$)","g")}static safeDecodeURIComponent(e){try{return decodeURIComponent(e)}catch{return e}}check(e){return this.documentIsAccessible?(e=encodeURIComponent(e),c.getCookieRegExp(e).test(this.document.cookie)):!1}get(e){if(this.documentIsAccessible&&this.check(e)){e=encodeURIComponent(e);let r=c.getCookieRegExp(e).exec(this.document.cookie);return r[1]?c.safeDecodeURIComponent(r[1]):""}else return""}getAll(){if(!this.documentIsAccessible)return{};let e={},t=this.document;return t.cookie&&t.cookie!==""&&t.cookie.split(";").forEach(r=>{let[s,n]=r.split("=");e[c.safeDecodeURIComponent(s.replace(/^ /,""))]=c.safeDecodeURIComponent(n)}),e}set(e,t,r,s,n,l,g,S){if(!this.documentIsAccessible)return;if(typeof r=="number"||r instanceof Date||s||n||l||g){let E={expires:r,path:s,domain:n,secure:l,sameSite:g||"Lax",partitioned:S};this.set(e,t,E);return}let u=encodeURIComponent(e)+"="+encodeURIComponent(t)+";",i=r||{};if(i.expires)if(typeof i.expires=="number"){let E=new Date(new Date().getTime()+i.expires*1e3*60*60*24);u+="expires="+E.toUTCString()+";"}else u+="expires="+i.expires.toUTCString()+";";i.path&&(u+="path="+i.path+";"),i.domain&&(u+="domain="+i.domain+";"),i.secure===!1&&i.sameSite==="None"&&(i.secure=!0,console.warn(`[ngx-cookie-service] Cookie ${e} was forced with secure flag because sameSite=None.More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`)),i.secure&&(u+="secure;"),i.sameSite||(i.sameSite="Lax"),u+="sameSite="+i.sameSite+";",i.partitioned&&(u+="Partitioned;"),this.document.cookie=u}delete(e,t,r,s,n="Lax"){if(!this.documentIsAccessible)return;let l=new Date("Thu, 01 Jan 1970 00:00:01 GMT");this.set(e,"",{expires:l,path:t,domain:r,secure:s,sameSite:n})}deleteAll(e,t,r,s="Lax"){if(!this.documentIsAccessible)return;let n=this.getAll();for(let l in n)n.hasOwnProperty(l)&&this.delete(l,e,t,r,s)}};c.\u0275fac=function(t){return new(t||c)(k(w),k(I))},c.\u0275prov=d({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();var F=(()=>{class a{apiUrl=`${p.url}/api/auth`;http=m(U);_cookieService=m(v);_sessionService=m(y);showError(o,e){console.log("Error en el archivo: auth.service.ts"),console.log(o,`
	`,p.showErrors?e:"")}logIn(o,e){return h(this,null,function*(){try{let t={username:o,password:e,type:-1},r=yield f(this.http.post(this.apiUrl+"/login",{user:t,keep:!1}));if(r){let{message:s,token:n}=r;if(n)return this._cookieService.set(p.tokenName,n,void 0,"/"),!0;this.showError("Error al hacer el login:",s)}}catch(t){this.showError("Error al realizar la solicitud:",t)}return!1})}logOut(){this._cookieService.deleteAll("/")}getUserInfo(){return h(this,null,function*(){if(this._cookieService.get(p.tokenName)){let e=yield f(this.http.get(this.apiUrl+"/me")),{user:t}=e;if(this._sessionService.setUser(t),e)return t}})}getUsers(){return h(this,null,function*(){try{let o=yield this.http.get(this.apiUrl).toPromise();if(o){let{message:e,users:t}=o;if(t)return t;this.showError("Error al obtener usuarios: ",e)}}catch(o){this.showError("Error al realizar la solicitud:",o)}return[]})}updateUser(o,e){return h(this,null,function*(){try{let t=yield this.http.put(this.apiUrl+"/"+e._id,{user:e}).toPromise();if(t){let{message:r,user:s}=t;if(s)return s;this.showError("Error al actualizar usuario: ",r)}}catch(t){this.showError("Error al realizar la solicitud:",t)}})}deleteUser(o,e){return h(this,null,function*(){try{let t=yield this.http.delete(this.apiUrl+"/"+e).toPromise();if(t){let{message:r,user:s}=t;if(s){let n=o.findIndex(l=>l._id===e);return n!==-1&&o.splice(n,1),s}this.showError("Error al eliminar el usuario:",r)}}catch(t){this.showError("Error al realizar la solicitud:",t)}})}signIn(o,e){return h(this,null,function*(){try{let t=yield f(this.http.post(this.apiUrl+"/signIn",{user:e}));if(t){let{user:r}=t;if(r)return o.push(r),r;this.showError("Error al crear usuario:",t.message)}}catch(t){this.showError("Error al realizar la solicitud:",t)}})}static \u0275fac=function(e){return new(e||a)};static \u0275prov=d({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();export{v as a,F as b};
