import AttributeDescriptor from "./AttributeDescriptor";

// 基于一段实现对象-关系数据库映射的代码逻辑，用来从关系型数据库中读取对象并把对象写入关系型数据库
// 客户端代码
function createAttributeDescriptors() {
  const result = [];
  result.push(AttributeDescriptor.forUser("count"));
  result.push(AttributeDescriptor.forDate("time"));
  result.push(AttributeDescriptor.forNumber("remoteId"));
  result.push(AttributeDescriptor.forBoolean("isPass"));
  result.push(AttributeDescriptor.forString("createdBy"));
  return result;
}

const descriptors = createAttributeDescriptors();
console.log(descriptors);
