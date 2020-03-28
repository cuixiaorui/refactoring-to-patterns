import Parser from "./Parser";
import StringNode from "./StringNode";
export default class StringParser {
  private _parser: Parser;
  constructor(parser) {
    this._parser = parser;
  }

  public findString(url) {
    return StringNode.createStringNode(url,this._parser.shouldDecode());
  }
}
