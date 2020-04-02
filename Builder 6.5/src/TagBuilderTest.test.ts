import TagBuilder from "./TagBuilder";

describe("TagBuilder", () => {
  test("test build one node", () => {
    const expectedXMl = "<flavors/>";
    const actualXML = new TagBuilder("flavors").toXML();
    expect(actualXML).toBe(expectedXMl);
  });

  test("test build one child ", () => {
    // 全部匹配字符串不好搞呀
    // 换成用正则来匹配
    const expectedXMl = `
      <flavors>
        <flavor/>
      </flavors>
  `;
    const tagBuilder = new TagBuilder("flavors");
    tagBuilder.addChild("flavor");
    const actualXML = tagBuilder.toXML();
    expect(actualXML).toMatch(/<flavors>/gm);
    expect(actualXML).toMatch(/<flavor\/>/gm);
    expect(actualXML).toMatch(/<\/flavors>/gm);
  });

  test("test build children of children", () => {
    const tagBuilder = new TagBuilder("flavors");
    tagBuilder.addChild("flavor");
    tagBuilder.addChild("requirements");
    tagBuilder.addChild("requirement");
    const actualXML = tagBuilder.toXML();
    expect(actualXML).toMatch(/<flavors>/gm);
    expect(actualXML).toMatch(/<flavor>/gm);
    expect(actualXML).toMatch(/<requirements>/gm);
    expect(actualXML).toMatch(/<requirement\/>/gm);
    expect(actualXML).toMatch(/<\/requirements>/gm);
    expect(actualXML).toMatch(/<\/flavor>/gm);
    expect(actualXML).toMatch(/<\/flavors>/gm);
  });
});
