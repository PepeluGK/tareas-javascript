var readlineSync = require('readline-sync');

var num = readlineSync.question('Dime un numero: ');
let x=1;

while (num>1)
{
    x=x*num;
    num--;
}

console.log(x);