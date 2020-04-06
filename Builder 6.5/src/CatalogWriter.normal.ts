import TagNode from "./TagNode";

class CatalogWriter {
  public catalogXmlFor(activity) {
    const activityTag = new TagNode("activity");
    // ……
    const flavorsTag = new TagNode("flavors");
    activityTag.add(flavorsTag);

    for (let i = 0; i < activity.getFlavorCount(); i++) {
      const flavorTag = new TagNode("flavor");
      flavorsTag.add(flavorTag);
      const flavor = activity.getFlavor(i);
      // ……
      const requirementsCount = flavor.getRequirements().length;
      if (requirementsCount > 0) {
        const requirementsTag = new TagNode("requirements");
        flavorTag.add(requirementsTag);
        for (let k = 0; k < requirementsCount; k++) {
          const requirement = flavor.getRequirements()[k];
          const requirementTag = new TagNode("requirement");
          // ……
          requirementsTag.add(requirementTag);
        }
      }
    }
    return activityTag.toString();
  }
}