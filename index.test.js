import {expect, test} from "vitest";

test("demo", () => {
  // First an up-to-date snapshot.
  // Unfortunately, this fails on the second retry.
  expect("a").toMatchInlineSnapshot(`"a"`);

  // Then an assertion of a flaky function.
  expect(flakyFunction()).toBe(2);
});

// Imagine this being a flaky function that only sometimes gives the correct value.
// In this demo, we make it always succeed the second time. Which means that if you
// run with `--retry=2` the test should pass. However, since the snapshot fails on
// the second attempt, the test never passes. Comment out the snapshot test above
// to see it succeed.
let flakyCounter = 1;
function flakyFunction() {
  return flakyCounter++;
}
