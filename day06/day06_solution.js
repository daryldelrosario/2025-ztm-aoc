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

    // DEBUG CODE - if there is a mismatch - uncomment below
    // console.log(
    //   `Row ${i}: numbers=${numberCount}, expected=${operatorCount}, ${ok ? "OK" : "MISMATCH"}`
    // );
  }

  if(matches === operatorRowIndex) {
    const numCols = operatorCount;
    const verified = true;
    return {
      verified,
      numRows,
      numCols
    }
  } else {
    const numCols = `MISMATCH INDEX(ES): [${mismatch}]`;
    const verified = false;
    return {
      verified,
      numRows,
      numCols
    }
  }
}

// FUNCTION: build the problem set
function buildProblems(parsedData) {
  const { verified, numRows, numCols } = verifyParsedData(parsedData);

  if(!verified) {
    console.log("Something is wrong with the input. Try Again.");
  }

  // DEBUG CODE
  // console.log(verified, numRows, numCols);

  // BUILD THE PROBLEM SET
  const operatorRowIndex = numRows - 1;
  const operatorRowValues = parsedData[operatorRowIndex];
  const numberRowValues = parsedData.slice(0, operatorRowIndex);

  // DEBUG CODE
  // console.log(operatorRowValues);
  // console.log(numberRowValues);

  const operators = operatorRowValues.match(/[+*]/g);
  const numberTokenRows = numberRowValues.map(row => 
    row.match(/\d+/g).map(Number)
  );

  // DEBUG CODE
  // console.log(operators);
  // console.log(numberTokenRows);

  const problems = [];

  for(let i = 0; i < operators.length; i++) {
    const nums = numberTokenRows.map(row => row[i]);
    const op = operators[i];

    problems.push({ nums, op });
  }

  return problems;
}

// FUNCTION: now we can evaluate each problem set
function evaluateProblem({ nums, op }) {
  if(op === "+") {
    return nums.reduce((sum, n) => sum + n, 0);
  } else {
    return nums.reduce((prod, n) => prod * n, 1);
  }
}

// FUNCTION: solve the worksheet - WORKS FOR DAY 6 PART 1
function solveWorksheet(parsedData) {
  const problems = buildProblems(parsedData);
  let total = 0;
  for (const p of problems) {
    total += evaluateProblem(p);
  }

  return total;
}

// LOGIC TESTING

////////////////////////////
// SOLUTION FOR DAY 6 PART 1
// const testSolution = solveWorksheet(TEST_INPUT);
// console.log(`Test Solution: ${testSolution}`);
// const puzzleSolution = solveWorksheet(PUZZLE_INPUT);
// console.log(`Puzzle Solution: ${puzzleSolution}`);
/////////////////////////////////////////////////////

// buildProblems(TEST_INPUT);
// const { verified, numRows, numCols } = verifyParsedData(PUZZLE_INPUT);
// console.log(TEST_INPUT);
// console.log(verified, numRows, numCols);
// const testOperatorRow = TEST_INPUT[numTestRows - 1];
// const puzzleOperatorRow = PUZZLE_INPUT[numPuzzleRows - 1];
// console.log(countNumbersInRow(PUZZLE_INPUT[1]));
// console.log(numPuzzleRows);
// console.log(puzzleOperatorRow);
// console.log(TEST_INPUT);
// console.log(testOperatorRow);

  