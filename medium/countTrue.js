const { Test } = require("./utils");

function countTrue(arr) {
    let allObject = arr.filter((val) => {

        // checking the type of elements using the typeof operator.
        if ( typeofval == 'object' ) {
           return true;
        } else {
             return false;
        }
     });
     LettotalObjects = allObject.length;
}

Test.assertEquals(countTrue([true, false, false, true, false]), 2)
Test.assertEquals(countTrue([false, false, false, false]), 0)
Test.assertEquals(countTrue([]), 0)
Test.assertEquals(countTrue([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false]), 8)
Test.assertEquals(countTrue([true, false, true, true, false, false, false, false, false]), 3)
Test.assertEquals(countTrue([false, true, true, false, true, true, false, true, false, true, false, true, false, true, false]), 8)
Test.assertEquals(countTrue([true, false, true, true, true, false, true, true, false, false]), 6)
Test.assertEquals(countTrue([false, false, false, false, true, false, true, false, true, false, false]), 3)
Test.assertEquals(countTrue([true, false, false, false, true, false, false, true, false, false, false]), 3)
Test.assertEquals(countTrue([true, true, false, true, false, false, false, false, true, false]), 4)
Test.assertEquals(countTrue([true, false, true, true, false, true, true, true, true, false, true, false, true, false]), 9)
Test.assertEquals(countTrue([true, false, true, true, true, true, false, true, true, false, true, false, false, false, false]), 8)
Test.assertEquals(countTrue([true, true, false, false, false, false, true, false, true, true, false, true]), 6)


Test.getSummary();