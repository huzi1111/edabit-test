const { Test } = require("../utils");

function possibleBonus(a, b) {

    let diff = b - a;
 
    if (diff <= 0 ){
      return false;
    }
    else if (diff <= 6 ){
        return true;
      }
      return false;
    
}

Test.assertEquals(possibleBonus(3, 7), true) //1
Test.assertEquals(possibleBonus(0, 6), true) //2
Test.assertEquals(possibleBonus(1, 6), true) //3
Test.assertEquals(possibleBonus(2, 6), true) //4
Test.assertEquals(possibleBonus(3, 6), true) //5
Test.assertEquals(possibleBonus(4, 6), true) //6
Test.assertEquals(possibleBonus(5, 6), true) //7
Test.assertEquals(possibleBonus(6, 6), false) //8
Test.assertEquals(possibleBonus(7, 6), false) //9
Test.assertEquals(possibleBonus(23, 27), true) //10
Test.assertEquals(possibleBonus(1, 9), false) //11
Test.assertEquals(possibleBonus(5, 3), false) //12

Test.getSummary();