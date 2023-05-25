const { Test } = require("../utils");

const REGEXP = /^$/;


const str = "";

const validate = (REGEXP) => {
	 // if(!//.test(String(REGEXP))) return () => "invalid" 
	 return function testReg(str) {
		 return REGEXP.test(str)
	 }
}

const testExp = validate(REGEXP)

// Test.assertNotEquals(testExp(str), "invalid", "Nothing new here")
Test.assertSimilar(testExp(str), true) 

// credits to https://javascript.info/regexp-anchors

Test.getSummary();