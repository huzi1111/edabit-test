const { Test } = require("../utils");

function changeEnough(change, amountDue) {
  let wallet=0;
        wallet = change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01;
       
        if(wallet>= amountDue)
        {
            return true
        }
        return false;
  
}

Test.assertEquals(changeEnough([2, 100, 0, 0], 14.11), false);
Test.assertEquals(changeEnough([0, 0, 20, 5], 0.75), true);
Test.assertEquals(changeEnough([30, 40, 20, 5], 12.55), true);
Test.assertEquals(changeEnough([10, 0, 0, 50], 13.85), false);
Test.assertEquals(changeEnough([1, 0, 5, 219], 19.99), false);
Test.assertEquals(changeEnough([1, 0, 2555, 219], 127.75), true);
Test.assertEquals(changeEnough([1, 335, 0, 219], 35.21), true);

Test.getSummary();