import{c as t,a as n}from"./p-7d5dbd9a.js";const e=(t,n,e,r)=>{if("length"===e||"prototype"===e)return;if("arguments"===e||"caller"===e)return;const c=Object.getOwnPropertyDescriptor(t,e),i=Object.getOwnPropertyDescriptor(n,e);!o(c,i)&&r||Object.defineProperty(t,e,i)},o=function(t,n){return void 0===t||t.configurable||t.writable===n.writable&&t.enumerable===n.enumerable&&t.configurable===n.configurable&&(t.writable||t.value===n.value)},r=(t,n)=>`/* Wrapped ${t}*/\n${n}`,c=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),i=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name");var a=()=>{const t={};return t.promise=new Promise(((n,e)=>{t.resolve=n,t.reject=e})),t},u=t((function(t,e){var o=n&&n.__awaiter||function(t,n,e,o){return new(e||(e=Promise))((function(r,c){function i(t){try{u(o.next(t))}catch(n){c(n)}}function a(t){try{u(o.throw(t))}catch(n){c(n)}}function u(t){t.done?r(t.value):new e((function(n){n(t.value)})).then(i,a)}u((o=o.apply(t,n||[])).next())}))},r=n&&n.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const c=r(a);function i(t,n="maxAge"){let e,r,i;const a=()=>o(this,void 0,void 0,(function*(){if(void 0!==e)return;const a=a=>o(this,void 0,void 0,(function*(){i=c.default();const o=a[1][n]-Date.now();return o<=0?(t.delete(a[0]),void i.resolve()):(e=a[0],r=setTimeout((()=>{t.delete(a[0]),i&&i.resolve()}),o),"function"==typeof r.unref&&r.unref(),i.promise)}));try{for(const n of t)yield a(n)}catch(u){}e=void 0})),u=t.set.bind(t);return t.set=(n,o)=>{t.has(n)&&t.delete(n);const c=u(n,o);return e&&e===n&&(e=void 0,void 0!==r&&(clearTimeout(r),r=void 0),void 0!==i&&(i.reject(void 0),i=void 0)),a(),c},a(),t}e.default=i,t.exports=i,t.exports.default=i}));const s=new WeakMap,d=new WeakMap,l=(t,{cacheKey:n,cache:o=new Map,maxAge:a}={})=>{"number"==typeof a&&u(o);const s=function(...e){const r=n?n(e):e[0],c=o.get(r);if(c)return c.data;const i=t.apply(this,e);return o.set(r,{data:i,maxAge:a?Date.now()+a:Number.POSITIVE_INFINITY}),i};return((t,n,{ignoreNonConfigurable:o=!1}={})=>{const{name:a}=t;for(const r of Reflect.ownKeys(n))e(t,n,r,o);((t,n)=>{const e=Object.getPrototypeOf(n);e!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,e)})(t,n),((t,n,e)=>{const o=""===e?"":`with ${e.trim()}() `,a=r.bind(null,o,n.toString());Object.defineProperty(a,"name",i),Object.defineProperty(t,"toString",{...c,value:a})})(t,n,a)})(s,t,{ignoreNonConfigurable:!0}),d.set(s,o),s};l.decorator=(t={})=>(n,e,o)=>{const r=n[e];if("function"!=typeof r)throw new TypeError("The decorated value must be a function");delete o.value,delete o.writable,o.get=function(){if(!s.has(this)){const n=l(r,t);return s.set(this,n),n}return s.get(this)}},l.clear=t=>{const n=d.get(t);if(!n)throw new TypeError("Can't clear a function that was not memoized!");if("function"!=typeof n.clear)throw new TypeError("The cache Map can't be cleared!");n.clear()};var f,v,m=l;!function(t){t.neutral="neutral",t.success="success",t.warn="warn",t.danger="danger"}(f||(f={})),function(t){t.topStart="topStart",t.topCenter="topCenter",t.topEnd="topEnd",t.bottomStart="bottomStart",t.bottomCenter="bottomCenter",t.bottomEnd="bottomEnd"}(v||(v={}));const p=(t={})=>({present:m(((n,e={})=>{var o,r,c,i,a,u;const s=document.createElement("stencila-toast");s.type=null!==(r=null!==(o=e.type)&&void 0!==o?o:t.type)&&void 0!==r?r:f.neutral,s.position=null!==(i=null!==(c=e.position)&&void 0!==c?c:t.position)&&void 0!==i?i:v.topCenter,s.dismissable=null!==(a=e.dismissable)&&void 0!==a?a:t.dismissable,s.duration=null!==(u=e.duration)&&void 0!==u?u:t.duration,s.innerText=n,(t=>{const n=document.querySelector(".stencila-toast-container");if(n)return n;const e=document.createElement("animate-presence");return e.classList.add("stencila-toast-container"),e.setAttribute("aria-live","polite"),e.setAttribute("role","status"),e.setAttribute("aria-relevant","additions"),void 0!==t.position&&e.setAttribute("position",t.position),document.body.append(e),e})(t).append(s)}),{cacheKey:JSON.stringify,maxAge:150})}),b=Object.freeze({__proto__:null,get ToastTypes(){return f},get ToastPositions(){return v},toastController:p});export{v as T,p as a,f as b,b as t}