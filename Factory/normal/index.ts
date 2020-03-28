import Parser from "./Parser"


const parser = new Parser()
parser.setStringNodeDecoding(true)
const node = parser.parse("cuixiaorui.com")
console.log(node.text)
console.log(node.type)


// 视频的时候
// 0. 先带着看一遍代码
// 2. 新加的需求
//    新增一个转义字符删除选项 
// 3. 当前的问题
//    客户端代码举例实际创建实例的代码特别长
//    todo 需要看书完善一下
// 4. 如果重构
//    1. 演示重构的步骤


