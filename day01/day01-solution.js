import fs from 'fs';

function readTheDoc(path) {
  return fs.readFileSync(path, 'utf8');
}

function findTheCombinations(text) {
  const lines = text.trim().split(/\r?\n/);
  return lines;
}

function getDirectSteps(combination) {
  return {
    direction: combination[0],
    steps: Number(combination.slice(1))
  };
}

function getDirectStepsFromDoc(path) {
  const text = readTheDoc(path);
  const comboText = findTheCombinations(text);
  const directSteps = comboText.map(getDirectSteps);

  return directSteps;
}

// WORKING OUT THE LOGIC WITH THE TEST EXAMPLE
const testDoc = 'day01-test-input.txt';
const testDirectSteps = getDirectStepsFromDoc(testDoc);

// CONSOLIDATED THE FUNCTIONS into getDirectStepsFromDoc(path)
// const testDocTxt = readTheDoc(testDoc);
// const testCombos = findTheCombinations(testDocTxt);
// const testDirectSteps = testCombos.map(getDirectSteps);


console.log(testDirectSteps);

// This will be the final solution
const puzzleInput = 'day01-input.txt';

