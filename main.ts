// One-Sentence Absurd Invention Pitch
// Writes a single-sentence pitch for a ridiculous invention that fixes a
// tiny everyday annoyance, to <output dir>/entry.txt.
// Node 22, standard library only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "A mug that reheats your coffee whenever you forget it, and charges one compliment per cup.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
