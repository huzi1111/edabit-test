let obj = {
    name : "huzi" 
}
console.log(obj.name);
obj["huzi"] = "h";
console.log(obj.huzi);
console.log(obj);

let letters = ["a", "b", "c"];
let result = {};
for (let i = 0; i < letters.length; i++)
{
    result[letters[i]] = letters[i].toUpperCase();    
}
console.log(result);

let person = ["age", "name", "country"]
person["name"] = "huzi";
person["age"] = "28";
person["country"] = "Pakistan";

console.log(person.name, person.age, person.country);

let calc = ["plus","minus","divide","multiply"]
let a = 5;
let b = 2;
calc["plus"] = a+b;
calc["minus"] = a-b;
calc["divide"] = a/b;
calc["multiply"] = a*b;
console.log(calc.plus, calc.minus, calc.divide, calc.multiply);