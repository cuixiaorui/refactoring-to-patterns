export default class Parser {
  private _shouldDecodeNodes: boolean = false;
  private _shouldRemoveEscapeCharacters:boolean = false;

  public setShouldDecoding(shouldDecodeNodes: boolean) {
    this._shouldDecodeNodes = shouldDecodeNodes;
  }

  public setShouldRemoveEscapeCharacters(shouldRemoveEscapeCharacters:boolean){
      this._shouldRemoveEscapeCharacters = shouldRemoveEscapeCharacters;
  }

  public shouldRemoveEscapeCharacters(){
      return this._shouldRemoveEscapeCharacters;
  }

  /**
   * shouldDecodeNodes
   */
  public shouldDecodeNodes() {
    return this._shouldDecodeNodes;
  }

  /**
   * createParser
   */
  public static createParser() {}

  public setNodeDecoding() {}

  /**
   * elements
   */
  public elements() {}
}
