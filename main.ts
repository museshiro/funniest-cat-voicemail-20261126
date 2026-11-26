import { mkdirSync, writeFileSync } from "node:fs";

// One voicemail greeting, recorded by a cat. Written only to /output/entry.txt:
// the grader sandbox has a read-only working directory, so this program makes
// no relative writes at all.
const LINE =
  "You've reached Chairman Meow. The human is asleep; I screened your call. Verdict: not food. Goodbye.";

if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`line must be 1-120 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
