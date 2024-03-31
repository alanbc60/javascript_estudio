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

function invertirCadena2(cadena, cadenaInvertida){
    for (let index = cadena.length -1; index >= 0; index--) {
        const element = cadena[index]; 
        cadenaInvertida = cadenaInvertida + cadena[index]
        console.log(element); //a l o h
        console.log(cadenaInvertida);
   }
}

invertirCadena2("Hola", "");

// pruebas de escritorio de invertirCadena2
// Entrada      // operacion
//   1°                index = 4 - 1 = 3 cadena[3]=a cadenaInvertida = "" + a = "a"
//   2°                index = 3 - 1 = 2 cadena [2] = l cadenaInvertida = "a" + l = al
//   3°                index = 2 - 1 = 1 cadena[1]=o cadenaInvertida = "al" + o = alo
//   4°                index = 1 - 1 = 0 cadena [0] = h cadenaInvertida = "alo" + h = aloh


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

//console.log(buscarElemento([1, 2, 3, 4, 5], 3));

function buscarElementoBucle(lista, elemento) {
    for (let index = 0; index < lista.length; index++) {
        const element = lista.slice(index); 
        if(element[0] === elemento){
            return true;
        }
        
    }
    // Implementa la función aquí
}



console.log("¿elemento encontrado ?: ",buscarElemento([1, 2, 3, 4, 5], 3));

function buscarElemento(lista, elemento) {
    
    // caso base
    if(lista.length === 0)
        return false
    
    // Cuando el primer elemento es el elemento a buscar
    if (lista[0] === elemento )
        return true;

    else{
        console.log("lista: "+lista.slice(1));
        console.log("Elemento: ",elemento);
       return buscarElemento( lista.slice(1), elemento);
    }
}

// num de entrada                       retorno
// 1. primer plato en llegar               return buscarElemento( lista.slice(1), 3); --> Encuentra el elemento
// 2. segundo plato en llegar              return buscarElemento( lista.slice(1), 3);   --> [3,4,5] --> No
// 3. tercer plato en llegar               return buscarElemento( lista.slice(1), 3); --> [2, 3, 4, 5]  // recibes listacompleta ya que el quinto plato no afecto a la lista 
// 4. cuarto plato en llegar               return false


console.log(buscarElemento([1, 2, 3, 4, 5], 3)); // Debería imprimir true
//console.log(buscarElemento([1, 2, 3, 4, 5], 6)); // Debería imprimir false


// const str = "Hola mundo";
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// ! LOS STRING SON ITERABLES




// ===== Ejercicio 4 ====

// calcular la cantidad de caracteres que se repiten en una cadena de texto. Para este ejemplo, en la palabra "parangaricutirimicuaro" la letra "i" se repite 4 veces.


function totalLetrasPalabra(palabra,letra) {
    let contLetra = 0;
    for (let index = 0; index < palabra.length; index++) {
        const element = palabra[index];

        console.log("letra actual: ",element);
        console.log("tipo de dato de letra actual: ",typeof element);
        console.log("letra arg: "+ typeof letra)

        if(element == letra){
            console.log("Entro al if");
            contLetra++;
        }
            
    }
    return contLetra;
    
}

console.log("El total de letras es: ",totalLetrasPalabra("parangaricutirimicuaro", "i"));


// ejercicio en recursividad
 function totalLetrasPalabraRecursividad(palabra, letra){
    if(palabra.length <= 1){
        return palabra === letra ? 1 : 0;
    }

    if(palabra[0] === letra){
        return 1 + totalLetrasPalabraRecursividad(palabra.slice(1), letra); 
    }

    else{
        const ultimoCaracter = [palabra.length - 1];
        console.log("ultimoo el elemento: ",palabra[ultimoCaracter]);
        return totalLetrasPalabraRecursividad(palabra.slice(1), letra); 
    }
  
 }
 
// num de entrada                               retorno
    // 1. primer plato en llegar   "vivir"      return totalLetrasPalabraRecursividad(palabra.slice(1), letra);  0 + acum = 0 + 2
    // 2. segundo plato en llegar  "ivir"       return 1 + totalLetrasPalabraRecursividad(palabra.slice(1), letra); 1 + acum --> 1 + 1 = 2
    // 3. tercer plato en llegar   "vir"        return totalLetrasPalabraRecursividad(palabra.slice(1), letra); 0 + 
    // 4. cuarto plato en llegar    "ir"        return 1 +totalLetrasPalabraRecursividad(palabra.slice(1), letra);  1 + 
    // 5. quinto plato en llegar     "r"        return palabra === letra ? 1 : 0;   -->  0




 console.log("El total de letras en rec es: ",totalLetrasPalabraRecursividad("vivir", "i"));






