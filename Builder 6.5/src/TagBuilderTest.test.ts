import TagBuilder from "./TagBuilder";

function assertXMLEquals(expectedXML: string, actualXML: string) {
  const regExr = /\s/g;
  const expectedXMLString = expectedXML.replace(regExr, "");
  const actualXMLString = actualXML.replace(regExr, "");
  expect(actualXMLString).toBe(expectedXMLString);
}

describe("TagBuilder", () => {
  test("test build one node", () => {
    const expectedXMl = "<flavors/>";
    const actualXML = new TagBuilder("flavors").toXML();
    expect(actualXML).toBe(expectedXMl);
  });

  test("test build one child ", () => {
    const expectedXML = `
      <flavors>
        <flavor/>
      </flavors>
  `;
    const tagBuilder = new TagBuilder("flavors");
    tagBuilder.addChild("flavor");
    const actualXML = tagBuilder.toXML();
    assertXMLEquals(expectedXML, actualXML);
  });

  test("test build children of children", () => {
    const expectedXML = `
      <flavors>
        <flavor>
          <requirements>
            <requirement/>
          </requirements>
        </flavor>
      </flavors>
    `;
    const tagBuilder = new TagBuilder("flavors");
    tagBuilder.addChild("flavor");
    tagBuilder.addChild("requirements");
    tagBuilder.addChild("requirement");
    const actualXML = tagBuilder.toXML();
    assertXMLEquals(expectedXML, actualXML);
  });

  test("test build sibling", () => {
    const expectedXML = `
      <flavors>
        <flavor1/>
        <flavor2/>
      </flavors>
    `;

    const builder = new TagBuilder("flavors");
    builder.addChild("flavor1");
    builder.addSibling("flavor2");
    const actualXML = builder.toXML();
    assertXMLEquals(expectedXML, actualXML);
  });

  test("test repeating children and grand children", () => {
    const expectedXML = `
      <flavors>
        <flavor>
          <requirements>
            <requirement/>
          </requirements>
        </flavor>
        <flavor>
          <requirements>
            <requirement/>
          </requirements>
        </flavor>
      </flavors>
    `;

    const builder = new TagBuilder("flavors");
    for (let index = 0; index < 2; index++) {
      builder.addToParent("flavors", "flavor");
      builder.addChild("requirements");
      builder.addChild("requirement");
    }
    const actualXML = builder.toXML();
    assertXMLEquals(expectedXML, actualXML);
  });


  test('test attributes and values', () => {
    const expectedXML = `
      <flavor name="Test-Driven Development">
        <requirements>
          <requirement type="hardware">
            1 computer for every 2 participant
          </requirement>
          <requirement type="software">
            IDE
          </requirement>
        </requirements>
      </flavor>
    `


    const builder = new TagBuilder("flavor")
    builder.addAttribute("name","Test-Driven Development")
    builder.addChild("requirements")
    builder.addChild("requirement")
    builder.addAttribute("type","hardware")
    builder.setValue("1 computer for every 2 participant")
    builder.addToParent("requirements","requirement")
    builder.addAttribute("type","software")
    builder.setValue("IDE")
    
    const actualXML = builder.toXML();
    assertXMLEquals(expectedXML, actualXML);

  })
});
