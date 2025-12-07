import { getAndSplitDoc } from '../utils/input.js';

// GLOBAL VARIABLES
const testInput = "day03-testInput.txt";
const puzzleInput = "day03-puzzleInput.txt";

// FUNCTION: Finding the Max Jolt in One Line of Bank
function maxJoltOneBank(bank) {
  let max = 0;

  for (let i = 0; i < bank.length; i++) {
    const first = Number(bank[i]);

    for(let j = i + 1; j < bank.length; j++) {
      const second = Number(bank[j]);
      const value = (first * 10) + second;

      if (value > max) {
        max = value;
      }
    }
  }

  return max;
}

// TESTING LOGIC
const testDoc = getAndSplitDoc(testInput);
const actualDoc = getAndSplitDoc(puzzleInput);

console.log(maxJoltOneBank("818181911112111"));
// console.log(actualDoc);
// console.log(testDoc);
