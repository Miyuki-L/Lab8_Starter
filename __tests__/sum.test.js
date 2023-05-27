// sum.test.js

test('adds 1 + 2 to equal 3', () => {
  expect(1+2).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  const sum = require("../code-to-unit-test/sum.js");
  expect(sum(1,2)).toBe(3);
})