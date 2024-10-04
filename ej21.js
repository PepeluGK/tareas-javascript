var readlineSync = require('readline-sync');

let longitud = readlineSync.question('Ingresa la longitud de la contraseña: ');
const contraseñaGenerada = generarContraseña(parseInt(longitud));

function generarContraseña(longitud) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let contraseña = '';
    
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres.charAt(indiceAleatorio);
    }
    
    return contraseña;
}

console.log('Contraseña: '+contraseñaGenerada)