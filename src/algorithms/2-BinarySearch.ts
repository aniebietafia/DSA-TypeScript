interface BinarySearchInterface {
    isFound: boolean;
    index: number;
    item: number
}

export class BinarySearch {
 private haystack: number[];
 private needle: number;
 private lo: number;
 private hi: number;
 private middle: number;
 private value: number;

 constructor(haystack: number[], needle: number) {
     this.haystack = haystack;
     this.needle = needle;
     this.lo = 0;
     this.hi = this.haystack.length;
     this.middle = 0;
     this.value = 0;
 }

 public bs_list(): BinarySearchInterface {
     do {
         this.middle = Math.floor(this.lo + (this.hi - this.lo) / 2);
         this.value = this.haystack[this.middle];

         if (this.value === this.needle) {
             return {
                isFound: true,
                index: this.haystack.indexOf(this.value),
                item: this.value
                }
             } else if (this.value > this.needle) {
                 this.hi = this.middle;
             } else {
                 this.lo = this.middle + 1;
             }
     } while (this.lo < this.hi) {
         return {
             isFound: false,
             index: this.haystack.indexOf(this.value),
             item: this.value
         }
     }
 }
}
