import { autocompletion, completeAnyWord, startCompletion, } from '@codemirror/autocomplete';
import { closeBrackets, closeBracketsKeymap } from '@codemirror/closebrackets';
import { defaultKeymap } from '@codemirror/commands';
import { commentKeymap } from '@codemirror/comment';
import { foldGutter, foldKeymap } from '@codemirror/fold';
import { lineNumbers } from '@codemirror/gutter';
import { defaultHighlightStyle } from '@codemirror/highlight';
import { history, historyKeymap } from '@codemirror/history';
import { bracketMatching } from '@codemirror/matchbrackets';
import { searchConfig, searchKeymap } from '@codemirror/search';
import { Compartment, EditorState, Prec, } from '@codemirror/state';
import { drawSelection, EditorView, highlightSpecialChars, keymap, } from '@codemirror/view';
import { Component, Element, Event, h, Host, Method, Prop, Watch, } from '@stencil/core';
import { getSlotByName } from '../utils/slotSelectors';
import { LanguagePicker } from './components/languageSelect';
import { codeErrors, updateErrors } from './customizations/errorPanel';
import { defaultLanguageCapabilities, languageByAlias } from './languageUtils';
const slots = {
  text: 'text',
};
const cssClasses = {
  container: 'editorContainer',
  editor: 'editor',
};
const cssIds = {
  editorTarget: 'editorTarget',
};
export class Editor {
  constructor() {
    var _a, _b;
    this.isReady = false;
    /**
     * Disable language and other editor configuration management, deferring control to consuming applications
     */
    this.isControlled = false;
    /**
     * List of all supported programming languages
     */
    this.languageCapabilities = defaultLanguageCapabilities;
    /**
     * Disallow editing of the editor contents when set to `true`
     */
    this.readOnly = false;
    // Dynamic CodeMirror states need to be "compartmentalized". @see https://codemirror.net/6/docs/ref/#state.Compartment
    this.readOnlyConf = new Compartment();
    /**
     * Programming language of the Editor
     */
    // eslint-disable-next-line @stencil/strict-mutable
    this.activeLanguage = (_b = (_a = this.languageCapabilities[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : '';
    this.dispatchEffect = (effect) => {
      var _a, _b, _c;
      const docState = (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.state;
      const transaction = (_b = docState === null || docState === void 0 ? void 0 : docState.update({
        effects: [effect],
      })) !== null && _b !== void 0 ? _b : {};
      (_c = this.editorRef) === null || _c === void 0 ? void 0 : _c.dispatch(transaction);
    };
    this.getLang = async (language) => {
      switch (language.toLowerCase()) {
        case 'r': {
          const { StreamLanguage } = await import('@codemirror/stream-parser');
          const { r } = await import('@codemirror/legacy-modes/mode/r');
          return StreamLanguage.define(r);
        }
        case 'bash':
        case 'shell':
        case 'sh': {
          const { StreamLanguage } = await import('@codemirror/stream-parser');
          const { shell } = await import('@codemirror/legacy-modes/mode/shell');
          return StreamLanguage.define(shell);
        }
        case 'latex':
        case 'stex':
        case 'tex': {
          const { StreamLanguage } = await import('@codemirror/stream-parser');
          const { stexMath } = await import('@codemirror/legacy-modes/mode/stex');
          return StreamLanguage.define(stexMath);
        }
        case 'toml': {
          const { StreamLanguage } = await import('@codemirror/stream-parser');
          const { toml } = await import('@codemirror/legacy-modes/mode/toml');
          return StreamLanguage.define(toml);
        }
        case 'yaml': {
          const { StreamLanguage } = await import('@codemirror/stream-parser');
          const { yaml } = await import('@codemirror/legacy-modes/mode/yaml');
          return StreamLanguage.define(yaml);
        }
        case 'dockerfile': {
          const { StreamLanguage } = await import('@codemirror/stream-parser');
          const { dockerFile } = await import('@codemirror/legacy-modes/mode/dockerfile');
          return StreamLanguage.define(dockerFile);
        }
        case 'html': {
          const { html } = await import('@codemirror/lang-html');
          return html();
        }
        case 'javascript': {
          const { javascript } = await import('@codemirror/lang-javascript');
          return javascript();
        }
        case 'json': {
          const { json } = await import('@codemirror/lang-json');
          return json();
        }
        case 'xml': {
          const { xml } = await import('@codemirror/lang-xml');
          return xml();
        }
        case 'python': {
          const { python } = await import('@codemirror/lang-python');
          return python();
        }
        case 'rmd': {
          const { markdown } = await import('@codemirror/lang-markdown');
          const { StreamLanguage } = await import('@codemirror/stream-parser');
          const { r } = await import('@codemirror/legacy-modes/mode/r');
          return markdown({ defaultCodeLanguage: StreamLanguage.define(r) });
        }
        case 'md':
        case 'markdown':
        default: {
          const { markdown } = await import('@codemirror/lang-markdown');
          return markdown();
        }
      }
    };
    // Dynamic CodeMirror states need to be "compartmentalized". @see https://codemirror.net/6/docs/ref/#state.Compartment
    this.languageConf = new Compartment();
    /**
     * Handle logic for updated internal and external representation/state of the
     * active language prop.
     */
    this.setLanguageHandler = async (language) => {
      this.setLanguage.emit(language);
      const lang = await this.getLang(language);
      this.activeLanguage = language;
      this.dispatchEffect(this.languageConf.reconfigure(lang));
    };
    /**
     * Changes the active programming language of the editor.
     */
    this.onSetLanguage = async (e) => {
      const target = e.currentTarget;
      const language = languageByAlias(target.value);
      return this.setLanguageHandler(language);
    };
    /**
     * Wrapper around the `executeHandler` function, needed to run using CodeMirror keyboard shortcuts.
     */
    this.execute = () => {
      this.getContents()
        .then((contents) => {
        return this.executeHandler ? this.executeHandler(contents) : contents;
      })
        .catch((err) => {
        console.error(err);
        return false;
      });
      return true;
    };
    /**
     * Autofocus the editor on page load
     */
    this.autofocus = false;
    // Dynamic CodeMirror states need to be "compartmentalized". @see https://codemirror.net/6/docs/ref/#state.Compartment
    this.lineNumbersConf = new Compartment();
    /**
     * Determines the visibility of line numbers
     */
    this.lineNumbers = true;
    // Dynamic CodeMirror states need to be "compartmentalized". @see https://codemirror.net/6/docs/ref/#state.Compartment
    this.lineWrappingConf = new Compartment();
    /**
     * Control line wrapping of text inside the editor
     */
    this.lineWrapping = false;
    // Dynamic CodeMirror states need to be "compartmentalized". @see https://codemirror.net/6/docs/ref/#state.Compartment
    this.foldGutterConf = new Compartment();
    /**
     * Enables ability to fold sections of code if the syntax package supports it
     */
    this.foldGutter = true;
    /**
     * Custom keyboard shortcuts to pass along to CodeMirror
     * @see https://codemirror.net/6/docs/ref/#keymap
     */
    this.keymap = [];
    this.getCodeMirrorConfig = async (config = {}) => {
      const { language, foldGutterEnabled, lineNumbersEnabled, lineWrappingEnabled, } = Object.assign({ language: this.activeLanguage, foldGutterEnabled: this.foldGutter, lineNumbersEnabled: this.lineNumbers, lineWrappingEnabled: this.lineWrapping }, config);
      const languageSyntax = await this.getLang(language);
      const extensions = [
        history(),
        autocompletion(),
        EditorState.languageData.of(() => [{ autocomplete: completeAnyWord }]),
        bracketMatching(),
        closeBrackets(),
        Prec.fallback(defaultHighlightStyle),
        this.languageConf.of(languageSyntax),
        this.lineWrappingConf.of(lineWrappingEnabled ? EditorView.lineWrapping : []),
        this.lineNumbersConf.of(lineNumbersEnabled ? lineNumbers() : []),
        this.foldGutterConf.of(foldGutterEnabled ? foldGutter() : []),
        drawSelection(),
        EditorState.allowMultipleSelections.of(true),
        searchConfig({ top: true }),
        highlightSpecialChars(),
        keymap.of([
          ...defaultKeymap,
          ...commentKeymap,
          ...closeBracketsKeymap,
          ...historyKeymap,
          ...foldKeymap,
          ...searchKeymap,
          {
            key: 'Ctrl-Space',
            run: startCompletion,
          },
          {
            key: 'Shift-Enter',
            run: this.execute,
          },
          ...this.keymap,
        ]),
        this.readOnlyConf.of(EditorView.editable.of(!this.readOnly)),
        codeErrors(),
      ];
      return extensions;
    };
    this.initCodeMirror = async () => {
      var _a, _b;
      const root = this.el;
      const slotEl = getSlotByName(root)(slots.text);
      const textContent = (_b = (_a = this.contents) !== null && _a !== void 0 ? _a : slotEl === null || slotEl === void 0 ? void 0 : slotEl.textContent) !== null && _b !== void 0 ? _b : '';
      this.editorRef = new EditorView({
        state: EditorState.create({
          doc: textContent,
          extensions: await this.getCodeMirrorConfig(),
        }),
      });
      this.isReady = true;
    };
    this.attachEditorToDom = () => {
      var _a, _b, _c;
      const editorDom = (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.dom;
      if (editorDom) {
        (_c = (_b = this.el) === null || _b === void 0 ? void 0 : _b.querySelector(`#${cssIds.editorTarget}`)) === null || _c === void 0 ? void 0 : _c.replaceWith(editorDom);
      }
    };
    this.setContentsHandler = (contents) => {
      var _a, _b, _c;
      const docState = (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.state;
      const transaction = (_b = docState === null || docState === void 0 ? void 0 : docState.update({
        changes: {
          from: 0,
          to: docState.doc.length,
          insert: contents,
        },
        scrollIntoView: true,
      })) !== null && _b !== void 0 ? _b : {};
      (_c = this.editorRef) === null || _c === void 0 ? void 0 : _c.dispatch(transaction);
    };
    /**
     * Prevents keyboard event listeners attached to parent DOM elements from firing.
     * This is to avoid conflicts when user has focused on the editor.
     */
    this.stopEventPropagation = (e) => {
      e.stopPropagation();
    };
    /**
     * Brings DOM focus to the editor
     */
    this.focus = () => {
      var _a;
      (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.focus();
    };
  }
  contentsChanged(nextValue, prevValue) {
    if (!this.isControlled && nextValue !== prevValue) {
      this.setContentsHandler(nextValue);
    }
  }
  /**
   * Update the CodeMirror internal state when the `readOnly` prop changes
   */
  readOnlyChanged(nextReadOnly, prevReadOnly) {
    if (nextReadOnly !== prevReadOnly) {
      this.dispatchEffect(this.readOnlyConf.reconfigure(EditorView.editable.of(!this.readOnly)));
    }
  }
  /**
   * Update the internal state, for both the component and CodeMirror, when the
   * `activeLanguage` prop changes
   */
  activeLanguageOnlyChanged(nextLanguage, prevLanguage) {
    if (!this.isControlled && nextLanguage !== prevLanguage) {
      this.setLanguageHandler(nextLanguage).catch((err) => {
        console.log(err);
      });
    }
  }
  onSetLineNumbers(nextValue, prevValue) {
    if (!this.isControlled && nextValue !== prevValue) {
      this.dispatchEffect(this.lineNumbersConf.reconfigure(nextValue ? lineNumbers() : []));
    }
  }
  onSetLineWrapping(nextValue, prevValue) {
    if (!this.isControlled && nextValue !== prevValue) {
      this.dispatchEffect(this.lineWrappingConf.reconfigure(nextValue ? EditorView.lineWrapping : []));
    }
  }
  onSetfoldGutter(nextValue, prevValue) {
    if (!this.isControlled && nextValue !== prevValue) {
      this.dispatchEffect(this.foldGutterConf.reconfigure(nextValue ? foldGutter() : []));
    }
  }
  errorsChanged(nextErrors) {
    var _a;
    (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.dispatch({
      effects: updateErrors.of(nextErrors),
    });
  }
  /**
   * Public method, returning the Editor contents and active language.
   */
  async getContents() {
    var _a, _b;
    return {
      text: (_b = (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.state.doc.toString()) !== null && _b !== void 0 ? _b : '',
      language: this.activeLanguage,
    };
  }
  /**
   * Public method, to replace the contents of the Editor with a supplied string.
   */
  setContents(contents) {
    this.setContentsHandler(contents);
    return Promise.resolve(contents);
  }
  /**
   * Public method, to completely replace the editor state with the given state.
   * This replaces the editor configuration, edit history, language, etc.
   */
  async setState(contents, config, extensions, selection) {
    var _a;
    (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.setState(EditorState.create({
      doc: contents,
      extensions: extensions !== null && extensions !== void 0 ? extensions : (await this.getCodeMirrorConfig(config)),
      selection,
    }));
    return Promise.resolve(contents);
  }
  /**
   * Public method, returning a reference to the internal CodeMirror editor.
   * Allows for maintaining state from applications making use of this component.
   */
  async getRef() {
    if (this.editorRef) {
      return this.editorRef;
    }
    return new Promise((resolve, reject) => {
      let isChecking = true;
      const timeout = 3000;
      const wait = setTimeout(() => {
        isChecking = false;
      }, timeout);
      const check = () => {
        setInterval(() => {
          if (this.editorRef && this.isReady) {
            clearTimeout(wait);
            resolve(this.editorRef);
          }
          else if (!isChecking) {
            reject(new Error(`Editor wasn’t instantiated in time (${timeout}ms), please try again.`));
          }
          else {
            check();
          }
        }, 100);
      };
      check();
    });
  }
  async componentWillLoad() {
    try {
      return this.initCodeMirror();
    }
    catch (err) {
      console.log('Encountered error while initializing code editor\n', err);
    }
  }
  componentDidLoad() {
    this.attachEditorToDom();
    if (this.autofocus) {
      this.focus();
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.destroy();
  }
  render() {
    return (h(Host, null,
      h("div", { class: cssClasses.container },
        h("div", { class: cssClasses.editor, onKeyDown: this.stopEventPropagation, onClick: this.focus },
          h("div", { class: "hidden" },
            h("slot", { name: slots.text })),
          h("div", { id: cssIds.editorTarget })),
        h("menu", null,
          h(LanguagePicker, { activeLanguage: this.activeLanguage, onSetLanguage: this.onSetLanguage, languageCapabilities: this.languageCapabilities })))));
  }
  static get is() { return "stencila-editor"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["editor.css"],
    "material": ["editor.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["editor.css"],
    "material": ["editor.material.css"]
  }; }
  static get properties() { return {
    "contents": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Text contents of the editor"
      },
      "attribute": "contents",
      "reflect": false
    },
    "isControlled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Disable language and other editor configuration management, deferring control to consuming applications"
      },
      "attribute": "is-controlled",
      "reflect": false,
      "defaultValue": "false"
    },
    "languageCapabilities": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "List of all supported programming languages"
      },
      "defaultValue": "defaultLanguageCapabilities"
    },
    "readOnly": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Disallow editing of the editor contents when set to `true`"
      },
      "attribute": "read-only",
      "reflect": false,
      "defaultValue": "false"
    },
    "activeLanguage": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Programming language of the Editor"
      },
      "attribute": "active-language",
      "reflect": true,
      "defaultValue": "this.languageCapabilities[0]?.toLowerCase() ?? ''"
    },
    "executeHandler": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(contents: EditorContents) => Promise<unknown>",
        "resolved": "((contents: EditorContents) => Promise<unknown>) | undefined",
        "references": {
          "EditorContents": {
            "location": "local"
          },
          "Promise": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Function to be evaluated over the contents of the editor."
      }
    },
    "autofocus": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Autofocus the editor on page load"
      },
      "attribute": "autofocus",
      "reflect": false,
      "defaultValue": "false"
    },
    "lineNumbers": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Determines the visibility of line numbers"
      },
      "attribute": "line-numbers",
      "reflect": false,
      "defaultValue": "true"
    },
    "lineWrapping": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Control line wrapping of text inside the editor"
      },
      "attribute": "line-wrapping",
      "reflect": false,
      "defaultValue": "false"
    },
    "foldGutter": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Enables ability to fold sections of code if the syntax package supports it"
      },
      "attribute": "fold-gutter",
      "reflect": false,
      "defaultValue": "true"
    },
    "keymap": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Keymap[]",
        "resolved": "KeyBinding[]",
        "references": {
          "Keymap": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": "https ://codemirror.net/6/docs/ref/#keymap",
            "name": "see"
          }],
        "text": "Custom keyboard shortcuts to pass along to CodeMirror"
      },
      "defaultValue": "[]"
    },
    "errors": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "CodeError[] | string[]",
        "resolved": "CodeError[] | string[] | undefined",
        "references": {
          "CodeError": {
            "location": "import",
            "path": "@stencila/schema"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "List of errors to display at the bottom of the code editor section.\nIf the error is a `string`, then it will be rendered as a warning."
      }
    }
  }; }
  static get events() { return [{
      "method": "setLanguage",
      "name": "setLanguage",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when the language of the editor is changed."
      },
      "complexType": {
        "original": "string | undefined",
        "resolved": "string | undefined",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "getContents": {
      "complexType": {
        "signature": "() => Promise<EditorContents>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "EditorContents": {
            "location": "local"
          }
        },
        "return": "Promise<EditorContents>"
      },
      "docs": {
        "text": "Public method, returning the Editor contents and active language.",
        "tags": []
      }
    },
    "setContents": {
      "complexType": {
        "signature": "(contents: string) => Promise<string>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<string>"
      },
      "docs": {
        "text": "Public method, to replace the contents of the Editor with a supplied string.",
        "tags": []
      }
    },
    "setState": {
      "complexType": {
        "signature": "(contents: string, config?: EditorConfig | undefined, extensions?: Extension[] | undefined, selection?: EditorSelection | undefined) => Promise<string>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "EditorConfig": {
            "location": "global"
          },
          "Extension": {
            "location": "import",
            "path": "@codemirror/state"
          },
          "EditorSelection": {
            "location": "import",
            "path": "@codemirror/state"
          }
        },
        "return": "Promise<string>"
      },
      "docs": {
        "text": "Public method, to completely replace the editor state with the given state.\nThis replaces the editor configuration, edit history, language, etc.",
        "tags": []
      }
    },
    "getRef": {
      "complexType": {
        "signature": "() => Promise<EditorView>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "EditorView": {
            "location": "import",
            "path": "@codemirror/view"
          }
        },
        "return": "Promise<EditorView>"
      },
      "docs": {
        "text": "Public method, returning a reference to the internal CodeMirror editor.\nAllows for maintaining state from applications making use of this component.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "contents",
      "methodName": "contentsChanged"
    }, {
      "propName": "readOnly",
      "methodName": "readOnlyChanged"
    }, {
      "propName": "activeLanguage",
      "methodName": "activeLanguageOnlyChanged"
    }, {
      "propName": "lineNumbers",
      "methodName": "onSetLineNumbers"
    }, {
      "propName": "lineWrapping",
      "methodName": "onSetLineWrapping"
    }, {
      "propName": "foldGutter",
      "methodName": "onSetfoldGutter"
    }, {
      "propName": "errors",
      "methodName": "errorsChanged"
    }]; }
}
