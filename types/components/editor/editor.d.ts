import { EditorSelection, Extension } from '@codemirror/state';
import { EditorView, KeyBinding as KeymapI } from '@codemirror/view';
import { EventEmitter } from '../../stencil-public-runtime';
import { CodeError } from '@stencila/schema';
export interface EditorContents {
  text: string;
  language: string;
}
export declare type Keymap = KeymapI;
declare type EditorConfig = {
  language?: string;
  foldGutterEnabled?: boolean;
  lineNumbersEnabled?: boolean;
  lineWrappingEnabled?: boolean;
};
export declare class Editor {
  private el;
  private editorRef;
  private isReady;
  /**
   * Text contents of the editor
   */
  contents?: string;
  /**
   * Disable language and other editor configuration management, deferring control to consuming applications
   */
  isControlled: boolean;
  contentsChanged(nextValue: string, prevValue: string): void;
  /**
   * List of all supported programming languages
   */
  languageCapabilities: string[];
  /**
   * Disallow editing of the editor contents when set to `true`
   */
  readOnly: boolean;
  /**
   * Update the CodeMirror internal state when the `readOnly` prop changes
   */
  readOnlyChanged(nextReadOnly: boolean, prevReadOnly: boolean): void;
  private readOnlyConf;
  /**
   * Programming language of the Editor
   */
  activeLanguage: string;
  private dispatchEffect;
  /**
   * Event emitted when the language of the editor is changed.
   */
  setLanguage: EventEmitter<string | undefined>;
  private getLang;
  private languageConf;
  /**
   * Handle logic for updated internal and external representation/state of the
   * active language prop.
   */
  private setLanguageHandler;
  /**
   * Changes the active programming language of the editor.
   */
  private onSetLanguage;
  /**
   * Update the internal state, for both the component and CodeMirror, when the
   * `activeLanguage` prop changes
   */
  activeLanguageOnlyChanged(nextLanguage: string, prevLanguage: string): void;
  /**
   * Function to be evaluated over the contents of the editor.
   */
  executeHandler?: (contents: EditorContents) => Promise<unknown>;
  /**
   * Wrapper around the `executeHandler` function, needed to run using CodeMirror keyboard shortcuts.
   */
  private execute;
  /**
   * Autofocus the editor on page load
   */
  autofocus: boolean;
  private lineNumbersConf;
  /**
   * Determines the visibility of line numbers
   */
  lineNumbers: boolean;
  onSetLineNumbers(nextValue: boolean, prevValue: boolean): void;
  private lineWrappingConf;
  /**
   * Control line wrapping of text inside the editor
   */
  lineWrapping: boolean;
  onSetLineWrapping(nextValue: boolean, prevValue: boolean): void;
  private foldGutterConf;
  /**
   * Enables ability to fold sections of code if the syntax package supports it
   */
  foldGutter: boolean;
  onSetfoldGutter(nextValue: boolean, prevValue: boolean): void;
  /**
   * Custom keyboard shortcuts to pass along to CodeMirror
   * @see https://codemirror.net/6/docs/ref/#keymap
   */
  keymap: Keymap[];
  /**
   * List of errors to display at the bottom of the code editor section.
   * If the error is a `string`, then it will be rendered as a warning.
   */
  errors?: CodeError[] | string[];
  errorsChanged(nextErrors: (CodeError | string)[]): void;
  private getCodeMirrorConfig;
  private initCodeMirror;
  private attachEditorToDom;
  /**
   * Public method, returning the Editor contents and active language.
   */
  getContents(): Promise<EditorContents>;
  private setContentsHandler;
  /**
   * Public method, to replace the contents of the Editor with a supplied string.
   */
  setContents(contents: string): Promise<string>;
  /**
   * Public method, to completely replace the editor state with the given state.
   * This replaces the editor configuration, edit history, language, etc.
   */
  setState(contents: string, config?: EditorConfig, extensions?: Extension[], selection?: EditorSelection): Promise<string>;
  /**
   * Public method, returning a reference to the internal CodeMirror editor.
   * Allows for maintaining state from applications making use of this component.
   */
  getRef(): Promise<EditorView>;
  /**
   * Prevents keyboard event listeners attached to parent DOM elements from firing.
   * This is to avoid conflicts when user has focused on the editor.
   */
  private stopEventPropagation;
  /**
   * Brings DOM focus to the editor
   */
  private focus;
  protected componentWillLoad(): Promise<void>;
  protected componentDidLoad(): void;
  protected disconnectedCallback(): void;
  render(): any;
}
export {};
