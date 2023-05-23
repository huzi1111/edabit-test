const { Test } = require("../utils");

const REGEXP =  /\b[0-9]{2}:[0-9]{2}\b/g;

const str = "Breakfast at 09:00 in the room 123:456.";

const validate = (REGEXP) => {
    // if(!//.test(String(REGEXP))) return () => "invalid" 
    return function testReg(str) {
        return str.match(REGEXP)
    }
}

const testExp = validate(REGEXP)

// Test.assertNotEquals(testExp(str), "invalid", "Nothing new here")
Test.assertSimilar(testExp(str), ["09:00"])

// credits to https://javascript.info/regexp-boundary

Test.getSummary();