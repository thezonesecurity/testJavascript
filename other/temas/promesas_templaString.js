//PROMESAS
const myPromise = () => {
  return new Promise((resolve, reject) => {
    const a = 5;
    const b = 10;
    //== , ====
    if (a + b === 15) {
      resolve("correcto");
    } else {
      reject("incorrecto");
    }
  });
};
console.log(
  myPromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
);
// myPromise
//   .then((msn) => console.log(msn))
//   .catch((error) => {
//     console.log(error);
//   });

//TEMPLA STRING

let name = "Irnonman";
let age = 23;
function test() {
  return "soy una funcion";
}
const micadena = `Hola ${name} 
la edad es ${name} es de ${age} 
esto es una operacion ${3 + 5} una funcion ${test()}`;
console.log(micadena);
