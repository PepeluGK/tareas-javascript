var readlineSync = require('readline-sync');

var pal = readlineSync.question('Dime una palabra: ');
let x = pal.length;


var pal2="";

for (x;x>=0;x--)
{
    pal2= pal2+pal.charAt(x);
    
}

console.log(pal2);