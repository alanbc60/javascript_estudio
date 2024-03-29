// Los objetos en JavaScript son una de las características más poderosas y fundamentales del lenguaje. Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. Los valores de las propiedades pueden ser datos primitivos, como números, cadenas de texto, booleanos, o incluso otros objetos.

// ================================= Creación de Objetos  ===============================
// 1. Creación Literal
// La forma más común de crear un objeto es mediante la notación literal de objeto, que es una lista de pares clave-valor encerrados entre llaves {}.

let objeto = {
 nombre: "Juan",
 edad: 30,
 ciudad: "Madrid"
};

console.log(objeto);


//2. Creación con new Object()
// Otra forma de crear un objeto es utilizando el constructor Object con la palabra clave new.

let persona = new Object();
persona.nombre = "Juan";
persona.edad = 30;
persona.ciudad = "Madrid";

console.log(persona);

// 3. Usar create()
// Creación de objetos con prototipos
// Object.create(): Esta es una forma más avanzada de crear objetos en JavaScript. Permite crear un nuevo objeto con un prototipo especificado.
const miObjeto = Object.create({
   nombre: "Keveen",
   edad: 30,
   saludar: function() {
      console.log("Hola, mi nombre es " + this.nombre);
   }
});

console.log(miObjeto); // Debería imprimir el objeto con sus propiedades



//? Cuando usar let y const en objetos
// let  --> Cuando el objeto puede cambiar: Si planeas modificar el objeto después de su inicialización (por ejemplo, agregar, eliminar o cambiar propiedades), debes usar let. Esto es porque let permite reasignar el objeto a un nuevo valor.
//const --> Cuando el objeto no debe cambiar: Si el objeto se inicializa y no se espera que cambie en absoluto, ni sus propiedades ni la referencia al objeto, debes usar const. Esto asegura que el objeto no pueda ser reasignado a un nuevo valor o a otro objeto.



// ========================== Acceso a Propiedades  ===========================================
// Para acceder a las propiedades de un objeto, se utiliza la notación de punto o la notación de corchetes[].

console.log(persona.nombre); // Salida: Juan
console.log(persona["edad"]); // Salida: 30


// puede agregar nuevas propiedades accediendo a punto o []
objeto.esMoreno = true;
objeto["pais"] = "México";

console.log(objeto);
console.log(JSON.stringify(objeto)); //stringify es un metodo JSON eque convierte un objeto a un JSON(formato para guardra y transportar data, se usa cuando la data es envuada desde un servidor a una pagina web )



// ============================= funciones de objetos y obj dentro de obj  ===========================================

console.log("========== funciones en los objetos ===============")
// Los objetos pueden tener métodos, que son funciones asociadas al objeto. Los métodos se definen de la misma manera que las propiedades, pero los valores son funciones.

let objeto2 = {
   nombre: "Juan",
   presentarse: function() {
      return `Hola, mi nombre es ${this.nombre}`;
   }
};
//* this en Objetos
// Dentro de los métodos de un objeto, this se refiere al objeto mismo, es el nombre dle objeto, pero se usa this por si el nombre del objeto cambia.Esto permite acceder a las propiedades del objeto desde dentro de sus métodos.
console.log(objeto2.presentarse()); // Salida: Hola, mi nombre es Juan



console.log("========== Objetos dentro de los objetos (objetos anidados o compuestos) ===============")
let alumno = {
   nombre: "Juan",
   edad: 30,
   direccion: {
      calle: "Calle Principal",
      numero: 123,
      ciudad: "Madrid",
      codigoPostal: "28001"
   }
  };
  
// Acceso a propiedades de objetos anidados

console.log(`El empleado ${alumno.nombre} vive en la calle ${alumno.direccion.calle}`);

// Creación Dinámica de Objetos Anidados
// Puedes crear objetos anidados dinámicamente, asignando nuevos objetos a propiedades existentes o creando nuevas propiedades que contengan objetos.

alumno.direccion.pais = "España";
console.log(alumno.direccion.pais); // Salida: España

console.log(alumno); 

// ================== Herencia y prototipos ======================

console.log("========== Herencia y prototipos ===============")

// La herencia en JavaScript se logra a través de la cadena de prototipos. Cuando creas un objeto, puedes especificar otro objeto como su prototipo. Esto significa que el objeto hereda todas las propiedades y métodos del objeto prototipo.


let animal = {
   hablar: function() {
      console.log(this.nombre + " hace un sonido.");
   }
  };
  
let perro = Object.create(animal);
perro.nombre = "Fido";  
perro.hablar(); // Fido hace un sonido.


// ===== setPrototypeOf =========
  
let gato = {};
Object.setPrototypeOf(perro, animal);
 perro.nombre = "Fido";
  
  perro.hablar(); // Fido hace un sonido.
  Object.setPrototypeOf() //establece el objeto animal como el prototipo del objeto gato.

  // ==== Herencia de clases =====

// Con la introducción de las clases en ES6, la herencia se ha vuelto más sencilla y directa. Las clases en JavaScript son azúcar sintáctico sobre la herencia basada en prototipos.

class Animal {
 hablar() {
    console.log(this.nombre + " hace un sonido.");
 }
}

class Perro extends Animal {
 constructor(nombre) {
    super();
    this.nombre = nombre;
 }
}

let fido = new Perro("Fido");
fido.hablar(); // Fido hace un sonido.



// ============================= Métodos de los objetos  ===========================================
// JavaScript proporciona varios métodos para trabajar con objetos, como Object.keys(), Object.values(), Object.entries(), Object.assign(), entre otros.


// 1. Object.keys(obj) -->Este método devuelve un array que contiene las claves de todas las propiedades enumerables del objeto.

const objKeys = { a: 1, b: 2, c: 3 };
console.log(Object.keys(objKeys)); // ["a", "b", "c"]


// 2.Object.values(obj)
//Este método devuelve un array que contiene los valores de todas las propiedades enumerables del objeto.

const objValues = { a: 1, b: 2, c: 3 };
console.log(Object.values(objValues)); // [1, 2, 3]

// 3. Object.entries(obj)
// Este método devuelve un array de arrays, donde cada subarray es un par clave-valor correspondiente a una propiedad enumerable del objeto.

const objEntries = { a: 1, b: 2, c: 3 };
console.log(Object.entries(objEntries)); // [["a", 1], ["b", 2], ["c", 3]]


// 4.Object.assign(target, ...sources)

// Este método se utiliza para copiar los valores de todas las propiedades enumerables de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }


// 5. Object.getOwnPropertyNames(obj)
// Este método devuelve un array que contiene todas las propiedades (enumerables o no) encontradas directamente en un objeto.

const obj = { a: 1, b: 2, c: 3 };
Object.defineProperty(obj, 'd', {
 value: 4,
 enumerable: false
});
console.log(Object.getOwnPropertyNames(obj)); // ["a", "b", "c", "d"]


// 6. Object.getOwnPropertySymbols(obj)
// Este método devuelve un array que contiene todos los símbolos encontrados como propiedades en un objeto.

const obj = { a: 1, b: 2, c: 3 };
const symbol = Symbol('symbol');
obj[symbol] = 4;

console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(symbol)]

//7. Object.freeze(obj)
// Este método congela un objeto, lo que significa que no se pueden agregar nuevas propiedades al objeto, no se pueden eliminar propiedades existentes, y no se pueden cambiar los valores de las propiedades existentes.

const obj = { a: 1, b: 2, c: 3 };

//8. Object.freeze(obj);

obj.a = 4; // No tiene efecto
console.log(obj.a); // 1

// 9.Object.seal(obj)
// Este método sella un objeto, lo que significa que no se pueden agregar nuevas propiedades al objeto, y no se pueden eliminar propiedades existentes. Sin embargo, los valores de las propiedades existentes pueden cambiar.

const obj = { a: 1, b: 2, c: 3 };
Object.seal(obj);
obj.a = 4; // Tiene efecto
console.log(obj.a); // 4
delete obj.a; // No tiene efecto
console.log(obj.a); // 4


//  Ejercicios de métodos de json

// Ejercicio 1: Crear un objeto y listar sus claves
// Crea un objeto que represente a una persona con propiedades para el nombre, edad y ciudad.
// Utiliza  para obtener un array de las claves del objeto.
// Imprime el array de claves en la consola.
// const persona = {
//  nombre: "Juan",
//  edad: 30,
//  ciudad: "Madrid"
// };


// Ejercicio 3: Crear un objeto y listar sus claves y valores
// Crea un objeto que represente a una persona con propiedades para el nombre, edad y ciudad.
// Utiliza  para obtener un array de arrays, donde cada subarray es un par clave-valor.
// Imprime el array de pares clave-valor en la consola.
// const persona = {
//  nombre: "Juan",
//  edad: 30,
//  ciudad: "Madrid"
// };


// Ejercicio 4: Copiar propiedades de un objeto a otro
// Crea dos objetos, persona1 y persona2.
// Utiliza para copiar las propiedades de persona1 a persona2.
// Imprime el objeto persona2 en la consola para verificar que las propiedades se han copiado correctamente.




// Ejercicio 5: Filtrar y mapear propiedades de un objeto
// Crea un objeto que represente a una persona con propiedades para el nombre, edad y ciudad.
// Utiliza  para obtener un array de arrays, donde cada subarray es un par clave-valor.
// Utiliza  para filtrar solo las propiedades cuyos valores sean números.
// Utiliza  para obtener solo los valores de las propiedades filtradas.
// Imprime el array resultante en la consola.
// ============================= Objetos y json  ===========================================

// Los objetos en JavaScript pueden ser convertidos a una cadena JSON usando JSON.stringify() y viceversa usando JSON.parse().

let ciudadano = {
 nombre: "Juan",
 edad: 30,
 ciudad: "Madrid"
};

let json = JSON.stringify(ciudadano); // Convertir objeto a JSON
console.log(json); // Salida: {"nombre":"Juan","edad":30,"ciudad":"Madrid"}

let objetoDesdeJson = JSON.parse(json); // Convertir JSON a objeto
console.log(objetoDesdeJson); // Salida: {nombre: "Juan", edad: 30, ciudad: "Madrid"}
