"use strict";

// STRINGS
// const mensaje = "hola-a-todos";

// console.log(mensaje[2]);

// // ACCEDER A INDICES
// console.log(mensaje.indexOf("a")); //accede a la 1ra posicion
// console.log(mensaje.lastIndexOf("a")); //accede a la ultima posicion

// // PARA OBTENER SUBSTRINGS
// console.log(mensaje.slice(0, 5)); ->empieza a leer la cadena desde el 1er caracter
// console.log(mensaje.slice(-5));//-5 -> empieza a leer la cadena desde el ultimo caracter

// // METODOS BOOLEANOS
// console.log(mensaje.includes("hola"));include->ve si el parametro existe en la cadena
// console.log(mensaje.startsWith("aaaa"));//startsWith->verifica el inicio si la cadena enpieza con el parametro
// console.log(mensaje.endsWith("aaaa"));//endsWith->verifica al final si la cadena enpieza con el parametro

// // METODO REPLACE
// console.log(mensaje.replace("-", "_"));//replace-> reemplaza en el 1er espacio encontrado
// console.log(mensaje.replaceAll("-", "_")); //replaceAll-> reemplaza en todos los espacios encontrados

// // MAYUSCULAS Y MINUSCULAS
// console.log(mensaje.toUpperCase());
// console.log(mensaje.toLowerCase());

// const usuario = "   dAniEl  ";

// let realUser = usuario.trim();//trim -> elimina especios innesarios
// console.log(realUser);
// realUser = realUser.toLowerCase();
// realUser = realUser[0].toUpperCase() + realUser.slice(1);
// console.log(realUser);

// // SPLIT Y JOIN
// const mensaje2 = "Hola mi nombre es Juan y soy mayor de edad";
// const mensaje2Palabras = mensaje2.split(" "); // split->convierte una cadena a un objeto cada letra en ""

// const mensajeFinal = mensaje2Palabras.join("-");// join->añade un - a todo la cadena

// console.log(mensaje2Palabras);
// console.log(mensajeFinal);

// // PADDINGS
// const test1 = "hola ";
// console.log(test1.padEnd(10, "=")); //padEnd->rellena al final de la cadena con letras u caracteres
// console.log(test1.padStart(10, "="));//padStart->->rellena al inicio de la cadena con letras u caracteres

// // REPEAT
// const finalTest1 = test1.repeat(10);//repeat-> nos permite repetir la cadena n veces
// console.log(finalTest1);

// FUNCTIONS

const estudianteNoemi = {
  firstName: "Noemi",
  lastName: "Calizaya",
  greet: function (age, country) {
    console.log(`Buenos dias ${this.firstName} (${age}, ${country})`);
  },
};

const estudianteFanor = {
  firstName: "Fanor",
  lastName: "Choque",
};

// estudianteNoemi.greet(22, "Bolivia");

const greetMethod = estudianteNoemi.greet;

// greetMethod();

// METODO CALL
// greetMethod.call(estudianteFanor, 23, "Argentina");// call->llama a una funcion

// METODO BIND
// const greetMethodBindEdadFija = greetMethod.bind(estudianteFanor, 28); //bind-> crea una funcion

// greetMethodBindEdadFija("Mexico");
// greetMethodBindEdadFija("Uruguay");

// const greetRosalia = (fullName) => {
//   return function (country) {
//     return `Hola ${fullName} de ${country}`;
//   };
// };

// console.log(greetRosalia("Rosalia")("Colombia"));

// HIGH ORDER FUNCTIONS Y FIRST CITIZENS FUNCTIONS

const highCustomFunction = (fullName, funcFormat) => {
  console.log(fullName);
  console.log(funcFormat(fullName));
};

const formatRandom = (data) => {
  return data.padEnd(20, "+");
};

highCustomFunction("fsd", formatRandom);
//BOTTON
const buttonN = document.querySelector(".normal-button");

// console.log(buttonN);

const fi = () => {
  alert("Has hecho un click");
};

buttonN.addEventListener("click", function () {
  console.log(this);
  greetMethod.call(estudianteFanor, 23, "Argentina");
});
