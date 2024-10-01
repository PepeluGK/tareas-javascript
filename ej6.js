var readlineSync = require('readline-sync');

var num = readlineSync.question('Dime un numero: ');
if (num > 10)
{
    console.log("El numero es mayor que 10");
}
else if (num == 10)
{
    console.log("El numero es 10");
}
else
{
    console.log("El numero es menor que 10");
}