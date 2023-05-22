const { Test } = require("./utils");

function getFirstValue(arr) {
	return arr["0"];
}

Test.assertEquals(getFirstValue([1, 2, 3]), 1)
Test.assertEquals(getFirstValue([80, 5, 100]), 80)
Test.assertEquals(getFirstValue([-500, 0, 50]), -500)
Test.assertEquals(getFirstValue([5, 2, 3]), 5)
Test.assertEquals(getFirstValue([75675, 5, 100]), 75675)
Test.assertEquals(getFirstValue([-52320, 0, 50]), -52320)

Test.getSummary();