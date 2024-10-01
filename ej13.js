var readlineSync = require('readline-sync');

var num1 = readlineSync.question('Dime un numero: ');
var num2 = readlineSync.question('Dime otro numero: ');
var op = readlineSync.question('Dime un operador: ');
let res = 0;
if(op=="+")
{
    res = Number(num1)+Number(num2);
}
else if(op=="-")
{
    res = Number(num1)-Number(num2);
}
else if(op=="*")
{
    res = Number(num1)*Number(num2);
}
else if(op=="/")
{
    res = Number(num1)/Number(num2);
}
console.log(num1+" "+op+" "+num2+" = "+res);