const { Test } = require("../utils");

function largestSwap(num) {
let firstnum = Math.floor(num/10);
let secnum = (num%10);
result = parseInt("" + secnum + firstnum);
if(num > result)
    {
        return true;
    }
   else if(num == result)
    {
        return true;
    }
    return false;

}

Test.assertEquals(largestSwap(27), false, '27 < 72, so not largest swap.')
Test.assertEquals(largestSwap(43), true, '43 > 34, so largest swap.')
Test.assertEquals(largestSwap(14), false, '14 < 41, so not largest swap.')
Test.assertEquals(largestSwap(53), true, '53 > 35, so largest swap.')
Test.assertEquals(largestSwap(99), true, 'Cannot do better, so largest swap.')

Test.getSummary();