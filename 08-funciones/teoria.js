
// ¿ Que es una función ? 
// R: Bloques de código reutilizables que realizan una tarea en espcifico ya que permiten dividir el código en partes más pequeñas y manejables, facilitando su mantenimiento y comprensión. 

// ¿ Cómo se define una función ?
console.log(" ============= Definición de funciones =====================")

/* 1.  función declarada
    Sintaxis:
        La declaración de función se realiza utilizando la palabra clave function, seguida del nombre de la función, los paréntesis que contienen los parámetros (si los hay) y las llaves que contienen el cuerpo de la función.
    
    function nombreDeLaFuncion(parametros){
        declaraciones que definen lo que hara la función
    }
*/
function saludo(mensaje){
    console.log("Hola......... "+mensaje);
}


/* 2.  función expresada
    Sintaxis:
        Una expresión de función es una función asignada a una variable. Esto permite que la función se pase como argumento a otras funciones, se almacene en estructuras de datos, o se devuelva como resultado de otra función.
*/

const empleado = function saludar(nombre){
    console.log("Hola......... "+nombre);
}

//

empleado("Alan");


/* 3.  función anonima
    Sintaxis:
        Es una función similar a la función expresada, pero no tiene ningún nombre de función asociado
*/

const empleadoAnonima = function (nombre){
    console.log("Hola......... "+nombre);
}

//

empleado("Alan");


/* 4. arrow función
    Sintaxis:
        las arrow functions son una sintaxis más corta para escribir funciones anónimas. Son especialmente útiles para funciones que se pasan como argumentos a otras funciones, como callbacks. Son una variante de la expresión de función.

     
    Cassos para declarar una función flecha:
    
    () => expresión   // caso sin parametros/argumentos
    param => expresión // caso con un argumento

    (param1, paramN) => expresión // 2 o más argumentod

    Cuando se necesita mas de una declaración en el cuerpo de la función utilizamos { }
    ! Cuando utilizamos llaves necesitamos poner un return forzosamente
    () => {
        declaraciones
    }


    parametro => {
        declaraciones
    }

    (param1, param2, ..., paramN) => {
       declaraciones
    }

*/
 

// ================== Ejercicio 1 ====================

// Ejercicio 1: Filtrar Números Pares
// Escribe una función que tome un array de números como argumento y devuelva un nuevo array que contenga solo los números pares.

function filtrarPares(numeros) {
    const numerosFiltrados = numeros.filter(numero => numero % 2 === 0);
    return numerosFiltrados;
}

const numeros = [1, 2, 3, 4, 5, 6];
console.log(filtrarPares(numeros));;// Debería imprimir [2, 4, 6]


// ================== Ejercicio 2 ====================


// Ejercicio 2: Calcular la Suma de un Array
// Escribe una función que tome un array de números como argumento y devuelva la suma de todos los números en el array. 

const sumaReduce  = function sumaArray(numeros) {
   return numeros.reduce((acumulador, elementoActual) => acumulador + elementoActual, 0);
}

const numerosEj2 = [1, 2, 3, 4, 5];
console.log(sumaReduce(numerosEj2)); // Debería imprimir 15

// ================== Ejercicio 3 ====================


// Ejercicio 3: Mapear Números al Cuadrado
// Escribe una función que tome un array de números como argumento y devuelva un nuevo array donde cada número se ha elevado al cuadrado.

function cuadrados(numeros) {
 const numerosCuadrado = numeros.map(numero => numero * numero);
 return numerosCuadrado;
}

const numerosEj3 = [1, 2, 3, 4, 5];
console.log(cuadrados(numerosEj3)); // Debería imprimir [1, 4, 9, 16, 25]


// ================== Ejercicio 4 ====================
// Ejercicio 4: Encontrar el Elemento Máximo en un Array
// Escribe una función que tome un array de números como argumento y devuelva el número más grande en el array.

function maximo(numeros) {
    return numeros.reduce( (acumulador, elementoActual) => Math.max(acumulador, elementoActual) , 0);
}

//  0, 1  return  1 (nuevo acumulador)  -->  1, 2 return 2  --> 2, 3 return 3   ---> 3, 4 return 4
// 4, 5 --> return (5)

// otra forma de resolverlo
const numerosEj4 = [1, 2, 3, 4, 5];
const maximoNumeros = Math.max(...numerosEj4);
console.log("Maximo: "+maximoNumeros);
console.log(maximo(numerosEj4)); // Debería imprimir 5


// ================== Ejercicio 5 ====================
// Ejercicio 5: Contar Elementos Únicos en un Array
// Escribe una función que tome un array de números como argumento y devuelva un objeto donde las claves son los números únicos del array y los valores son la cantidad de veces que aparece cada número.
function contarElementos(array) {


    let conteoElementos = [];
    // debemos trannsformar el array a un array de objetos
    // const arrayObj  = numeros.map( elemento => ({elemento, conteo: 1}));

    // obtener cuantas veces se repite
    //const elementoEncontrado = arrayObj.includes()

    array.forEach(elemento => {
        const elementoEncontrado = conteoElementos.find( obj => obj.elemento === elemento)

        if(elementoEncontrado)
            elementoEncontrado.conteo+=1;

        else
            conteoElementos.push({elemento, conteo: 1})
        
    });

    return conteoElementos;
}

const numerosEj5 = [1, 2, 3, 4, 5, 2, 3];
console.log(contarElementos(numerosEj5)); // Debería imprimir {1: 1, 2: 2, 3: 2, 4: 1, 5: 1}

// ================== Ejercicio 6 ====================
// Ejercicio 6: Transformar un Array de Strings en Mayúsculas
// Escribe una función que tome un array de strings como argumento y devuelva un nuevo array donde cada string se ha convertido a mayúsculas. 


function mayusculas(strings) {
  const arrayMayusculas = strings.map(elemento => elemento.toUpperCase());
  return arrayMayusculas;
}

const strings = ["hola", "mundo", "javascript"];
console.log(mayusculas(strings)); // Debería imprimir ["HOLA", "MUNDO", "JAVASCRIPT"]


