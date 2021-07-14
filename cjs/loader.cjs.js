'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c7f4beea.js');
const appGlobals = require('./app-globals-3e137d7a.js');
require('./_commonjsHelpers-1fbbf0eb.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  appGlobals.globalScripts();
  return index.bootstrapLazy([["stencila-code-chunk.cjs",[[38,"stencila-code-chunk",{"autofocus":[4],"programmingLanguageProp":[1,"data-programminglanguage"],"isCodeVisible":[4,"is-code-visible"],"executeHandler":[16],"keymap":[16],"executeCodeState":[32],"isStacked":[32],"outputs":[32],"codeErrors":[32],"isCodeVisibleState":[32],"getContents":[64],"execute":[64]},[[8,"collapseAllCode","onSetAllCodeVisibility"],[8,"setAllCodeVisibility","onSetAllCodeVisibility"],[8,"setEditorLayout","onSetEditorLayout"]]]]],["stencila-executable-document-toolbar.cjs",[[32,"stencila-executable-document-toolbar",{"sourceUrl":[1,"source-url"],"sessionProviderUrl":[1,"session-provider-url"],"position":[1],"session":[32],"job":[32],"executor":[32],"codeCount":[32],"statusMessage":[32]}]]],["stencila-code-expression.cjs",[[38,"stencila-code-expression",{"executeHandler":[16],"programmingLanguage":[1,"programming-language"],"output":[32],"codeErrors":[32],"hover":[32],"isCodeVisible":[32],"isOutputEmpty":[32],"executeCodeState":[32],"getContents":[64],"execute":[64]},[[8,"collapseAllCode","onSetAllCodeVisibility"],[8,"setAllCodeVisibility","onSetAllCodeVisibility"]]]]],["stencila-code-error.cjs",[[38,"stencila-code-error",{"error":[16],"kind":[1],"stackIsOpen":[32]}]]],["stencila-input.cjs",[[34,"stencila-input",{"autoFocus":[4,"auto-focus"],"inputmode":[1],"type":[1],"name":[1],"label":[1],"hideLabel":[4,"hide-label"],"inline":[4],"placeholder":[1],"iconStart":[1,"icon-start"],"required":[4],"value":[8]}]]],["stencila-menu-item.cjs",[[38,"stencila-menu-item",{"icon":[1]}]]],["stencila-tab-list.cjs",[[34,"stencila-tab-list",{"tabs":[16],"activeTabIndex":[32]}]]],["animated-route-switch.cjs",[[4,"animated-route-switch",{"group":[513],"routeViewsUpdated":[16],"scrollTopOffset":[2,"scroll-top-offset"],"location":[16]}]]],["stencila-menu.cjs",[[38,"stencila-menu",{"isOpen":[1540,"is-open"]}]]],["stencila-details.cjs",[[38,"stencila-details",{"open":[4],"isOpen":[32]}]]],["stencila-tab.cjs",[[34,"stencila-tab",{"href":[1],"label":[1],"isSelected":[4,"selected"]}]]],["animate-presence.cjs",[[1,"animate-presence",{"__presenceKey":[1,"__presence-key"],"descendants":[16],"observe":[1028],"registerChild":[64],"unregisterChild":[64],"exit":[64],"enter":[64]},[[0,"animatePresenceExitComplete","animatePresenceExitCompleteHandler"]]]]],["stencila-action-menu_3.cjs",[[38,"stencila-action-menu",{"actions":[16],"hasSecondaryActions":[32],"isCollapsed":[32],"width":[32],"isAnimating":[32]}],[38,"stencila-node-list",{"nodes":[16],"isEmpty":[32]}],[38,"stencila-editor",{"contents":[1],"isControlled":[4,"is-controlled"],"languageCapabilities":[16],"readOnly":[4,"read-only"],"activeLanguage":[1537,"active-language"],"executeHandler":[16],"autofocus":[4],"lineNumbers":[4,"line-numbers"],"lineWrapping":[4,"line-wrapping"],"foldGutter":[4,"fold-gutter"],"keymap":[16],"errors":[16],"getContents":[64],"setContents":[64],"setState":[64],"getRef":[64]}]]],["stencila-toast_2.cjs",[[38,"stencila-toolbar",{"position":[1],"color":[1]}],[36,"stencila-toast",{"dismissable":[4],"duration":[2],"type":[1],"position":[1]}]]],["stencila-data-table_4.cjs",[[34,"stencila-image-plotly",{"data":[16],"layout":[16],"config":[16],"plotIsRendered":[32]},[[8,"plotlyLoaded","onPlotlyLoaded"]]],[34,"stencila-image-vega",{"spec":[1],"options":[16],"plotIsRendered":[32]},[[8,"vegaLoaded","onVegaLoaded"]]],[34,"stencila-data-table",{"table":[16]}],[34,"stencila-image-object",{"image":[16]}]]],["stencila-icon.cjs",[[34,"stencila-icon",{"icon":[1],"iconStyle":[1,"icon-style"]}]]],["stencila-button_3.cjs",[[38,"stencila-button",{"href":[1],"rel":[1],"target":[1],"ariaLabel":[1,"aria-label"],"color":[1],"size":[1],"minimal":[4],"isSecondary":[4,"is-secondary"],"buttonType":[1,"button-type"],"disabled":[4],"icon":[1],"iconOnly":[4,"icon-only"],"isLoading":[4,"is-loading"],"fill":[4],"tooltip":[1],"dataEl":[1,"data-el"]}],[38,"stencila-tooltip",{"text":[1]}],[38,"stencila-tooltip-element"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
