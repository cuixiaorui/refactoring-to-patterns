import StringParser from "./StringParser"
export default class Parser {
  private _stringNodeDecoding: boolean;
  private _removeEscapeCharacters: boolean;
  private _stringParser:StringParser
  constructor() {
    this._stringParser = new StringParser(this)
  }
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
  public parse(url) {
    return this._stringParser.findString(url)

  }
}
