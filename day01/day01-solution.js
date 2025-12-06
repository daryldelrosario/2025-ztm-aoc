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

function countZeroHits(doc, startPosition = 50) {
  let directSteps = getDirectStepsFromDoc(doc);
  let position = startPosition;
  let zeroHits = 0;

  for (const { direction, steps } of directSteps) {
    if(direction === "R") {
      position = (position + steps) % 100;
    } else if (direction === "L") {
      position = (position - steps) % 100;

      if(position < 0) {
        position += 100;
      }
    } else {
      throw new Error(`Unknown Direction: ${direction}`);
    }

    if(position === 0) {
      zeroHits++;
    }
  }

  return zeroHits;
}

// WORKING OUT THE LOGIC WITH THE TEST EXAMPLE
const testDoc = 'day01-test-input.txt';
const testDirectSteps = getDirectStepsFromDoc(testDoc);

// CONSOLIDATED THE FUNCTIONS into getDirectStepsFromDoc(path)
// const testDocTxt = readTheDoc(testDoc);
// const testCombos = findTheCombinations(testDocTxt);
// const testDirectSteps = testCombos.map(getDirectSteps);

const testDocSolution = countZeroHits(testDoc);
console.log(`This is the number of hits for example: ${testDocSolution}`);

// This will be the final solution
const actualDoc = 'day01-input.txt';
const actualSolution = countZeroHits(actualDoc);
console.log(`This is the actual solution: ${actualSolution}`);

