var readlineSync = require('readline-sync');

let num = readlineSync.question('Intenta  adivinar el numero: ');

let num1 = Math.random() *100;
let num2 = Math.round(num1);


do{
    if (num<num2)
    {
        console.log('El numero es mayor');
        num = readlineSync.question('Intenta nuevamente: ');   
    }
    if (num>num2)
    {
        console.log('El numero es menor');
        num = readlineSync.question('Intenta nuevamente: ');
    }
}while(num!=num2)

console.log("Acertaste")