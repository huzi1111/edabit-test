const { Test } = require("../utils");

function tpChecker(home) {
    let sheetsPerRoll = 500;
    let sheetsPerDay = 57;
    let daysNeeded = 14;
  
    let totalSheetsNeeded = home.people * sheetsPerDay * daysNeeded;
    let rollsNeeded = Math.ceil(totalSheetsNeeded / sheetsPerRoll);
  
    if (home.tp < rollsNeeded) {
      return "Your TP will only last " + Math.floor((home.tp * sheetsPerRoll) / (home.people * sheetsPerDay)) + " days, buy more!";
    } else {
      return "Your TP will last " + Math.floor((home.tp * sheetsPerRoll) / (home.people * sheetsPerDay)) + " days, no need to panic!";
    }
}

Test.assertEquals(tpChecker({ people: 4, tp: 1 }), "Your TP will only last 2 days, buy more!")
Test.assertEquals(tpChecker({ people: 2, tp: 4 }), "Your TP will last 17 days, no need to panic!")
Test.assertEquals(tpChecker({ people: 3, tp: 20 }), "Your TP will last 58 days, no need to panic!")
Test.assertEquals(tpChecker({ people: 4, tp: 12 }), "Your TP will last 26 days, no need to panic!")
Test.assertEquals(tpChecker({ people: 6, tp: 8 }), "Your TP will only last 11 days, buy more!")
Test.assertEquals(tpChecker({ people: 1, tp: 1 }), "Your TP will only last 8 days, buy more!")

Test.getSummary();