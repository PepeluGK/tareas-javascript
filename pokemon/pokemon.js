class Pokemon {
    constructor(nombre, hp_actual, hp_max, atk, dfs, move1, move2) {
        this.nombre = nombre;
        this.hp_actual=hp_actual;
        this.hp_max=hp_max;
        this.atk=atk;
        this.dfs=dfs;
        this.move1=move1;
        this.move2=move2
    }
}

const pokemons = [
    new Pokemon("Pikachu", 55, 55, 55, 40, "Impactrueno", "Rayo"),
    new Pokemon("Charizard", 78, 78, 84, 78, "Lanzallamas","Vuelo"),
    new Pokemon("Bulbasaur", 45, 45, 49, 49, "Latigo Cepa", "Hoja Afilada"),
    new Pokemon("Squirtle", 44, 44, 48, 65, "Pistola Agua", "Burbuja"),
    new Pokemon("Jigglypuff", 115, 115, 45, 20, "Canto","Psicorayo"),
    new Pokemon("Eevee", 55, 55, 55, 50, "Ataque rapido", "Placaje"),
    new Pokemon("Gengar", 60, 60, 65, 60, "Bola Sombra", "Pulso Umbrio"),
    new Pokemon("Onix", 35, 35, 45, 160, "Terremoto", "Lanza rocas"),
    new Pokemon("Snorlax", 160, 160, 110, 65, "Placaje", "Mordisco"),
    new Pokemon("Lapras", 130, 130, 85, 80, "Colmillo Hielo", "Surf"),
    new Pokemon("Dragonite", 91, 91, 134, 95, "Aliento dragon", "Cometa Draco"),
    new Pokemon("Mewtwo", 106, 106, 110, 90, "Psicorayo", "Psiquico"),
    new Pokemon("Lucario", 70, 70, 110, 70, "Esfera Aural", "Sorpresa"),
    new Pokemon("Machamp", 90, 90, 130, 80, "Patada Salto alta", "A bocajarro"),
    new Pokemon("Alakazam", 55, 55, 50, 45, "Psico Corte", "Psiquico")
];



