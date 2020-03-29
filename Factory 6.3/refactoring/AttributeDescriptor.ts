import NumberDescriptor from "./NumberDescriptor";
import BooleanDescriptor from "./BooleanDescriptor";
import StringDescriptor from "./StringDescriptor";
import DefaultDescriptor from "./DefaultDescriptor";

// 所有属性描述符的超类
export default class AttributeDescriptor {
  private field: string;
  private type: string;
  protected constructor(field: string, type: string) {
    this.field = field;
    this.type = type;
  }

  public static forNumber(field): AttributeDescriptor {
    return new NumberDescriptor(field, "number");
  }

  public static forBoolean(field): AttributeDescriptor {
    return new BooleanDescriptor(field, "boolean");
  }

  public static forString(field): AttributeDescriptor {
    return new StringDescriptor(field,"string");
  }

  public static forUser(field): AttributeDescriptor {
    return new DefaultDescriptor(field,"user");
  }

  public static forDate(field): AttributeDescriptor {
    return new DefaultDescriptor(field,"date");
  }
}
