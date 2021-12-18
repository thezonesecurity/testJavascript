console.log("reto3");
//Tome en cuenta el siguiente array de datos:
const datos = ["duaLipa", "theWekkend", "dojaCat", "dojaCat", "theWekkend"];
//Elimine los duplicados y pase el resultado a un objeto de tal forma
// que quede:
/*
{
  duaLipa: "One kiss",
  theWekkend: "Starboy",
  dojaCat: "Say so"
}*/
const showdate = new Set(datos);
console.log(showdate);
for (let show of showdate){
    console.log(show)
    
}
//Por ultimo convierta estos datos a un mapa con el nombre de
// "topSemanal" y muestrelos por la consola
const topSemanal = new Map(showdate);
console.log(topSemanal)