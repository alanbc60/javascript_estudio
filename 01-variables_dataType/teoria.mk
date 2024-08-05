Datos primitivos


1. String (Cadena): Secuencia de caracteres, como "Hola mundo".
2. **Number (Número)**: Números enteros o de punto flotante, como 42 o 3.14.
3. **Boolean (Booleano)**: Representa un valor verdadero (true) o falso (false).
4. **BigInt**: se utiliza para representar números enteros mayores que el límite máximo representado 
				por el tipo Number.
5. **Undefined**: Representa un valor indefinido, es decir, se asigna automáticamente a variables que aún 
			no se han inicializado con un valor.
6. **Symbol**: Introducido en ECMAScript 6, representa un identificador único e inmutable.
7.  **Null:** `typeof instance === "object"`.  especial que tiene un uso adicional para su valor: si el objeto 
			no se hereda, se muestra `null`;



No primitivos

tienen metodos
8. **Object**.: Un objeto es una colección de pares clave-valor.
9. **Function**.: Una función es una función que puede ser invocada para realizar una tarea.
10. **Array**.: Un arreglo es una colección ordenada de valores.




En JavaScript, "NaN" significa "Not a Number" (No es un número). Se produce cuando se realiza una operación 
matemática inválida en JavaScript que resulta en un valor que no se puede representar como un número. Algunas 
situaciones comunes en las que se puede producir NaN incluyen:

Dividir cero por cero.
Dividir un número por una cadena no numérica.
Realizar operaciones matemáticas con valores que no son números, como sumar un número y una cadena de texto que no se puede convertir a un número válido.
Realizar operaciones aritméticas con valores que no son números, como sumar un número con "undefined" o "null".


se puede convertir de string a number usando Number(’20’)



// =================== Variables y tipos de datos ====================
/*
Existen 3 tipos de variables:
 - var, let, const

* Variables globales
    Son las que se declaran en el archivo principal del proyecto
    Ejemplo:

    var globalVar = "Soy global";
    let globalLet = "También soy global";
    const globalConst = "Yo también soy global";

    function testGlobal() {
        console.log(globalVar);  // Accede a la variable global
        console.log(globalLet);  // Accede a la variable global
        console.log(globalConst); // Accede a la variable global
    }
    
* Variables locales
    Definicion: Las variables locales solo son accesibles dentro de la función o bloque donde se declaran.
    Ejemplo:

        function testLocal() {
            var localVar = "Soy local";
            let localLet = "También soy local";
            const localConst = "Yo también soy local";
            console.log(localVar);  // Funciona
            console.log(localLet);  // Funciona
            console.log(localConst); // Funciona
        }

        console.log(localVar);  // Error: localVar no está definido
        console.log(localLet);  // Error: localLet no está definido
        console.log(localConst); // Error: localConst no está definido


* Variables de instancia
    Las variables de instancia pertenecen a instancias de objetos, generalmente creados a partir de clases 
    o funciones constructoras.
    
    Cómo se declaran:
        Se declaran dentro de una clase (o función constructora) usando this.

    NOTA: Las variables de instancia son específicas de cada instancia del objeto y no se comparten entre instancias.

    Ejemplo::
        class MyClass {
            constructor() {
                this.instanceVar = "Soy una variable de instancia";
            }

            showInstanceVar() {
                console.log(this.instanceVar);  // Accede a la variable de instancia
            }
        }

        let myInstance = new MyClass();
        myInstance.showInstanceVar();  // Funciona, muestra: "Soy una variable de instancia"
        console.log(myInstance.instanceVar);  // Funciona, muestra: "Soy una variable de instancia"
        console.log(MyClass.instanceVar);  // Error: MyClass no tiene instanceVar como propiedad estática



Existen 2 tipos de datos:

- Primitivos
    * String, number, boolean, null, undefined, symbol, bigint
- No Primitivos
    * Object, Function, Array



*/

