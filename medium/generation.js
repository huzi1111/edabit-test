const { Test } = require("../utils");

function generation(x, y) {

	if(x<=-3)
    {
        let gender = y == "m"?"father":"mother";
        return "great grand" + gender ;
    }
    if(x<=-2)
    {
        let gender = y == "m"?"father":"mother";
        return "grand" + gender;
    }
    if(x<=-1)
    {
        let gender = y == "m"?"father":"mother";
        return gender;
    }
     if(x==0)
    {
        return "me!";
    }
    if(x<=1)
    {
        let gender = y == "m"?"son":"daughter";
        return gender;
    }
    if(x<=2)
    {
        let gender = y == "m"?"son":"daughter";
        return "grand"+gender;
    }
    if(x<=3)
    {
        let gender = y == "m"?"son":"daughter";
        return "great grand"+gender;
    }
}

Test.assertEquals(generation(-3, "m"), "great grandfather", "3 generations before you, male...")
Test.assertEquals(generation(1, "f"), "daughter", "1 generation after you, female...")
Test.assertEquals(generation(-3, "f"), "great grandmother")
Test.assertEquals(generation(-2, "m"), "grandfather")
Test.assertEquals(generation(-2, "f"), "grandmother")
Test.assertEquals(generation(-1, "m"), "father")
Test.assertEquals(generation(-1, "f"), "mother")
Test.assertEquals(generation(0, "f"), "me!")
Test.assertEquals(generation(1, "m"), "son")
Test.assertEquals(generation(1, "f"), "daughter")
Test.assertEquals(generation(2, "m"), "grandson")
Test.assertEquals(generation(2, "f"), "granddaughter")
Test.assertEquals(generation(3, "m"), "great grandson")
Test.assertEquals(generation(3, "f"), "great granddaughter")
Test.assertEquals(generation(0, "m"), "me!")

Test.getSummary();