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

console.log(miObjeto.saludar()); // Debería imprimir el objeto con sus propiedades



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

// crear un objeto a partir del obj 1 o con las mismas carcateristicas

// No es recomendable crear varios objetos porque usa hoisting, ya que El hoisting se aplica principalmente a las declaraciones de variables y funciones
let objeto3 = {
   nombre: "Juan",
   apellido: "Cervantes",
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

console.log("========== prototipos ===============")

// La herencia en JavaScript se logra a través de la cadena de prototipos. Cuando creas un objeto, puedes especificar otro objeto como su prototipo. Esto significa que el objeto hereda todas las propiedades y métodos del objeto prototipo.

 // objeto prototipo
let animal = {
   Humano: "Donnaji", 
   Edad:10, 
   Color:"cafe",
   numAmigos: 3,
   alturaMtrs: 1.10, 
   hablar: function() {
      console.log(this.nombre + " hace un sonido.");
   }
};


// mamifero hereda propiedades del objeto prototipo.
let mamifero = Object.create(animal);
mamifero.nombre = "Mamifero"; // crea una porpiedad

// mamifero --> nombre
console.log("color del mamifero: ",mamifero.Color)
// buscar en mamifero el color
// 1. Busca si mamifero tiene la propiedad
//  si la tiene devuelve el valor de la propiedad
// Si no la tiene se va a su objeto padre hasta llegar el prototpo

mamifero.condicion = "Estable";

console.log("edad mamifero: "+mamifero.Edad);
mamifero.hablar();

// El create() no imprime el objeto completo usando console.log()
console.log(mamifero);
// Accediendo a las propiedades heredadas
console.log(mamifero.Humano); // Debería imprimir "Donnaji"
console.log(mamifero.Edad); // Debería imprimir 10


// Objeto perro, hereda de mamifero
let perro = Object.create(mamifero);
perro.nombre = "Perro"; // cambia el valor de la propiedad nombre

console.log(`El perro tiene ${perro.numAmigos} amigos en total`);

// Animal ---> mamifero ---> perro


// ===== setPrototypeOf =========
/*Los objetos en JavaScript son "contenedores" dinámicos de propiedades (referidas como sus propiedades particulares). 
Los objetos en JavaScript poseen un enlace a un objeto prototipo. Cuando intentamos acceder a una propiedad de un objeto, 
la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, 
y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.
*/
  
let gato = {};
Object.setPrototypeOf(gato, animal); //establece el objeto animal como el prototipo del objeto gato.
gato.nombre = "Anburgueso";
  
gato.hablar(); // Fido hace un sonido.


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
//Modifica las propiedades del objetivo
const objetivo = { a: 1, b: 2 };
const fuente = { b: 4, c: 5 };
const returnedTarget = Object.assign(objetivo, fuente);
console.log(objetivo); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }


// 5. Object.getOwnPropertyNames(obj)
// Este método devuelve un array que contiene todas las claves (enumerables o no) encontradas directamente en un objeto.

const objgetOwnPropertyNames = { a: 1, b: 2, c: 3 };
Object.defineProperty(objgetOwnPropertyNames, 'd', {
 value: 4,
 enumerable: false
});



// enumerable está establecido en true, la propiedad será visible cuando se itere sobre las propiedades del objeto (por ejemplo, usando un bucle for...in o el método Object.keys()). Si enumerable está establecido en false, la propiedad no será visible en estas enumeraciones.


console.log(Object.getOwnPropertyNames(objgetOwnPropertyNames)); // ["a", "b", "c", "d"]


// 6. Object.getOwnPropertySymbols(obj)
// Este método devuelve un array que contiene todos los símbolos encontrados como propiedades en un objeto.

const objgetOwnPropertySymbols = { a: 1, b: 2, c: 3 };
const symbol = Symbol('symbol');
objgetOwnPropertySymbols[symbol] = 3;

console.log(Object.getOwnPropertySymbols(objgetOwnPropertySymbols)); // [Symbol(symbol)]

//7. Object.freeze(obj)
// Este método congela un objeto, lo que significa que no se pueden agregar nuevas propiedades al objeto, no se pueden eliminar propiedades existentes, y no se pueden cambiar los valores de las propiedades existentes.

let objFrezzes = { a: 1, b: 2, c: 3 };

Object.freeze(objFrezzes);

objFrezzes.a = 4; // No tiene efecto
console.log(objFrezzes.a); // 1

// 9.Object.seal(obj)
// Este método sella un objeto, lo que significa que no se pueden agregar nuevas propiedades al objeto, y no se pueden eliminar propiedades existentes. Sin embargo, los valores de las propiedades existentes pueden cambiar.


console.log(" == seal ==")
const objSeal = { a: 1, b: 2, c: 3 };
Object.seal(objSeal);
objSeal.a = 4; // Tiene efecto
console.log(objSeal.a); // 4
delete objSeal.a; // No tiene efecto
console.log(objSeal); 

// Para "desellar" el objeto, puedes crear una copia del objeto
//Para crear la copia de un objeto se pone con "...nombreObjetoOriginal"
//Para modificar un objeto seal se puede hacer creando una copia del objeto
const objDesellado = {...objSeal};
delete objDesellado.a;
console.log(objDesellado);




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
