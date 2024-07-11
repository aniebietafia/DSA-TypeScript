export class BubbleSort {
  private arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
  }

  private swap(elem1: number, elem2: number): void {
    const temp = this.arr[elem1];
    this.arr[elem1] = this.arr[elem2];
    this.arr[elem2] = temp;
  }

  public bubble_sort(): number[] {
    for (let i = 0; i < this.arr.length; ++i) {
      for (let j = 0; j < this.arr.length - 1 - i; ++j) {
        if (this.arr[j] > this.arr[j + 1]) {
          this.swap(j, j + 1);
        }
      }
    }
    return this.arr;
  }
}
