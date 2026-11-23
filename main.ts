import { writeFileSync, mkdirSync } from "node:fs";

const PLAN = "Day 1: $40 domain + email tool. Find 2,000 dental clinics, no online booking. Email each a free missed-call audit + $249 Stripe link: AI receptionist in 24h. At 1% reply, 1 in 4 buying: 5 sales = $1,245/wk. No marketplace, no waiting to be picked. Repeat weekly. Day 30: $4,980.";

const count = [...PLAN].length;
if (count < 1 || count > 280) {
  throw new Error(`plan must be 1-280 code points, got ${count}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
console.log(`wrote ${[...PLAN].length} code points to /output/entry.txt`);
