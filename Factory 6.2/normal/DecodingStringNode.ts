export default class DecodingStringNode {
  public text: string;
  public type: string;
  constructor(text) {
    this.type = "decoding";
    this.text = text;
  }
}