// Los objetos en JavaScript son una de las características más poderosas y fundamentales del lenguaje. Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. Los valores de las propiedades pueden ser datos primitivos, como números, cadenas de texto, booleanos, o incluso otros objetos.

// Creación de Objetos
// Creación Literal
// La forma más común de crear un objeto es mediante la notación literal de objeto, que es una lista de pares clave-valor encerrados entre llaves {}.

let objeto = {
 nombre: "Juan",
 edad: 30,
 ciudad: "Madrid"
};
// Creación con new Object()
// Otra forma de crear un objeto es utilizando el constructor Object con la palabra clave new.

let persona = new Object();
objeto.nombre = "Juan";
objeto.edad = 30;
objeto.ciudad = "Madrid";
// ========================== Acceso a Propiedades  ===========================================
// Para acceder a las propiedades de un objeto, se utiliza la notación de punto o la notación de corchetes.

console.log(objeto.nombre); // Salida: Juan
console.log(objeto["edad"]); // Salida: 30
// ============================= Métodos  ===========================================
// Los objetos pueden tener métodos, que son funciones asociadas al objeto. Los métodos se definen de la misma manera que las propiedades, pero los valores son funciones.

let objeto = {
 nombre: "Juan",
 presentarse: function() {
    return `Hola, mi nombre es ${this.nombre}`;
 }
};

console.log(objeto.presentarse()); // Salida: Hola, mi nombre es Juan
// this en Objetos
// Dentro de los métodos de un objeto, this se refiere al objeto mismo. Esto permite acceder a las propiedades del objeto desde dentro de sus métodos.

// Prototipos
// Todos los objetos en JavaScript tienen una propiedad especial llamada prototype. Los objetos pueden heredar propiedades y métodos de su prototipo. Esto es fundamental para la herencia y la reutilización de código en JavaScript.

function Empleado(nombre, edad) {
 this.nombre = nombre;
 this.edad = edad;
}

Persona.prototype.presentarse = function() {
 return `Hola, mi nombre es ${this.nombre}`;
};

let juan = new Persona("Juan", 30);
console.log(juan.presentarse()); // Salida: Hola, mi nombre es Juan
// Objetos y JSON
// JavaScript Object Notation (JSON) es un formato de texto ligero para intercambiar datos. Es fácil de leer y escribir para los humanos y fácil de parsear y generar para las máquinas. JSON es un subconjunto de la notación de objetos de JavaScript.

let objeto = {
 nombre: "Juan",
 edad: 30,
 ciudad: "Madrid"
};

let json = JSON.stringify(objeto); // Convertir objeto a JSON
console.log(json); // Salida: {"nombre":"Juan","edad":30,"ciudad":"Madrid"}

let objetoDesdeJson = JSON.parse(json); // Convertir JSON a objeto
console.log(objetoDesdeJson); // Salida: {nombre: "Juan", edad: 30, ciudad: "Madrid"}
