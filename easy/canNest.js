const { Test } = require("../utils");

function canNest(arr1, arr2) {
	let min1 = Math.min(...arr1);
    let max1 = Math.max(...arr1);
    let min2 = Math.min(...arr2);
    let max2 = Math.max(...arr2);
   
     if(min1>min2 && max1<max2)
    {
        return true;
    }
    return false;
}

Test.assertEquals(canNest([1, 2, 3, 4], [0, 6]), true)
Test.assertEquals(canNest([3, 1], [4, 0]), true)
Test.assertEquals(canNest([9, 9, 8], [8, 9, 10]), false)
Test.assertEquals(canNest([9, 9, 8], [8, 9]), false)
Test.assertEquals(canNest([1, 2, 3, 4], [2, 3]), false)

Test.getSummary();