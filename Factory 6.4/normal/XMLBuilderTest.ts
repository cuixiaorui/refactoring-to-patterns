import TestCase from "./TestCase";
import OutputBuild from "./IOutputBuilder";
import DOMBuilder from "./DOMBuilder";

export default class XMLBuilderTest extends TestCase {
  private builder: OutputBuild;
  public testAddAboveRoot() {

    this.builder = new DOMBuilder("orders");
    this.builder.addBelow("order");

    try {
      this.builder.addAbove("customer");
      throw new Error("expecting java.lang.RuntimeException");
    } catch (e) {
      console.log(e);
    }
  }
}
