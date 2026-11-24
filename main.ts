// One-Sentence Absurd Invention Pitch
// Writes a single-sentence pitch for a ridiculous invention that fixes a
// tiny everyday annoyance, to <output dir>/entry.txt.
// Node 22, standard library only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "Sticky tape with a tiny lighthouse on its loose end that sweeps a beam around the roll, so your thumbnail never has to hunt for the edge again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
