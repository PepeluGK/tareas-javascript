var readlineSync = require('readline-sync');

var um1 = readlineSync.question('Dime tu nota: ');

let num1 = Number(um1);

if(num1>=60){
    console.log("Aprobado");
}
else{
    console.log("Suspendido");
}