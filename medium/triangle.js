const { Test } = require("../utils");

function triangle(n) {
	return n*(n+1)/2;
}

Test.assertEquals(triangle(1), 1)
Test.assertEquals(triangle(2), 3)
Test.assertEquals(triangle(3), 6)
Test.assertEquals(triangle(8), 36)
Test.assertEquals(triangle(2153), 2318781)

Test.getSummary();