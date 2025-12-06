import fs from 'fs';

// GLOBAL VARIABLES
const testInput = "day02-test-input.txt";

// FUNCTION: Reading The Ranges Document
function readTheDoc(path) {
  return fs.readFileSync(path, 'utf8');
}

// FUNCTION: Separating The Ranges From Document
function separateTheRanges(doc) {
  const ranges = doc.split(",")

  // creating the start and end points of each range
    .map(range => {
      const [start, end] = range.split("-").map(Number);
      return {start, end };
    });

  return ranges;
}

// TESTING THE FUNCTIONS AND LOGIC
const testRangeDoc = readTheDoc(testInput);
const arrRange = separateTheRanges(testRangeDoc);

// console.log(testRangeDoc);
console.log(arrRange);
