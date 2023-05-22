const { Test } = require("./utils");

function circuitPower(voltage, current) {
	return voltage*current;
}

Test.assertEquals(circuitPower(110, 3), 330)
Test.assertEquals(circuitPower(230, 10), 2300)
Test.assertEquals(circuitPower(480, 20), 9600)

Test.getSummary();