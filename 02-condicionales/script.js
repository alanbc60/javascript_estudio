

//  ================== Ejercicio 1 =================
// 1. **Convertir un número a nombre de mes**

const num = 1;
let mes = "";
 
switch(num){
    case 1:
        mes = "Enero";
        break;
    case 2:
        mes = "Febrero";
        break;
    case 3:
        mes = "Marzo";
        break;
    case 4:
        mes = "Abril"; 
    
    
}

//  ================== Ejercicio 2 =================
// 2. **Determinar si un año es bisiesto**



const year = 2020;
let bisiesto = false;

if(year % 4 == 0 && ( ( year % 100 != 0 ) || (year % 400 == 0 ) )){
     bisiesto = true;
}else{
    bisiesto = false;
}

console.log("El año " + year + " es bisiesto? " + bisiesto);




//  ================== Ejercicio 3 =================
// 3. **Determinar si un número es positivo, negativo o cero**  utilizando el operador ternario

const numValor = 1;
let numValue = "";


numValor > 0 ? numValue = "positivo" : num < 0 ? numValue = "negativo" : numValue = "cero";
console.log(numValue);



//  ================== Ejercicio 4 =================
// 4. Escribe una función que tome dos números como argumentos y devuelva el mayor de los dos utilizando el operador ternario.

const numA = 3;
const numB = 4;
let numMayor = "";

numA == numB ? numMayor = "son iguales" : numA > numB ? numMayor = "numA es mayor" : numMayor = "numB es mayor";
console.log(numMayor);

//  ================== Ejercicio 5 =================
// 5. Escribe una condicional que tome un número como argumento y devuelva "Par" si es par y "Impar" si es impar utilizando el operador ternario.

const numInput = 4;
console.log(numInput % 2 == 0 ? "par" : "impar");
numInput % 2 == 0 ? console.log("par") : console.log("immpar");

