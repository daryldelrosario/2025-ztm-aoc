import { getAndSplitDoc } from '../utils/input.js';

// GLOBAL VARIABLES
const testInput = "day03-testInput.txt";
const puzzleInput = "day03-puzzleInput.txt";

// FUNCTION: Finding the Max Jolt in One Line of Bank - Good for Part 1
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

// FUNCTION: Finding Total Max Jolt - Solves Day 3 Part 1
function totalJolt(path) {
  const banks = getAndSplitDoc(path);
  let sum = 0;

  for (const bank of banks) {
    sum += maxJoltOneBank(bank);
  }

  return sum;
}

// REFACTORING FUNCTIONS maxJoltPerBank & totalJolt TO ALLOW FOR picks 2 - 12 (USER CHOICE)
// FUNCTION: Finding Max Jolt Per Bank with User Choice of Picks
function maxJoltPerBankUserChoice(bank, picks) {
  const bankLength = bank.length;

  if(bankLength <= picks) return Number(bank);

  let result = "";
  let start = 0;

  for(let remaining = picks; remaining > 0; remaining--) {
    const end = bankLength - remaining;

    let bestDigit = "0";
    let bestIndex = start;

    for(let i = start; i <= end; i++) {
      const currentDigit = bank[i];
      if(currentDigit > bestDigit) {
        bestDigit = currentDigit;
        bestIndex = i;

        if(bestDigit === "9") break;
      }
    }

    result += bestDigit;
    start = bestIndex + 1;
  }

  return Number(result);
}

// TESTING LOGIC
const testDoc = getAndSplitDoc(testInput);
const actualDoc = getAndSplitDoc(puzzleInput);

console.log(maxJoltPerBankUserChoice("234234234234278", 12));
// console.log(`Test Input Sum: ${totalJolt(testInput)}`);
// console.log(`Actual Puzzle Sum: ${totalJolt(puzzleInput)}`);
// console.log(maxJoltOneBank("818181911112111"));
// console.log(actualDoc);
// console.log(testDoc);
