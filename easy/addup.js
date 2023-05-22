const { Test } = require("../utils");

function addUp(num) {
	let sum =0;
    for (let i=1; i<=num; i++)
    {
        sum = i +sum;
    }
    return sum;
}

Test.assertEquals(addUp(4), 10)
Test.assertEquals(addUp(13), 91)
Test.assertEquals(addUp(600), 180300)
Test.assertEquals(addUp(392), 77028)
Test.assertEquals(addUp(53), 1431)
Test.assertEquals(addUp(897), 402753)
Test.assertEquals(addUp(23), 276)
Test.assertEquals(addUp(1000), 500500)
Test.assertEquals(addUp(738), 272691)
Test.assertEquals(addUp(100), 5050)
Test.assertEquals(addUp(925), 428275)
Test.assertEquals(addUp(1), 1)
Test.assertEquals(addUp(999), 499500)
Test.assertEquals(addUp(175), 15400)
Test.assertEquals(addUp(111), 6216)

Test.getSummary();