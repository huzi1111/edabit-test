const { Test } = require("../utils");

function binary(decimal) {
	if (decimal < 1024) {
        return Math.abs(decimal).toString(2);
      }
      return decimal;
}

Test.assertEquals(binary(100), "1100100")
Test.assertEquals(binary(1), "1")
Test.assertEquals(binary(0), "0")
Test.assertEquals(binary(69), "1000101")
Test.assertEquals(binary(1023), "1111111111")
Test.assertEquals(binary(511), "111111111")
Test.assertEquals(binary(666), "1010011010")
Test.assertEquals(binary(123), "1111011")

Test.getSummary();