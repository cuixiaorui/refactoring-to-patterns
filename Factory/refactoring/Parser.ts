import StringParser from "./StringParser"
import NodeFactory from "./NodeFactory";
export default class Parser {
  private _stringParser:StringParser
  constructor() {
    this._stringParser = new StringParser(this)
  }
  public parse(url) {
    return this._stringParser.findString(url)
  }

  public getNodeFactory(){
    return this._nodeFactory
  }

  private _nodeFactory: NodeFactory
  public setNodeFactory(option:NodeFactory){
    this._nodeFactory = option;
  }
}
