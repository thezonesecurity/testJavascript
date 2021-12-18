//FECH
const loadData = () => {
    //QXJ4KZ3vs2At3nYRZV4ubN2A8GuKn4qD
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=QXJ4KZ3vs2At3nYRZV4ubN2A8GuKn4qD&q=cheeseburgers";
    fetch(url)
      .then((result) => result.json())
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  loadData();


  //FUNCIONES

// const mifuncion = (params) => `cadena ${params}`;
// const mifuncion2 = (a) => 45 + a;
const mifuncion3 = (name) => ({ nombre: name });
// const mifuncion2 = function () {};

// let result = mifuncion2("Juan");
// console.log(result);
let result = mifuncion3("Mario");
console.log(result);


//CONSTANTES

// que es el scope.
//El scope es el ámbito donde una variable o función puede existir
//El contexto donde la variable o la funcion
//se puede usar.
//---------------------------------------
// Bloque. Un bloque es una o mas sentencias que estan
//limitadas generalemente por {}

let foo = "Ironman";
if (true) {
  let foo = "spiderman";
  console.log(foo);
}
console.log(foo);
const thisIsaFunction = function () {
  console.log("Hola soy una funcion");
};
// thisIsaFunction = "hola";
// thisIsaFunction();
console.log(thisIsaFunction);
// const soyunaconstante = "Este valor no cambiara";
// soyunaconstante = "no puedo cambiaar";
// console.log(soyunaconstante);