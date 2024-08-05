1. **push() y pop():**
    - **`push(elemento)`**: Agrega un elemento al final del array.
    - **`pop()`**: Elimina el último elemento del array y lo devuelve.
    
    ```jsx
    javascriptCopy code
    let numeros = [1, 2, 3];
    numeros.push(4); // numeros ahora es [1, 2, 3, 4]
    let ultimoElemento = numeros.pop(); // últimoElemento es 4, numeros ahora es [1, 2, 3]
    
    ```
    
2. **unshift() y shift():**
    - **`unshift(elemento)`**: Agrega un elemento al principio del array.
    - **`shift()`**: Elimina el primer elemento del array y lo devuelve.
    
    ```jsx
    javascriptCopy code
    let numeros = [2, 3, 4];
    numeros.unshift(1); // numeros ahora es [1, 2, 3, 4]
    let primerElemento = numeros.shift(); // primerElemento es 1, numeros ahora es [2, 3, 4]
    
    ```
    
3. **splice():**
    - **`splice(inicio, cantidad, elemento1, elemento2, ...)`**: Permite agregar, eliminar o reemplazar elementos en un array en una posición específica.
    
    ```jsx
    javascriptCopy code
    let numeros = [1, 2, 3, 4, 5];
    numeros.splice(2, 0, 6); // Inserta el número 6 en la posición 2, numeros ahora es [1, 2, 6, 3, 4, 5]
    numeros.splice(3, 2); // Elimina 2 elementos a partir de la posición 3, numeros ahora es [1, 2, 6, 5]
    ```
    
4. **concat():**
    - **`concat(array1, array2, ...)`**: Combina dos o más arrays creando un nuevo array.
    
    ```jsx
    javascriptCopy code
    let numeros1 = [1, 2];
    let numeros2 = [3, 4];
    let numerosConcatenados = numeros1.concat(numeros2); // [1, 2, 3, 4]
    
    Ejercicio 2
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];
    let newArray = array1.concat(array2);
    console.log(newArray); // Resultado: [1, 2, 3, 4, 5, 6]
    
    ```
    
5. **slice():**
    - **`slice(inicio, fin)`**: Devuelve una copia superficial de una porción del array original.
    
    ```jsx
    javascriptCopy code
    let numeros = [1, 2, 3, 4, 5];
    let subArray = numeros.slice(1, 3); // Devuelve [2, 3]
    
    Ejemplo 2
    let array = [1, 2, 3, 4, 5];
    let slicedArray = array.slice(1, 4); // Extrae elementos desde el índice 1 hasta el 3 (no incluido)
    console.log(slicedArray); // Resultado: [2, 3, 4]
    
    ```
    
6. **forEach():**
    - **`forEach(callback)`**: Ejecuta una función por cada elemento del array.
    
    ```jsx
    javascriptCopy code
    let numeros = [1, 2, 3];
    numeros.forEach(function(numero) {
        console.log(numero);
    });
    
    ```
    
7. **fill()**
    
    El método **`fill()`** se utiliza para llenar todos los elementos de un array con un valor específico. Puedes especificar el valor con el que quieres llenar el array y opcionalmente el índice de inicio y el índice de finalización.
    
    ```jsx
    let array = new Array(5);
    array.fill(0); // Llena el array con el valor 0
    console.log(array); // Resultado: [0, 0, 0, 0, 0]
    ```
    
8. **reverse ()**
    
    El método **`reverse()`** se utiliza para invertir el orden de los elementos en un array. Modifica el array original invirtiendo los elementos en su lugar.
    
    ```js
    let array = [1, 2, 3, 4, 5];
    array.reverse(); // Invierte el orden de los elementos
    console.log(array); // Resultado: [5, 4, 3, 2, 1]
    ```
    
9. **indexOf() y lastIndexOf()**
        
        Los métodos **`indexOf()`** y **`lastIndexOf()`** se utilizan para encontrar el índice de la primera aparición y la última aparición de un elemento en un array, respectivamente. Devuelven el índice del elemento si se encuentra, o -1 si el elemento no está presente en el array.
        
        ```jsx
        let array = [1, 2, 3, 4, 5, 3];
        let firstIndex = array.indexOf(3); // Encuentra el índice de la primera aparición de 3
        let lastIndex = array.lastIndexOf(3); // Encuentra el índice de la última aparición de 3
        console.log(firstIndex); // Resultado: 2
        console.log(lastIndex); // Resultado: 5
        ```
        
10. **Some() y every()**
        
        Los métodos **`some()`** y **`every()`** se utilizan para verificar si al menos un elemento cumple con una condición (**`some()`**) o si todos los elementos cumplen con una condición (**`every()`**) en un array.
        
        ```jsx
        let array = [1, 2, 3, 4, 5];
        let someGreaterThanTwo = array.some(num => num > 2); // Verifica si al menos un número es mayor que 2
        let everyGreaterThanZero = array.every(num => num > 0); // Verifica si todos los números son mayores que 0
        console.log(someGreaterThanTwo); // Resultado: true
        console.log(everyGreaterThanZero); // Resultado: true
        ```
        
11. **Filter()**
        
        El método **`filter()`** se utiliza para crear un nuevo array con todos los elementos que pasan una prueba especificada por una función de callback. Devuelve un nuevo array con los elementos que cumplen con la condición.
        
        ```jsx
        let array = [1, 2, 3, 4, 5];
        let filteredArray = array.filter(num => num % 2 === 0); // Filtra los números pares
        console.log(filteredArray); // Resultado: [2, 4]
        ```
        
12. **Join()**
        
        El método **`join()`** se utiliza para unir todos los elementos de un array en ***una cadena.*** Puedes especificar un separador opcional para separar los elementos en la cadena resultante.
        
        ```jsx
        let array = ["Manzana", "Banana", "Cereza"];
        let joinedString = array.join(", "); // Une los elementos con una coma y un espacio
        console.log(joinedString); // Resultado: "Manzana, Banana, Cereza
        ```
        
13. **map()**
        
        El método **`map()`** se utiliza para crear un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array original. La función de callback se ejecuta para cada elemento del array y el resultado se almacena en el nuevo array.
        
        ```jsx
        function toSquare(int) { return int ** 2 };
        function toCube(int) { return int ** 3 };
        
        var ints = [0, 1, 2, 3, 4, 5];
        
        var squares = ints.map(toSquare);
        console.log(squares);
        
        var cubes = ints.map(toCube);
        console.log(cubes);
        
        // let's see if ints has been modified
        console.log(ints);
        ```
        
14. **Sort()**
        
        **`sort()`** es un método de los arrays en JavaScript. Este método se utiliza para ordenar los elementos de un array alfabéticamente o numéricamente, según el valor de los elementos.
        
        let numeros = [3, 1, 4, 1, 5, 9, 2, 6];
        numeros.sort();
        console.log(numeros); // Resultado: [1, 1, 2, 3, 4, 5, 6, 9]