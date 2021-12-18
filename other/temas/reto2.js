//-
let ricksTeam =[78, 56, 89, 12, 32, 75, 15, 12];
let mortysTeam =[23, 56, 89, 12, 45, 45, 56, 89];
//- funcion declaracion
function calcAverage (array) {
    let sum = 0;
    for(let i =0; i<array.length; i++) {
        sum += array[i];
    }
    return sum/array.length
}
console.log(calcAverage(ricksTeam));
console.log(calcAverage(mortysTeam));
//-funcion exprecion
const promRicks = parseInt(calcAverage(ricksTeam));
const promMorty = parseInt(calcAverage(mortysTeam));
const setWinner = function() {
    if(promRicks > promMorty) {
        return `ganador: ricksTeam`
    }else {
        return `ganador: mortysTeam`
    }
}
console.log(setWinner());
//-
const showResult = () => {
    if(promRicks > promMorty) {
        return `los ricks ganaron a los mortys con un promedio de (${promRicks} a ${promMorty}) `;
    }else {
        return `los mortys ganaron a los ricks con un promedio de (${promMorty} a ${promRicks}) `;
    }
}
console.log(showResult());
//-
ricksTeam.pop();
mortysTeam.pop();
console.log(ricksTeam);
console.log(mortysTeam);
//- Pendiente
ricksTeam.push(80);
mortysTeam.push(80);
console.log(ricksTeam);
console.log(mortysTeam)

//- 
 let lista = {
    nameEqipos: ["ricksTeam", "mortysTeam"],
    winnerEquip: promRicks>promMorty? "los ricks" : "los mortys",
    puntajePromedio: promRicks>promMorty? promRicks : promMorty,
    
 }
 console.log(lista)
