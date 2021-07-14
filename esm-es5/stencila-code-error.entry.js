import{r as registerInstance,h,H as Host,a as getElement}from"./index-e3052a43.js";var defaultErrorCss=".sc-stencila-code-error-default-h,stencila-code-error.sc-stencila-code-error-default{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1);border:1px solid #6e7591;border-color:var(--color-neutral-500,#6e7591);border-radius:.25rem;-webkit-box-sizing:border-box;box-sizing:border-box;color:#444a5e;color:var(--color-neutral-700,#444a5e);display:block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);max-width:100%;padding:.5rem;position:relative;width:100%}.sc-stencila-code-error-default-h .overview.sc-stencila-code-error-default,stencila-code-error.sc-stencila-code-error-default .overview.sc-stencila-code-error-default{padding-right:1rem}.sc-stencila-code-error-default-h .overview.sc-stencila-code-error-default *.sc-stencila-code-error-default,stencila-code-error.sc-stencila-code-error-default .overview.sc-stencila-code-error-default *.sc-stencila-code-error-default{vertical-align:middle}.sc-stencila-code-error-default-h .overview.sc-stencila-code-error-default stencila-icon.sc-stencila-code-error-default,stencila-code-error.sc-stencila-code-error-default .overview.sc-stencila-code-error-default stencila-icon.sc-stencila-code-error-default{margin-right:.5rem}.sc-stencila-code-error-default-h stencila-details.sc-stencila-code-error-default,stencila-code-error.sc-stencila-code-error-default stencila-details.sc-stencila-code-error-default{--disclosure-icon-right:0.5rem;--disclosure-icon-top:0.5rem;display:block;position:static}.sc-stencila-code-error-default-h [slot=stacktrace].sc-stencila-code-error-default,stencila-code-error.sc-stencila-code-error-default [slot=stacktrace].sc-stencila-code-error-default{background-color:#fff;background-color:var(--color-stock,#fff);border-color:#dca435;border-color:var(--color-warn-500,#dca435);color:#4a4a4a;color:var(--color-key,#4a4a4a);margin:0}[kind=warning].sc-stencila-code-error-default-h,stencila-code-error[kind=warning].sc-stencila-code-error-default{background-color:#fff3cc;background-color:var(--color-warn-50,#fff3cc);border-color:#dca435;border-color:var(--color-warn-500,#dca435);color:#674c15;color:var(--color-warn-800,#674c15)}[kind=warning].sc-stencila-code-error-default-h [slot=stacktrace].sc-stencila-code-error-default,stencila-code-error[kind=warning].sc-stencila-code-error-default [slot=stacktrace].sc-stencila-code-error-default{border-color:#dca435;border-color:var(--color-warn-500,#dca435)}[kind=error].sc-stencila-code-error-default-h,stencila-code-error[kind=error].sc-stencila-code-error-default{background-color:#ffeff0;background-color:var(--color-danger-50,#ffeff0);border-color:#cf445e;border-color:var(--color-danger-500,#cf445e);color:#b02d4a;color:var(--color-danger-600,#b02d4a)}[kind=error].sc-stencila-code-error-default-h [slot=stacktrace].sc-stencila-code-error-default,stencila-code-error[kind=error].sc-stencila-code-error-default [slot=stacktrace].sc-stencila-code-error-default{border-color:#cf445e;border-color:var(--color-danger-500,#cf445e)}";var materialErrorCss=".sc-stencila-code-error-material-h,stencila-code-error.sc-stencila-code-error-material{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1);border:1px solid #6e7591;border-color:var(--color-neutral-500,#6e7591);border-radius:.25rem;-webkit-box-sizing:border-box;box-sizing:border-box;color:#444a5e;color:var(--color-neutral-700,#444a5e);display:block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);max-width:100%;padding:.5rem;position:relative;width:100%}.sc-stencila-code-error-material-h .overview.sc-stencila-code-error-material,stencila-code-error.sc-stencila-code-error-material .overview.sc-stencila-code-error-material{padding-right:1rem}.sc-stencila-code-error-material-h .overview.sc-stencila-code-error-material *.sc-stencila-code-error-material,stencila-code-error.sc-stencila-code-error-material .overview.sc-stencila-code-error-material *.sc-stencila-code-error-material{vertical-align:middle}.sc-stencila-code-error-material-h .overview.sc-stencila-code-error-material stencila-icon.sc-stencila-code-error-material,stencila-code-error.sc-stencila-code-error-material .overview.sc-stencila-code-error-material stencila-icon.sc-stencila-code-error-material{margin-right:.5rem}.sc-stencila-code-error-material-h stencila-details.sc-stencila-code-error-material,stencila-code-error.sc-stencila-code-error-material stencila-details.sc-stencila-code-error-material{--disclosure-icon-right:0.5rem;--disclosure-icon-top:0.5rem;display:block;position:static}.sc-stencila-code-error-material-h [slot=stacktrace].sc-stencila-code-error-material,stencila-code-error.sc-stencila-code-error-material [slot=stacktrace].sc-stencila-code-error-material{background-color:#fff;background-color:var(--color-stock,#fff);border-color:#dca435;border-color:var(--color-warn-500,#dca435);color:#4a4a4a;color:var(--color-key,#4a4a4a);margin:0}[kind=warning].sc-stencila-code-error-material-h,stencila-code-error[kind=warning].sc-stencila-code-error-material{background-color:#fff3cc;background-color:var(--color-warn-50,#fff3cc);border-color:#dca435;border-color:var(--color-warn-500,#dca435);color:#674c15;color:var(--color-warn-800,#674c15)}[kind=warning].sc-stencila-code-error-material-h [slot=stacktrace].sc-stencila-code-error-material,stencila-code-error[kind=warning].sc-stencila-code-error-material [slot=stacktrace].sc-stencila-code-error-material{border-color:#dca435;border-color:var(--color-warn-500,#dca435)}[kind=error].sc-stencila-code-error-material-h,stencila-code-error[kind=error].sc-stencila-code-error-material{background-color:#ffeff0;background-color:var(--color-danger-50,#ffeff0);border-color:#cf445e;border-color:var(--color-danger-500,#cf445e);color:#b02d4a;color:var(--color-danger-600,#b02d4a)}[kind=error].sc-stencila-code-error-material-h [slot=stacktrace].sc-stencila-code-error-material,stencila-code-error[kind=error].sc-stencila-code-error-material [slot=stacktrace].sc-stencila-code-error-material{border-color:#cf445e;border-color:var(--color-danger-500,#cf445e)}";var ErrorComponent=function(){function r(r){var e=this;registerInstance(this,r);this.kind="info";this.stackIsOpen=false;this.hasStack=false;this.toggleStackVisibility=function(r){r.preventDefault();e.stackIsOpen=!e.stackIsOpen}}r.prototype.getIcon=function(r){switch(r){case"error":return"forbid";case"warning":return"error-warning";default:return"information"}};r.prototype.getLevel=function(r){switch(r){case"error":case"incapable":return"error";case"warning":case"warn":return"warning";default:return"info"}};r.prototype.componentWillLoad=function(){var r;this.hasStack=!!((r=this.el)===null||r===void 0?void 0:r.querySelector('[slot="stacktrace"]'))};r.prototype.render=function(){var r,e;var o=this.getLevel((e=(r=this.error)===null||r===void 0?void 0:r.errorType)!==null&&e!==void 0?e:this.kind);return h(Host,{kind:o},h("div",{class:"overview",onClick:this.toggleStackVisibility},h("stencila-icon",{icon:this.getIcon(o)}),h("slot",null)),this.hasStack&&h("stencila-details",{open:this.stackIsOpen},h("slot",{name:"stacktrace"})))};Object.defineProperty(r.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return r}();ErrorComponent.style={default:defaultErrorCss,material:materialErrorCss};export{ErrorComponent as stencila_code_error};