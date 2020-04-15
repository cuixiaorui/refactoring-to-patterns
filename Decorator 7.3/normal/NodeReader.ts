import Parser from "./Parser";


export default class NodeReader {
  private parser: Parser;
  constructor() {
    this.parser = new Parser();
  }
  /**
   * getParser
   */
  public getParser():Parser {
    return this.parser;
  }
}
