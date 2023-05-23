const { Console } = require("console");

let array=[87, 5, 44 ,66,3,2,1]
let min = array[0];
let max = array[0];
for (let i=0 ; i<array.length ;i++ )
{
    if( array[i]<min)
    {
        min = array[i];
    }
    if( array[i]>max)
    {
        max = array[i];
    }


}
return[min, max];