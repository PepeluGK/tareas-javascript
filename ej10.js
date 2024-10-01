var readlineSync = require('readline-sync');

var num = readlineSync.question('Dime un numero: ');

for(let  i = 1;i<11; i++)
{
    console.log(num, " X ", i, " = ",num*i);
}