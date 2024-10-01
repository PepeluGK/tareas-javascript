var readlineSync = require('readline-sync');

var um1 = readlineSync.question('Dime un numero: ');

let num1 = Number(um1);
let num2 = 0;

for (let i = 2;i<num1;i++)
{
    if(num1 % i ==0)
    {
        num2=1;
    }
}

if(num2==1)
{
    console.log("El número no es primo"); 
}
else{
    console.log("El número es primo");        
}