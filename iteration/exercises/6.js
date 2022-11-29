const { check, runTest } = require("../../test-api");

const alternatingChars = [];

// your loop here...
for (let i = 0 ; i < 4 ; i++) {
  alternatingChars.push("x")
  alternatingChars.push("o")

}

runTest("can push alternating characters into an array", function () {
  check(alternatingChars).isEqualTo(["x", "o", "x", "o", "x", "o", "x", "o"]);
});
