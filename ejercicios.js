"use strict";

/*Preguntar por nombre al usuario y saluder por nombre.*/

/* const nombre = prompt("Hola, cómo te llamas?");
document.write("Bienvenido, " + nombre + ".");
*/

/* Prguntar por nombre al usuario y saluder por nombre.
Si el usuario no escribe su nombre, saludar: "Hola, desconocido." */

const nombre = prompt("Hola, cómo te llamas?");
if (nombre) {
  document.write("Hola, " + nombre);
} else {
  document.write("Hola, desconocido.");
}
