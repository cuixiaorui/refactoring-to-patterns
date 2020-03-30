import XMLBuilder from "./XMLBuilder";
import AbstractBuilderTest from "./AbstractBuilderTest";

export default class XMLBuilderTest extends AbstractBuilderTest {
  createBuilder(rootName) {
    return new XMLBuilder(rootName);
  }
}
