'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c7f4beea.js');

const defaultTabCss = "a.sc-stencila-tab-default{color:#4a4a4a;color:var(--color-key,#4a4a4a);font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:1rem;line-height:1.5rem;text-decoration:none}.sc-stencila-tab-default-h,stencila-tab.sc-stencila-tab-default{-ms-flex-positive:1;flex-grow:1}.sc-stencila-tab-default-h li.sc-stencila-tab-default,stencila-tab.sc-stencila-tab-default li.sc-stencila-tab-default,ul[role=tablist].sc-stencila-tab-default li.sc-stencila-tab-default{border-color:#858ca8;border-color:var(--color-neutral-400,#858ca8);border-width:1px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;list-style-type:none;margin:0;padding:0;text-align:center;text-transform:capitalize}.sc-stencila-tab-default-h li.sc-stencila-tab-default:first-of-type,stencila-tab.sc-stencila-tab-default li.sc-stencila-tab-default:first-of-type,ul[role=tablist].sc-stencila-tab-default li.sc-stencila-tab-default:first-of-type{border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.sc-stencila-tab-default-h li.sc-stencila-tab-default:last-of-type,stencila-tab.sc-stencila-tab-default li.sc-stencila-tab-default:last-of-type,ul[role=tablist].sc-stencila-tab-default li.sc-stencila-tab-default:last-of-type{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.sc-stencila-tab-default-h li.sc-stencila-tab-default a.sc-stencila-tab-default,stencila-tab.sc-stencila-tab-default li.sc-stencila-tab-default a.sc-stencila-tab-default,ul[role=tablist].sc-stencila-tab-default li.sc-stencila-tab-default a.sc-stencila-tab-default{display:block;line-height:1;padding:.5rem 1rem;width:100%}.sc-stencila-tab-default-h li.sc-stencila-tab-default a[aria-selected=true].sc-stencila-tab-default,stencila-tab.sc-stencila-tab-default li.sc-stencila-tab-default a[aria-selected=true].sc-stencila-tab-default,ul[role=tablist].sc-stencila-tab-default li.sc-stencila-tab-default a[aria-selected=true].sc-stencila-tab-default{background-color:#cfd2e1;background-color:var(--color-neutral-100,#cfd2e1)}.sc-stencila-tab-default-h li.sc-stencila-tab-default a.sc-stencila-tab-default:hover:not([aria-selected=true]),stencila-tab.sc-stencila-tab-default li.sc-stencila-tab-default a.sc-stencila-tab-default:hover:not([aria-selected=true]),ul[role=tablist].sc-stencila-tab-default li.sc-stencila-tab-default a.sc-stencila-tab-default:hover:not([aria-selected=true]){background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1);border-color:#cfd2e1;border-color:var(--color-neutral-100,#cfd2e1)}";

const tabMaterialCss = "a.sc-stencila-tab-material{color:#4a4a4a;color:var(--color-key,#4a4a4a);font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:1rem;line-height:1.5rem;text-decoration:none}.sc-stencila-tab-material-h,stencila-tab.sc-stencila-tab-material{-ms-flex-positive:1;flex-grow:1}.sc-stencila-tab-material-h li.sc-stencila-tab-material,ul[role=tablist].sc-stencila-tab-material li.sc-stencila-tab-material{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;font-size:.875rem;font-weight:500;letter-spacing:.05em;line-height:1.25rem;line-height:1;list-style-type:none;margin:0;text-align:center;text-transform:uppercase}.sc-stencila-tab-material-h li.sc-stencila-tab-material a.sc-stencila-tab-material,ul[role=tablist].sc-stencila-tab-material li.sc-stencila-tab-material a.sc-stencila-tab-material{border:0 solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-bottom:2px solid var(--color-neutral-100,#cfd2e1);display:block;line-height:1;padding:1rem;width:100%}.sc-stencila-tab-material-h li.sc-stencila-tab-material a[aria-selected=true].sc-stencila-tab-material,ul[role=tablist].sc-stencila-tab-material li.sc-stencila-tab-material a[aria-selected=true].sc-stencila-tab-material{border-bottom-width:2px;border-color:#2069f2;border-color:var(--color-primary-500,#2069f2);color:#2069f2;color:var(--color-primary-500,#2069f2)}.sc-stencila-tab-material-h li.sc-stencila-tab-material a.sc-stencila-tab-material:hover:not([aria-selected=true]),ul[role=tablist].sc-stencila-tab-material li.sc-stencila-tab-material a.sc-stencila-tab-material:hover:not([aria-selected=true]){background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1);border-color:#9da3bc;border-color:var(--color-neutral-300,#9da3bc)}";

const Tab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The link the tab should navigate to
     */
    this.href = '#';
    /**
     * Indicates whether the current tab is "selected"
     */
    this.isSelected = false;
  }
  render() {
    return (index.h("li", { role: "presentation" }, index.h("a", { "aria-selected": this.isSelected.toString(), href: this.href, role: "tab" }, this.label)));
  }
};
Tab.elementName = 'stencila-tab';
Tab.style = {
  default: defaultTabCss,
  material: tabMaterialCss
};

exports.stencila_tab = Tab;
