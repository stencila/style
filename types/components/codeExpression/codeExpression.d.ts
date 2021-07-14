import { CodeExpression } from '@stencila/schema';
import { CodeComponent, CodeVisibilityEvent } from '../code/codeTypes';
export declare class CodeExpressionComponent implements CodeComponent<CodeExpression> {
  private emptyOutputMessage;
  private hoverTimeOut;
  private hoverStartedAt;
  private el;
  /**
   * A callback function to be called with the value of the `CodeExpression` node when executing the `CodeExpression`.
   */
  executeHandler?: (codeExpression: CodeExpression) => Promise<CodeExpression>;
  /**
   * Programming language of the CodeExpression
   */
  programmingLanguage: string;
  output: CodeExpression['output'] | HTMLElement;
  codeErrors: CodeExpression['errors'];
  hover: boolean;
  isCodeVisible: boolean;
  isOutputEmpty: boolean;
  executeCodeState: 'INITIAL' | 'PENDING' | 'RESOLVED';
  private checkIfEmpty;
  componentWillLoad(): void;
  onSetAllCodeVisibility(event: CodeVisibilityEvent): void;
  /**
   * Returns the `CodeExpression` node with the updated `text` contents from the editor.
   */
  getContents(): Promise<CodeExpression>;
  private collapseAllListenHandler;
  private toggleCodeVisibility;
  private selectTextSlot;
  private getTextSlotContents;
  private handleKeyDown;
  private onExecuteHandler;
  /**
   * Run the `CodeExpression`
   */
  execute(): Promise<CodeExpression>;
  private executeRef;
  private dividerArrow;
  private onMouseOutHandler;
  private addHoverState;
  private removeHoverState;
  private generateContent;
  render(): HTMLElement;
}
