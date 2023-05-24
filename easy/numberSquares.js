const { Test } = require("../utils");

function numberSquares(n) {
let square = 0;

for (let i = 1; i <= n; i++)
{
    square += i * i;
}
    return square;
}

Test.assertEquals(numberSquares(3), 14)
Test.assertEquals(numberSquares(10), 385)
Test.assertEquals(numberSquares(12), 650)
Test.assertEquals(numberSquares(5), 55)
Test.assertEquals(numberSquares(9), 285)
Test.assertEquals(numberSquares(11), 506)
Test.assertEquals(numberSquares(15), 1240)

Test.getSummary();