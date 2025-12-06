import fs from 'fs';

function readFile(path) {
  return fs.readFileSync(path, 'utf8');
}

const testInput = 'day01-test-input.txt';
const testData = readFile(testInput);

const puzzleInput = 'day01-input.txt';

console.log(testData);