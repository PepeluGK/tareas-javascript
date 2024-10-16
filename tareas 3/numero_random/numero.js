let intentos = 0;
let num2 = Math.floor(Math.random() * 100) + 1;

const boton = document.getElementById("funcion");
const mensaje = document.getElementById("mensaje");
const mostrar_intentos = document.getElementById("intentos");

boton.addEventListener("click", intentar);

function intentar() {
  const numero = document.getElementById("num");
  const num = parseInt(numero.value);
  intentos++;

  if (num < num2) {
    mensaje.textContent = "El número es mayor";
    mensaje.className = "low";
  } else if (num > num2) {
    mensaje.textContent = "El número es menor";
    mensaje.className = "high";
  } else {
    mensaje.textContent = "¡Correcto!";
    mensaje.className = "correct";
  }

  mostrar_intentos.textContent = `Intentos: ${intentos}`;
  numero.value = "";
}