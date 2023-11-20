"use strict";

/*Preguntar por nombre al usuario y saluder por nombre.
Si el usuario no escribe su nombre, saludar: "Hola, desconocido.*/
/*
function saludar() {
  if (nombre) {
    document.write("Bienvenido, " + nombre);
  } else {
    document.write("Bienvenido, desconocido.");
  }
}
const nombre = prompt("Hola, Cuál es tu nombre?");

saludar();
*/

// Leer nombre y apellido, saludar por nombre y apellido.
/*
function saludar() {
  if (nombre) {
    document.write("Bienvenido, " + nombre);
  } else {
    document.write("Bienvenido, desconocido.");
  }
}
const nombres = prompt("Hola, Cuál es tu nombre?");
saludar();
*/
/*
const nombre = prompt("Hola, Cuál es tu nombre?");
const apellido = prompt("Cuál es tu apellido?");

function saludar(nombre, apellido) {
  if (nombre || apellido) {
    document.write(`Bienvenido, ${nombre} ${apellido}`);
  } else {
    document.write("Bienvenido, desconocido.");
  }
}

saludar(nombre, apellido);
*/
// Pregunte al usuario si desea continuar, responder con hola o adiós.
/*
function preguntar() {
  if (confirm("Desea continuar?")) {
    document.write("Bienvenido");
  } else {
    document.write("Hasta la próxima");
  }
}

preguntar();
*/
// Leer nombre y edad, Mostrar si es o no mayor de edad.
/*
const nombre = prompt("Cuál es tu nombre?");
let edad = prompt("Qué edad tienes?");
function seguridad() {
  if (edad >= 18) {
    document.write(`${nombre} es mayor de edad, puede pasar.`);
  } else {
    document.write(`${nombre} es menor de edad, no puede pasar.`);
  }
}
seguridad();
*/
// Leer un rol, (admin, ventas, cliente), acceso de acuerdo al rol.
/*
function perfil() {
  if (confirm("Es usted un cliente?")) {
    document.write("Mostrar catálogo");
  } else if (confirm("Eres del Staff?")) {
    document.write("Pedir Staff ID");
  } else if (confirm("Eres un admin?")) {
    document.write("Solicitar contraseña");
  } else {
    alert("Debes escoger una opción");
  }
}
perfil();
*/
// Leer un número, mostrar el doble de n.
/*
let numero = prompt("Dame un número que quieras duplicar");
function duplicar() {
  let duplica = numero * 2;
  document.write(`Tú número: ${numero} fue duplicado a: ${duplica}`);
}
duplicar();
*/
// Leer un número, mostrar la mitad de n.
/*
let numero = prompt("Dame un número que quieras partir a la mitad");
function doblar() {
  let mitad = numero / 2;
  document.write(`Tú número: ${numero} fue dividido a: ${mitad}`);
}
doblar();
*/
// Leer un número, mostrar si es positivo, negativo o cero.
/*
function mostrar() {
  let numero = prompt("Dame un número");
  if (numero < 0) {
    document.write(`Tú número es -Negativo`);
  } else if (numero > 0) {
    document.write(`Tú número es +Positivo`);
  } else if (numero == 0) {
    document.write(`Tú número es 0`);
  } else {
    document.write(`Digita un número válido`);
  }
}
mostrar();
*/
// Leer un número, mostrar si es par o impar.
/*
function mostrar() {
  let numero = prompt("Dame un número entero");
  if (numero % 2 == 0) {
    document.write(`Tú número es PAR`);
  } else if (numero) {
    document.write(`Tú número es IMPAR`);
  } else {
    document.write(`Digita un número válido`);
  }
}
mostrar();
*/
// Leer dos números, mostrar el mayor.

// Leer dos números, mostrar operaciones básicas (+,-,x,/,%,cuadrado).
// Leer dos números, mostrar la suma dividido en la resta.
