Se define utilizando la palabra clave **`function`** seguida por un nombre de función y un conjunto de paréntesis que pueden contener los parámetros de la función. Por ejemplo:

```jsx
function functionName(param1, param2, ..., paramN) {
   // Function's body
}
```

Ejemplo

```jsx
function suma(a, b) {
  return a + b;
}
```

**Así es como `return`se usa dentro de una función:**

```jsx
**function *functionName*(*param1*, *param2*, ..., *paramN*) {
   // ...
   return *value*;
}**
```
****

**La sintaxis es bastante intuitiva: la `return`palabra clave va seguida de la expresión que la función va a calcular y devolver.**

**Reescribamos la función `logSum()`anterior en una función de suma más flexible:**



METODOS

- Metodos de las funciones
    
    En JavaScript, las funciones son objetos de primera clase, lo que significa que pueden tener métodos asociados a ellas. Estos métodos pueden ser definidos directamente en la función o pueden ser heredados de su prototipo. Aquí hay algunos ejemplos de métodos que pueden estar asociados a las funciones en JavaScript:
    
    1. **Call():** Permite llamar a una función con un valor específico para **`this`** y argumentos provistos de forma individual.
    
    ```jsx
    javascriptCopy code
    function saludar() {
        console.log("Hola, " + this.nombre);
    }
    
    let persona = {
        nombre: "Juan"
    };
    
    saludar.call(persona); // Resultado: Hola, Juan
    
    ```
    
    1. **Apply():** Permite llamar a una función con un valor específico para **`this`** y un array de argumentos.
    
    ```jsx
    javascriptCopy code
    function saludar(saludo) {
        console.log(saludo + ", " + this.nombre);
    }
    
    let persona = {
        nombre: "María"
    };
    
    saludar.apply(persona, ["Hola"]); // Resultado: Hola, María
    
    ```
    
    1. **Bind():** Crea una nueva función que, cuando se llama, tiene su valor **`this`** establecido al valor proporcionado, con una secuencia determinada de argumentos precedidos por los argumentos proporcionados al bind.
    
    ```jsx
    javascriptCopy code
    function saludar() {
        console.log("Hola, " + this.nombre);
    }
    
    let persona = {
        nombre: "Pedro"
    };
    
    let saludarAUsuario = saludar.bind(persona);
    saludarAUsuario(); // Resultado: Hola, Pedro
    
    ```
    
    Estos son solo algunos ejemplos de métodos que pueden estar asociados a las funciones en JavaScript. Pueden ser útiles para cambiar el contexto (**`this`**) de una función, pasar argumentos de manera conveniente o crear nuevas funciones basadas en funciones existentes.