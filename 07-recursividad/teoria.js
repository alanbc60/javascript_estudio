// La recursividad es un concepto fundamental en programación que se refiere a la capacidad de una función para llamarse a sí misma. Este enfoque permite resolver problemas complejos dividiéndolos en subproblemas más pequeños y manejables, que a su vez pueden ser resueltos de manera similar. La recursividad es especialmente útil para problemas que pueden ser definidos en términos de casos base y pasos recursivos.

// Conceptos Básicos
    // Caso Base: Es la condición que detiene la recursión. Es el punto en el que la función deja de llamarse a sí misma y comienza a devolver valores.
    // Paso Recursivo: Es la parte de la función que realiza la llamada recursiva, reduciendo el problema a un caso base.
    
    
// Ejemplos de Recursividad



function factorial(numero){
    if(numero === 1){
        return 1;
    } 
    else{
      return numero  * factorial( numero - 1 ); 
    }
}
console.log("El factorial es: ",factorial(5));


// recursividad usa Pila(LIFO (Last In, First Out))
// es finita

// num de entrada                       retorno
    // 1. primer plato en llegar         return 5  * factorial(4);
    // 2. segundo plato en llegar        return 4  * factorial(3);
    // 3. tercer plato en llegar         return 3  * factorial(2);
    // 4. cuarto plato en llegar         return 2  * factorial(1);
    // 5. quinto plato en llegar         return 1 


// VISTA DE LA PILA;

// inst 5   //  devuelve 1  --> se va de la pila
// inst 4   //  2 +  1! = 2 ---> se va de la pila
// inst 3   // 3 * 2! = 6 --> se va de la pila
// inst 2   //  4 * 3 ! = 24 --> se va de la pila
// inst 1  //  5 * 4! = 120  -->  se va de la pila




//  === Ejercicio 2 ===
// Escribe una función recursiva que invierta una cadena.

function invertirCadena(cadena) {
    // Implementa la función aqui
    if (cadena.length === 0) 
            return "";    // return cadena es válido igual            

    else{
        console.log("Cadena de funcion: "+cadena);
        // ultimo caracter de la cadena Hola 
        const ultimoCaracter =  cadena[cadena.length -1] ;

        // Hola -->   Hol - a  --> 
        return ultimoCaracter + invertirCadena(cadena.slice(0, cadena.length - 1 ));
    }
}

// num de entrada                       retorno
    // 1. primer plato en llegar         return "a" + invertirCadena(cadena.slice(0, 3 ));  //  a + loh --> aloh
    // 2. segundo plato en llegar        return "l" + invertirCadena(cadena.slice(0, 2 ));  // l + oh  --> loh 
    // 3. tercer plato en llegar         return "o" + invertirCadena(cadena.slice(0, 1 ));  // o + h   --> oh
    // 4. cuarto plato en llegar         return "h" + invertirCadena(cadena.slice(0, 0 ));  // h 
    // 5. quinto plato en llegar         return "" 




console.log(invertirCadena("Hola")); // Debería imprimir "aloH"
/**
 * 
 * 
 */


// === Ejercicio 3 =====

//Escribe una función recursiva que busque un elemento en una lista.
function buscarElemento(lista, elemento) {
    // Implementa la función aquí
}

console.log(buscarElemento([1, 2, 3, 4, 5], 3)); // Debería imprimir true
console.log(buscarElemento([1, 2, 3, 4, 5], 6)); // Debería imprimir false



// const str = "Hola mundo";
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// ! LOS STRING SON ITERABLES




    






