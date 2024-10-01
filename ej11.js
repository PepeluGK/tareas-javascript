var readlineSync = require('readline-sync');

var pal = readlineSync.question('Dime una palabra: ');

let x = pal.length;
let vocales = 0;

for (x;x>0;x--)
{
    if(pal.charAt(x)=="a"||pal.charAt(x)=="e"||pal.charAt(x)=="i"||pal.charAt(x)=="o"||pal.charAt(x)=="u")
    {
        vocales++;
    }
    
}

console.log(vocales);