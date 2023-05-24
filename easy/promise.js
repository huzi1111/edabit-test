const { Test } = require("../utils");

let promise = new Promise( (resolve, reject) => {
    setTimeout(( ) => {
       resolve("edabit")
    }, 1000)
  })

let prom = promise.then((err, res) => {
	if(err) { return err } 
	return res
})

prom.then((res) => {
	Test.assertEquals(typeof res, "string", "The promise needs resolve a string." )	
}) 

Test.assertEquals(promise, promise)

Test.getSummary();