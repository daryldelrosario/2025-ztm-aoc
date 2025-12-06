import fs from 'fs';

// GLOBAL VARIABLES
const testInput = "day02-test-input.txt";
const puzzleInput = "day02-input.txt";

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

// FUNCTION: Find Invalid IDs - WORKS FOR PART 1
// function isInvalidId(id) {
//   const stringId = String(id);
//   if(stringId.length % 2 !== 0) return false;

//   const halfStringId = stringId.length / 2;
//   return stringId.slice(0, halfStringId) === stringId.slice(halfStringId);
// }

// FUNCTION Find Invalid IDs - FOR PART 2
function isInvalidId(id) {
  const idAsString = String(id);
  const idLength = idAsString.length;

  for (let len = 1; len <= Math.floor(idLength / 2); len++) {
    if(idLength % len !== 0) continue;

    const repeats = idLength / len;
    if(repeats < 2) continue;

    const chunk = idAsString.slice(0, len);
    let allMatch = true;

    for (let i = len; i < idLength; i += len) {
      if(idAsString.slice(i, i + len) !== chunk) {
        allMatch = false;
        break;
      }
    }

    if (allMatch) return true;
  }

  return false;
}

// FUNCTION: Finding All Invalid IDs in the Ranges
function invalidIdInRanges(ranges) {
  const invalidIds = [];

  for (const { start, end } of ranges) {
    for(let id = start; id <= end; id++) {
      if(isInvalidId(id)) {
        invalidIds.push(id);
      }
    }
  }

  return(invalidIds);
}

// FUNCTION: Solving DAY 2 - PART 1, putting it together
function addEmUp(inputDoc) {
  const rangeFromDoc = readTheDoc(inputDoc);
  const arrOfRanges = separateTheRanges(rangeFromDoc);
  const allInvalidIds = invalidIdInRanges(arrOfRanges);
  const sum = allInvalidIds.reduce((acc, n) => acc + n, 0);

  return sum;
}

// TESTING THE FUNCTIONS AND LOGIC
const testRangeDoc = readTheDoc(testInput);
const arrRange = separateTheRanges(testRangeDoc);

// console.log(testRangeDoc);
// console.log(arrRange);
// console.log(isInvalidId(11));
// console.log(invalidIdInRanges(arrRange));
console.log(`Test Input Sums: ${addEmUp(testInput)}`);
console.log(`Solution Sum: ${addEmUp(puzzleInput)}`);


