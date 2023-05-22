const { Test } = require("./utils");

function swap(a, b) {

	return [b, a]
}

Test.assertSimilar(swap(100, 200), [200, 100])
Test.assertSimilar(swap(44, 33), [33, 44])
Test.assertSimilar(swap(21, 12), [12, 21])
Test.assertSimilar(swap(10, 20), [20, 10])

Test.getSummary();