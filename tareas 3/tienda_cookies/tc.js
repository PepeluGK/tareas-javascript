const carritoElement = document.getElementById("lista-carrito");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || {};

function renderizarCarrito() {
    carritoElement.innerHTML = "";
    for (const [producto, cantidad] of Object.entries(carrito)) {
        const item = document.createElement("li");
        item.textContent = `${producto} (Cantidad: ${cantidad})`;
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => eliminarDelCarrito(producto);
        item.appendChild(botonEliminar);
        carritoElement.appendChild(item);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


function agregarAlCarrito(producto) {
    carrito[producto] = carrito[producto] ? carrito[producto] + 1 : 1;
    renderizarCarrito();
}

function eliminarDelCarrito(producto) {
    delete carrito[producto];
    renderizarCarrito();
}

vaciarCarritoBtn.onclick = () => {
    carrito = {};
    renderizarCarrito();
};

renderizarCarrito();
