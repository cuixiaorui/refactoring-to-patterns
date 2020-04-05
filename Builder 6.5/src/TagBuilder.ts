import TagNode from "./TagNode";

export default class TagBuilder {
  private rootNode: TagNode;
  private currentNode: TagNode;
  constructor(rootTagName: string) {
    this.rootNode = new TagNode(rootTagName);
    this.currentNode = this.rootNode;
  }

  public addToParent(parentTagName: string, childTagName: string) {
    this.addTo(this.findParentBy(parentTagName), childTagName);
  }

  public setValue(value: string) {
    this.currentNode.setValue(value);
  }
  public addAttribute(attribute: string, value: string) {
    this.currentNode.addAttribute(attribute, value);
  }

  private findParentBy(parentTagName: string): TagNode {
    let parentNode = this.currentNode;
    while (parentNode) {
      if (parentNode.getName() === parentTagName) {
        return parentNode;
      }
      parentNode = parentNode.getParent();
    }
    return parentNode;
  }

  public addSibling(tagName: string) {
    this.addTo(this.currentNode.getParent(), tagName);
  }
  public addChild(tagName: string) {
    this.addTo(this.currentNode, tagName);
  }

  private addTo(parentNode: TagNode, tagName: string) {
    this.currentNode = new TagNode(tagName);
    parentNode.add(this.currentNode);
  }
  public toXML() {
    return this.rootNode.toString();
  }
}
