import { getAndSplitDoc } from "../utils/input.js";

// GLOBAL VARIABLES
const TEST_INPUT = getAndSplitDoc("day06_test-input.txt");
const PUZZLE_INPUT = getAndSplitDoc("day06_puzzle-input.txt");

// FUNCTIONS SECTION
// FUNCTION: counting numbers in each row of parsed data
function countNumbersInRow(row) {
  const matches = row.match(/\d+/g);
  return matches ? matches.length : 0;
}

// FUNCTION: counting operators in last row of parsed data
function countOperators(row) {
  const matches = row.match(/[+*]/g);
  return matches ? matches.length : 0;
}

// FUNCTION: verify that numbers in each row && numbers of operators match
function verifyParsedData(parsedData) {
  let matches = 0;
  const mismatch = [];
  const numRows = parsedData.length;
  const operatorRowIndex = numRows - 1;

  const operatorCount = countOperators(parsedData[operatorRowIndex]);

  for(let i = 0; i < operatorRowIndex; i++) {
    const row = parsedData[i];
    const numberCount = countNumbersInRow(row);
    const ok = numberCount === operatorCount;

    if(ok) {
      matches++;
    } else {
      mismatch.push(i);
    }

    console.log(
      `Row ${i}: numbers=${numberCount}, expected=${operatorCount}, ${ok ? "OK" : "MISMATCH"}`
    );
  }

  if(matches === operatorRowIndex) {
    const numCols = operatorCount;
    return {
      numRows,
      numCols
    }
  } else {
    const numCols = `MISMATCH INDEX(ES): [${mismatch}]`;
    return {
      numRows,
      numCols
    }
  }

}

// LOGIC TESTING
const { numRows, numCols } = verifyParsedData(PUZZLE_INPUT);
console.log(numRows, numCols);

// const testOperatorRow = TEST_INPUT[numTestRows - 1];
// const puzzleOperatorRow = PUZZLE_INPUT[numPuzzleRows - 1];
// console.log(countNumbersInRow(PUZZLE_INPUT[1]));
// console.log(numPuzzleRows);
// console.log(puzzleOperatorRow);
// console.log(TEST_INPUT);
// console.log(testOperatorRow);

  