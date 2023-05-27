const { Test } = require("../utils");

function compact(arr) {
	
    arr = arr.filter(function (n) { 
        return (n !== undefined && n !== null && n !== false && n !== 0 && n !== "" && isNaN()!=NaN); });
      return arr;
}

Test.assertSimilar(compact([1,0,false,null,undefined,"banana"]), [1,'banana']);
Test.assertSimilar(compact([]), []);
Test.assertSimilar(
  compact(
    [
      {
        color: "red",
        make: "toyota",
      },
      {
        color: "blue",
        make: "mazda",
      },
    ],
    null
  ),
  [
    {
      color: "red",
      make: "toyota",
    },
    {
      color: "blue",
      make: "mazda",
    },
  ]
);

Test.getSummary();