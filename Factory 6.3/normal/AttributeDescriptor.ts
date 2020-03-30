import DefaultDescriptor from "./DefaultDescriptor";

// 所有属性描述符的超类
export default class AttributeDescriptor {
  private field: string;
  private type: string;
  protected constructor(field: string, type: string) {
    this.field = field;
    this.type = type;
  }
}
