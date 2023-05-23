const { Test } = require("../utils");

function timeForMilkAndCookies(date) {
    let day = date.getDate();
    let month = date.getMonth();
    
    if(month == 11 && day == 24)
    {
        return true;
    }
        return false; 

}

Test.assertEquals(timeForMilkAndCookies(new Date(2013, 11, 24)), true)
Test.assertEquals(timeForMilkAndCookies(new Date(3000, 11, 24)), true)
Test.assertEquals(timeForMilkAndCookies(new Date(2154, 11, 11)), false)
Test.assertEquals(timeForMilkAndCookies(new Date(2010, 11, 2)), false)
Test.assertEquals(timeForMilkAndCookies(new Date(1980, 9, 24)), false)

Test.getSummary();