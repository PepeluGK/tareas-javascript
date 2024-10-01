class Circulo {
    constructor(radio) {
        this.radio = radio;
    }

    area() {
        let a = (circulo1.radio*circulo1.radio)*3.14
        console.log("El area del circulo es "+a);
    }
}

const circulo1 = new Circulo(2);
circulo1.area();