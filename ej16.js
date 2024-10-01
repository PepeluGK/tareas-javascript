var readlineSync = require('readline-sync');

var um1 = readlineSync.question('Dime un numero: ');
var um2 = readlineSync.question('Dime otro numero: ');
var um3 = readlineSync.question('Dime otro numero: ');

let num1 = Number(um1);
let num2 = Number(um2);
let num3 = Number(um3);
let numalto=0;

if (num1>num2&&num1>num3)
{
    numalto=num1;
}
else if (num2>num1&&num2>num3)
{
    numalto=num2;
}
else if (num3>num2&&num3>num1)
{
    numalto=num3;
}

console.log(numalto);