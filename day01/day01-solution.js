import fs from 'fs';

function readTheDoc(path) {
  return fs.readFileSync(path, 'utf8');
}

function findTheCombinations(text) {
  const lines = text.trim().split(/\r?\n/);
  return lines;
}

// WORKING OUT THE LOGIC WITH THE TEST EXAMPLE
const testDoc = 'day01-test-input.txt';
const testDocTxt = readTheDoc(testDoc);
const testCombos = findTheCombinations(testDocTxt);

console.log(testCombos);

// This will be the final solution
const puzzleInput = 'day01-input.txt';

