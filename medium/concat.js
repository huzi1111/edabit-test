const { Test } = require("../utils");

function concat(...args) {
    let n = [];
    for(let i = 0; i<args.length; i++)
    {
        for (let j = 0; j < args[i].length; j++){
            n.push(args[i][j]);
          }
    }
	return n;
}

Test.assertSimilar(concat([1, 2, 3], [4, 5], [6, 7]), [1, 2, 3, 4, 5, 6, 7])
Test.assertSimilar(concat([1], [2], [3], [4], [5], [6], [7]), [1, 2, 3, 4, 5, 6, 7])
Test.assertSimilar(concat([1, 2], [3, 4]), [1, 2, 3, 4])
Test.assertSimilar(concat([4, 4, 4, 4, 4]), [4, 4, 4, 4, 4])
Test.assertSimilar(concat(['a'], ['b', 'c']), ['a', 'b', 'c'])

Test.getSummary();