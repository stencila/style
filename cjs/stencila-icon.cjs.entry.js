'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c7f4beea.js');

const defaultIconCss = "@-webkit-keyframes a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.sc-stencila-icon-default-h{--height:1.25em;--width:1.25em;color:currentColor;display:inline-block;line-height:1;vertical-align:middle}.sc-stencila-icon-default-h svg.sc-stencila-icon-default{fill:currentColor;display:block;height:auto;height:var(--height);max-height:100%;position:relative;width:100%;width:var(--width)}[icon^=loader].sc-stencila-icon-default-h svg.sc-stencila-icon-default{-webkit-animation:a 3s linear infinite;animation:a 3s linear infinite}";

const iconMaterialCss = "@-webkit-keyframes a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.sc-stencila-icon-material-h{--height:1.25em;--width:1.25em;color:currentColor;display:inline-block;line-height:1;vertical-align:middle}.sc-stencila-icon-material-h svg.sc-stencila-icon-material{fill:currentColor;stroke-linecap:butt;display:block;height:auto;height:var(--height);max-height:100%;position:relative;width:100%;width:var(--width)}[icon^=loader].sc-stencila-icon-material-h svg.sc-stencila-icon-material{-webkit-animation:a 3s linear infinite;animation:a 3s linear infinite}";

const getGlobalIconStyle = () => document.getElementsByTagName('html')[0].getAttribute('data-icon-style') ===
  'fill'
  ? 'fill'
  : 'line';
const Icon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Style with which to render the icon
     */
    this.iconStyle = getGlobalIconStyle();
  }
  render() {
    return (index.h(index.Host, { icon: this.icon, "aria-hidden": "true" }, index.h("svg", null, index.h("use", { href: `${index.getAssetPath(`./assets/remixicon.symbol.svg`)}#ri-${this.icon}-${this.iconStyle}` }))));
  }
  static get assetsDirs() { return ["assets"]; }
};
Icon.style = {
  default: defaultIconCss,
  material: iconMaterialCss
};

exports.stencila_icon = Icon;
