const { Test } = require("../utils");

function num_of_digits(num) {
    if (num == 0) return 1;  // Special case for zero

    let count = 0;
    num = Math.abs(num);  // Convert negative number to positive for counting
  
    while (num >= 1) {
      num /= 10;
      count++;
    }
  
    return count;
  }


Test.assertEquals(num_of_digits(13124), 5)
Test.assertEquals(num_of_digits(0), 1)
Test.assertEquals(num_of_digits(-12381428), 8)
Test.assertEquals(num_of_digits(12), 2)
Test.assertEquals(num_of_digits(42), 2)
Test.assertEquals(num_of_digits(1000), 4)
Test.assertEquals(num_of_digits(136), 3)
Test.assertEquals(num_of_digits(1000000000), 10)
Test.assertEquals(num_of_digits(2147483647), 10)
Test.assertEquals(num_of_digits(-2147483647), 10)

Test.getSummary();