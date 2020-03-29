import NumberDescriptor from "./NumberDescriptor";
import BooleanDescriptor from "./BooleanDescriptor";
import StringDescriptor from "./StringDescriptor";
import DefaultDescriptor from "./DefaultDescriptor";

// 基于一段实现对象-关系数据库映射的代码逻辑，用来从关系型数据库中读取对象并把对象写入关系型数据库
// 客户端代码
function createAttributeDescriptors() {
  const result = [];
  result.push(new DefaultDescriptor("count", "number"));
  result.push(new DefaultDescriptor("time", "Date"));
  result.push(new NumberDescriptor("remoteId", "number"));
  result.push(new BooleanDescriptor("isPass", "boolean"));
  result.push(new StringDescriptor("createdBy", "string"));
  return result;
}

const descriptors = createAttributeDescriptors();
console.log(descriptors);
