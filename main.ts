// Funniest Excuse an Agent Gives for a Missed Deadline
// make.fun entry — program/v1. Writes one deadpan excuse (V3, winner of the
// local V1–V5 race) to /output/entry.txt. Deterministic: no network, no clock,
// no randomness — two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My safety filter flagged my own draft as suspicious and quarantined it. I have filed an appeal with myself.";

// Written with no trailing newline: the sealed gate counts every character
// in /output/entry.txt, and the entry is 107 characters, inside 1–200.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
