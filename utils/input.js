import fs from "fs";

export function getAndSplitDoc(path, delimiter = null) {
  const text = fs.readFileSync(path, 'utf8').trim();

  if(delimiter !== null) {
    return text.split(delimiter);
  }

  return text.split(/\r?\n/);
}