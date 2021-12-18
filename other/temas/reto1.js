//TEST DE 1RA CLASE
//-
let masa_josie = 50;
let masa_kasuya = 35;
//-
const BMI = (masa, altura) => {
    let bmi = masa / (altura*altura);
    return bmi;
}
let bmijosi = BMI(masa_josie, 1.65);
let bmikasuya = BMI(masa_kasuya, 1.52);
//- 
if(bmijosi > bmikasuya) {
    let josieHigherBMI = true;
    console.log(josieHigherBMI);
}
//-
let comparar = bmijosi > bmikasuya? 
`El BMI de josie es mas alto k el de kasuya`:
 `El BMI de Kasuya es mas alto k el de josie`;
console.log(comparar);
//-
let comparar2 = bmijosi > bmikasuya? 
`El BMI de josie (${bmijosi}) es mas alto k el de kasuya (${bmikasuya})`:
 `El BMI de Kasuya (${bmikasuya}) es mas alto k el de josie (${bmijosi})`;
 console.log(comparar2);
