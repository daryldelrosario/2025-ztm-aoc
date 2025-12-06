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

// SOLUTION FUNCTION FOR DAY 1 - PART 1
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

// THIS WILL BE THE FINAL SOLUTION - for PART 1
const actualDoc = 'day01-input.txt';
const actualSolution = countZeroHits(actualDoc);
console.log(`This is the actual solution: ${actualSolution}`);

// FUNCTION for PART 2
function countZeroHitsAllClicks(doc, startPosition=50) {
  let directSteps = getDirectStepsFromDoc(doc);
  let position = startPosition;
  let zeroHits = 0;

  for (const { direction, steps } of directSteps) {
    if(direction === "R") {
      for(let i = 0; i < steps; i++) {
        position = (position + 1) % 100;

        if (position === 0) zeroHits++;
      }
    } else if(direction === "L") {
      for(let i = 0; i < steps; i++) {
        position = (position - 1 + 100) % 100;

        if (position === 0) zeroHits++;
      }
    }
  }

  return zeroHits;
}

// TEST FUNCTION FOR PART 2
console.log("");
const testPart2Sol = countZeroHitsAllClicks(testDoc);
console.log(`This is Part 2 Test Solution: ${testPart2Sol}`);

// SOLUTION FOR PART 2
const part2Sol = countZeroHitsAllClicks(actualDoc);
console.log(`This is Part 2 Actual Solution: ${part2Sol}`);

