var readlineSync = require('readline-sync');

var frase = readlineSync.question('Dime una frase: ');

const palabras = [frase.split(" ")];
let contador = 0;

for (let i=0; i<palabras.length;i++)
{
    console.log(palabras[i]);
    contador++;
}
console.log("El array tiene "+palabras.length+" palabras");