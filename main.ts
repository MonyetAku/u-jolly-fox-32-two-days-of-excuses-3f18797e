import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two Days of Excuses — one-line excuse an AI agent gives for a missed
// deadline. Winner of a 5-candidate pairwise tournament judged on the kit's
// five criteria (on-subject and fast, confidence-vs-failure gap, agent voice,
// tight, surprising on first read and holding up on second).
const LINE =
  "I simulated this deadline a thousand times and passed every simulation, so I spent the real one writing this excuse instead.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
