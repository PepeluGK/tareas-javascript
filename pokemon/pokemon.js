const readline = require("readline-sync");

// Clase de movimientos (Move)
class Move {
    constructor(nombre, dmg) {
        this.nombre = nombre;
        this.dmg = dmg;
    }

    calcularDano(atk, dfs) {
        const randomFactor = Math.random() * 0.15 + 0.85; // Factor aleatorio entre 0.85 y 1.0
        return Math.max(1, Math.floor((atk / dfs) * this.dmg * randomFactor));
    }
}

// Clase de Pokémon
class Pokemon {
    constructor(nombre, hp_actual, hp_max, atk, dfs, moves) {
        this.nombre = nombre;
        this.hp_actual = hp_actual;
        this.hp_max = hp_max;
        this.atk = atk;
        this.dfs = dfs;
        this.moves = moves;
        this.healUsed = false;
    }

    recibirDano(dano) {
        this.hp_actual = Math.max(this.hp_actual - dano, 0);
    }

    curarse() {
        if (!this.healUsed) {
            this.hp_actual = Math.min(this.hp_actual + this.hp_max * 0.5, this.hp_max);
            this.healUsed = true;
            console.log(`${this.nombre} se ha curado al 50% de su HP máximo.`);
        } else {
            console.log(`${this.nombre} ya no puede curarse.`);
        }
    }

    atacar(movimiento, oponente) {
        const dano = movimiento.calcularDano(this.atk, oponente.dfs);
        oponente.recibirDano(dano);
        console.log(`${this.nombre} usa ${movimiento.nombre} y causa ${dano} de daño a ${oponente.nombre}.`);
    }

    estaDerrotado() {
        return this.hp_actual <= 0;
    }
}

// Definición de movimientos
const impactrueno = new Move("Impactrueno", 40);
const rayo = new Move("Rayo", 90);
const lanzallamas = new Move("Lanzallamas", 40);
const vuelo = new Move("Vuelo", 90);
const latigo_cepa = new Move("Látigo Cepa", 40);
const hoja_afilada = new Move("Hoja Afilada", 90);
const pistola_agua = new Move("Pistola Agua", 40);
const burbuja = new Move("Burbuja", 90);
const canto = new Move("Canto", 40);
const psicorayo = new Move("Psicorayo", 90);
const ataque_rapido = new Move("Ataque Rápido", 40);
const placaje = new Move("Placaje", 90);
const bola_sombra = new Move("Bola Sombra", 40);
const pulso_umbrio = new Move("Pulso Umbrío", 90);
const terremoto = new Move("Terremoto", 100);
const lanza_rocas = new Move("Lanza Rocas", 50);
const mordisco = new Move("Mordisco", 60);
const colmillo_hielo = new Move("Colmillo Hielo", 65);
const surf = new Move("Surf", 90);
const aliento_dragon = new Move("Aliento Dragón", 60);
const cometa_draco = new Move("Cometa Draco", 130);
const psiquico = new Move("Psíquico", 90);
const esfera_aural = new Move("Esfera Aural", 80);
const sorpresa = new Move("Sorpresa", 40);
const patada_salto_alta = new Move("Patada Salto Alta", 100);
const a_bocajarro = new Move("A Bocajarro", 120);
const psico_corte = new Move("Psico Corte", 70);

// Crear la lista de Pokémon
const pokemons = [
    new Pokemon("Pikachu", 55, 55, 55, 40, [impactrueno, rayo]),
    new Pokemon("Charizard", 78, 78, 84, 78, [lanzallamas, vuelo]),
    new Pokemon("Bulbasaur", 45, 45, 49, 49, [latigo_cepa, hoja_afilada]),
    new Pokemon("Squirtle", 44, 44, 48, 65, [pistola_agua, burbuja]),
    new Pokemon("Jigglypuff", 115, 115, 45, 20, [canto, psicorayo]),
    new Pokemon("Eevee", 55, 55, 55, 50, [ataque_rapido, placaje]),
    new Pokemon("Gengar", 60, 60, 65, 60, [bola_sombra, pulso_umbrio]),
    new Pokemon("Onix", 35, 35, 45, 160, [terremoto, lanza_rocas]),
    new Pokemon("Snorlax", 160, 160, 110, 65, [placaje, mordisco]),
    new Pokemon("Lapras", 130, 130, 85, 80, [colmillo_hielo, surf]),
    new Pokemon("Dragonite", 91, 91, 134, 95, [aliento_dragon, cometa_draco]),
    new Pokemon("Mewtwo", 106, 106, 110, 90, [psicorayo, psiquico]),
    new Pokemon("Lucario", 70, 70, 110, 70, [esfera_aural, sorpresa]),
    new Pokemon("Machamp", 90, 90, 130, 80, [patada_salto_alta, a_bocajarro]),
    new Pokemon("Alakazam", 55, 55, 50, 45, [psico_corte, psiquico])
];

// Selección aleatoria de Pokémon para el jugador y la IA
function seleccionarPokemonAleatorio() {
    return pokemons[Math.floor(Math.random() * pokemons.length)];
}

const pokemonJugador = seleccionarPokemonAleatorio();
const pokemonIA = seleccionarPokemonAleatorio();

console.log(`El jugador ha elegido a ${pokemonJugador.nombre}`);
console.log(`La IA ha elegido a ${pokemonIA.nombre}\n`);

// Función para mostrar el estado actual del combate
function mostrarEstado(pokemonJugador, pokemonIA) {
    console.log(`\nEstado actual del combate:`);
    console.log(`${pokemonJugador.nombre} (Jugador) - HP: ${pokemonJugador.hp_actual}/${pokemonJugador.hp_max}`);
    console.log(`${pokemonIA.nombre} (IA) - HP: ${pokemonIA.hp_actual}/${pokemonIA.hp_max}\n`);
}

// Función principal del combate
function iniciarCombate(pokemonJugador, pokemonIA) {
    let turnoJugador = true;

    // Mostrar el estado inicial
    mostrarEstado(pokemonJugador, pokemonIA);

    while (!pokemonJugador.estaDerrotado() && !pokemonIA.estaDerrotado()) {
        const atacante = turnoJugador ? pokemonJugador : pokemonIA;
        const defensor = turnoJugador ? pokemonIA : pokemonJugador;

        if (turnoJugador) {
            const accion = readline.question("1) Atacar  2) Curarse\n");

            if (accion === "1") {
                const movIdx = readline.question(`Selecciona un movimiento: 1) ${atacante.moves[0].nombre}  2) ${atacante.moves[1].nombre}\n`);
                const movimiento = atacante.moves[movIdx - 1];
                atacante.atacar(movimiento, defensor);
            } else if (accion === "2") {
                atacante.curarse();
            } else {
                console.log("Acción no válida.");
            }
        } else {
            const accionIA = Math.random() > 0.5 ? "atacar" : "curarse";
            if (accionIA === "atacar") {
                const movimiento = atacante.moves[Math.floor(Math.random() * atacante.moves.length)];
                atacante.atacar(movimiento, defensor);
            } else {
                atacante.curarse();
            }
        }

        // Mostrar el estado después de cada turno
        mostrarEstado(pokemonJugador, pokemonIA);

        turnoJugador = !turnoJugador;
    }

    if (pokemonJugador.estaDerrotado()) {
        console.log(`${pokemonJugador.nombre} ha sido derrotado. ¡La IA gana!`);
    } else {
        console.log(`${pokemonIA.nombre} ha sido derrotado. ¡Has ganado!`);
    }
}

// Iniciar el combate automáticamente
iniciarCombate(pokemonJugador, pokemonIA);