const { Test } = require("../utils");

function redundant(str) {
 return function()
 {
    return str;
 }
}

const f1 = redundant("apple")
const f2 = redundant("pear")
const f3 = redundant("")

Test.assertEquals(f1(), "apple")
Test.assertEquals(f2(), "pear")
Test.assertEquals(f3(), "")

Test.getSummary();