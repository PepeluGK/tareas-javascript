let palabrasAleatorias = ['ballena', 'violeta', 'uva', 'arbol', 'platano', 'naranja', 'elefante', 'cuaderno', 'manzana', 'reina', 'montana', 'robot', 'cebra'];
const palabra_aleatoria = palabrasAleatorias[Math.floor(Math.random() * palabrasAleatorias.length)];
let palabra_escondida = "_ ".repeat(palabra_aleatoria.length);
let intentos = 6;
const intentosElem = document.getElementById("intentos");
const mensajeElem = document.getElementById("mensaje");
const palabraElem = document.getElementById("palabra");
const letraInput = document.getElementById("letra");

const partesDelCuerpo = [
    document.getElementById("cabeza"),
    document.getElementById("cuerpo"),
    document.getElementById("mano_izq"),
    document.getElementById("mano_der"),
    document.getElementById("pierna_izq"),
    document.getElementById("pierna_der")
];

let letrasAcertadas = Array(palabra_aleatoria.length).fill("_");
let letrasFalladas = [];

palabraElem.innerText = letrasAcertadas.join(" ");

function jugar() {
    let letra = letraInput.value.toLowerCase();
    letraInput.value = '';

    if (letra.length === 0) {
        mensajeElem.innerText = "Introduce una letra válida.";
        return;
    }

    if (palabra_aleatoria.includes(letra)) {
        for (let i = 0; i < palabra_aleatoria.length; i++) {
            if (palabra_aleatoria[i] === letra) {
                letrasAcertadas[i] = letra;
            }
        }
        palabraElem.innerText = letrasAcertadas.join(" ");
        mensajeElem.innerText = "¡Bien hecho! La letra "+ letra +" está en la palabra.";
    } else {
        if (!letrasFalladas.includes(letra)) {
            letrasFalladas.push(letra);
            intentos--;
            intentosElem.innerText = intentos;

            partesDelCuerpo[6 - intentos].style.visibility = 'visible';

            mensajeElem.innerText = "Fallaste. La letra "+ letra +" no está en la palabra.";
        } else {
            mensajeElem.innerText = "Ya probaste la letra "+ letra +". Intenta otra.";
        }
    }

    if (!letrasAcertadas.includes("_")) {
        mensajeElem.innerText = "¡Felicidades! Has adivinado la palabra.";
        letraInput.disabled = true;
    }

    if (intentos === 0) {
        mensajeElem.innerText = "Lo siento, has perdido. La palabra era "+ palabra_aleatoria;
        letraInput.disabled = true;
    }
}