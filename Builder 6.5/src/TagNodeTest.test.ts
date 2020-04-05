import TagNode from "./TagNode"

describe('TagNodeTest', () => {


    test('test parents', () => {
        const root = new TagNode("root")
        expect(root.getParent()).toBeUndefined()



        const childNode = new TagNode('child')
        root.add(childNode)

        expect(childNode.getParent()).toEqual(root)
        expect(childNode.getParent().getName()).toBe("root")
    })
})
