const { Test } = require("../utils");

function minMax(arr) {
    
    let min = arr[0];
    let max = arr[0];
    for (let i=0 ; i<arr.length ;i++ )
    {
        if( arr[i]<min)
        {
            min = arr[i];
        }
        if( arr[i]>max)
        {
            max = arr[i];
        }
    
    
    }
    return[min, max];
}

Test.assertSimilar(minMax([14, 35, 6, 1, 34, 54]), [1, 54])
Test.assertSimilar(minMax([1.346, 1.6532, 1.8734, 1.8723]), [1.346, 1.8734])
Test.assertSimilar(minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345]), [0.2345, 0.984])
Test.assertSimilar(minMax([13, 72, 98, 43, 24, 65, 31]), [13, 98])
Test.assertSimilar(minMax([-54, -23, -54, -21]), [-54, -21])
Test.assertSimilar(minMax([-0.473, -0.6834, -0.1287, 0.5632]), [-0.6834, 0.5632])
Test.assertSimilar(minMax([0, 0, 0, 0]), [0, 0])

Test.getSummary();