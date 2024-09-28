# Vitest inline snapshot retry error

1. Clone this repo.
2. `npm install`
3. `npx vitest run --retry 2`

Actual result (the test fails):

```
❯ npx vitest run --retry=2

 RUN  v2.1.1 /Users/simon/stuff/vitest-inline-snapshot-retry

 ❯ index.test.js (1)
   × demo (retry x2)

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  index.test.js > demo
AssertionError: expected 1 to be 2 // Object.is equality

- Expected
+ Received

- 2
+ 1

 ❯ index.test.js:9:27
      7|
      8|   // Then an assertion of a flaky function.
      9|   expect(flakyFunction()).toBe(2);
       |                           ^
     10| });
     11|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/3]⎯

 FAIL  index.test.js > demo
 FAIL  index.test.js > demo
Error: toMatchInlineSnapshot cannot be called multiple times at the same location.
 ❯ index.test.js:6:15
      4|   // First an up-to-date snapshot.
      5|   // Unfortunately, this fails on the second retry.
      6|   expect("a").toMatchInlineSnapshot(`"a"`);
       |               ^
      7|
      8|   // Then an assertion of a flaky function.

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/3]⎯

 Test Files  1 failed (1)
      Tests  1 failed (1)
   Start at  17:57:14
   Duration  195ms (transform 12ms, setup 0ms, collect 7ms, tests 7ms, environment 0ms, prepare 35ms)

```

Expected result (the test succeeds on the second retry):

```
❯ npx vitest run --retry=2

 RUN  v2.1.1 /Users/simon/stuff/vitest-inline-snapshot-retry

 ✓ index.test.js (1)
   ✓ demo (retry x1)

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  17:58:04
   Duration  192ms (transform 12ms, setup 0ms, collect 6ms, tests 5ms, environment 0ms, prepare 35ms)
```
