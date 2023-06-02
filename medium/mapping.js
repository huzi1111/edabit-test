const { Test } = require("../utils");

function mapping(letters) {
    let result = {};
    for (let i = 0; i < letters.length; i++) {
      result[letters[i]] = letters[i].toUpperCase();
    }
    return result;
}

Test.assertSimilar(mapping(["a", "b", "c"]), { a: "A", b: "B", c: "C" })
Test.assertSimilar(mapping(["p", "s", "t"]), { p: "P", s: "S", t: "T" })
Test.assertSimilar(mapping(["a", "v", "y", "z"]), { a: "A", v: "V", y: "Y", z: "Z" })

Test.getSummary()
