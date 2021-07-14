import { r as registerInstance, h, H as Host, a as getElement } from './index-e3052a43.js';
import { g as getSlotByName } from './slotSelectors-8761b1b3.js';
import { b as ToastTypes } from './toastController-f90e27c1.js';
import './_commonjsHelpers-8a9f3b18.js';

const defaultToastCss = ".stencila-toast-container{-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;display:flex!important;-ms-flex-direction:column;flex-direction:column;height:100vh;left:0;padding:.5rem;pointer-events:none;position:fixed;top:0;width:100vw;z-index:1}.stencila-toast-container[position^=top]{-ms-flex-pack:start;justify-content:flex-start}.stencila-toast-container[position^=bottom]{-ms-flex-pack:end;justify-content:flex-end}.stencila-toast-container[position$=Start i]{-ms-flex-align:start;align-items:flex-start}.stencila-toast-container[position$=End i]{-ms-flex-align:end;align-items:flex-end}:host,stencila-toast{--color:var(--color-key,#000);--background:var(--color-stock,#fff)}:host,stencila-toast{--tw-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);border-radius:.375rem;-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:#fff;color:var(--color-stock,#fff);display:block;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-negative:0;flex-shrink:0;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:1rem;line-height:1.5rem;line-height:1;margin-bottom:.25rem;margin-top:.25rem;max-width:65ch;overflow:hidden;pointer-events:auto;position:relative}:host,stencila-toast{background-color:var(--background);border:1px solid var(--color-neutral-200);color:var(--color);min-width:32ch}:host([data-enter]),stencila-toast[data-enter]{-webkit-animation:a .15s ease-in;animation:a .15s ease-in;-webkit-animation-delay:0ms;animation-delay:0ms;-webkit-animation-delay:calc(var(--i, 0)*50ms);animation-delay:calc(var(--i, 0)*50ms)}:host([data-exit]),stencila-toast[data-exit]{-webkit-animation:b .15s ease-out;animation:b .15s ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}:host .toastAccent,stencila-toast .toastAccent{color:#fff;color:var(--color-stock,#fff);line-height:1;padding:1rem .5rem}:host .toastAccent stencila-icon,stencila-toast .toastAccent stencila-icon{--height:1.25rem;--width:1.25rem;border-radius:9999px;display:block;margin-top:-.125rem;padding:.25rem}:host([type=info]) .toastAccent,:host .toastAccent,stencila-toast .toastAccent,stencila-toast[type=info] .toastAccent{background-color:#cfd2e1;background-color:var(--color-neutral-100,#cfd2e1);color:#595f78;color:var(--color-neutral-600,#595f78)}:host([type=info]) .toastAccent stencila-icon,:host .toastAccent stencila-icon,stencila-toast .toastAccent stencila-icon,stencila-toast[type=info] .toastAccent stencila-icon{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1)}:host([type=primary]),stencila-toast[type=primary]{border-color:#a7b3ff;border-color:var(--color-primary-200,#a7b3ff)}:host([type=primary]) .toastAccent,stencila-toast[type=primary] .toastAccent{background-color:#cacfff;background-color:var(--color-primary-100,#cacfff);color:#2069f2;color:var(--color-primary-500,#2069f2)}:host([type=primary]) .toastAccent stencila-icon,stencila-toast[type=primary] .toastAccent stencila-icon{background-color:#ebecff;background-color:var(--color-primary-50,#ebecff)}:host([type=success]),stencila-toast[type=success]{border-color:#9dcaa9;border-color:var(--color-success-200,#9dcaa9)}:host([type=success]) .toastAccent,stencila-toast[type=success] .toastAccent{background-color:#9dcaa9;background-color:var(--color-success-200,#9dcaa9);color:#3c8455;color:var(--color-success-500,#3c8455)}:host([type=success]) .toastAccent stencila-icon,stencila-toast[type=success] .toastAccent stencila-icon{background-color:#edf6ef;background-color:var(--color-success-50,#edf6ef)}:host([type=warn]),stencila-toast[type=warn]{border-color:#ffde88;border-color:var(--color-warn-200,#ffde88)}:host([type=warn]) .toastAccent,stencila-toast[type=warn] .toastAccent{background-color:#ffde88;background-color:var(--color-warn-200,#ffde88);color:#ba8925;color:var(--color-warn-600,#ba8925)}:host([type=warn]) .toastAccent stencila-icon,stencila-toast[type=warn] .toastAccent stencila-icon{background-color:#fff3cc;background-color:var(--color-warn-50,#fff3cc)}:host([type=danger]),stencila-toast[type=danger]{border-color:#ffa6ae;border-color:var(--color-danger-200,#ffa6ae)}:host([type=danger]) .toastAccent,stencila-toast[type=danger] .toastAccent{background-color:#ffa6ae;background-color:var(--color-danger-200,#ffa6ae);color:#cf445e;color:var(--color-danger-500,#cf445e)}:host([type=danger]) .toastAccent stencila-icon,stencila-toast[type=danger] .toastAccent stencila-icon{background-color:#ffeff0;background-color:var(--color-danger-50,#ffeff0)}:host([position=topStart]),stencila-toast[position=topStart]{-ms-flex-item-align:start;align-self:flex-start}:host([position=topEnd]),stencila-toast[position=topEnd]{-ms-flex-item-align:end;align-self:flex-end}:host .content,stencila-toast .content{-ms-flex-align:start;align-items:flex-start;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-size:.875rem;-ms-flex-pack:center;justify-content:center;line-height:1.25rem;padding:1rem}:host [slot=title],stencila-toast [slot=title]{font-weight:700}:host [slot=actions]:not(:empty),stencila-toast [slot=actions]:not(:empty){display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;margin-top:.5rem;width:100%}:host [slot=actions]:not(:empty)>:not(:first-child),stencila-toast [slot=actions]:not(:empty)>:not(:first-child){padding-left:.5rem}:host([dismissable]),stencila-toast[dismissable]{padding-right:2rem}:host .closeButton,stencila-toast .closeButton{position:absolute;right:.325rem;top:.325rem}@-webkit-keyframes a{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes a{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes b{0%{max-height:none;opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{max-height:0;opacity:0;padding-bottom:0;padding-top:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}@keyframes b{0%{max-height:none;opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{max-height:0;opacity:0;padding-bottom:0;padding-top:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}";

const materialToastCss = ".stencila-toast-container{-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;display:flex!important;-ms-flex-direction:column;flex-direction:column;height:100vh;left:0;padding:.5rem;pointer-events:none;position:fixed;top:0;width:100vw;z-index:1}.stencila-toast-container[position^=top]{-ms-flex-pack:start;justify-content:flex-start}.stencila-toast-container[position^=bottom]{-ms-flex-pack:end;justify-content:flex-end}.stencila-toast-container[position$=Start i]{-ms-flex-align:start;align-items:flex-start}.stencila-toast-container[position$=End i]{-ms-flex-align:end;align-items:flex-end}:host,stencila-toast{--color:var(--color-key,#000);--background:var(--color-stock,#fff)}:host,stencila-toast{--tw-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);border-radius:.375rem;-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:#fff;color:var(--color-stock,#fff);display:block;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-negative:0;flex-shrink:0;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:1rem;line-height:1.5rem;line-height:1;margin-bottom:.25rem;margin-top:.25rem;max-width:65ch;overflow:hidden;pointer-events:auto;position:relative}:host,stencila-toast{background-color:var(--background);border:1px solid var(--color-neutral-200);color:var(--color);min-width:32ch}:host([data-enter]),stencila-toast[data-enter]{-webkit-animation:a .15s ease-in;animation:a .15s ease-in;-webkit-animation-delay:0ms;animation-delay:0ms;-webkit-animation-delay:calc(var(--i, 0)*50ms);animation-delay:calc(var(--i, 0)*50ms)}:host([data-exit]),stencila-toast[data-exit]{-webkit-animation:b .15s ease-out;animation:b .15s ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}:host .toastAccent,stencila-toast .toastAccent{color:#fff;color:var(--color-stock,#fff);line-height:1;padding:1rem .5rem}:host .toastAccent stencila-icon,stencila-toast .toastAccent stencila-icon{--height:1.25rem;--width:1.25rem;border-radius:9999px;display:block;margin-top:-.125rem;padding:.25rem}:host([type=info]) .toastAccent,:host .toastAccent,stencila-toast .toastAccent,stencila-toast[type=info] .toastAccent{background-color:#cfd2e1;background-color:var(--color-neutral-100,#cfd2e1);color:#595f78;color:var(--color-neutral-600,#595f78)}:host([type=info]) .toastAccent stencila-icon,:host .toastAccent stencila-icon,stencila-toast .toastAccent stencila-icon,stencila-toast[type=info] .toastAccent stencila-icon{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1)}:host([type=primary]),stencila-toast[type=primary]{border-color:#a7b3ff;border-color:var(--color-primary-200,#a7b3ff)}:host([type=primary]) .toastAccent,stencila-toast[type=primary] .toastAccent{background-color:#cacfff;background-color:var(--color-primary-100,#cacfff);color:#2069f2;color:var(--color-primary-500,#2069f2)}:host([type=primary]) .toastAccent stencila-icon,stencila-toast[type=primary] .toastAccent stencila-icon{background-color:#ebecff;background-color:var(--color-primary-50,#ebecff)}:host([type=success]),stencila-toast[type=success]{border-color:#9dcaa9;border-color:var(--color-success-200,#9dcaa9)}:host([type=success]) .toastAccent,stencila-toast[type=success] .toastAccent{background-color:#9dcaa9;background-color:var(--color-success-200,#9dcaa9);color:#3c8455;color:var(--color-success-500,#3c8455)}:host([type=success]) .toastAccent stencila-icon,stencila-toast[type=success] .toastAccent stencila-icon{background-color:#edf6ef;background-color:var(--color-success-50,#edf6ef)}:host([type=warn]),stencila-toast[type=warn]{border-color:#ffde88;border-color:var(--color-warn-200,#ffde88)}:host([type=warn]) .toastAccent,stencila-toast[type=warn] .toastAccent{background-color:#ffde88;background-color:var(--color-warn-200,#ffde88);color:#ba8925;color:var(--color-warn-600,#ba8925)}:host([type=warn]) .toastAccent stencila-icon,stencila-toast[type=warn] .toastAccent stencila-icon{background-color:#fff3cc;background-color:var(--color-warn-50,#fff3cc)}:host([type=danger]),stencila-toast[type=danger]{border-color:#ffa6ae;border-color:var(--color-danger-200,#ffa6ae)}:host([type=danger]) .toastAccent,stencila-toast[type=danger] .toastAccent{background-color:#ffa6ae;background-color:var(--color-danger-200,#ffa6ae);color:#cf445e;color:var(--color-danger-500,#cf445e)}:host([type=danger]) .toastAccent stencila-icon,stencila-toast[type=danger] .toastAccent stencila-icon{background-color:#ffeff0;background-color:var(--color-danger-50,#ffeff0)}:host([position=topStart]),stencila-toast[position=topStart]{-ms-flex-item-align:start;align-self:flex-start}:host([position=topEnd]),stencila-toast[position=topEnd]{-ms-flex-item-align:end;align-self:flex-end}:host .content,stencila-toast .content{-ms-flex-align:start;align-items:flex-start;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-size:.875rem;-ms-flex-pack:center;justify-content:center;line-height:1.25rem;padding:1rem}:host [slot=title],stencila-toast [slot=title]{font-weight:700}:host [slot=actions]:not(:empty),stencila-toast [slot=actions]:not(:empty){display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;margin-top:.5rem;width:100%}:host [slot=actions]:not(:empty)>:not(:first-child),stencila-toast [slot=actions]:not(:empty)>:not(:first-child){padding-left:.5rem}:host([dismissable]),stencila-toast[dismissable]{padding-right:2rem}:host .closeButton,stencila-toast .closeButton{position:absolute;right:.325rem;top:.325rem}@-webkit-keyframes a{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes a{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes b{0%{max-height:none;opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{max-height:0;opacity:0;padding-bottom:0;padding-top:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}@keyframes b{0%{max-height:none;opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{max-height:0;opacity:0;padding-bottom:0;padding-top:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}";

const StencilaToast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * If true, shows a "close" button to immediately dismiss the toast
     */
    this.dismissable = false;
    /**
     * Duration in milliseconds for how long the toast should be display
     * Setting `duration` to `0` will disable auto-dismissal of the toast.
     */
    this.duration = 4000;
    /**
     * Type of the toast to show. Affects the component colour scheme.
     */
    this.type = ToastTypes.neutral;
    this.getIconByType = () => {
      switch (this.type) {
        case 'success': {
          return 'checkbox-circle';
        }
        case 'danger': {
          return 'forbid';
        }
        case 'warn': {
          return 'error-warning';
        }
        case 'neutral':
        default: {
          return 'question';
        }
      }
    };
    this.dismiss = () => {
      var _a, _b;
      window.clearTimeout(this.timeout);
      (_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild(this.el);
    };
    this.pauseAutoDismiss = () => {
      window.clearTimeout(this.timeout);
    };
    this.autoDismiss = () => {
      if (this.duration !== undefined && this.duration <= 0) {
        return;
      }
      window.clearTimeout(this.timeout);
      this.timeout = window.setTimeout(() => {
        this.dismiss();
      }, this.duration);
    };
    this.styleActionButtons = () => {
      var _a, _b;
      const buttons = Array.from((_b = (_a = getSlotByName(this.el)('actions')) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : []).filter((el) => el.tagName.toLowerCase() === 'stencila-button' &&
        !el.classList.contains('closeButton'));
      buttons.map((el, idx) => {
        el.setAttribute('size', 'xsmall');
        if (idx === 0) {
          el.setAttribute('color', this.type);
        }
        if (idx > 0) {
          el.setAttribute('color', 'neutral');
          el.setAttribute('minimal', 'minimal');
        }
      });
    };
  }
  componentWillLoad() {
    this.styleActionButtons();
  }
  componentDidLoad() {
    this.autoDismiss();
  }
  render() {
    return (h(Host, { type: this.type, position: this.position, dismissable: this.dismissable, onMouseEnter: this.pauseAutoDismiss, onMouseLeave: this.autoDismiss }, h("div", { class: "toastAccent" }, h("stencila-icon", { icon: this.getIconByType(), iconStyle: "fill" })), h("div", { class: "content" }, h("slot", { name: "title" }), h("slot", null), h("slot", { name: "actions" })), (this.dismissable || this.duration === 0) && (h("stencila-button", { color: "neutral", iconOnly: true, icon: "close", minimal: true, size: "small", onClick: this.dismiss, class: "closeButton" }))));
  }
  get el() { return getElement(this); }
};
StencilaToast.style = {
  default: defaultToastCss,
  material: materialToastCss
};

const defaultToolbarCss = ".sc-stencila-toolbar-default-h{background-color:var(--color-neutral-200);background-color:var(--background,var(--color-neutral-200));display:block}[position=fixed].sc-stencila-toolbar-default-h{left:0;position:fixed;top:0;width:100%;z-index:1}[position=fixed].sc-stencila-toolbar-default-h+*.sc-stencila-toolbar-default{margin-top:3rem}[color=stock].sc-stencila-toolbar-default-h,[color=stock].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{--background:var(--color-stock)}[color=key].sc-stencila-toolbar-default-h,[color=key].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{--background:var(--color-key)}[color=primary].sc-stencila-toolbar-default-h,[color=primary].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{--background:var(--color-primary-500)}[color=neutral].sc-stencila-toolbar-default-h,[color=neutral].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{color:#444a5e;color:var(--color-neutral-700,#444a5e)}[color=neutral].sc-stencila-toolbar-default-h,[color=neutral].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{--background:var(--color-neutral-200)}[color=success].sc-stencila-toolbar-default-h,[color=success].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{--background:var(--color-success-500)}[color=warn].sc-stencila-toolbar-default-h,[color=warn].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{--background:var(--color-warn-500)}[color=danger].sc-stencila-toolbar-default-h,[color=danger].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{--background:var(--color-danger-500)}.sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{-ms-flex-align:center;align-items:center;background-color:var(--color-neutral-200);background-color:var(--background,var(--color-neutral-200));color:#fff;color:var(--color-stock,#fff);display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);-ms-flex-pack:justify;justify-content:space-between;line-height:1;margin:0;padding:.5rem;vertical-align:middle}.sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default>*.sc-stencila-toolbar-default{vertical-align:middle}.sc-stencila-toolbar-default-h .sc-stencila-toolbar-default-s>[slot=middle]{-ms-flex-positive:1;flex-grow:1;padding-left:1rem;padding-right:1rem}";

const toolbarMaterialCss = ".sc-stencila-toolbar-material-h{background-color:var(--color-neutral-300);background-color:var(--background,var(--color-neutral-300));display:block;height:3rem}[position=fixed].sc-stencila-toolbar-material-h{left:0;position:fixed;top:0;width:100%;z-index:1}[position=fixed].sc-stencila-toolbar-material-h+*.sc-stencila-toolbar-material{margin-top:3rem}[color=stock].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#fff;background-color:var(--color-stock,#fff)}[color=key].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#4a4a4a;background-color:var(--color-key,#4a4a4a)}[color=primary].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#2069f2;background-color:var(--color-primary-500,#2069f2)}[color=neutral].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#6e7591;background-color:var(--color-neutral-500,#6e7591)}[color=success].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#3c8455;background-color:var(--color-success-500,#3c8455)}[color=warn].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#dca435;background-color:var(--color-warn-500,#dca435)}[color=danger].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#cf445e;background-color:var(--color-danger-500,#cf445e)}.sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{-ms-flex-align:center;align-items:center;background-color:var(--background);color:#fff;color:var(--color-stock,#fff);display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);-ms-flex-pack:justify;justify-content:space-between;line-height:1;margin:0;padding:.5rem .25rem;vertical-align:middle}.sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material>*.sc-stencila-toolbar-material{vertical-align:middle}.sc-stencila-toolbar-material-h .sc-stencila-toolbar-material-s>[slot=middle]{-ms-flex-positive:1;flex-grow:1;padding-left:1rem;padding-right:1rem}.sc-stencila-toolbar-material-h[color=key].sc-stencila-toolbar-material-s stencila-button:not([disabled]):hover button.iconOnly{background-color:hsla(0,0%,100%,.2)}";

const Toolbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * When `fixed` the Navbar will remain pinned to the top of the screen.
     * Note that if the Navbar component is not followed by a sibling element,
     * you will have to set `margin-top: 3rem` on the following element yourself.
     */
    this.position = 'static';
  }
  render() {
    return (h(Host, { color: this.color, position: this.position }, h("div", null, h("slot", { name: "start" }), h("slot", { name: "middle" }), h("slot", { name: "end" }))));
  }
};
Toolbar.style = {
  default: defaultToolbarCss,
  material: toolbarMaterialCss
};

export { StencilaToast as stencila_toast, Toolbar as stencila_toolbar };
