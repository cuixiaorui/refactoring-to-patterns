import TagNode from "./TagNode";
import TagBuilder from "./TagBuilder";

class CatalogWriter {
  public catalogXmlFor(activity) {
    const builder = new TagBuilder("activity");
    // ……
    builder.addChild("flavors");

    for (let i = 0; i < activity.getFlavorCount(); i++) {
      builder.addToParent("flavors", "flavor");
      const flavor = activity.getFlavor(i);
      // ……
      const requirementsCount = flavor.getRequirements().length;
      if (requirementsCount > 0) {
        builder.addChild("requirements");
        for (let k = 0; k < requirementsCount; k++) {
          const requirement = flavor.getRequirements()[k];
          builder.addToParent("requirements","requirement")
          // ……
        }
      }
    }
    return builder.toXML() 
  }
}
