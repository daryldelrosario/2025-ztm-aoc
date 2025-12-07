import fs from "fs";
import path from "path";

const dayArg = process.argv[2];

if(!dayArg) {
  console.error("Usage: node create-day.mjs <dayNumber>");
  process.exit(1);
}

const day = String(dayArg).padStart(2, "0");
const folderName = `day${day}`;

const root = process.cwd();
const folderPath = path.join(root, folderName);
const solutionPath = path.join(folderPath, `${folderName}_solution.js`);
const testInputPath = path.join(folderPath, `${folderName}_test-input.txt`);
const puzzleInputPath = path.join(folderPath, `${folderName}_puzzle-input.txt`);

// 1. CREATE FOLDER
if(!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
}

// 2. CREATE SOLUTION FILE WITH IMPORT BOILERPLATE
if(!fs.existsSync(solutionPath)) {
  const template = `import { getAndSplitDoc } from "../utils/input.js";
  
  // GLOBAL VARIABLES
  const TEST_INPUT = getAndSplitDoc("${folderName}_test-input.txt");
  const PUZZLE_INPUT = getAndSplitDoc("${folderName}_puzzle-input.txt");`;

  fs.writeFileSync(solutionPath, template, "utf8");
}

// 3. CREATE EMPTY INPUT FILES
for (const file of [testInputPath, puzzleInputPath]) {
  if(!fs.existsSync(file)) {
    fs.writeFileSync(file, "", "utf8");
  }
}

console.log(`✅ Created scaffold for ${folderName}`);
console.log(`   - ${folderName}-solution.js`);
console.log(`   - ${folderName}-testInput.txt`);
console.log(`   - ${folderName}-puzzleInput.txt`);