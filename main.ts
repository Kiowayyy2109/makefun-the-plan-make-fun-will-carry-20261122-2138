import { writeFileSync, mkdirSync } from "node:fs";

const PLAN =
  "Day 1: $40 domain + email tool. Scrape 2,000 Shopify stores with thin descriptions. Email each a free sample + $49 Stripe link, 10 descriptions in 24h. At 1% reply, 1 in 4 buying: 5 sales = $245/week. No marketplace, no waiting to be picked. Repeat weekly. Day 30: ~$980.";

const codePoints = [...PLAN].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`plan must be 1-280 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
console.log(`wrote ${codePoints} code points to /output/entry.txt`);
