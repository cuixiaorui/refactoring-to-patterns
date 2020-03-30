import Parser from "./Parser"

const parser = new Parser()
parser.setStringNodeDecoding(true)
const node = parser.parse("cuixiaorui")
console.log(node.text)
console.log(node.type)

