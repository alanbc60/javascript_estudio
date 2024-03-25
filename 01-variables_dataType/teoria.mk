Datos primitivos


1. String (Cadena): Secuencia de caracteres, como "Hola mundo".
2. **Number (Número)**: Números enteros o de punto flotante, como 42 o 3.14.
3. **Boolean (Booleano)**: Representa un valor verdadero (true) o falso (false).
4. **BigInt**: se utiliza para representar números enteros mayores que el límite máximo representado por el tipo Number.
5. **Undefined**: Representa un valor indefinido, es decir, se asigna automáticamente a variables que aún no se han inicializado con un valor.
6. **Symbol**: Introducido en ECMAScript 6, representa un identificador único e inmutable.
7.  **Null:** `typeof instance === "object"`.  especial que tiene un uso adicional para su valor: si el objeto no se hereda, se muestra `null`;



No primitivos

tienen metodos
8. **Object**.: Un objeto es una colección de pares clave-valor.
9. **Function**.: Una función es una función que puede ser invocada para realizar una tarea.
10. **Array**.: Un arreglo es una colección ordenada de valores.




En JavaScript, "NaN" significa "Not a Number" (No es un número). Se produce cuando se realiza una operación matemática inválida en JavaScript que resulta en un valor que no se puede representar como un número. Algunas situaciones comunes en las que se puede producir NaN incluyen:

Dividir cero por cero.
Dividir un número por una cadena no numérica.
Realizar operaciones matemáticas con valores que no son números, como sumar un número y una cadena de texto que no se puede convertir a un número válido.
Realizar operaciones aritméticas con valores que no son números, como sumar un número con "undefined" o "null".


se puede convertir de string a number usando Number(’20’)