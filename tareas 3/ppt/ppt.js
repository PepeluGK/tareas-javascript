function jugar(jugador) {
    const eleccion = ['piedra', 'papel', 'tijeras'];
    const cpu = eleccion[Math.floor(Math.random() * eleccion.length)];
    let resultado = '';

    if (jugador === cpu) 
    {
        resultado = "Empate! Doble " + jugador;
    } else if ((jugador === 'piedra' && cpu === 'tijeras') || (jugador === 'papel' && cpu === 'piedra') || (jugador === 'tijeras' && cpu === 'papel')) 
    {
        resultado = "¡Ganaste! " + jugador + " gana a "+ cpu;
    } else {
        resultado = "Mamaste " + cpu + " gana a "+ jugador;
    }

    document.getElementById("resultado").innerHTML = "<p>" + resultado + "</p>";
}
