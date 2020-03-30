import DecodingStringNode from "./DecodingStringNode";

export default class StringNode {
  public text: string;
  public type: string;
  constructor(text) {
    this.type = "defualt";
    this.text = text;
  }

  public static createStringNode(
    text: string,
    shouldDecode: boolean,
    shouldRemoveEscapeCharacters: boolean
  ) {
    if (shouldDecode) {
      return new DecodingStringNode(text);
    }
    return new StringNode(text);
  }
}
