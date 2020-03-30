import DOMBuilder from "./DOMBuilder";
import AbstractBuilderTest from "./AbstractBuilderTest";
export default class DOMBuilderTest extends AbstractBuilderTest {
  protected createBuilder(rootName: string) {
    return new DOMBuilder(rootName);
  }
}
