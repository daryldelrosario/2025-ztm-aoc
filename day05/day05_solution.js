import { getAndSplitDoc } from "../utils/input.js";

// GLOBAL VARIABLES
const TEST_INPUT = getAndSplitDoc("day05_test-input.txt");
const PUZZLE_INPUT = getAndSplitDoc("day05_puzzle-input.txt");

// FUNCTIONS SECTION
// FUNCTION: parse data to separate ranges and ids
function parseData(data) {
  const blankIndex = data.indexOf("");

  const ranges = data.slice(0, blankIndex).map(range => {
    const [start, end] = range.split("-").map(Number);
    return {start, end };
  });

  const ids = data.slice(blankIndex + 1).map(Number);

  return { ranges, ids };
}

// LOGIC TESTING
const { ranges: testRanges, ids: testIds } = parseData(TEST_INPUT);
console.log(testRanges);
console.log(testIds);

// console.log(parseData(TEST_INPUT));
// console.log(TEST_INPUT);
  