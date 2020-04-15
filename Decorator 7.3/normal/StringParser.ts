import StringNode from "./StringNode";
import NodeReader from "./NodeReader";
import StringBuffer from "./StringBuffer";

export default class StringParser {
  public find(reader: NodeReader, input, position, balance_quotes) {
    const textBegin = "";
    const textEnd = "";
    const textBuffer = new StringBuffer();
    return new StringNode(
      textBuffer,
      textBegin,
      textEnd,
      reader.getParser().shouldDecodeNodes(),
      reader.getParser().shouldRemoveEscapeCharacters()
    );
  }
}
