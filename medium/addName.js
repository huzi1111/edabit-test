const { Test } = require("../utils");

function addName(obj, name, value) {
    return { ...obj, [name]: value };
}

Test.assertSimilar(addName({}, "Brutus", 300), {Brutus: 300})
Test.assertSimilar(addName({piano: 500}, "Brutus", 400), {piano: 500, Brutus: 400})
Test.assertSimilar(addName({piano: 500, stereo: 300}, "Caligula", 440), {piano: 500,  stereo: 300, Caligula: 440})

Test.getSummary();