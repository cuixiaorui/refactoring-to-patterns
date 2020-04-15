import Translate from "./Translate";
import StringBuffer from "./StringBuffer";
import ParserUtils from "./ParserUtils";

export default class StringNode {
  private shouldDecode: boolean = false;
  private shouldRemoveEscapeCharacters: boolean = false;
  private textBuffer: StringBuffer;
  constructor(
    textBuffer: StringBuffer,
    textBegin,
    textEnd,
    shouldDecode,
    shouldRemoveEscapeCharacters
  ) {
    this.textBuffer = textBuffer;
    this.shouldDecode = shouldDecode;
    this.shouldRemoveEscapeCharacters = shouldRemoveEscapeCharacters;
  }

  public toPlainTextString() {
    let result = this.textBuffer.toString();

    if (this.shouldDecode) {
      result = Translate.decode(result);
    }

    if (this.shouldRemoveEscapeCharacters) {
      result = ParserUtils.removeEscapeCharacters(result);
    }
    return result;
  }
}
