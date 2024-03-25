

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

// TODO: itera sobre elementos de un array y ejecutar una función de callback para cada elemento.
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


console.log(" =============== 5. filter =====================");
// *El método some() verifica si algún elemento de un array cumple con el test implementado por la función brindada. Si se aprueba, devuelve “true” de lo contrario “false”.


















