// sintaxis de bucle while

// let condicion = true;  --> variable para la condición
// while (condicion) {
    // instrucciones
// }


// Ejemplo: la suma de los primeros 10 números
let j = 0;
let suma = 0;
while (j < 10) {
    suma += j;
    j++;
}
console.log(suma);


// Ejemplo: la suma de los primeros 10 números pares
let i = 0;
let sumaPares = 0;
while (i < 10) {
    if(i%2 == 0){
        sumaPares += i;
    }
    i++;
}
console.log(sumaPares);