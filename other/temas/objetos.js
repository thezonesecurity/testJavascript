//Mutacion
//Es un cambio del estado de un objeto.
//Inmutalbilidad
//Es evitar que un objeto cambie, y para evitar que un objeto
//cambie tenemos  que construir unca copia del objeto
//para lograrlo necesitamos propagar sus funciones y atributos.
//Propagar = spread
let person = {
    name: "Goku",
    level: 8000,
    tipo: "sayayin",
    enemys: ["Freezer", "Cell", "Majimbo"],
    rival: {
      name: "Vegeta",
      level: 12000,
      enemys: ["Freezer", "Cell", "Majimbo"],
    },
  };
  let list = ["uno", "dos", "tres"];
  console.log({ ...list });
  // console.log(person["name"]);
  person = { ...person, sons: [] };
  // person2.name = "Frezzer";
  // console.log(person2);
  //Hashmap -- dicconario
  //Problema en contar todos los números repetidos en un arreglo
  const number = [
    1, 2, 2, 3, 3, 2, 1, 2, 33, 2, 3, 5, 44, 44, 33, 2, 1, 1, 2, 3, 2, 3, 4, 44,
    45, 5, 5,
  ];
  //Input
  // const number = [1, 1, 2, 2, 3, 3, 3, 3, 3, 4];
  let hashMap = {};
  for (let i = 0; i < number.length; i++) {
    if (hashMap["key_" + number[i]] == null) {
      hashMap["key_" + number[i]] = 0;
    }
    hashMap["key_" + number[i]]++;
  }
  console.log(hashMap);
  // console.log(Object.values(hashMap).sort());
  
  //salida
  //[2, 2, 5,1];
  //[1,2,2,5]
  //so