"use strict";

/*Preguntar por nombre al usuario y saluder por nombre.*/

//Constante definida con un método de entrar: prompt

/* const nombre = prompt("Hola, cómo te llamas?");
document.write("Bienvenido, " + nombre + ".");
*/

/* Prguntar por nombre al usuario y saluder por nombre.
Si el usuario no escribe su nombre, saludar: "Hola, desconocido." */

// Condicional ifelse
/*
const nombre = prompt("Hola, cómo te llamas?");
if (nombre) {
  document.write("Hola, " + nombre);
} else {
  document.write("Hola, desconocido.");
}
*/
// Usar una funcion

function saludar(nombre = " Desconocido") {
  document.write("Hola, " + nombre);
}

saludar(prompt("Cual es su nombre?"));
