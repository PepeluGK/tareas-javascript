class Tarea {
    constructor(nombre) {
        this.nombre = nombre;
        this.completada = false;
    }

    completar() {
        this.completada = true;
    }

    toString() {
        let estado = this.completada ? "Completada" : "Pendiente";
        return `Tarea: ${this.nombre}, Estado: ${estado}`;
    }

    static tareas = [];

    static agregarTarea(nombre) {
        const nuevaTarea = new Tarea(nombre);
        Tarea.tareas.push(nuevaTarea);
    }

    static completarTarea(nombre) {
        for (let i = 0; i < Tarea.tareas.length; i++) {
            if (Tarea.tareas[i].nombre === nombre) {
                Tarea.tareas[i].completar();
                console.log(`Tarea '${nombre}' marcada como completada.`);
                return;
            }
        }
        console.log(`Tarea '${nombre}' no encontrada.`);
    }

    static mostrarCompletadas() {
        console.log("Tareas completadas:");
        for (let i = 0; i < Tarea.tareas.length; i++) {
            if (Tarea.tareas[i].completada) {
                console.log(Tarea.tareas[i].toString());
            }
        }
    }

    static mostrarPendientes() {
        console.log("Tareas pendientes:");
        for (let i = 0; i < Tarea.tareas.length; i++) {
            if (!Tarea.tareas[i].completada) {
                console.log(Tarea.tareas[i].toString());
            }
        }
    }
}

// Ejemplo de uso

Tarea.agregarTarea("Estudiar JavaScript");
Tarea.agregarTarea("Jugar a la compu");
Tarea.agregarTarea("Leer un libro");

Tarea.mostrarPendientes();

Tarea.completarTarea("Estudiar JavaScript");

Tarea.mostrarCompletadas();

Tarea.mostrarPendientes();  