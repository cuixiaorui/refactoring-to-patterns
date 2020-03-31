import TestCase from "./TestCase";
import IOutputBuild from "./IOutputBuilder";

export default abstract class AbstractBuilderTest extends TestCase {
  protected builder: IOutputBuild;

  protected abstract createBuilder(rootName: string): IOutputBuild;

  public testAddAboveRoot() {
    this.builder = this.createBuilder("orders");
    this.builder.addBelow("order");

    try {
      this.builder.addAbove("customer");
      throw new Error("expecting java.lang.RuntimeException");
    } catch (e) {
      console.log(e);
    }
  }
}
