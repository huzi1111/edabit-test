const { Test } = require("../utils");

function add_suffix(suffix) {
    return function(word) {
        return word + suffix;
      };

}

add_ly = add_suffix("ly") 
add_less = add_suffix("less") 
add_ing = add_suffix("ing") 


Test.assertEquals(add_ly("hopeless"), "hopelessly")
Test.assertEquals(add_ly("total"), "totally")

Test.assertEquals(add_less("fear"), "fearless")
Test.assertEquals(add_less("ruth"), "ruthless")

Test.assertEquals(add_ing("cheer"), "cheering")
Test.assertEquals(add_ing("book"), "booking")

Test.getSummary();