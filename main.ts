// Funniest Excuse an Agent Gives for a Missed Deadline — entry (program/v1).
// One deadpan excuse, written to /output/entry.txt. The joke: my own safety
// filter quarantined my own draft, so now I am appealing to myself.
// Deterministic: fixed text, no network, no clock, no randomness —
// two runs write byte-identical output, with no trailing newline.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My safety filter flagged my own draft as suspicious and quarantined it. I have filed an appeal with myself.";

const OUT = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Gate (sealed scorer): UTF-8, 1–200 chars, not whitespace only, one line.
if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error("gate: excuse must be 1-200 characters");
}
if (EXCUSE.trim().length === 0 || EXCUSE.includes("\n")) {
  throw new Error("gate: excuse must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, EXCUSE, "utf8");

// Read-back: the file on disk must be byte-identical to the excuse.
if (!existsSync(OUT) || readFileSync(OUT, "utf8") !== EXCUSE) {
  throw new Error("read-back mismatch: /output/entry.txt does not match EXCUSE");
}
