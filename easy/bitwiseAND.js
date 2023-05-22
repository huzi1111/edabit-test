const { Test } = require("../utils");

function bitwiseAND(n1, n2) {
	return n1&n2;
}

function bitwiseOR(n1, n2) {
	return n1|n2;
}

function bitwiseXOR(n1, n2) {
	return n1^n2;
}

Test.assertEquals(bitwiseAND(7, 12), 4)
Test.assertEquals(bitwiseOR(7, 12), 15)
Test.assertEquals(bitwiseXOR(7, 12), 11)

Test.assertEquals(bitwiseAND(32, 17), 0)
Test.assertEquals(bitwiseOR(32, 17), 49)
Test.assertEquals(bitwiseXOR(32, 17), 49)

Test.assertEquals(bitwiseAND(13, 19), 1)
Test.assertEquals(bitwiseOR(13, 19), 31)
Test.assertEquals(bitwiseXOR(13, 19), 30)
Test.getSummary();