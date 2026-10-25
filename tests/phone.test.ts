import assert from "node:assert/strict";
import test from "node:test";
import { normalizeWhatsApp } from "../lib/phone.ts";

test("rejects an empty WhatsApp number", () => {
  assert.equal(normalizeWhatsApp("", "NP"), null);
});

test("rejects incorrect Nepal number lengths", () => {
  assert.equal(normalizeWhatsApp("984123456", "NP"), null);
  assert.equal(normalizeWhatsApp("98412345678", "NP"), null);
});

test("rejects unallocated Nepal mobile prefixes", () => {
  assert.equal(normalizeWhatsApp("9911111111", "NP"), null);
  assert.equal(normalizeWhatsApp("9211111111", "NP"), null);
});

test("accepts verified Nepal Telecom and Ncell prefixes", () => {
  for (const number of ["9741234567", "9751234567", "9761234567", "9841234567", "9851234567", "9861234567", "9701234567", "9801234567", "9811234567", "9821234567"]) {
    assert.equal(normalizeWhatsApp(number, "NP"), `+977${number}`);
  }
});

test("accepts Ncell's newer 971 allocation", () => {
  assert.equal(normalizeWhatsApp("9711234567", "NP"), "+9779711234567");
});

test("preserves international validation outside Nepal", () => {
  assert.equal(normalizeWhatsApp("(415) 555-2671", "US"), "+14155552671");
  assert.equal(normalizeWhatsApp("+44 20 7946 0958", "GB"), "+442079460958");
});

test("normalizes formatted Nepal numbers to E.164", () => {
  assert.equal(normalizeWhatsApp("984 123 4567", "NP"), "+9779841234567");
  assert.equal(normalizeWhatsApp("+977 971 123 4567", "NP"), "+9779711234567");
});
