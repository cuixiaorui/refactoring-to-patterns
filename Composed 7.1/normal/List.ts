class List {
  private elements = [];
  private readOnly: boolean;
  private size: number;

  public add(element: object) {
    if (!this.readOnly) {
      const newSize = this.size + 1;

      if (newSize > this.elements.length) {
        const newElements = [];
        newElements.length = this.elements.length + 10;

        for (let i = 0; i < this.size; i++) {
          newElements[i] = this.elements[i];
        }
        this.elements = newElements;
      }

      this.elements[this.size++] = element;
    }
  }
}
