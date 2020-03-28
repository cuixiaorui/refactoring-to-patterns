class DecodingStringNode {
  private _text: string;
  private _type: string;
  constructor(text) {
    this._type = "decoding";
    this._text = text;
  }
}

export default class StringNode {
  private _text: string;
  private _type: string;
  constructor(text) {
    this._type = "defualt";
    this._text = text;
  }

  public static createStringNode(text: string, shouldDecode: boolean) {
    if (shouldDecode) {
      return new DecodingStringNode(text);
    }
    return new StringNode(text);
  }
}
