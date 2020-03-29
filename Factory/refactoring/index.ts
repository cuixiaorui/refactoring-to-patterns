import Parser from "./Parser"
import NodeFactory from "./NodeFactory"



const decodeNodes = new NodeFactory()
decodeNodes.setStringNodeDecoding(true)

const parser = new Parser()
parser.setNodeFactory(decodeNodes)
const node = parser.parse("cuixiaorui")
console.log(node.text)
console.log(node.type)