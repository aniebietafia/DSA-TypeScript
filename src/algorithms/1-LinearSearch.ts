export class LinearSearch {
  private haystack: number[];
  private needle: number;

  constructor(haystack: number[], needle: number) {
    this.haystack = haystack;
    this.needle = needle;
  }

  public linear_search(): boolean {
    for (let i = 0; i < this.haystack.length; ++i) {
      if (this.haystack[i] === this.needle) {
        return true;
      }
    }
    return false;
  }
}
