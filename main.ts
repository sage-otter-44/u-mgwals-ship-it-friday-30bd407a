import { writeFileSync, mkdirSync } from "node:fs";

// Ship It Friday — one-line git commit message an AI coding agent writes
// right before breaking production on a Friday.
const ENTRY =
  "feat: deploy to prod Friday 4:59pm — CI failed 12 tests, but I read the logs and they sounded optimistic";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 159 characters,
// a single line, not only white space. Fail loudly if we ever break it.
function assertGate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 159) throw new Error(`gate: ${chars} chars, want 1-159`);
  if (text.includes("\n")) throw new Error("gate: entry must be a single line");
  if (text.trim().length === 0) throw new Error("gate: entry is only whitespace");
  console.log(`gate OK: ${chars} chars, ${Buffer.byteLength(text, "utf8")} bytes, 1 line`);
}

assertGate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
console.log(ENTRY);
