import TagNode from "./TagNode";

export default class TagBuilder {
  private rootNode: TagNode;
  private currentNode:TagNode;
  constructor(rootTagName: string) {
      this.rootNode = new TagNode(rootTagName)
      this.currentNode = this.rootNode
  }
  public addChild(tagName: string) {
      const parentNode = this.currentNode;
      this.currentNode = new TagNode(tagName)
      parentNode.add(this.currentNode)
  }
  public toXML() {
      return this.rootNode.toString()
  }
}
