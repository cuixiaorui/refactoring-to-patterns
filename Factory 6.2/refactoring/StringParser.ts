import Parser from "./Parser";
export default class StringParser {
  private _parser: Parser;
  constructor(parser) {
    this._parser = parser;
  }

  public findString(url) {
    const nodeFactory = this._parser.getNodeFactory();
    return nodeFactory.createStringNode(url);
  }
}
