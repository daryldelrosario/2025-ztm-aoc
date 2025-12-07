import { getAndSplitDoc } from '../utils/input.js';

// GLOBAL VARIABLES
const testInput = "day03-testInput.txt";
const puzzleInput = "day03-puzzleInput.txt";

// FUNCTIONS

// TESTING LOGIC
const testDoc = getAndSplitDoc(testInput);
const actualDoc = getAndSplitDoc(puzzleInput);

// console.log(testDoc);
console.log(actualDoc);