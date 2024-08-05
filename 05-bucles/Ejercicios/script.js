// 1. **Dada la misma `nums`matriz que se muestra arriba, escriba algún código para registrar sus elementos en orden inverso usando un `for`bucle estandar.**
// const **`nums = [1, 10, 5, -9, -1];`**


const nums = [1, 10, 5, -9, -1];
for (let i = nums.length - 1; i >= 0; i--) {
    console.log(nums[i]); 
}


// 2. **Escriba algún código para lograr el siguiente resultado: (0, 0) (1, 0) (2, 0) (0, 1) (1, 1) (2, 1) (0, 2) (1, 2) (2, 2)**

const arr = [];
for (let i = 0; i < 3; i++) {
    for(let j = 0; j < 3 ; j++){
        console.log("(" + j + "," + i + ")"); 
    }
}    

// 3. **Cree una estructura repetitiva para multiplicar todos los números en un array determinado y devolver el producto.**
//  **`var nums = [1, 5, 70, -2, -1, -0.5];`**

const numbers = [1, 5, 70, -2, -1, -0.5];
let output = 1;

for(let i=0 ; i<numbers.length ; i++){
    output *= numbers[i];
}
console.log(output);

// imprimir el dibujo 

// *
// **
// ***
// ****
// *****

let draw = "";
for(let i=0 ; i<5 ; i++){
    for(let j=0 ; j<5 ; j++){
        if(j>i) break;
        else draw += "*";
    }
    draw += "\n";
}
console.log(draw);

// Escribe un programa que genere los primeros 20 términos de la secuencia de Fibonacci utilizando un bucle for.


let primerTermino = 0;
let segundoTermino = 1;
let siguienteTermino ;
for(let i=1 ; i<=20 ; i++){
    siguienteTermino = primerTermino + segundoTermino;
    segundoTermino = primerTermino;
    primerTermino = siguienteTermino;
    console.log(primerTermino+"+"+segundoTermino+"="+siguienteTermino);
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...



// Imprimir números del 1 al 10 excepto el 5

for(let i=1 ; i<11 ; i++){
    if(i!=5){
        console.log(i);
    }
}

// Imprimir números pares del 1 al 10

for(let i=1 ; i<11 ; i++){
    if (i % 2 == 0){
        console.log(i);
    }else{
        continue;
    }
}

// Encontrar el primer número divisible por 7 entre 1 y 100

for(let i=0 ; i<100 ; i++){
    if(i % 7 == 0){
        console.log("Primer número divisibles entre 7: "+i);
        break;
    }
}


// 

const numeros = [1, 11, 3, 2, 5];

for (var i = 0; i < numeros.length; i++) {
//    if (numeros[i] % 2 === 0) {
//       break;
//    }
//    console.log(numeros[i]);
   if(numeros[i] % 2 !== 0){
    console.log(numeros[i]);
   }
}



// Encontrar el primer número mayor que 5 en un arreglo



// Escribe un programa que calcule el factorial de un número dado utilizando un bucle while.