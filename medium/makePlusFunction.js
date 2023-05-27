const { Test } = require("../utils");

function makePlusFunction(baseNum) {
	return function(newNumber)
    {
        return baseNum + newNumber;
    }
      
}


const plusTwo = makePlusFunction(2)
const plusFive = makePlusFunction(5)
const plusSeven = makePlusFunction(plusTwo(plusFive(0)))
const plusTen = makePlusFunction(10)

Test.assertEquals(plusTwo(0), 2)
Test.assertEquals(plusTwo(18), 20)
Test.assertEquals(plusTwo(-1), 1)
Test.assertEquals(plusFive(0), 5)
Test.assertEquals(plusFive(12), 17)
Test.assertEquals(plusFive(-5), 0)
Test.assertEquals(plusSeven(0), 7)
Test.assertEquals(plusSeven(41), 48)
Test.assertEquals(plusSeven(-117), -110)
Test.assertEquals(plusTen(0), 10)
Test.assertEquals(plusTen(1), 11)
Test.assertEquals(plusTen(-1), 9)
Test.assertEquals(plusTwo(plusFive(plusSeven(plusTen(1)))), 25)

Test.assertEquals(makePlusFunction(8)(8), 16)
Test.assertEquals(makePlusFunction(1)(100), 101)
Test.assertEquals(makePlusFunction(-100)(0), -100)
Test.assertEquals(makePlusFunction(0)(0), 0)

Test.getSummary();