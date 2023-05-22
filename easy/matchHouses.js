const { Test } = require("../utils");

/*
  1 => step * 6 = 1 * 6 = 6
  2 => 2 * 6 = 2 * 6  - 1 = 11
  3 => 3 * 6 = 3 * 6  - 3 = 18
  4 => 4 * 6 = 4 * 6 - = 
 */
function matchHouses(step) {
    if(step<=0)
    {
        return 0;
    }
    return (step*6)-(step-1);

}

Test.assertEquals(matchHouses(1), 6)
Test.assertEquals(matchHouses(0), 0)
Test.assertEquals(matchHouses(17), 86)
Test.assertEquals(matchHouses(36), 181)
Test.assertEquals(matchHouses(15), 76)
Test.assertEquals(matchHouses(99), 496)
Test.assertEquals(matchHouses(3), 16)
Test.assertEquals(matchHouses(87), 436)

Test.getSummary();