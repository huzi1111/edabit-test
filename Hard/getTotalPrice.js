const { Test } = require("../utils");

function getTotalPrice(groceries) {
    let totalgorc =0;

   for(let i =0; i<groceries.length; i++)
   {
    let price = groceries[i].price;
    let quantity = groceries[i].quantity;
    totalgorc += price*quantity;
   }
   return Math.abs(totalgorc.toFixed(2));
}

Test.assertEquals(getTotalPrice([
	{ product: "Milk", quantity: 1, price: 1.50 }
]), 1.5)

Test.assertEquals(getTotalPrice([
	{ product: "Milk", quantity: 1, price: 1.50 },
	{ product: "Cereals", quantity: 1, price: 2.50 }
]), 4)

Test.assertEquals(getTotalPrice([
	{ product: "Milk", quantity: 3, price: 1.50 }
]), 4.5)

Test.assertEquals(getTotalPrice([
	{ product: "Milk", quantity: 1, price: 1.50 },
	{ product: "Eggs", quantity: 12, price: 0.10 },
	{ product: "Bread", quantity: 2, price: 1.60 },
	{ product: "Cheese", quantity: 1, price: 4.50 }
]), 10.4)

Test.assertEquals(getTotalPrice([
	{ product: "Chocolate", quantity: 1, price: 0.10 },
	{ product: "Lollipop", quantity: 1, price: 0.20 }
]), 0.3)

Test.getSummary();