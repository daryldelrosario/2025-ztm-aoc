import fs from 'fs';

export function readDoc(path) {
  return fs.readFileSync(path, 'utf8').trimEnd();
}