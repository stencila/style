import { baseKeymap, indentSelection } from '@codemirror/next/commands'
import { lineNumbers } from '@codemirror/next/gutter'
import { defaultHighlighter } from '@codemirror/next/highlight'
import {
  history,
  redo,
  redoSelection,
  undo,
  undoSelection
} from '@codemirror/next/history'
import { keymap } from '@codemirror/next/keymap'
import { html } from '@codemirror/next/lang-html'
import { javascript } from '@codemirror/next/lang-javascript'
import { bracketMatching } from '@codemirror/next/matchbrackets'
import { specialChars } from '@codemirror/next/special-chars'
import { EditorState } from '@codemirror/next/state'
import { EditorView, ViewCommand } from '@codemirror/next/view'
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State
} from '@stencil/core'
import { codeChunk } from '@stencila/schema'

// Workaround for Stencil build issues
export type ICodeChunk = ReturnType<typeof codeChunk>

interface CollapseEvent extends CustomEvent {
  detail: {
    isCollapsed: boolean
  }
}

@Component({
  tag: 'stencila-code-chunk',
  styleUrls: {
    default: 'codeChunk.css',
    material: 'codeChunk.material.css'
  },
  scoped: true
})
export class CodeChunk {
  public static readonly elementName = 'stencila-code-chunk'

  public static readonly slots = {
    text: 'text',
    outputs: 'outputs'
  }

  @Element() private el: HTMLElement

  private codeEditorRef: EditorView

  /**
   * Whether the code section is visible or not
   */
  @Prop({
    attribute: 'data-collapsed'
  })
  public isCodeCollapsedProp: boolean = false

  @State() private isCodeCollapsed: boolean = this.isCodeCollapsedProp

  private toggleCodeVisibility = (): void => {
    this.isCodeCollapsed = !this.isCodeCollapsed
  }

  private collapseAllCodeHandler(isCollapsed: boolean) {
    this.collapseAllCode.emit({ isCollapsed })
  }

  @Event({
    eventName: 'collapseAllCode'
  })
  public collapseAllCode: EventEmitter

  private collapseAllListenHandler = (e: CollapseEvent) => {
    this.isCodeCollapsed = e.detail.isCollapsed
  }

  @State() isOutputEmpty: boolean = true

  private emptyOutputMessage = 'No output to show'

  private outputExists = () => {
    const output = this.el.querySelector(`[slot=${CodeChunk.slots.outputs}]`)

    const isEmpty =
      output === null ? true : output.innerHTML.trim() === '' ? true : false

    this.isOutputEmpty = isEmpty

    if (output && isEmpty) {
      output.innerHTML = `<em class="emptyContentMessage">${this.emptyOutputMessage}</em>`
    } else if (isEmpty) {
      const child = document.createElement('figure')
      child.setAttribute('slot', CodeChunk.slots.outputs)
      this.el.appendChild(child)
      child.innerHTML = `<em class="emptyContentMessage">${this.emptyOutputMessage}</em>`
    }
  }

  private getCodeContent = () => this.codeEditorRef.state.toJSON().doc

  @Prop() public executeHandler: (text: string) => Promise<ICodeChunk>

  private onExecuteHandler_ = () =>
    this.executeHandler &&
    this.executeHandler(this.getCodeContent()).then(res => {
      this.updateErrors(res.errors)
      this.updateOutputs(res.outputs)
    })

  runCodeView: ViewCommand = () => {
    this.executeCode()
    return true
  }

  @State() executeCodeState: 'INITIAL' | 'PENDING' | 'RESOLVED'

  private executeCode = () => {
    this.executeCodeState = 'PENDING'
    this.onExecuteHandler_().then(res => {
      this.executeCodeState = 'RESOLVED'
      return res
    })
  }

  protected componentWillLoad() {
    // TODO: Look into changing to @Listen decorator is more performant
    document.addEventListener(
      'collapseAllCode',
      () => this.collapseAllListenHandler
    )
  }

  protected componentDidLoad() {
    this.outputExists()
    const textContent = this.el.querySelector<HTMLElement>(
      `[slot="${CodeChunk.slots.text}"]`
    )

    if (textContent) {
      let isMac = /Mac/.test(navigator.platform)

      this.codeEditorRef = new EditorView({
        state: EditorState.create({
          doc: textContent ? textContent.innerText : '',
          extensions: [
            history(),
            bracketMatching(),
            lineNumbers(),
            defaultHighlighter,
            javascript(),
            html(),
            specialChars(),
            keymap({
              'Mod-z': undo,
              'Mod-Shift-z': redo,
              'Mod-u': view => undoSelection(view) || true,
              [isMac ? 'Mod-Shift-u' : 'Alt-u']: redoSelection,
              'Ctrl-y': isMac ? undefined : redo,
              'Shift-Tab': indentSelection,
              'Mod-Enter': this.runCodeView
            }),
            keymap(baseKeymap)
          ]
        })
      })

      textContent.replaceWith(this.codeEditorRef.dom)
    }
  }

  @State() outputs: ICodeChunk['outputs']

  @State() codeErrors: ICodeChunk['errors']

  private updateOutputs = (outputs: ICodeChunk['outputs'] = []) => {
    const output = this.el.querySelector(`[slot=${CodeChunk.slots.outputs}]`)

    if (output) {
      output.innerHTML = ''

      outputs.map(o => {
        if (typeof o === 'string' || typeof o === 'number') {
          const node = document.createElement('pre')
          const res = document.createElement('output')
          res.textContent = o.toString()
          node.appendChild(res)
          output.appendChild(node)
        }
      })
    }
  }

  private updateErrors = (errors: ICodeChunk['errors'] = []) => {
    errors.map(error => <stencila-code-error>{error}</stencila-code-error>)
  }

  protected componentDidUnload() {
    document.removeEventListener(
      'collapseAllCode',
      () => this.collapseAllListenHandler
    )
  }

  public render() {
    return (
      <Host>
        <stencila-action-menu expandable={true}>
          <stencila-button
            isSecondary={true}
            onClick={this.toggleCodeVisibility}
            icon={this.isCodeCollapsed ? 'eye' : 'eye-off'}
            size="xsmall"
          >
            {this.isCodeCollapsed ? 'Show' : 'Hide'} Source
          </stencila-button>
          <stencila-button
            isSecondary={true}
            icon={this.isCodeCollapsed ? 'eye' : 'eye-off'}
            size="xsmall"
            onClick={() => this.collapseAllCodeHandler(!this.isCodeCollapsed)}
          >
            {this.isCodeCollapsed ? 'Show' : 'Hide'} All Sources
          </stencila-button>
          {this.executeHandler && (
            <stencila-button
              icon="play"
              isSecondary={true}
              size="xsmall"
              ariaLabel="Run Code"
              slot="persistentActions"
              clickHandlerProp={this.executeCode}
              isLoading={this.executeCodeState === 'PENDING'}
            >
              Run
            </stencila-button>
          )}
        </stencila-action-menu>

        <div
          class={`codeContainer ${
            this.isCodeCollapsed === true ? 'hidden' : ''
          }`}
        >
          <slot name={CodeChunk.slots.text} />
        </div>

        <slot name={CodeChunk.slots.outputs} />

        {this.codeErrors}
      </Host>
    )
  }
}
