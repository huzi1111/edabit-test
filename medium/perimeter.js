const { Test } = require("../utils");

function perimeter(l, num) {
  return (l =='s')*(4*num)+(l =='c')*(6.28*num);
}
Test.assertEquals(perimeter("s", 1), 4)
Test.assertEquals(perimeter("s", 4), 16)
Test.assertEquals(perimeter("s", 9), 36)
Test.assertEquals(perimeter("s", 13), 52)
Test.assertEquals(perimeter("s", 30), 120)
Test.assertEquals(perimeter("c", 1), 6.28)
Test.assertEquals(perimeter("c", 4), 25.12)
Test.assertEquals(perimeter("c", 9), 56.52)
Test.assertEquals(perimeter("c", 13), 81.64)
Test.assertEquals(perimeter("c", 30), 188.4)

// Author: MyName

Test.getSummary();