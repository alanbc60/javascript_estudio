

//  ================== Ejercicio 1 =================
// 1. **Convertir un número a nombre de mes** usando un switch-case.

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
        break;
    case 5:
        mes = "Mayo";
        break;
    case 6:
        mes = "Junio";
        break;
    case 7:
        mes = "Julio";
        break;
}


//  ================== Ejercicio 2 =================
// 1. debe ser divisible por 4  y Si No divisible por 100, 
// 2. O si es dzivisible por 400.
//const numUsuario = parseInt(prompt("Ingrese un número: "));


    const year = 2024;
    if(year%4 === 0 && year%100 !== 0 && year%400 === 0 ){
     console.log("Es año bisiesto");
    } else{
        console.log("Es año no es bisiesto");
     }


//  ================== Ejercicio 3 =================
// 3. **Determinar si un número es positivo, negativo o cero**  con operador ternario


// condición ? expresiónSiVerdadero : expresiónSiFalso
// Donde:

// condición es una expresión que se evalúa como verdadera o falsa.
// expresiónSiVerdadero es la expresión que se devuelve si la condición es verdadera.
// expresiónSiFalso es la expresión que se devuelve si la condición es falsa.
// Por ejemplo:


const num2=25;
     if (num2<0) {
        console.log("El numero es negativo")
     } else if(num2>0){
        console.log("El numero es positivo")
     } 
     else //como es la ultima condicion no lleva condición
        console.log("El numero es cero" )
     


//  ================== Ejercicio 4 =================
// 4. Escribe una función que tome dos números como argumentos y devuelva el mayor de los dos utilizando el operador ternario.
console.log(num2>0 ? "Es un positivo": num2<0 ? "Es numero negativo": "Es cero");

    

//  ================== Ejercicio 5 =================
// 5. Escribe una función que tome un número como argumento y devuelva "Par" si es par y "Impar" si es impar utilizando el operador ternario.
function parImpar(num3){
   return num3%2 === 0 ? "Es un numero par" : "Es un numero impar";
}

console.log(parImpar(2));