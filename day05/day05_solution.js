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

  // const masterFresh = buildMasterFreshList(ranges); <= DOESN'T WORK WITH LARGE DATA SETS

  return { ranges, ids };
}

// FUNCTION: create a master list of all the fresh ids with the ranges - WORKED ON SMALL but NOT ON LARGE DATA
// function buildMasterFreshList(ranges) {
//   const freshSet = new Set();

//   for(const { start, end } of ranges) {
//     for(let id = start; id <= end; id++) {
//       freshSet.add(id);
//     }
//   }

//   return freshSet;
// }

// FUNCTION: checks if id is fresh, by seeing if it exists in any of the ranges
function isFreshId(id, ranges) {
  for (const { start, end } of ranges) {
    if(id >= start && id <= end) return true;
  }

  return false;
}

function countFreshIds(ranges, ids) {
  let freshCount = 0;
  const freshIds = [];
  const spoiledIds = [];

  for (const id of ids) {
    if(isFreshId(id, ranges)) {
      freshIds.push(id);
      freshCount++;
    } else {
      spoiledIds.push(id);
    }
  }

  return { freshCount, freshIds, spoiledIds }
}

// LOGIC TESTING
const { ranges: testRanges, ids: testIds } = parseData(TEST_INPUT);
const { ranges: puzzleRanges, ids: puzzleIds } = parseData(PUZZLE_INPUT);

const { freshCount: testSolution } = countFreshIds(testRanges, testIds);
console.log(`Solution for Test Input: ${testSolution}`);

const { freshCount: puzzleSolution } = countFreshIds(puzzleRanges, puzzleIds);
console.log(`Solution for Day 5 Part 1: ${puzzleSolution}`);

// const { freshCount: testSolution, freshIds, spoiledIds } = countFreshIds(testMasterFresh, testIds);
// const { freshCount: puzzleSolution, freshIds: puzzleFresh, spoiledIds: puzzleSpoiled } = countFreshIds(puzzleMasterFresh, puzzleIds);
// console.log(`Solution to Day 5 Part 1: ${puzzleSolution}`);
// console.log(testMasterFresh);
// console.log(testIds);
// console.log(`Number of fresh Ids: ${testSolution}`);
// const { ranges: testRanges, ids: testIds } = parseData(TEST_INPUT);
// console.log(testRanges);
// console.log(testIds);
// console.log(parseData(TEST_INPUT));
// console.log(TEST_INPUT);
  