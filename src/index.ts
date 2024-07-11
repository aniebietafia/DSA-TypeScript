import { LinearSearch } from "./algorithms/1-LinearSearch";
import { BinarySearch } from "./algorithms/2-BinarySearch";
import { TwoCrystalBalls } from "./algorithms/3-TwoCrystalBalls";
import { BubbleSort } from "./algorithms/4-BubbleSort";

const haystack = [1, 2, 3, 4, 5, 6];
const needle = 4;

const linear_inputs = new LinearSearch(haystack, needle);
const binary_inputs = new BinarySearch(haystack, needle);
const two_crystal = new TwoCrystalBalls([false, false, false, true, true]);
const bubbleSort = new BubbleSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]);

console.log("Linear Search: ", linear_inputs.linear_search());
console.log("Binary Search: ", binary_inputs.bs_list());
console.log("Two Crystal Balls: ", two_crystal.two_crystal_balls());
console.log("Bubble Sort: ", bubbleSort.bubble_sort());
