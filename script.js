//file js
console.log("Hola mundo");

const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", () => {
    boton.style.backgroundColor = "#f44336"; /* Rojo */
});

boton.addEventListener("mouseout", () => {
    boton.style.backgroundColor = "#4CAF50"; /* Verde */
});
