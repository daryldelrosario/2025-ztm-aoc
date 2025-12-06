import fs from 'fs';

function readFile(path) {
  return fs.readFileSync(path, 'utf8');
}

const testInput = 'day01-test-input.txt';
const puzzleInput = 'day01-input.txt';

const testData = readFile(testInput);
console.log(testData);