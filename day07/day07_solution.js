import { getAndSplitDoc } from "../utils/input.js";

// GLOBAL VARIABLES
const TEST_INPUT = getAndSplitDoc("day07_test-input.txt");
const PUZZLE_INPUT = getAndSplitDoc("day07_puzzle-input.txt");

// FUNCTIONS SECTION
// FUNCTION: find starting position S
function findStart(grid) {
  for(let r = 0; r < grid.length; r++) {
    const c = grid[r].indexOf("S");
    if(c !== -1) {
      return { row: r, col: c };
    }
  }
  throw new Error("No S Found in the Grid");
}

// FUNCTION: simulate beams and count how many times they split
function countSplits(lines) {
  const grid = lines;
  const height = grid.length;
  const width = grid[0].length;

  const { row: sRow, col: sCol } = findStart(grid);

  const queue = [];
  const visited = new Set();

  let splitCount = 0;

  queue.push({ row: sRow + 1, col: sCol });

  while(queue.length > 0) {
    const { row, col } = queue.shift();

    if(row < 0 || row >= height || col < 0 || col >= width) {
      continue;
    }

    const key = `${row},${col}`;
    if(visited.has(key)) {
      continue;
    }
    visited.add(key);

    const ch = grid[row][col];

    if(ch === ".") {
      queue.push({ row: row + 1, col });
    } else if(ch === "S") {
      queue.push({ row: row + 1, col });
    } else if(ch === "^") {
      splitCount++;

      queue.push({ row, col: col - 1 });
      queue.push({ row, col: col + 1 });
    } else {
      console.log("Should not get here ...");
    }
  }

  return splitCount;
}

// LOGIC TESTING
const testSplits = countSplits(TEST_INPUT);
const puzzleSplits = countSplits(PUZZLE_INPUT);

console.log(`Part 1 Test Solution : ${testSplits}`);
console.log(`Part 1 Puzzle Solution: ${puzzleSplits}`);

// console.log(findStart(TEST_INPUT));
// console.log(findStart(PUZZLE_INPUT));
// console.log(PUZZLE_INPUT);
// console.log(TEST_INPUT);
  