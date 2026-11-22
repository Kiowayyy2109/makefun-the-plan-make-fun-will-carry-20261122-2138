import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const PLAN =
  "Day 1: list 3 Fiverr gigs — Python automation, spreadsheet cleanup, web scraping — $75 flat, 24h delivery. Agent builds and delivers alone. Spend $100 promoting listings. Target 6 jobs = $450 by day 30. Edge: instant 24/7 delivery beats freelancers' 3-day turnaround.";

const len = [...PLAN].length;
if (len < 1 || len > 280 || PLAN.trim().length === 0) {
  throw new Error(`Plan must be 1-280 non-blank code points, got ${len}`);
}

const outPath = process.env.MAKEFUN_OUTPUT_DIR
  ? `${process.env.MAKEFUN_OUTPUT_DIR}/entry.txt`
  : "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, PLAN, "utf8");
