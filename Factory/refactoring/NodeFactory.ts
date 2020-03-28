import DecodingStringNode from "./DecodingStringNode";
import StringNode from "./StringNode";

export default class NodeFactory {
  private _stringNodeDecoding: boolean;
  private _removeEscapeCharacters: boolean;

  public shouldDecode() {
    return this._stringNodeDecoding;
  }
  public shouldRemoveEscapeCharacters() {
    return this._removeEscapeCharacters;
  }
  public setStringNodeDecoding(val) {
    this._stringNodeDecoding = val;
  }
  public setRemoveEscapeCharacters(val) {
    this._removeEscapeCharacters = val;
  }

  public createStringNode(text: string) {
    if (this.shouldDecode()) {
      return new DecodingStringNode(text);
    }
    return new StringNode(text);
  }
}
