var readlineSync = require('readline-sync');

var num = readlineSync.question('Dime un numero: ');

if (num % 2 == 0)
{
    console.log("El numero es par");
}
else
{
    console.log("El numero es impar");
}