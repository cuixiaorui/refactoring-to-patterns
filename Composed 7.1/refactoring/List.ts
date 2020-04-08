class List {
  private elements = [];
  private readOnly: boolean;
  private size: number;
  private GROWTH_INCREMENT = 10;

  public add(element: object) {
    if (this.readOnly) return;

    if (this.atCapacity()) {
      this.grow();
    }

    this.addElement(element);
  }
  public addElement(element) {
    this.elements[this.size++] = element;
  }

  private grow() {
    const newElements = [];
    newElements.length = this.elements.length * this.GROWTH_INCREMENT;

    for (let i = 0; i < this.size; i++) {
      newElements[i] = this.elements[i];
    }
    this.elements = newElements;
  }

  private atCapacity() {
    const newSize = this.size + 1;
    return newSize > this.elements.length;
  }
}
