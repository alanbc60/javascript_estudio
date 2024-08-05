// sintaxis do-while
/*
do {
    instrucciones;
} while (condicion);
*/


// Ejemplo: la suma de los primeros 10 números
let j = 0;
let suma = 0;
do {
    suma += j;
    j++;
} while (j < 10);
console.log(suma);


// Ejemplo: la suma de los primeros 10 números pares
let i = 0;
let sumaPares = 0;
do {
    if(i%2 == 0){
        sumaPares += i;
    }
    i++;
} while (i < 10);
console.log(sumaPares);