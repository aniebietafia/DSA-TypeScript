import { LinearSearch } from "./algorithms/1-LinearSearch";
import { BinarySearch } from "./algorithms/2-BinarySearch";
import { TwoCrystalBalls } from "./algorithms/3-TwoCrystalBalls";

const haystack = [1, 2, 3, 4, 5, 6];
const needle = 4;

const linear_inputs = new LinearSearch(haystack, needle);
const binary_inputs = new BinarySearch(haystack, needle);
const two_crystal = new TwoCrystalBalls([false, false, false, true, true]);

console.log("Linear Search: ", linear_inputs.linear_search());
console.log("Binary Search: ", binary_inputs.bs_list());
console.log("Two Crystal Balls: ", two_crystal.two_crystal_balls());
