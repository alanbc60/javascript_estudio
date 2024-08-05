1. **if-else:**
    - La estructura if se utiliza para ejecutar un bloque de código si se cumple una condición.
    ```jsx
    javascriptCopy code
    if (condicion) {
        // Código a ejecutar si la condición es verdadera
    } else {
        // Código a ejecutar si la condición es falsa
    }
    
    ```
    
2. **if, else if y else **:
    - Permite evaluar múltiples condiciones después de un **`if`** y antes de un **`else`**.
    
    ```jsx
    javascriptCopy code
    if (condicion1) {
        // Código a ejecutar si la condicion1 es verdadera
    } else if (condicion2) {
        // Código a ejecutar si la condicion2 es verdadera
    } else {
        // Código a ejecutar si ninguna condición anterior es verdadera
    }
    
    ```
    
3. **switch:**
    - Permite evaluar una expresión y ejecutar diferentes bloques de código según el valor de la expresión.
    
    ```js
    switch (expresion) {
        case valor1:
            // Código a ejecutar si expresion === valor1
            break;
        case valor2:
            // Código a ejecutar si expresion === valor2
            break;
        default:
            // Código a ejecutar si ninguno de los valores coincide
    }
    
    ```


El operador ternario en JavaScript es una forma abreviada de escribir una declaración condicional if-else en una sola línea. Su sintaxis es la siguiente:

javascript

condición ? expresiónSiVerdadero : expresiónSiFalso
Donde:

condición es una expresión que se evalúa como verdadera o falsa.
expresiónSiVerdadero es la expresión que se devuelve si la condición es verdadera.
expresiónSiFalso es la expresión que se devuelve si la condición es falsa.
Por ejemplo:

javascript
```js
let edad = 18;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // Output: "Eres mayor de edad"
En este ejemplo, si la variable edad es mayor o igual a 18, el mensaje será "Eres mayor de edad", de lo contrario, será "Eres menor de edad".

```

Quiz
https://www.codeguage.com/courses/js/conditions-quiz

//When converted to a Boolean, an empty array ([]) becomes ...