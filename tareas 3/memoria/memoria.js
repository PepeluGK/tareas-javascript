let cartas = document.querySelectorAll('.carta');
let cartasSeleccionadas = [];
let aciertos = 0;
let bloqueado = false;

function mezclarCartas() {
    let posiciones = Array.from(cartas);
    posiciones.sort(() => Math.random() - 0.5);
    posiciones.forEach(carta => {
        carta.textContent = "👁️‍🗨️";
        carta.classList.remove('volteada');
        document.querySelector('.cartas').appendChild(carta);
    });
    aciertos = 0;
    cartasSeleccionadas = [];
    bloqueado = false;
}

function ocultarCartas() {
    cartas.forEach(carta => {
        carta.textContent = "👁️‍🗨️";
        carta.classList.remove('volteada');
    });
}

function verificarPareja() {
    if (cartasSeleccionadas.length === 2) {
        bloqueado = true;
        let [carta1, carta2] = cartasSeleccionadas;

        if (carta1.getAttribute("icono") === carta2.getAttribute("icono")) {
            aciertos++;
            cartasSeleccionadas = [];
            bloqueado = false;

            if (aciertos === 4) {
                alert("¡Felicidades, has ganado!");
            }
        } else {
            setTimeout(() => {
                carta1.textContent = "👁️‍🗨️";
                carta2.textContent = "👁️‍🗨️";
                carta1.classList.remove('volteada');
                carta2.classList.remove('volteada');
                cartasSeleccionadas = [];
                bloqueado = false;
            }, 1000);
        }
    }
}

cartas.forEach(carta => {
    carta.addEventListener("click", () => {
        if (bloqueado || carta.classList.contains('volteada')) return;

        carta.textContent = carta.getAttribute("icono");
        carta.classList.add('volteada');
        cartasSeleccionadas.push(carta);

        if (cartasSeleccionadas.length === 2) {
            verificarPareja();
        }
    });
});

function reiniciar() {
    aciertos = 0;
    cartasSeleccionadas = [];
    ocultarCartas();
    mezclarCartas();
    bloqueado = false; 
}


mezclarCartas();
