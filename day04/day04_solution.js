import { getAndSplitDoc } from "../utils/input.js";
  
// GLOBAL VARIABLES
const TEST_INPUT = getAndSplitDoc("day04_test-input.txt");
const PUZZLE_INPUT = getAndSplitDoc("day04_puzzle-input.txt");

const NEIGHBOUR_OFFSETS = [
  [-1, -1], [0, -1], [1, -1],
  [-1,  0],          [1,  0],
  [-1,  1], [0,  1], [1,  1],
];

// FUNCTIONS SECTION
// FUNCTION: locating where the paper rolls are in the diagram they provide
function locateAccessibleRolls(diagram) {
  const grid = diagram;
  const rows = grid.length;
  const cols = grid[0].length;

  let accessibleCount = 0;

  for(let row = 0; row < rows; row++) {
    for(let col = 0; col < cols; col++) {
      const cell = grid[row][col];

      if(cell === "@") {
        const neighbours = countNeighbourRolls(grid, row, col);
        
        if(neighbours < 4) {
          accessibleCount++
        }
      }
    }
  }

  return accessibleCount;
}

// FUNCTION: given a position, count the number of rolls surrounding it
function countNeighbourRolls(grid, row, col) {
  let count = 0;

  const numRows = grid.length;
  const numCols = grid[0].length;

  for (const [dx, dy] of NEIGHBOUR_OFFSETS) {
    const newRow = row + dy;
    const newCol = col + dx;

    // OUT OF BOUNDS CHECK
    if(newRow < 0 || newRow >= numRows) continue;
    if(newCol < 0 || newCol >= numCols) continue;

    // NEIGHBOUR CHECK
    if(grid[newRow][newCol] === "@") {
      count++;
    }

    // USED TO DEBUG, FOUND A DUPLICATE IN THE OFFSET NEIGHBOUR GLOBAL VARIABLE
    // if(grid[newRow][newCol] === "@") {
    //   if(row === 0 && col === 2) {
    //     console.log(
    //       "Neighbor @ for [0,2] at:",
    //       `[${newRow},${newCol}]`,
    //       "char:",
    //       grid[newRow][newCol]
    //     );
    //   }
    //   count++;
    // }
  }

  return count;
}

// LOGIC TESTING
const actualAccessibleRolls = locateAccessibleRolls(PUZZLE_INPUT);
console.log(`Actual Rolls Accessible: ${actualAccessibleRolls}`);

// console.log(locateAccessibleRolls(TEST_INPUT));
// console.log(TEST_INPUT);