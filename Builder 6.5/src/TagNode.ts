export default class TagNode {
  private tagName: string;
  private parent: TagNode;
  private children: TagNode[];
  private attributes: object;
  private value: string;
  constructor(tagName: string) {
    this.tagName = tagName;
    this.children = [];
    this.attributes = {};
    this.value = "";
  }

  public setValue(value: string) {
    this.value = value;
  }

  public getParent(): any {
    return this.parent;
  }

  public addAttribute(attribute: string, value: string) {
    this.attributes[attribute] = value;
  }

  private setParent(tagNode: TagNode) {
    this.parent = tagNode;
  }

  public getName() {
    return this.tagName;
  }

  public add(tagNode: TagNode) {
    tagNode.setParent(this);
    this.children.push(tagNode);
  }

  public toString() {
    if (this.isToSingleTag()) {
      return `<${this.tagName}/>`;
    } else {
      return `
       <${this.tagName} ${this.getAttributesStr()}>
          ${this.value}
          ${this.getChildrenTagsStr()}  
        </${this.tagName}>
        `;
    }
  }

  private isToSingleTag() {
    return !this.hasChildren() && !this.hasValue();
  }

  private getChildrenTagsStr() {
    return this.children.reduce((html, tagNode) => {
      html += tagNode.toString() + "\r";
      return html;
    }, "");
  }

  private getAttributesStr() {
    const attributesArr = Object.keys(this.attributes);
    return attributesArr.reduce((result, key) => {
      const value = this.attributes[key];
      const attributeStr = `${key} = "${value}"`;
      result += attributeStr + " ";
      return result;
    }, "");
  }

  private hasValue() {
    return this.value.length > 0;
  }
  private hasChildren() {
    return this.children.length > 0;
  }
}
