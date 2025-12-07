import { getAndSplitDoc } from "../utils/input.js";
  
// GLOBAL VARIABLES
const TEST_INPUT = getAndSplitDoc("day04_test-input.txt");
const PUZZLE_INPUT = getAndSplitDoc("day04_puzzle-input.txt");

const NEIGHBOUR_OFFSETS = [
  [-1, -1], [0, 1], [1, -1],
  [-1,  0],         [1,  0],
  [-1,  1], [0, 1], [1,  1],
];

// FUNCTIONS SECTION
// FUNCTION: locating where the paper rolls are in the diagram they provide
function locateRolls(diagram) {
  const grid = diagram;
  const rows = grid.length;
  const cols = grid[0].length;

  for(let row = 0; row < rows; row++) {
    for(let col = 0; col < cols; col++) {
      const cell = grid[row][col];

      if(cell === "@") {
        console.log(`Found @ at: [${row},${col}]`);
      }
    }
  }
}

// LOGIC TESTING

locateRolls(TEST_INPUT);
// console.log(TEST_INPUT);