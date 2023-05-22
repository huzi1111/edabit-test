const { Test } = require("./utils");

function printArray(number) {
    var newArray = [];

    for (var i = 1; i <= number; i++) {
        newArray.push(i);
    }

    return newArray;
}

Test.assertSimilar(printArray(1), [1])
Test.assertSimilar(printArray(2), [1, 2])
Test.assertSimilar(printArray(3), [1, 2, 3])
Test.assertSimilar(printArray(4), [1, 2, 3, 4])
Test.assertSimilar(printArray(5), [1, 2, 3, 4, 5])
Test.assertSimilar(printArray(6), [1, 2, 3, 4, 5, 6])
Test.assertSimilar(printArray(7), [1, 2, 3, 4, 5, 6, 7])
Test.assertSimilar(printArray(8), [1, 2, 3, 4, 5, 6, 7, 8])
Test.assertSimilar(printArray(9), [1, 2, 3, 4, 5, 6, 7, 8, 9])
Test.assertSimilar(printArray(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

Test.getSummary();