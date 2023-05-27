const { Test } = require("../utils");

function tetra(n) {
	let Tn = (n * (n + 1) * (n + 2)) / 6;
    return Tn;
}

Test.assertEquals(tetra(1), 1)
Test.assertEquals(tetra(2), 4)
Test.assertEquals(tetra(3), 10)
Test.assertEquals(tetra(4), 20)
Test.assertEquals(tetra(5), 35)
Test.assertEquals(tetra(9), 165)

Test.getSummary();