export default class TagNode {
  private tagName: string;
  private children: TagNode[];
  constructor(tagName: string) {
    this.tagName = tagName;
    this.children = [];
  }

  public add(tagNode: TagNode) {
    this.children.push(tagNode);
  }

  public toString() {
    if (!this.hasChildren()) {
      return `<${this.tagName}/>`;
    } else {
      const childrenTags = this.children.reduce((html, tagNode) => {
        html += tagNode.toString() + "\r";
        return html;
      }, "");
      return `
       <${this.tagName}>
          ${childrenTags}  
        </${this.tagName}>
        `;
    }
  }
  private hasChildren() {
    return this.children.length > 0;
  }
}
