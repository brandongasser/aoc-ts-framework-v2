import { readFileSync } from "node:fs";
import * as part1 from './part-1/solution';
import * as part1Parser from './part-1/parser';
import * as part2 from './part-2/solution';
import * as part2Parser from './part-2/parser';

function readInput(): string | undefined {
  try {
    return readFileSync('input.txt', 'utf-8');
  } catch (e) {
    return undefined;
  }
}

function main() {
  const input = readInput();
  if (!input) {
    console.log('Input file does not exist. Create one in today\'s day folder');
    return;
  }

  const part1Input = part1Parser.parse(input);
  const part1Solution = part1.solve(part1Input);
  if (part1Solution !== undefined) {
    console.log(part1Solution);
  }

  const part2Input = part2Parser.parse(input);
  const part2Solution = part2.solve(part2Input);
  if (part2Solution !== undefined) {
    console.log(part2Solution);
  }
}

main();