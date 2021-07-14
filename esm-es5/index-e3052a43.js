var __extends=this&&this.__extends||function(){var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]};return e(t,n)};return function(t,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();var __awaiter=this&&this.__awaiter||function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(r.next(e))}catch(t){o(t)}}function i(e){try{l(r["throw"](e))}catch(t){o(t)}}function l(e){e.done?n(e.value):a(e.value).then(s,i)}l((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,a,o,s;return s={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function i(e){return function(t){return l([e,t])}}function l(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,a&&(o=s[0]&2?a["return"]:s[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,s[1])).done)return o;if(a=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;a=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(i){s=[6,i];a=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e};var NAMESPACE="stencila-components";var scopeId;var contentRef;var hostTagName;var useNativeShadowDom=false;var checkSlotFallbackVisibility=false;var checkSlotRelocate=false;var isSvgMode=false;var queuePending=false;var win=typeof window!=="undefined"?window:{};var doc=win.document||{head:{}};var plt={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}};var promiseResolve=function(e){return Promise.resolve(e)};var supportsConstructibleStylesheets=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replace==="function"}catch(e){}return false}();var Context={};var addHostEventListeners=function(e,t,n,r){if(n){n.map((function(n){var r=n[0],a=n[1],o=n[2];var s=getHostListenerTarget(e,r);var i=hostListenerProxy(t,o);var l=hostListenerOpts(r);plt.ael(s,a,i,l);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return plt.rel(s,a,i,l)}))}))}};var hostListenerProxy=function(e,t){return function(n){try{{if(e.$flags$&256){e.$lazyInstance$[t](n)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}}}catch(r){consoleError(r)}}};var getHostListenerTarget=function(e,t){if(t&8)return win;return e};var hostListenerOpts=function(e){return(e&2)!==0};var HYDRATED_CSS="{visibility:hidden}.hydrated{visibility:inherit}";var XLINK_NS="http://www.w3.org/1999/xlink";var createTime=function(e,t){if(t===void 0){t=""}{return function(){return}}};var uniqueTime=function(e,t){{return function(){return}}};var rootAppliedStyles=new WeakMap;var registerStyle=function(e,t,n){var r=styles.get(e);if(supportsConstructibleStylesheets&&n){r=r||new CSSStyleSheet;r.replace(t)}else{r=t}styles.set(e,r)};var addStyle=function(e,t,n,r){var a=getScopeId(t,n);var o=styles.get(a);e=e.nodeType===11?e:doc;if(o){if(typeof o==="string"){e=e.head||e;var s=rootAppliedStyles.get(e);var i=void 0;if(!s){rootAppliedStyles.set(e,s=new Set)}if(!s.has(a)){{{i=doc.createElement("style");i.innerHTML=o}e.insertBefore(i,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(o)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets),[o])}}return a};var attachStyles=function(e){var t=e.$cmpMeta$;var n=e.$hostElement$;var r=t.$flags$;var a=createTime("attachStyles",t.$tagName$);var o=addStyle(n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$);if(r&10){n["s-sc"]=o;n.classList.add(o+"-h");if(r&2){n.classList.add(o+"-s")}}a()};var getScopeId=function(e,t){return"sc-"+(t&&e.$flags$&32?e.$tagName$+"-"+t:e.$tagName$)};var computeMode=function(e){return modeResolutionChain.map((function(t){return t(e)})).find((function(e){return!!e}))};var setMode=function(e){return modeResolutionChain.push(e)};var EMPTY_OBJ={};var SVG_NS="http://www.w3.org/2000/svg";var HTML_NS="http://www.w3.org/1999/xhtml";var isDef=function(e){return e!=null};var isComplexType=function(e){e=typeof e;return e==="object"||e==="function"};var h=function(e,t){var n=[];for(var r=2;r<arguments.length;r++){n[r-2]=arguments[r]}var a=null;var o=null;var s=null;var i=false;var l=false;var c=[];var f=function(t){for(var n=0;n<t.length;n++){a=t[n];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!isComplexType(a)){a=String(a)}if(i&&l){c[c.length-1].$text$+=a}else{c.push(i?newVNode(null,a):a)}l=i}}};f(n);if(t){if(t.key){o=t.key}if(t.name){s=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,c,vdomFnUtils)}var $=newVNode(e,null);$.$attrs$=t;if(c.length>0){$.$children$=c}{$.$key$=o}{$.$name$=s}return $};var newVNode=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{n.$attrs$=null}{n.$key$=null}{n.$name$=null}return n};var Host={};var isHost=function(e){return e&&e.$tag$===Host};var vdomFnUtils={forEach:function(e,t){return e.map(convertToPublic).forEach(t)},map:function(e,t){return e.map(convertToPublic).map(t).map(convertToPrivate)}};var convertToPublic=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var convertToPrivate=function(e){if(typeof e.vtag==="function"){var t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return h.apply(void 0,__spreadArray([e.vtag,t],e.vchildren||[]))}var n=newVNode(e.vtag,e.vtext);n.$attrs$=e.vattrs;n.$children$=e.vchildren;n.$key$=e.vkey;n.$name$=e.vname;return n};var setAccessor=function(e,t,n,r,a,o){if(n!==r){var s=isMemberInElement(e,t);var i=t.toLowerCase();if(t==="class"){var l=e.classList;var c=parseClassList(n);var f=parseClassList(r);l.remove.apply(l,c.filter((function(e){return e&&!f.includes(e)})));l.add.apply(l,f.filter((function(e){return e&&!c.includes(e)})))}else if(t==="style"){{for(var u in n){if(!r||r[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in r){if(!n||r[u]!==n[u]){if(u.includes("-")){e.style.setProperty(u,r[u])}else{e.style[u]=r[u]}}}}else if(t==="key");else if(t==="ref"){if(r){r(e)}}else if(!s&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(isMemberInElement(win,i)){t=i.slice(2)}else{t=i[2]+t.slice(3)}if(n){plt.rel(e,t,n,false)}if(r){plt.ael(e,t,r,false)}}else{var $=isComplexType(r);if((s||$&&r!==null)&&!a){try{if(!e.tagName.includes("-")){var d=r==null?"":r;if(t==="list"){s=false}else if(n==null||e[t]!=d){e[t]=d}}else{e[t]=r}}catch(p){}}var v=false;{if(i!==(i=i.replace(/^xlink\:?/,""))){t=i;v=true}}if(r==null||r===false){if(r!==false||e.getAttribute(t)===""){if(v){e.removeAttributeNS(XLINK_NS,t)}else{e.removeAttribute(t)}}}else if((!s||o&4||a)&&!$){r=r===true?"":r;if(v){e.setAttributeNS(XLINK_NS,t,r)}else{e.setAttribute(t,r)}}}}};var parseClassListRegex=/\s/;var parseClassList=function(e){return!e?[]:e.split(parseClassListRegex)};var updateElement=function(e,t,n,r){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var o=e&&e.$attrs$||EMPTY_OBJ;var s=t.$attrs$||EMPTY_OBJ;{for(r in o){if(!(r in s)){setAccessor(a,r,o[r],undefined,n,t.$flags$)}}}for(r in s){setAccessor(a,r,o[r],s[r],n,t.$flags$)}};var createElm=function(e,t,n,r){var a=t.$children$[n];var o=0;var s;var i;var l;if(!useNativeShadowDom){checkSlotRelocate=true;if(a.$tag$==="slot"){if(scopeId){r.classList.add(scopeId+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){s=a.$elm$=doc.createTextNode(a.$text$)}else if(a.$flags$&1){s=a.$elm$=doc.createTextNode("")}else{if(!isSvgMode){isSvgMode=a.$tag$==="svg"}s=a.$elm$=doc.createElementNS(isSvgMode?SVG_NS:HTML_NS,a.$flags$&2?"slot-fb":a.$tag$);if(isSvgMode&&a.$tag$==="foreignObject"){isSvgMode=false}{updateElement(null,a,isSvgMode)}if(isDef(scopeId)&&s["s-si"]!==scopeId){s.classList.add(s["s-si"]=scopeId)}if(a.$children$){for(o=0;o<a.$children$.length;++o){i=createElm(e,a,o,s);if(i){s.appendChild(i)}}}{if(a.$tag$==="svg"){isSvgMode=false}else if(s.tagName==="foreignObject"){isSvgMode=true}}}{s["s-hn"]=hostTagName;if(a.$flags$&(2|1)){s["s-sr"]=true;s["s-cr"]=contentRef;s["s-sn"]=a.$name$||"";l=e&&e.$children$&&e.$children$[n];if(l&&l.$tag$===a.$tag$&&e.$elm$){putBackInOriginalLocation(e.$elm$,false)}}}return s};var putBackInOriginalLocation=function(e,t){plt.$flags$|=1;var n=e.childNodes;for(var r=n.length-1;r>=0;r--){var a=n[r];if(a["s-hn"]!==hostTagName&&a["s-ol"]){parentReferenceNode(a).insertBefore(a,referenceNode(a));a["s-ol"].remove();a["s-ol"]=undefined;checkSlotRelocate=true}if(t){putBackInOriginalLocation(a,t)}}plt.$flags$&=~1};var addVnodes=function(e,t,n,r,a,o){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var i;if(s.shadowRoot&&s.tagName===hostTagName){s=s.shadowRoot}for(;a<=o;++a){if(r[a]){i=createElm(null,n,a,e);if(i){r[a].$elm$=i;s.insertBefore(i,referenceNode(t))}}}};var removeVnodes=function(e,t,n,r,a){for(;t<=n;++t){if(r=e[t]){a=r.$elm$;callNodeRefs(r);{checkSlotFallbackVisibility=true;if(a["s-ol"]){a["s-ol"].remove()}else{putBackInOriginalLocation(a,true)}}a.remove()}}};var updateChildren=function(e,t,n,r){var a=0;var o=0;var s=0;var i=0;var l=t.length-1;var c=t[0];var f=t[l];var u=r.length-1;var $=r[0];var d=r[u];var v;var p;while(a<=l&&o<=u){if(c==null){c=t[++a]}else if(f==null){f=t[--l]}else if($==null){$=r[++o]}else if(d==null){d=r[--u]}else if(isSameVnode(c,$)){patch(c,$);c=t[++a];$=r[++o]}else if(isSameVnode(f,d)){patch(f,d);f=t[--l];d=r[--u]}else if(isSameVnode(c,d)){if(c.$tag$==="slot"||d.$tag$==="slot"){putBackInOriginalLocation(c.$elm$.parentNode,false)}patch(c,d);e.insertBefore(c.$elm$,f.$elm$.nextSibling);c=t[++a];d=r[--u]}else if(isSameVnode(f,$)){if(c.$tag$==="slot"||d.$tag$==="slot"){putBackInOriginalLocation(f.$elm$.parentNode,false)}patch(f,$);e.insertBefore(f.$elm$,c.$elm$);f=t[--l];$=r[++o]}else{s=-1;{for(i=a;i<=l;++i){if(t[i]&&t[i].$key$!==null&&t[i].$key$===$.$key$){s=i;break}}}if(s>=0){p=t[s];if(p.$tag$!==$.$tag$){v=createElm(t&&t[o],n,s,e)}else{patch(p,$);t[s]=undefined;v=p.$elm$}$=r[++o]}else{v=createElm(t&&t[o],n,o,e);$=r[++o]}if(v){{parentReferenceNode(c.$elm$).insertBefore(v,referenceNode(c.$elm$))}}}}if(a>l){addVnodes(e,r[u+1]==null?null:r[u+1].$elm$,n,r,o,u)}else if(o>u){removeVnodes(t,a,l)}};var isSameVnode=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}}return false};var referenceNode=function(e){return e&&e["s-ol"]||e};var parentReferenceNode=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var patch=function(e,t){var n=t.$elm$=e.$elm$;var r=e.$children$;var a=t.$children$;var o=t.$tag$;var s=t.$text$;var i;if(s===null){{isSvgMode=o==="svg"?true:o==="foreignObject"?false:isSvgMode}{if(o==="slot");else{updateElement(e,t,isSvgMode)}}if(r!==null&&a!==null){updateChildren(n,r,t,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}addVnodes(n,null,t,a,0,a.length-1)}else if(r!==null){removeVnodes(r,0,r.length-1)}if(isSvgMode&&o==="svg"){isSvgMode=false}}else if(i=n["s-cr"]){i.parentNode.textContent=s}else if(e.$text$!==s){n.data=s}};var updateFallbackSlotVisibility=function(e){var t=e.childNodes;var n;var r;var a;var o;var s;var i;for(r=0,a=t.length;r<a;r++){n=t[r];if(n.nodeType===1){if(n["s-sr"]){s=n["s-sn"];n.hidden=false;for(o=0;o<a;o++){i=t[o].nodeType;if(t[o]["s-hn"]!==n["s-hn"]||s!==""){if(i===1&&s===t[o].getAttribute("slot")){n.hidden=true;break}}else{if(i===1||i===3&&t[o].textContent.trim()!==""){n.hidden=true;break}}}}updateFallbackSlotVisibility(n)}}};var relocateNodes=[];var relocateSlotContent=function(e){var t;var n;var r;var a;var o;var s;var i=0;var l=e.childNodes;var c=l.length;for(;i<c;i++){t=l[i];if(t["s-sr"]&&(n=t["s-cr"])&&n.parentNode){r=n.parentNode.childNodes;a=t["s-sn"];for(s=r.length-1;s>=0;s--){n=r[s];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==t["s-hn"]){if(isNodeLocatedInSlot(n,a)){o=relocateNodes.find((function(e){return e.$nodeToRelocate$===n}));checkSlotFallbackVisibility=true;n["s-sn"]=n["s-sn"]||a;if(o){o.$slotRefNode$=t}else{relocateNodes.push({$slotRefNode$:t,$nodeToRelocate$:n})}if(n["s-sr"]){relocateNodes.map((function(e){if(isNodeLocatedInSlot(e.$nodeToRelocate$,n["s-sn"])){o=relocateNodes.find((function(e){return e.$nodeToRelocate$===n}));if(o&&!e.$slotRefNode$){e.$slotRefNode$=o.$slotRefNode$}}}))}}else if(!relocateNodes.some((function(e){return e.$nodeToRelocate$===n}))){relocateNodes.push({$nodeToRelocate$:n})}}}}if(t.nodeType===1){relocateSlotContent(t)}}};var isNodeLocatedInSlot=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var callNodeRefs=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(callNodeRefs)}};var renderVdom=function(e,t){var n=e.$hostElement$;var r=e.$cmpMeta$;var a=e.$vnode$||newVNode(null,null);var o=isHost(t)?t:h(null,null,t);hostTagName=n.tagName;if(r.$attrsToReflect$){o.$attrs$=o.$attrs$||{};r.$attrsToReflect$.map((function(e){var t=e[0],r=e[1];return o.$attrs$[r]=n[t]}))}o.$tag$=null;o.$flags$|=4;e.$vnode$=o;o.$elm$=a.$elm$=n.shadowRoot||n;{scopeId=n["s-sc"]}{contentRef=n["s-cr"];useNativeShadowDom=(r.$flags$&1)!==0;checkSlotFallbackVisibility=false}patch(a,o);{plt.$flags$|=1;if(checkSlotRelocate){relocateSlotContent(o.$elm$);var s=void 0;var i=void 0;var l=void 0;var c=void 0;var f=void 0;var u=void 0;var $=0;for(;$<relocateNodes.length;$++){s=relocateNodes[$];i=s.$nodeToRelocate$;if(!i["s-ol"]){l=doc.createTextNode("");l["s-nr"]=i;i.parentNode.insertBefore(i["s-ol"]=l,i)}}for($=0;$<relocateNodes.length;$++){s=relocateNodes[$];i=s.$nodeToRelocate$;if(s.$slotRefNode$){c=s.$slotRefNode$.parentNode;f=s.$slotRefNode$.nextSibling;l=i["s-ol"];while(l=l.previousSibling){u=l["s-nr"];if(u&&u["s-sn"]===i["s-sn"]&&c===u.parentNode){u=u.nextSibling;if(!u||!u["s-nr"]){f=u;break}}}if(!f&&c!==i.parentNode||i.nextSibling!==f){if(i!==f){if(!i["s-hn"]&&i["s-ol"]){i["s-hn"]=i["s-ol"].parentNode.nodeName}c.insertBefore(i,f)}}}else{if(i.nodeType===1){i.hidden=true}}}}if(checkSlotFallbackVisibility){updateFallbackSlotVisibility(o.$elm$)}plt.$flags$&=~1;relocateNodes.length=0}};var getElement=function(e){return getHostRef(e).$hostElement$};var createEvent=function(e,t,n){var r=getElement(e);return{emit:function(e){return emitEvent(r,t,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}}};var emitEvent=function(e,t,n){var r=plt.ce(t,n);e.dispatchEvent(r);return r};var attachToAncestor=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var scheduleUpdate=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}attachToAncestor(e,e.$ancestorComponent$);var n=function(){return dispatchHooks(e,t)};return writeTask(n)};var dispatchHooks=function(e,t){var n=createTime("scheduleUpdate",e.$cmpMeta$.$tagName$);var r=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],n=e[1];return safeCall(r,t,n)}));e.$queuedListeners$=null}}{a=safeCall(r,"componentWillLoad")}}else{{a=safeCall(r,"componentWillUpdate")}}n();return then(a,(function(){return updateComponent(e,r,t)}))};var updateComponent=function(e,t,n){return __awaiter(void 0,void 0,void 0,(function(){var r,a,o,s,i,l;return __generator(this,(function(c){r=e.$hostElement$;a=createTime("update",e.$cmpMeta$.$tagName$);o=r["s-rc"];if(n){attachStyles(e)}s=createTime("render",e.$cmpMeta$.$tagName$);{callRender(e,t)}if(o){o.map((function(e){return e()}));r["s-rc"]=undefined}s();a();{i=r["s-p"];l=function(){return postUpdateComponent(e)};if(i.length===0){l()}else{Promise.all(i).then(l);e.$flags$|=4;i.length=0}}return[2]}))}))};var callRender=function(e,t,n){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}{{{renderVdom(e,t)}}}}catch(r){consoleError(r,e.$hostElement$)}return null};var postUpdateComponent=function(e){var t=e.$cmpMeta$.$tagName$;var n=e.$hostElement$;var r=createTime("postUpdate",t);var a=e.$lazyInstance$;var o=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{addHydratedFlag(n)}{safeCall(a,"componentDidLoad")}r();{e.$onReadyResolve$(n);if(!o){appDidLoad()}}}else{r()}{e.$onInstanceResolve$(n)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){nextTick((function(){return scheduleUpdate(e,false)}))}e.$flags$&=~(4|512)}};var appDidLoad=function(e){{addHydratedFlag(doc.documentElement)}nextTick((function(){return emitEvent(win,"appload",{detail:{namespace:NAMESPACE}})}))};var safeCall=function(e,t,n){if(e&&e[t]){try{return e[t](n)}catch(r){consoleError(r)}}return undefined};var then=function(e,t){return e&&e.then?e.then(t):t()};var addHydratedFlag=function(e){return e.classList.add("hydrated")};var parsePropertyValue=function(e,t){if(e!=null&&!isComplexType(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var getValue=function(e,t){return getHostRef(e).$instanceValues$.get(t)};var setValue=function(e,t,n,r){var a=getHostRef(e);var o=a.$hostElement$;var s=a.$instanceValues$.get(t);var i=a.$flags$;var l=a.$lazyInstance$;n=parsePropertyValue(n,r.$members$[t][0]);if((!(i&8)||s===undefined)&&n!==s){a.$instanceValues$.set(t,n);if(l){if(r.$watchers$&&i&128){var c=r.$watchers$[t];if(c){c.map((function(e){try{l[e](n,s,t)}catch(r){consoleError(r,o)}}))}}if((i&(2|16))===2){if(l.componentShouldUpdate){if(l.componentShouldUpdate(n,s,t)===false){return}}scheduleUpdate(a,false)}}}};var proxyComponent=function(e,t,n){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var r=Object.entries(t.$members$);var a=e.prototype;r.map((function(e){var r=e[0],o=e[1][0];if(o&31||n&2&&o&32){Object.defineProperty(a,r,{get:function(){return getValue(this,r)},set:function(e){setValue(this,r,e,t)},configurable:true,enumerable:true})}else if(n&1&&o&64){Object.defineProperty(a,r,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var n=getHostRef(this);return n.$onInstancePromise$.then((function(){var t;return(t=n.$lazyInstance$)[r].apply(t,e)}))}})}}));if(n&1){var o=new Map;a.attributeChangedCallback=function(e,t,n){var r=this;plt.jmp((function(){var t=o.get(e);r[t]=n===null&&typeof r[t]==="boolean"?false:n}))};e.observedAttributes=r.filter((function(e){var t=e[0],n=e[1];return n[0]&15})).map((function(e){var n=e[0],r=e[1];var a=r[1]||n;o.set(a,n);if(r[0]&512){t.$attrsToReflect$.push([n,a])}return a}))}}return e};var initializeComponent=function(e,t,n,r,a){return __awaiter(void 0,void 0,void 0,(function(){var r,o,s,i,l,c,f;return __generator(this,(function(u){switch(u.label){case 0:if(!((t.$flags$&32)===0))return[3,3];t.$flags$|=32;a=loadModule(n);if(!a.then)return[3,2];r=uniqueTime();return[4,a];case 1:a=u.sent();r();u.label=2;case 2:if(!a.isProxied){{n.$watchers$=a.watchers}proxyComponent(a,n,2);a.isProxied=true}o=createTime("createInstance",n.$tagName$);{t.$flags$|=8}try{new a(t)}catch($){consoleError($)}{t.$flags$&=~8}{t.$flags$|=128}o();if(a.style){s=a.style;if(typeof s!=="string"){s=s[t.$modeName$=computeMode(e)]}i=getScopeId(n,t.$modeName$);if(!styles.has(i)){l=createTime("registerStyles",n.$tagName$);registerStyle(i,s,!!(n.$flags$&1));l()}}u.label=3;case 3:c=t.$ancestorComponent$;f=function(){return scheduleUpdate(t,true)};if(c&&c["s-rc"]){c["s-rc"].push(f)}else{f()}return[2]}}))}))};var connectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);var n=t.$cmpMeta$;var r=createTime("connectedCallback",n.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{if(n.$flags$&(4|8)){setContentReference(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){attachToAncestor(t,t.$ancestorComponent$=a);break}}}if(n.$members$){Object.entries(n.$members$).map((function(t){var n=t[0],r=t[1][0];if(r&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{initializeComponent(e,t,n)}}else{addHostEventListeners(e,t,n.$listeners$)}r()}};var setContentReference=function(e){var t=e["s-cr"]=doc.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var disconnectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);var n=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}{safeCall(n,"disconnectedCallback")}{safeCall(n,"componentDidUnload")}}};var patchSlotAppendChild=function(e){e.__appendChild=e.appendChild;e.appendChild=function(e){var t=e["s-sn"]=getSlotName(e);var n=getHostSlotNode(this.childNodes,t);if(n){var r=getHostSlotChildNodes(n,t);var a=r[r.length-1];return a.parentNode.insertBefore(e,a.nextSibling)}return this.__appendChild(e)}};var getSlotName=function(e){return e["s-sn"]||e.nodeType===1&&e.getAttribute("slot")||""};var getHostSlotNode=function(e,t){var n=0;var r;for(;n<e.length;n++){r=e[n];if(r["s-sr"]&&r["s-sn"]===t){return r}r=getHostSlotNode(r.childNodes,t);if(r){return r}}return null};var getHostSlotChildNodes=function(e,t){var n=[e];while((e=e.nextSibling)&&e["s-sn"]===t){n.push(e)}return n};var bootstrapLazy=function(e,t){if(t===void 0){t={}}var n=createTime();var r=[];var a=t.exclude||[];var o=win.customElements;var s=doc.head;var i=s.querySelector("meta[charset]");var l=doc.createElement("style");var c=[];var f;var u=true;Object.assign(plt,t);plt.$resourcesUrl$=new URL(t.resourcesUrl||"./",doc.baseURI).href;e.map((function(e){return e[1].map((function(t){var n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{n.$members$=t[2]}{n.$listeners$=t[3]}{n.$attrsToReflect$=[]}{n.$watchers$={}}var s=n.$tagName$;var i=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;registerHost(t,n);if(n.$flags$&1){{{t.attachShadow({mode:"open"})}}}return r}t.prototype.connectedCallback=function(){var e=this;if(f){clearTimeout(f);f=null}if(u){c.push(this)}else{plt.jmp((function(){return connectedCallback(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;plt.jmp((function(){return disconnectedCallback(e)}))};t.prototype.componentOnReady=function(){return getHostRef(this).$onReadyPromise$};return t}(HTMLElement);{patchSlotAppendChild(i.prototype)}n.$lazyBundleId$=e[0];if(!a.includes(s)&&!o.get(s)){r.push(s);o.define(s,proxyComponent(i,n,1))}}))}));{l.innerHTML=r+HYDRATED_CSS;l.setAttribute("data-styles","");s.insertBefore(l,i?i.nextSibling:s.firstChild)}u=false;if(c.length){c.map((function(e){return e.connectedCallback()}))}else{{plt.jmp((function(){return f=setTimeout(appDidLoad,30)}))}}n()};var getAssetPath=function(e){var t=new URL(e,plt.$resourcesUrl$);return t.origin!==win.location.origin?t.href:t.pathname};var getContext=function(e,t){if(t in Context){return Context[t]}else if(t==="window"){return win}else if(t==="document"){return doc}else if(t==="isServer"||t==="isPrerender"){return false}else if(t==="isClient"){return true}else if(t==="resourcesUrl"||t==="publicPath"){return getAssetPath(".")}else if(t==="queue"){return{write:writeTask,read:readTask,tick:{then:function(e){return nextTick(e)}}}}return undefined};var hostRefs=new WeakMap;var getHostRef=function(e){return hostRefs.get(e)};var registerInstance=function(e,t){return hostRefs.set(t.$lazyInstance$=e,t)};var registerHost=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e}))}{n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}addHostEventListeners(e,n,t.$listeners$);return hostRefs.set(e,n)};var isMemberInElement=function(e,t){return t in e};var consoleError=function(e,t){return(0,console.error)(e,t)};var cmpModules=new Map;var loadModule=function(e,t,n){var r=e.$tagName$.replace(/-/g,"_");var a=e.$lazyBundleId$;var o=cmpModules.get(a);if(o){return o[r]}return import("./"+a+".entry.js"+"").then((function(e){{cmpModules.set(a,e)}return e[r]}),consoleError)};var styles=new Map;var modeResolutionChain=[];var queueDomReads=[];var queueDomWrites=[];var queueTask=function(e,t){return function(n){e.push(n);if(!queuePending){queuePending=true;if(t&&plt.$flags$&4){nextTick(flush)}else{plt.raf(flush)}}}};var consume=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(n){consoleError(n)}}e.length=0};var flush=function(){consume(queueDomReads);{consume(queueDomWrites);if(queuePending=queueDomReads.length>0){plt.raf(flush)}}};var nextTick=function(e){return promiseResolve().then(e)};var readTask=queueTask(queueDomReads,false);var writeTask=queueTask(queueDomWrites,true);export{Host as H,NAMESPACE as N,getElement as a,bootstrapLazy as b,createEvent as c,doc as d,getAssetPath as e,getContext as g,h,promiseResolve as p,registerInstance as r,setMode as s,win as w};