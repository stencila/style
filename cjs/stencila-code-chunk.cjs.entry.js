'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c7f4beea.js');
const schema = require('./schema-3bbb20ef.js');

const defaultCodeChunkCss = "*.sc-stencila-code-chunk-default,.sc-stencila-code-chunk-default:after,.sc-stencila-code-chunk-default:before{border:0 solid;-webkit-box-sizing:border-box;box-sizing:border-box}html.sc-stencila-code-chunk-default{font-size:16px}.hidden.sc-stencila-code-chunk-default{display:none}code.sc-stencila-code-chunk-default,code[class*=language-].sc-stencila-code-chunk-default,output.sc-stencila-code-chunk-default{font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:75%}pre.sc-stencila-code-chunk-default{border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;margin:.5rem;overflow:auto;padding:.5rem}.preReset.sc-stencila-code-chunk-default{border-width:0;margin:0;padding:0}.sc-stencila-code-chunk-default-h,stencila-code-chunk.sc-stencila-code-chunk-default{--background:var(--color-stock,#fff);--background-editor:var(--color-neutral-50,#edf2f7);--border:var(--color-neutral-100,#e2e8f0)}.sc-stencila-code-chunk-default-h,stencila-code-chunk.sc-stencila-code-chunk-default{border-radius:.25rem;border-style:solid;border-width:1px;display:block;margin-bottom:1rem;margin-top:1rem;overflow:hidden;position:relative;width:100%}.sc-stencila-code-chunk-default-h,stencila-code-chunk.sc-stencila-code-chunk-default{border-color:var(--border)}.sc-stencila-code-chunk-default-h stencila-action-menu.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default stencila-action-menu.sc-stencila-code-chunk-default{border-left-width:0;border-radius:0;border-right-width:0;display:block;padding:0;position:relative;width:100%}.sc-stencila-code-chunk-default-h stencila-editor.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default stencila-editor.sc-stencila-code-chunk-default{--border-width:0;-ms-flex-positive:1;flex-grow:1}.sc-stencila-code-chunk-default-h stencila-node-list.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default stencila-node-list.sc-stencila-code-chunk-default{background-color:var(--background);margin:0;padding:.5rem}.sc-stencila-code-chunk-default-h .layoutToggle.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default .layoutToggle.sc-stencila-code-chunk-default{display:none}@media (min-width:1024px){.sc-stencila-code-chunk-default-h .layoutToggle.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default .layoutToggle.sc-stencila-code-chunk-default{display:inline-block}}.editorContainer.sc-stencila-code-chunk-default{background:var(--background-editor);border-color:var(--border);border-radius:0;border-width:0 0 1px;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:intrinsic;margin:0;position:relative}.editorContainer.sc-stencila-code-chunk-default pre.sc-stencila-code-chunk-default,.editorContainer.sc-stencila-code-chunk-default pre[class*=language-].sc-stencila-code-chunk-default{background-color:transparent}.editorContainer.hidden.sc-stencila-code-chunk-default{display:none}@media (min-width:1024px){.sc-stencila-code-chunk-default-h:not(.isStacked)>div.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>div.sc-stencila-code-chunk-default{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.sc-stencila-code-chunk-default-h:not(.isStacked)>div.sc-stencila-code-chunk-default .editorContainer.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>div.sc-stencila-code-chunk-default .editorContainer.sc-stencila-code-chunk-default{border-bottom-width:0;border-right-width:1px;width:50%}.sc-stencila-code-chunk-default-h:not(.isStacked)>div.sc-stencila-code-chunk-default stencila-node-list.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default:not(.isStacked)>div.sc-stencila-code-chunk-default stencila-node-list.sc-stencila-code-chunk-default{-ms-flex-positive:1;flex-grow:1;width:50%}}";

const codeChunkMaterialCss = "*.sc-stencila-code-chunk-material,.sc-stencila-code-chunk-material:after,.sc-stencila-code-chunk-material:before{border:0 solid;-webkit-box-sizing:border-box;box-sizing:border-box}html.sc-stencila-code-chunk-material{font-size:16px}.hidden.sc-stencila-code-chunk-material{display:none}code.sc-stencila-code-chunk-material,code[class*=language-].sc-stencila-code-chunk-material,output.sc-stencila-code-chunk-material{font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:75%}pre.sc-stencila-code-chunk-material{border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;margin:.5rem;overflow:auto;padding:.5rem}.preReset.sc-stencila-code-chunk-material{border-width:0;margin:0;padding:0}.sc-stencila-code-chunk-material-h,stencila-code-chunk.sc-stencila-code-chunk-material{--background:var(--color-stock,#fff);--background-editor:var(--color-neutral-50,#edf2f7);--border:var(--color-neutral-100,#e2e8f0)}.sc-stencila-code-chunk-material-h,stencila-code-chunk.sc-stencila-code-chunk-material{border-radius:.25rem;border-style:solid;border-width:1px;display:block;margin-bottom:1rem;margin-top:1rem;overflow:hidden;position:relative;width:100%}.sc-stencila-code-chunk-material-h,stencila-code-chunk.sc-stencila-code-chunk-material{border-color:var(--border)}.sc-stencila-code-chunk-material-h stencila-action-menu.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material stencila-action-menu.sc-stencila-code-chunk-material{border-left-width:0;border-radius:0;border-right-width:0;display:block;padding:0;position:relative;width:100%}.sc-stencila-code-chunk-material-h stencila-editor.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material stencila-editor.sc-stencila-code-chunk-material{--border-width:0;-ms-flex-positive:1;flex-grow:1}.sc-stencila-code-chunk-material-h stencila-node-list.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material stencila-node-list.sc-stencila-code-chunk-material{background-color:var(--background);margin:0;padding:.5rem}.sc-stencila-code-chunk-material-h .layoutToggle.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material .layoutToggle.sc-stencila-code-chunk-material{display:none}@media (min-width:1024px){.sc-stencila-code-chunk-material-h .layoutToggle.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material .layoutToggle.sc-stencila-code-chunk-material{display:inline-block}}.editorContainer.sc-stencila-code-chunk-material{background:var(--background-editor);border-color:var(--border);border-radius:0;border-width:0 0 1px;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:intrinsic;margin:0;position:relative}.editorContainer.sc-stencila-code-chunk-material pre.sc-stencila-code-chunk-material,.editorContainer.sc-stencila-code-chunk-material pre[class*=language-].sc-stencila-code-chunk-material{background-color:transparent}.editorContainer.hidden.sc-stencila-code-chunk-material{display:none}@media (min-width:1024px){.sc-stencila-code-chunk-material-h:not(.isStacked)>div.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>div.sc-stencila-code-chunk-material{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.sc-stencila-code-chunk-material-h:not(.isStacked)>div.sc-stencila-code-chunk-material .editorContainer.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>div.sc-stencila-code-chunk-material .editorContainer.sc-stencila-code-chunk-material{border-bottom-width:0;border-right-width:1px;width:50%}.sc-stencila-code-chunk-material-h:not(.isStacked)>div.sc-stencila-code-chunk-material stencila-node-list.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material:not(.isStacked)>div.sc-stencila-code-chunk-material stencila-node-list.sc-stencila-code-chunk-material{-ms-flex-positive:1;flex-grow:1;width:50%}}";

const CodeChunkComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.setAllCodeVisibility = index.createEvent(this, "setAllCodeVisibility", 7);
    this.setEditorLayout = index.createEvent(this, "setEditorLayout", 7);
    /**
     * Autofocus the editor on page load
     */
    this.autofocus = false;
    /**
     * Whether the code section is visible or not
     */
    this.isCodeVisible = false;
    /**
     * Custom keyboard shortcuts to pass along to CodeMirror
     * @see https://codemirror.net/6/docs/ref/#keymap
     */
    this.keymap = [];
    this.executeCodeState = 'INITIAL';
    this.isStacked = true;
    this.codeErrors = [];
    this.isCodeVisibleState = this.isCodeVisible;
    this.toggleCodeVisibility = (e) => {
      e.preventDefault();
      if (e.shiftKey) {
        this.toggleAllCodeVisibility();
      }
      else {
        this.isCodeVisibleState = !this.isCodeVisibleState;
      }
    };
    this.toggleAllCodeVisibility = () => this.setAllCodeVisibilityHandler(!this.isCodeVisibleState);
    this.onExecuteHandler = async () => {
      this.executeCodeState = 'PENDING';
      const node = await this.getContents();
      if (this.executeHandler !== undefined) {
        const computed = await this.executeHandler(node);
        this.executeCodeState = 'RESOLVED';
        this.codeErrors = computed.errors;
        this.outputs = computed.outputs;
        return computed;
      }
      this.executeCodeState = 'RESOLVED';
      return node;
    };
    this.setEditorLayoutHandler = (isStacked) => {
      this.isStacked = isStacked;
    };
    this.toggleEditorLayout = (e) => {
      e.preventDefault();
      if (e.shiftKey) {
        this.setEditorLayout.emit({ isStacked: !this.isStacked });
      }
      else {
        this.setEditorLayoutHandler(!this.isStacked);
      }
    };
    // Create an execute handler bound to this instance
    // @see https://github.com/typescript-eslint/typescript-eslint/blob/v3.7.0/packages/eslint-plugin/docs/rules/unbound-method.md
    this.executeRef = () => this.execute();
    this.setCodeVisibility = (e) => {
      this.isCodeVisibleState = e.detail.isVisible;
    };
  }
  onSetAllCodeVisibility(event) {
    this.setCodeVisibility(event);
  }
  onSetEditorLayout(event) {
    this.setEditorLayoutHandler(event.detail.isStacked);
  }
  componentWillLoad() {
    /** Get rendered width of component to decide whether to stack the editor and outputs or not.
     * We can’t use media queries as the component is not always full width of the viewport, and depends on the parent element width.
     */
    const minWidth = 1200; // A non-scientific value below which the side-by-side layout looks too narrow.
    this.isStacked = this.el.getBoundingClientRect().width < minWidth;
  }
  componentDidLoad() {
    this.editorRef = this.el.querySelector('stencila-editor');
  }
  /**
   * Returns the `CodeChunk` node with the updated `text` content from the editor.
   */
  async getContents() {
    var _a;
    if (this.editorRef) {
      const { text, language } = await ((_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.getContents());
      return schema.s({ text, programmingLanguage: language });
    }
    return schema.s({ text: '' });
  }
  /**
   * Run the `CodeChunk`
   */
  async execute() {
    this.executeCodeState = 'PENDING';
    try {
      const res = await this.onExecuteHandler();
      // Add artificial delay to allow user to register the spinner
      window.setTimeout(() => (this.executeCodeState = 'RESOLVED'), 250);
      return res;
    }
    catch (err) {
      console.error(err);
      this.executeCodeState = 'RESOLVED';
      return err;
    }
  }
  setAllCodeVisibilityHandler(isVisible) {
    this.setAllCodeVisibility.emit({ isVisible });
  }
  render() {
    return (index.h(index.Host, { class: {
        isCodeVisible: this.isCodeVisibleState,
        isStacked: this.isStacked,
      } }, index.h("stencila-action-menu", null, this.executeHandler !== undefined && (index.h("stencila-button", { icon: "play", minimal: true, color: "key", class: "run", size: "xsmall", tooltip: "Run", iconOnly: true, slot: "persistentActions", onClick: this.executeRef, isLoading: this.executeCodeState === 'PENDING' })), index.h("stencila-button", { minimal: true, color: "key", class: "sourceToggle", onClick: this.toggleCodeVisibility, icon: this.isCodeVisibleState ? 'eye-off' : 'eye', iconOnly: true, size: "xsmall", slot: "persistentActions", tooltip: `${this.isCodeVisibleState ? 'Hide' : 'Show'} Code\nShift click to set for all code blocks` }), this.isCodeVisibleState && (index.h("stencila-button", { minimal: true, color: "key", class: "layoutToggle", onClick: this.toggleEditorLayout, icon: this.isStacked ? 'layout-column' : 'layout-row', iconOnly: true, size: "xsmall", slot: "persistentActions", tooltip: `${this.isStacked ? 'Side by side' : 'Stacked'} view\nShift click to set for all code blocks` }))), index.h("div", null, index.h("div", { class: {
        editorContainer: true,
        hidden: !this.isCodeVisibleState,
      } }, index.h("stencila-editor", { activeLanguage: this.programmingLanguageProp, autofocus: this.autofocus, executeHandler: this.onExecuteHandler, keymap: this.keymap, readOnly: this.executeHandler === undefined, errors: this.codeErrors }, index.h("slot", { name: CodeChunkComponent.slots.text }))), index.h("stencila-node-list", { nodes: this.outputs }, index.h("slot", { name: CodeChunkComponent.slots.outputs })))));
  }
  get el() { return index.getElement(this); }
};
CodeChunkComponent.slots = {
  text: 'text',
  outputs: 'outputs',
};
CodeChunkComponent.style = {
  default: defaultCodeChunkCss,
  material: codeChunkMaterialCss
};

exports.stencila_code_chunk = CodeChunkComponent;
