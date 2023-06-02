const { Test } = require("../utils");

function freeShipping(order) {
    let totalCost = 0;
    for (let item in order) {
      totalCost += order[item];
    }
    return totalCost > 50.00;
    
}

Test.assertEquals(freeShipping({'Shampoo' : 5.99, 'Rubber Ducks': 15.99}), false)
Test.assertEquals(freeShipping({'Flatscreen TV': 399.99}), true)
Test.assertEquals(freeShipping({'Monopoly': 11.99, 'Secret Hitler': 35.99, 'Bananagrams': 13.99}), true)
Test.assertEquals(freeShipping({'Scrabble': 12.32, 'Jenga': 5.55, 'Clue': 20.00}), false)
Test.assertEquals(freeShipping({'Elephant Plushie': 40.55, 'Octopus Plushie': 20.33, 'Spongebob Plushie': 20.00}), true)

Test.getSummary();