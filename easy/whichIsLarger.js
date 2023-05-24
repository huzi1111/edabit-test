const { Test } = require("../utils");

function whichIsLarger(f, g) {
	
    if(f()>  g())
    {
      return "f";
    }
    if(g()> f())
    {
      return "g";
    }
  
        return "neither";

}

Test.assertEquals(whichIsLarger(()=>5, ()=>10),'g')
Test.assertEquals(whichIsLarger(()=>10, ()=>5),'f')
Test.assertEquals(whichIsLarger(()=>25, ()=>25),'neither')
Test.assertEquals(whichIsLarger(()=>-100, ()=>-100),'neither')
Test.assertEquals(whichIsLarger(()=>-100, ()=>0),'g')
Test.assertEquals(whichIsLarger(()=>505050, ()=>5050),'f')
Test.assertEquals(whichIsLarger(()=>100, ()=>1000),'g')

Test.getSummary();