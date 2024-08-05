// ============= Concatenación ==============
console.log("============= Concatenación ==================");

    // 1. Usando el operador +
    // Sintaxis: concat(str1, str2, ...)

    let greeting = "Hello";
    let name = "Alice";
    console.log(greeting.concat(", ", name));  // Output: "Hello, Alice"

    //+ (Operador de concatenación)
    let greeting2 = "Hello";
    let name2 = "Alice";
    console.log(greeting + ", " + name);  // Output: "Hello, Alice"

// =============== Búsqueda ==================

console.log("============= Búsqueda ==================");

    let str = "Hello, world!";
    console.log("Cadena de texto: ", str);
    console.log("=== indexOf ===");

    //1. indexOf 
    //Devuelve el primer índice en el que se encuentra un elemento especificado en el array, o -1 si el elemento no se encuentra.
    //Sinstaxis: indexOf(searchValue, fromIndex)    
    console.log(str.indexOf("world"));  // Output: 7


    //2. lastIndexOf 
    //Devuelve el último índice en el que se encuentra un elemento especificado en el array, o -1 si el elemento no se encuentra.
    console.log("=== lastIndexOf ===");
    // sintaxis:lastIndexOf(searchValue, fromIndex)
    console.log(str.lastIndexOf("o"));  // Output: 8

    // 3. includes
    //Devuelve true si un substring de la cadena de texto especificada existe en la cadena de texto principal.
    console.log("=== includes ===");
    // Sintaxis: includes(searchString, position)
    console.log(str.includes("world"));  // Output: true

    //3. startsWith 
    //Devuelve true si la cadena de texto empieza con la cadena de texto especificada.
    console.log("=== startsWith ===");
    //Sintaxis: startsWith(searchString, position)
    console.log(str.startsWith("Hello"));  // Output: true

    //4. endsWith 
    //Devuelve true si la cadena de texto termina con un substring de la cadena de texto especificada.
    console.log("=== endsWith ===");
    //Sintaxis: endsWith(searchString, position)
    console.log(str.startsWith("Hello"));  // Output: true
        
    //5. search(regexp)
    //Devuelve el índice del primer elemento que coincide con la expresión regular proporcionada.
    console.log("=== search ===");
    console.log(str.search(/world/));  // Output: 7
    
    //6. match(regexp) -
    //Devuelve un arreglo con todos los elementos que coinciden con la expresión regular proporcionada.
    // sintaxis: match(regexp)
    let regex = /world/;
    console.log(str.match(regex));  // Output: ["world"]

// ============== Substrings ================
console.log("============= Substrings ==================");
    let str2 = "Hello, world!";

    //1. slice --> Devuelve una nueva cadena de texto que comienza en el elemento de inicio y termina en el elemento final (no incluido).
    console.log("=== slice ===");
    //slice(beginIndex, endIndex)
    console.log(str2.slice(0, 5));  // Output: "Hello"

    //2. substring(indexStart, indexEnd) --> Devuelve una nueva cadena de texto que comienza en el elemento de inicio y termina en el elemento final (no incluido).
    console.log("=== substring ===");
    // Sintaxis: substring(indexStart, indexEnd)
    console.log(str2.substring(0, 5));  // Output: "Hello"    

    //3. substr --> Devuelve una nueva cadena de texto que comienza en el elemento de inicio y termina en el elemento final (no incluido).
    console.log("=== substr ===");
    //Sintaxis: substr(start, length)
    console.log(str2.substr(0, 5));  // Output: "Hello"

// =============== Modificación ================
    let str3 = "Hello, world!";

    //1. replace(searchValue, newValue)
    console.log("=== replace ===");
    // Devuelve una nueva cadena de texto con la coincidencia de la cadena de búsqueda reemplazada por la nueva cadena de búsqueda.
    // Sintaxis: replace(searchValue, newValue)
    console.log(str3.replace("world", "everyone"));  // Output: "Hello, everyone!"
    
    //2. toUpperCase()
    console.log("=== toUpperCase ===");
    // Devuelve una nueva cadena de texto con todos los caracteres en mayúscula.
    // Sintaxis: toUpperCase()
    console.log(str3.toUpperCase());  // Output: "HELLO, WORLD!"
    
    //3. toLowerCase()
    console.log("=== toLowerCase ===");
    // Devuelve una nueva cadena de texto con todos los caracteres en minúscula.
    // Sintaxis: toLowerCase()
    console.log(str3.toLowerCase());  // Output: "hello, world!"
    
    //4.trim()
    console.log("=== trim ===");
    // Elimina los espacios al inicio y al final de una cadena de texto.
    let paddedString = "   Hello, world!   ";
    console.log(paddedString.trim());  // Output: "Hello, world!"
    
    //5. trimStart() / trimEnd()
    console.log("=== trimStart ===");
    // Elimina los espacios al inicio de una cadena de texto.
    console.log(paddedString.trimStart());  // Output: "Hello, world!   "

    console.log("=== trimEnd ===");
    // Elimina los espacios al final de una cadena de texto.
    console.log(paddedString.trimEnd());  // Output: "   Hello, world!"

    //6. trimLeft() / trimRight()
    console.log("=== trimLeft ===");
    // Elimina los espacios al inicio de una cadena de texto.
    console.log(paddedString.trimLeft());  // Output: "Hello, world!   "

    console.log("=== trimRight ===");
    // Elimina los espacios al final de una cadena de texto.
    console.log(paddedString.trimRight());  // Output: "   Hello, world!"

// ================= Repetición ================
console.log("============= Repetición ==================");
let echo = "Hello! ";

    //1. repeat(count)
    console.log("=== repeat ===");
    // Devuelve una nueva cadena de texto que repite la cadena de texto especificada el número de veces especificado.
    // Sintaxis: repeat(count)
    console.log(echo.repeat(3));  // Output: "Hello! Hello! Hello! "

    //2. charAt(index)
    console.log("=== charAt ===");
    // Devuelve un carácter en la cadena de texto especificada por el índice.
    // Sintaxis: charAt(index)
    console.log(str.charAt(0));  // Output: "H"
    
    //3. charCodeAt(index)
    console.log("=== charCodeAt ===");
    // Devuelve el valor Unicode de un carácter en la cadena de texto especificada por el índice.
    // Sintaxis: charCodeAt(index)
    console.log(echo.charCodeAt(0));  // Output: 72


// =============== Conversión y Transformación ================
console.log("============= Conversión y Transformación ==================");
    //1. split(separator, limit)
    // Devuelve un arreglo de subcadenas que se separan por el separador especificado.
    // Sintaxis: split(separator, limit)
    console.log("=== split ===");
    let sentence = "Hello, world! How are you?";
    let words = sentence.split(" ");
    console.log(words);  // Output: ["Hello,", "world!", "How", "are", "you?"]



