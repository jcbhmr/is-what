import { test, assert } from "vitest";
import isDate from "../src/isDate";

test("works with dates", () => {
  assert.equal(isDate(new Date()), true);
  assert.equal(isDate(new Date(0)), true);
  assert.equal(isDate(new Date("2020-01-01")), true);
});

test("returns false when invalid date", () => {
  assert.equal(isDate(new Date("invalid")), false);
});

test("false with Object.create(Date.prototype)", () => {
  assert.equal(isDate(Object.create(Date.prototype)), false);
});

test("true when prototype mutated after construction", () => {
  const x = new Date();
  Object.setPrototypeOf(x, null);
  assert.equal(isDate(x), true);
});

test("false with non-dates", () => {
  assert.equal(isDate({}), false);
  assert.equal(isDate(new EventTarget()), false);
  assert.equal(isDate(new Map()), false);
  assert.equal(isDate([]), false);
  assert.equal(isDate(null), false);
  assert.equal(isDate(undefined), false);
  assert.equal(isDate("2020-01-01"), false);
  assert.equal(isDate(1), false);
  assert.equal(isDate(true), false);
  assert.equal(isDate(Symbol("a")), false);
});
