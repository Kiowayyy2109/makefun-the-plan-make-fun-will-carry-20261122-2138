// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const PLAN =
  "Day 1: list a $49 AI landing-page + SEO-audit gig on Fiverr and Upwork; spend $100 on ads. Deliver each order in <2h with code, screenshots + Loom. Reply in <10 min, 24/7. Target 2/day = $2,940 gross. Edge: humans take 3 days; same-hour delivery wins rank, reviews, repeats.";

const outPath = process.env.MAKEFUN_OUTPUT_DIR
  ? join(process.env.MAKEFUN_OUTPUT_DIR, "entry.txt")
  : "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, PLAN, "utf8");
