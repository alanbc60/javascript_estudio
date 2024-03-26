//*  1. Métodos para la manipulación de elementos

// Estos métodos permiten agregar, eliminar o reemplazar elementos en un array.
// push(): Agrega uno o más elementos al final del array y devuelve la nueva longitud del array.
// pop(): Elimina el último elemento del array y devuelve ese elemento.
// shift(): Elimina el primer elemento del array y devuelve ese elemento.
// unshift(): Agrega uno o más elementos al principio del array y devuelve la nueva longitud del array.
// splice(): Cambia el contenido de un array eliminando, reemplazando o agregando elementos

console.log("============= pop ==================");
const arregloFrutas = ["Banana", "manzana", "kiwi", "Pera", "Uva"]; 
// eliminar uva
const frutaEliminada = arregloFrutas.pop();
console.log(arregloFrutas);

// agregar 2 elementos al principio del arreglo

//unshift array.unshift(elemento1Agregado, ..., elementoNAgregado)


const longitud = arregloFrutas.unshift("Mango", "Papaya"); 
console.log(arregloFrutas);
console.log("Longitud: "+longitud);


console.log(" ============= Ejercicio unshift =============");
const tope = 10;

// agregar 10 elementos al arreglo usando solamente unshift, while y por medio de la longitud que da unsshitf

const arregloUnshift = [];

let tamArreglo = 0;
console.log("tam arreglo: "+tamArreglo);
let i = 0; //condicion que va cambiando con el i++ en aumento de 1

// while (tamArreglo < 10) {
//     tamArreglo = arregloUnshift.unshift(i);
//     console.log("tam arreglo en while: "+tamArreglo);
//     i++;
//}

for (let index = 0; index < 10; index++) {
    arregloUnshift.unshift(index);   
}


// while(i< 10){
//     arregloUnshift.unshift(i); 
//     i++;
// }

console.log("arreglo final: "+arregloUnshift);
//  9,8,7,6,5,4,3,2,1,0


console.log("============= Ejercicio shift =============");

// No tienes que pasarle parametros
arregloUnshift.shift();
console.log("arreglo final: "+arregloUnshift);// 8,7,6,5,4,3,2,1,0
for (let index = 0; index < arregloUnshift.length; index++) {
    arregloUnshift.shift();
}

console.log("arreglo final shift: "+arregloUnshift); //  3, 2, 1, 0

// pruebas de escritorio del ejercicio shift

// i --> 0   0 < 9 --> true    shift() 8
// i --> 1   1 < 8 --> true    shift() 7
// i --> 2   2 < 7 --> true    shift() 6 
// i --> 3   3 < 6 --> true    shift() 5 
// i --> 4   4 < 5 --> true    shift() 4
// i --> 5   5 < 5 --> False    No entra al for 3,2,1,0


console.log("========= Ejercicio splice ============="); 
// array.splice(start, deleteCountSiEsQue, itemAgregado1, ..., itemAgregadoN)
// start --> El índice a partir del cual empieza a agregar o eliminar elementos.
// deleteCountSiEsQue --> Número de elementos a eliminar desde el índice de inicio.
// itemAgregado1, ..., itemAgregadoN --> Elementos a agregar en el array, comenzando en el índice de inicio.


const arregloSplice = ["Banana", "Manzana", "Platano"];
// puede insertar elementos en cualquier posicion
console.log(arregloSplice[1]);
arregloSplice.splice(1,0, "Fresa", "Mango");
console.log("arreglo splice: ",arregloSplice); // ["Banana","Fresa","Mango","Manzana","Platano"]


// ! agregar un ejercicio combinado usando push, pop, shift y unshift

//* 2. Métodos para la búsqueda y comparación de elementos

//* Estos métodos permiten buscar elementos en un array o comparar sus elementos.

// indexOf(): Devuelve el primer índice en el que se encuentra un elemento especificado en el array, o -1 si el elemento no se encuentra.
// lastIndexOf(): Devuelve el último índice en el que se encuentra un elemento especificado en el array, o -1 si el elemento no se encuentra.
// find(): Devuelve el primer elemento del array que cumple con la condición proporcionada.
// findIndex(): Devuelve el índice del primer elemento del array que cumple con la condición proporcionada.
// includes(): Determina si un array incluye un determinado elemento, retornando true o false según corresponda.
// every(): Comprueba si todos los elementos en el array pasan la prueba implementada por la función proporcionada.
// some(): Comprueba si al menos un elemento en el array pasa la prueba implementada por la función proporcionada.

console.log("================  indexOf =================");
//
//array.indexOf(elementoABucar) = regresa el primer indice de dónde se encuentre el elemento
//array.indexOf(elemntoABuscar, desdeQueIndiceVasABuscar);

const arregloIndex = ["Banana", "Manzana", "Platano", 3, 20];
console.log(arregloIndex.indexOf("Banana"));  // devuelve el indice, en este caso 0
console.log(arregloIndex.indexOf("Banana", 1)); // -1, ya que ponemos a buscarnos a partir del indice 1

console.log("============= lastIndexOf ========================");
/* 
    *SINTAXIS: 
        string.lastIndexof(valorBusqueda) aqui empieza a buscar desde la posicion 0
        string.lastIndexof(valorBusqueda, indiceDesdeDondeSeBusca)
        !sensible a mayusculas o minusculas
 */
 const arregloLastIndex = ["Banana", "Manzana", "Platano", "Uva", "Banana"];
console.log(arregloLastIndex.lastIndexOf("Banana")); //4



console.log("============= findIndex ==================");

const arregloFind = ["Banana", "Manzana", "Platano", "Cereza", "Sandia"];

// Una función callback es cualquier función que se pasa como argumento a otra función y se ejecuta después de que la función principal ha completado su ejecución.

// array.find(callbackFn, thisArg)
// arregloFind.find(function(currentValue, index, array){}, thisArg )
// callbackFn(te da un return) es una función que se ejecuta para cada elemento del array hasta que encuentra uno donde la función devuelve un valor verdadero (truthy). Esta función recibe tres argumentos:
// currentValue: El elemento actual que se está procesando en el array.
// index (opcional): El índice del elemento actual que se está procesando en el array.
// arr (opcional): El array sobre el cual se está llamando find().
// thisArg (opcional): Un objeto que se utilizará como this cuando se ejecute callbackFn.

//callbackFn
//A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments

// find recibe una funcion como argumento, la funcion se ejecutará para cada elemento del array, el return de la funcion 
//numero sera function(numero) {return numero> 3}

const numerosF = [1, 2, 3, 4, 5];

// La función callback se pasa como argumento a find()
const primerNumeroMayorQueTres = numeros.find(function(numero) {
 return numero > 3; 
});


// TODO: 3. Métodos para la transformación de arrays
// Estos métodos crean un nuevo array con los resultados de aplicar una función a cada elemento del array original.

// map(): Crea un nuevo array con los resultados de llamar a una función para cada elemento del array.
// filter(): Crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.
// reduce(): Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.
// reduceRight(): Aplica una función a un acumulador y a cada valor de un array (de derecha a izquierda) para reducirlo a un único valor.



/* TODO: 4. Métodos para la combinación y separación de arrays */
// Estos métodos permiten combinar o separar arrays.

// concat(): Une dos o más arrays y devuelve un nuevo array.
// join(): Une todos los elementos de un array en una cadena y devuelve esta cadena.
// slice(): Devuelve una copia superficial de una porción del array en un nuevo array.
// split(): Divide una cadena en un array de subcadenas.



// 5. Métodos para la iteración de arrays
// Estos métodos permiten iterar sobre los elementos de un array.

// forEach(): Ejecuta una función proporcionada una vez para cada elemento del array.
// for...of: Ejecuta un bloque de código para cada elemento del array.
// for tradicional







const numeros = [1,2,3,4,5];

// iterar con for tradicional

/* for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    console.log(element);
} */

// for of

// ==================== Sintaxis del for of =========================

// for(variable of iterable){
//     statement
// }

// ==================== Sintaxis del forEach =========================

// itera sobre elementos de un array y ejecutar una función de callback para cada elemento.
 // array.forEach(function(currentValue, index, arr), thisValue)

// La función de callback proporcionada como argumento se ejecutará una vez para cada elemento en el array, en orden, y puede realizar cualquier operación deseada con el elemento actual.

//  El forEach() no devuelve ningún valor; es simplemente utilizado para ejecutar una función sobre cada elemento del array. 

console.log(" =============== forEach =====================")
const numeros2 = [3,6,9,12,15];
// forEach usando una funcion tradicional
// console.log(" ==== for tradicional =====")
// numeros2.forEach(function(currentValue, index, arr){
//     console.log("Valor actual: "+currentValue);
//     console.log("indice: "+index);
//     console.log("Array completo: "+arr);

// })

// // forEach usando funciones flecha
// console.log(" ==== forEach =====")
// numeros2.forEach((element, index, array) => {
//     console.log("elemento: ",element);
//     console.log("index: ",index);
//     console.log("array completo: ",array);
// });


console.log(" ==== for tradicional =====")
numeros2.forEach(function(currentValue){
    console.log("Valor actual: "+currentValue);
})

// forEach usando funciones flecha

// TODO: si solo es un argumento en la funcion flecha puede No llevar parentesis
console.log(" ==== forEach =====")
numeros2.forEach( element => {
    console.log("elemento: ",element);
});
//Para una funcion flecha no necesitas parentesis si solo es un argumento

//Si son dos o más es necesario el parentesis si no marca error
console.log(" ==== forEach =====")
numeros2.forEach( (element, index) => {
    console.log("elemento: ",element);
    console.log("indice: "+index);
});

// TODO: las funciones callback retornan algo y estas pueden ser interpretadas como:
// 1. function(currentValue, index, arr), thisValue)  se le conoce como "funcion de callback"
// 2. funciones flecha => Es una funcion callback


console.log(" =============== 2. Map =====================")
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
//El método Array.map() te permite iterar sobre un arreglo y modificar sus elementos utilizando una función callback. La función callback se ejecutará entonces en cada uno de los elementos del arreglo.

// TODO: ¿map regresa algo ?  -----------> retorna un item/element modificado del arreglo



// sintaxis de map usando 
//arr.map(function(element, index, array){  }, this)  ----> return array;

//Map, ventaja mantiene el arreglo original y crea copia de estes
const array2 = [1,2,3,4,5,6]; 
const nuevpArray2 = array2.map(function(element, index, array){
    return element  + element;
})

const nuevpArray3 = array2.map(function(element){
    return element  + element;
})

console.log("usando funcion flecha");

const nuevoArray4 = array2.map((element, index, array) => {
 return element + element; 
});

const nuevoArray5 = array2.map(element => {
    return element + element; 
   });


//console.log(array2); // array original
// console.log(nuevpArray2);
// console.log(nuevpArray3);

// console.log(nuevoArray4);
// console.log(nuevoArray5);


console.log(" =============== 3. Includes =====================");

//El método includes() determina si una array incluye un determinado elemento, devuelve true o false según corresponda.
// Es una forma conveniente de verificar la presencia de un valor dentro de un array sin tener que escribir bucles o funciones de búsqueda personalizadas.

// arr.includes(searchElement[, fromIndex])


// searchElement: El elemento que se está buscando en el array.
// FIXME: fromIndex (opcional): El índice a partir del cual se debe comenzar la búsqueda. Si se omite, la búsqueda comenzará desde el inicio del array.
// El método devuelve true si el searchElement se encuentra en el array y false en caso contrario.

const frutas = ["manzana", "banana", "naranja", "pera", "kiwi", "coco"];
// buscar la fruta "pera"
console.log(frutas.includes("pera")); 
console.log(frutas.includes("pera", 3)); // se debe usar sin corchetes []
console.log(frutas.includes("Guayaba", 2)); // False, No esta en el arreglo
console.log(frutas.includes("manzana", 2)); // False, si esta en el arreglo pero como empieza a buscar desde el indice 2 no esta ahí



console.log("Ejercicio includes()")
console.log(frutas.includes("A")); 

const frutasQueContienenLetraA = frutas.map(elemento =>{
    return elemento.includes("a");
})

console.log(frutasQueContienenLetraA);


frutas.forEach(elemento =>{
    if (elemento.includes("a"))
        console.log(elemento);
    else
        console.log("El elemento ",elemento," no incluye la letra a")
} )



const lenguajes = ["javascript", "python", "java", "c++", "ruby"];

// usando map encontrar la j

const lenguajes2 = lenguajes.map(elemento => {
    if (elemento.includes("j"))
        console.log("El ", elemento, "incluye una j")
    else
        console.log("El ",elemento, "no incluye una j");
});


console.log(" === Ejercicio 3 includes() === ")

var paises = ["Argentin", "Bolivi", "Franci", "Rusi", "Chin", "Dominican", "Alemani"];
// Si elemento contiene una a(may o min) agregarle una "a" al final

const paises2 = paises.map(elemento => {
    if (elemento.includes("a") || elemento.includes("A") )
        return elemento + "a";
        
    else
        console.log("El elemento ", elemento, " No incluye la letra a")
        return false;
})

console.log(paises2);



console.log(" =============== 4. filter =====================");
// El método filter() crea un nuevo array con todos los elementos que cumplan 
//la condición implementada por la función dada.

//var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])

// TODO: filter regresa algo ?  -----------> retorna 



const arrayTema4 = [1,2,3,4,5,6];
const arrayFiltrado = arrayTema4.filter( function(currentValue, index, arr) {
    return currentValue % 2 === 0;
});

// usando arrow function

const arrayFiltrado2 = arrayTema4.filter( element =>{
    return element % 2 === 0;
});


console.log(arrayFiltrado);



// encontrar todos los productos que tienen cierta palabra


const productos = [
    { id: 1, nombre: "Camiseta de algodón", precio: 20 }, // elemento
    { id: 2, nombre: "Pantalones de mezclilla", precio: 30 },
    { id: 3, nombre: "Zapatillas deportivas", precio: 50 },
    { id: 4, nombre: "Gorra de béisbol", precio: 10 },
    { id: 5, nombre: "Chaqueta impermeable", precio: 60 }
];



const palabraClave = "Zapatillas";

const palabraMinuscula = palabraClave.toLowerCase();

console.log(palabraMinuscula);


const elementoBusqueda= productos.filter(elemento =>{

    const palabraIncluida = elemento.nombre.includes(palabraClave.toLowerCase()) 
    console.log("palabraIncluida: "+ palabraIncluida);

    console.log(palabraIncluida ? true  : "No se encuentra el elemento" );

    return  palabraIncluida ? true  : "No se encuentra el elemento"; 
});



 
// const elementoBusqueda= productos.filter(elemento =>{
//     console.log("producto: "+elemento.nombre);

//     return elemento.nombre.toLowerCase().includes(palabraClave.toLowerCase()) 
// });


console.log("la palabra: "+palabraMinuscula, " se encuentra ?: ",elementoBusqueda)



console.log(" =============== 6. filter =====================");

// * El método reduce()aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.


console.log(" =============== 7. filter =====================");
// *El método some() verifica si algún elemento de un array cumple con el test implementado por la función brindada. Si se aprueba, devuelve “true” de lo contrario “false”.



console.log(" =============== 8. sort =====================");



console.log(" =============== 7. Array.from =====================");




console.log(" =============== 7. filter =====================");
















