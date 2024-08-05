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


console.log("========= splice ============="); 
// array.splice(start, deleteCountSiEsQue, itemAgregado1, ..., itemAgregadoN)

//* Definición 
/*  
     El método splice() en JavaScript es un método de los arrays que se utiliza para cambiar el contenido de un 
     array eliminando, reemplazando o agregando elementos.

    ¿Cómo funciona splice()?
        El método splice() toma al menos un argumento: el índice en el que comenzar a cambiar el array. Este 
        índice es conocido como start. Además, puede tomar argumentos adicionales que especifican cuántos 
        elementos eliminar y qué elementos agregar.

        Eliminar elementos: Si se especifica un deleteCount (el segundo argumento), splice() eliminará ese número 
        de elementos a partir del índice start.
        Agregar elementos: Si se proporcionan elementos adicionales después de deleteCount, splice() insertará 
        esos elementos en el array en la posición start, desplazando los elementos existentes hacia la derecha.
        Reemplazar elementos: Si se combinan deleteCount con elementos adicionales, splice() eliminará deleteCount 
        elementos a partir del índice start y luego insertará los elementos adicionales en esa posición.
*/

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


console.log("============= find ==================");

// ! Repaso de que es una función callback
const arregloFind = ["Banana", "Manzana", "Platano", "Cereza", "Sandia"];

// Una función callback es cualquier función que se pasa como argumento a otra función y se ejecuta después de que la función principal ha completado su ejecución.

// Una función de callback es una función que se pasa como argumento a otra función y se invoca después de que se completa alguna operación.

// *Explicación sencilla
// ¿Qué es una función de callback?
// Imagina que tienes una lista de tareas (tasks) que quieres hacer. En lugar de hacerlas todas tú mismo, decides pedirle a tus amigos que las hagan por ti. Cada amigo que te ayuda es como una función de callback. Tú le das la tarea (o el argumento) y ellos la realizan (o ejecutan la función) para ti.

// ¿Cómo funciona find con una función de callback?
// Ahora, imagina que tienes una caja llena de juguetes y quieres encontrar el primer juguete que es un coche. En lugar de buscar tú mismo, decides pedirle a tus amigos que busquen por ti. Cada amigo que busca es como una función de callback. Le das la caja (o el array) y le dices qué buscar (o la condición), y ellos buscan por ti.


const juguetes = ['pelota', 'muñeca', 'coche', 'puzzle'];

// Y quieres encontrar el primer juguete que es un coche. Para hacer esto, puedes usar el método find y le dices a tus amigos (la función de callback) qué buscar:

// Función de callback que verifica si el juguete es un coche
function esUnCoche(juguete) {
 return juguete === 'coche';
}

// Uso de find con la función de callback
const primerCoche = juguetes.find(esUnCoche);

// En este ejemplo, la función esUnCoche es como un amigo que busca el coche por ti. Le das el array juguetes y le dices "busca el primer juguete que sea un coche". Cuando encuentra el coche, te lo devuelve.


// array.find(callbackFn, thisArg)
// arregloFind.find(function(currentValue, index, array){}, thisArg )
// callbackFn(te da un return) es una función que se ejecuta para cada elemento del array hasta que encuentra uno donde la función devuelve un valor verdadero (truthy). Esta función recibe tres argumentos:
// currentValue: El elemento actual que se está procesando en el array.
// index (opcional): El índice del elemento actual que se está procesando en el array.
// arr (opcional): El array sobre el cual se está llamando find().
// thisArg (opcional): Un objeto que se utilizará como this cuando se ejecute callbackFn.



    // Ejercicio 1: Encontrar el primer número par
// Dado el siguiente array de números, encuentra el primer número par.

const numerosArray = [1, 3, 5, 7, 9, 2, 4, 6, 8];

// método 1
const esPar = numerosArray.find( (num) => {
    return num % 2 ==0; // true
});

console.log("El primer numero par es: "+esPar);

// método 2
const foundNumber = numerosArray.find(num => num % 2==0  )
console.log("El primer numero par metodo 2 es: "+foundNumber);

// método 3
// función callback que verifica que el número sea par
function numPar(numero){
    return numero % 2 == 0;
}
// Uso de find con la función callback
const primerNumeroPar = numerosArray.find(numPar); //Aqui se ve el uso de la funcion callback, declaras una funcion primero y con el metodo find llamas a esa función después, te das cuenta que find no hace la "chamba" si no que lo hace la funcion que declaraste antes 
console.log("El primer numero par metodo 3 es: "+primerNumeroPar);



console.log("============= findIndex ==================");
// findIndex(): Devuelve el índice del primer elemento del array que cumple con la condición proporcionada.
const numeroFindIndex = numerosArray.findIndex(numPar);
console.log("El indice del primer elemento par es: "+numeroFindIndex);


console.log("============= every ==================");


// * Definición 
/* El método every toma una función de callback como argumento. Esta función de callback se ejecuta para cada elemento del array. //*Si la función de callback devuelve true para todos los elementos, every devuelve true. Si al menos un elemento no cumple con la condición (es decir, la función de callback devuelve false para ese elemento), every devuelve false. */


// ejercicio --> verifica que todos los números sean mayores que cero
const numeroEvery = [-2,0,-6,-2,56,-8,9,-1];

// Función de callback que verifica si un número es mayor que 0
function mayores(numeroE){
    return numeroE>0;
}
const resultadoEvery = numeroEvery.every(mayores);
console.log("resultado: ",resultadoEvery); //false

console.log("============= Some ==================");

//similar a every pero basta con que un elemento cumpla la función para devolver true
// El método some toma una función de callback como argumento. Esta función de callback se ejecuta para cada elemento del array. Si la función de callback devuelve true para al menos un elemento, some devuelve true. Si ningún elemento cumple con la condición (es decir, la función de callback devuelve false para todos los elementos), some devuelve false.


const resultadoSome = numeroEvery.some(mayores);
console.log("resultado some: ",resultadoSome); //true

// equivalencia en bucles
let exito = false;
for (let index = 0; index < numeroEvery.length; index++) {
    const element = numeroEvery[index];
    if(element > 0){
        exito = true;
    }
}
console.log("resultado some con for : ",exito); //true



// TODO: 3. Métodos para la transformación de arrays
// Estos métodos crean un nuevo array con los resultados de aplicar una función a cada elemento del array original.

// map(): Crea un nuevo array con los resultados de llamar a una función para cada elemento del array.
// filter(): Crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.
// reduce(): Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.
// reduceRight(): Aplica una función a un acumulador y a cada valor de un array (de derecha a izquierda) para reducirlo a un único valor.


console.log("============= Map ==================");
// * Definición de map
// El método map toma una función de callback como argumento. Esta función de callback se ejecuta para cada elemento del array original. El resultado de aplicar la función de callback a cada elemento se convierte en el nuevo elemento correspondiente en el array resultante.


// En pocas palabras, el método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

// ? El método Array.map() te permite iterar sobre un arreglo y modificar sus elementos utilizando una función callback. La función callback se ejecutará entonces en cada uno de los elementos del arreglo.

// TODO: ¿map regresa algo ?  -----------> retorna un item/element modificado del arreglo 



// sintaxis de map usando 
//arr.map(function(element, index, array){  }, this)  ----> return array;

//Map, ventaja mantiene el arreglo original y crea copia de estes


const array2 = [1,2,3,4,5,6];

// Ejercicio 1
const nuevoArray2 = array2.map(function(element, index, array){
    return element  + element;
})
console.log(nuevoArray2);

console.log()
const nuevoArray3 = array2.map(function(element){
    return element  + element;
})
console.log(nuevoArray3);

//Ejercicio 1 usando arrow function
console.log("usando funcion flecha");

const nuevoArray4 = array2.map((element, index, array) => {
 return element + element; 
});
console.log(nuevoArray4);

const nuevoArray5 = array2.map(element => {
    return element + element; 
});
console.log(nuevoArray5);



// Ejercicio 2 -- > Supongamos que tienes un array de números y quieres crear un nuevo array donde cada número se multiplica por 2.

const arraymult = array2.map(element => {
    return element * 2;
});
console.log("Los elementos del arreglo: ", array2, " multiplicado por 2 es el siguiente array: ", arraymult);


// Ejercicio 3 -->  Convertir un array de palabras a mayúsculasTienes un array de palabras y quieres crear un nuevo array donde cada palabra es la versión en mayúsculas de la original.
const palabrasMinus = ["hola", "mundo", "perritos", "gatitos"];
const palabrasMayus = palabrasMinus.map(element => {
    return element.toUpperCase();
})

console.log("El array", palabrasMinus, "modificado, reuslta ser", palabrasMayus);

// Ejercicio 4 --> Dado el siguiente array de temperaturas en grados Celsius, crea un nuevo array con las temperaturas convertidas a grados Fahrenheit. La fórmula para convertir de Celsius a Fahrenheit es F = C * 9/5 + 32

const temperaturasCelsius = [0, 10, 20, 30, 40];

function convertiAFahrenheit(celsius){
    return celsius * 9/5 + 32
}

const resultado_ArregloCelsius_A_Fahrenheit = temperaturasCelsius.map(convertiAFahrenheit);
console.log("resultado en F: "+resultado_ArregloCelsius_A_Fahrenheit);



console.log("============= Filter ==================");

const arrayReduce = [4,5,2,1,0,10];


// * Definición

// El método filter en JavaScript es un método de los arrays que se utiliza para crear un nuevo array con todos los elementos del array original que cumplen con una condición especificada por una función de callback.

// ¿Cómo funciona filter?
// El método filter toma una función de callback como argumento. Esta función de callback se ejecuta para cada elemento del array original. Si la función de callback devuelve true para un elemento, ese elemento se incluye en el nuevo array. Si la función de callback devuelve false para un elemento, ese elemento no se incluye en el nuevo array.

// Sintaxis
//var newArray = arr.filter(callback(currentValue, index, array),[thisArg])

// TODO: ¿filter regresa algo ?  -----------> retorna un nuevo array


//Ejercicio 1 
const arrayTema4 = [1,2,3,4,5,6];
const arrayFiltrado = arrayTema4.filter( function(currentValue, index, arr) {
    return currentValue % 2 === 0;
});

console.log(arrayFiltrado); // 2, 4, 6

// usando arrow function

const arrayFiltrado2 = arrayTema4.filter( element =>{
    return element % 2 === 0;
});


// encontrar todos los productos que tienen cierta palabra


const productos = [
    { id: 1, nombre: "Camiseta de algodón", precio: 20 },
    { id: 2, nombre: "Pantalones de mezclilla", precio: 30 },
    { id: 3, nombre: "Zapatillas deportivas", precio: 50 },
    { id: 4, nombre: "Gorra de béisbol", precio: 10 },
    { id: 5, nombre: "Chaqueta impermeable", precio: 60 }
];

const palabraClave = "Zapatillas";
const palabraMinuscula = palabraClave.toLowerCase(); //zapatillas
console.log(palabraMinuscula);

const elementoBusqueda = productos.filter(elemento => {

    const palabraIncluida = elemento.nombre.toLowerCase().includes(palabraMinuscula);
    console.log("palabraIncluida: " + palabraIncluida);
    return palabraIncluida;
});

console.log("la palabra: " + palabraMinuscula, " se encuentra : ", elementoBusqueda);

console.log(productos);


// Verificar si el array resultante está vacío
if (elementoBusqueda.length === 0) {
    console.log("No se encontraron elementos que cumplan con la condición.");
} else {
    console.log("Se encontraron elementos que cumplen con la condición.");
}


console.log("============= Reduce ==================");

// * Definición 
// El método reduce() en JavaScript es un método de los arrays que se utiliza para reducir el array a un único valor. 
//Este método es muy versátil y se puede utilizar para realizar una amplia variedad de operaciones, como sumar todos los elementos de un array, encontrar el valor máximo o mínimo, o incluso transformar un array en un objeto.

// ¿Cómo funciona reduce()?
// El método reduce() toma una función de callback como argumento. Esta función de callback se ejecuta para cada elemento del array, y tiene varios parámetros:


//  reduce(acumulador, elementoActual)
//  reduce( (acumulador, elementoActual, indiceActual, array) => { }, valorInicial);
// valor inicial 0

    // Acumulador: Es el valor acumulado que se devuelve en la última invocación de la función de callback, o el valor inicial si se proporciona.
    // Elemento actual: Es el elemento actual que se está procesando en el array.
    //indiceActual (opcional): El índice del elemento actual que se está procesando en el array.
    //array (opcional): El array sobre el que se está llamando a reduce().
    //valorInicial (opcional): Es el valor inicial del acumulador. Si no se proporciona, el primer elemento del array se usa como valor inicial y se omite el primer elemento del array en la iteración.


// La función de callback debe devolver un valor que se utilizará como acumulador en la siguiente invocación. El valor final del acumulador se devuelve como resultado de reduce().

const numerosReduce = [1,2,3,4,5,6];
console.log(numerosReduce[0]);

const resultadoReduce = numerosReduce.reduce( (acumulador,elementoActual, indiceActual, array) =>{
    console.log(`Acumulador: ${acumulador}, Valor actual: ${elementoActual}, Índice actual: ${indiceActual}, Array: ${array}`);
    return acumulador + elementoActual;
},0) //21

const sumaReduce = numerosReduce.reduce((acumulador, elementoActual) => acumulador + elementoActual, 0 );


console.log("Resultado reduce: ",resultadoReduce);
console.log("sumaReduce: "+sumaReduce);



/* TODO: 4. Métodos para la combinación y separación de arrays */
// Estos métodos permiten combinar o separar arrays.

// concat(): Une dos o más arrays y devuelve un nuevo array.
// join(): Une todos los elementos de un array en una cadena y devuelve esta cadena.
// slice(): Devuelve una copia superficial de una porción del array en un nuevo array.
// split(): Divide una cadena en un array de subcadenas.

console.log("============= Concat ==================");
 
//concat(value1, value2, /* …, */ valueN)

 //Retorna un nuevo array, resultado de la fusion de 2 o más arrays.
 //No altera ninguno de los arrays utilizados

const arrayConcat1 = ['a', 'b', 'c'];
const arrayConcat2 = ['d', 'e', 'f'];
const arrayConcat3 = ['g', 'h', 'i']
const arrayUnido = arrayConcat1.concat(arrayConcat2);
console.log(arrayUnido);


// puede unir array de numeros con array de string
const arrayNumerosConcat = [67,34,56,89,11,10];
const arrayStringConcat = ["Hola Pancho", "Equisde", "Lupillo"];

console.log(arrayNumerosConcat.concat(arrayStringConcat));


// puede combinar 2 o más array de la siguiente manera:
const arrayUnido3 = arrayConcat1.concat(arrayConcat2, arrayConcat3);
console.log(arrayUnido3);

// Equivalencia usando bucles
const arrayResultanteConcat = [];

for (const element of  arrayConcat1) {
    arrayResultanteConcat.push(element);
}

arrayConcat2.forEach( elemento => {
    arrayResultanteConcat.push(elemento);
} )

arrayConcat3.forEach(elemento =>{
    arrayResultanteConcat.push(elemento);
})


console.log("Array resultante concat: ", arrayResultanteConcat);



console.log("============= Join ==================");
//join(separator)
//separator: elemento que te va a separar los elementos del arreglo, puede ser una , o un " ", cualquier símbolo
//Crea y te retorna una nueva string usando una concatenación de los elementos del arreglo.

const elementosJoin = ['agua', 'fuego', 'tierra', 'aire'];
console.log(elementosJoin.join()); // "agua,fuego,tierra,aire"
console.log(elementosJoin.join(",")); // "agua,fuego,tierra,aire"
console.log(elementosJoin.join("/")); // "agua/fuego/tierra/aire"



console.log("============= Slice ==================");



/*El método slice() se utiliza para extraer una sección de un array y devolverla como un nuevo array, sin modificar el array original. Este método es muy útil para trabajar con subconjuntos de datos sin alterar el array original.


    sintaxis:
    array.slice(inicio, fin);
    inicio: el indice desde donde nos vamos a posicionar
    fin: el indice donde termina, NO cuenta ese elemento
    
    Donde:

        array:  es el array del cual se extraerá la sección.
        inicio: es el índice en el array donde comenzará la extracción. Si inicio es negativo, se cuenta desde el final del array.
        fin:  (opcional) es el índice en el array donde terminará la extracción. Si fin se omite, slice() extraerá hasta el final del array. Si fin es negativo, se cuenta desde el final del array.

        //! ADVERTENCIA
        1. No modifica el array original: slice() no altera el array original. En su lugar, devuelve un nuevo array con los elementos extraídos.
        2. Índices negativos: Los índices negativos en slice() cuentan desde el final del array. Por ejemplo, slice(-2) extraerá los últimos dos elementos del array.

*/

const arrayS1= ["zanahoria", "apio", "tomate", "cebolla", "lechuga"];
const arrayS2 = arrayS1.slice(1,4);
console.log(arrayS2); // ["apio", "tomate", "cebolla"]

console.log("============= Split ==================");

/* 

    El método split() en JavaScript se utiliza para dividir una cadena de texto (string) en un array de subcadenas, basándose en un delimitador especificado. Este método es muy útil para convertir cadenas de texto en arrays, lo que facilita su manipulación y procesamiento.


    cadena.split( delimitador, limite);
    Donde:

        cadena es la cadena de texto que se va a dividir.
        delimitador (opcional) es una cadena de texto o una expresión regular que especifica el delimitador que se utilizará para dividir la cadena. Si se omite, la cadena se dividirá en caracteres individuales.
        limite (opcional) es un número entero que especifica el número máximo de subcadenas en el array resultante. Si se omite, se dividirá la cadena en todas las subcadenas posibles.

*/


const frase = "Baila como Juana la cubana";

// El problema en el código proporcionado es que estás intentando dividir la cadena frase utilizando una coma (",") como delimitador, pero la cadena no contiene comas. Por lo tanto, split(",") no dividirá la cadena en ningún lugar y devolverá un array con un solo elemento, que es la cadena completa.

console.log(frase.split(","))

// Corrección
// Si tu intención es dividir la cadena frase en palabras, deberías utilizar un espacio (" ") como delimitador, ya que las palabras en la cadena están separadas por espacios.


console.log(frase.split(" "))





console.log(" =========== Métodos para la iteración de arrays  ============")

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

// forEach usando funciones flecha
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











