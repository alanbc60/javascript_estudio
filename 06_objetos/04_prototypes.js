// ================== Herencia y prototipos ======================

console.log("========== prototipos ===============")

// La herencia en JavaScript se logra a través de la cadena de prototipos. Cuando creas un objeto, 
// puedes especificar otro objeto como su prototipo. Esto significa que el objeto hereda todas las propiedades 
// y métodos del objeto prototipo.

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


// funciones constructores

function Animal(nombre, edad, color,alturaMtrs) {
   this.nombre = nombre;
   this.edad = edad;
   this.color = color;
   this.alturaMtrs = alturaMtrs;
   this.talk = function() {
      console.log(this.nombre + " hace un sonido.");
   }
}

//* ======= 1. definir el prototipo ========= */


// definir un prototipo en una función constructora

Animal.prototype.atacar = function() {
   console.log(this.nombre + " ataca.");
};

const Leopardo = new Animal("Leopardo", 5, "Cafe", 1.50);
Leopardo.atacar();


// cuando usas la notación de objetos literales, no puedes directamente añadir métodos 
// al prototipo de un objeto de la misma manera que lo haces con las funciones constructoras

//! esto no funciona
// animal.prototype.comer = function() {
//    console.log(this.nombre + " come.");
// };

// soluciones a la herencia de los objetos literales

//* ==== 1.1 Definir el prototipo de forma explícita === */
//Es decir crear metodos dentro del objeto
let animal2 = {
   nombre: "Animal",
   condicion: "Extremadamente estable",
   comer: function() {
      console.log(this.nombre + " come.");
   },
   hablar: function() {
      console.log(this.nombre + " hace un sonido.");
   }
};

//**  ==== 1.2 Usar Object.create para Herencia de Prototipo ==== */ 
// Si quieres que varios objetos compartan los mismos métodos, puedes crear un objeto prototipo y 
// usar Object.create para crear nuevos objetos que hereden de este prototipo:


// mamifero hereda propiedades del objeto prototipo Animal y tiene los prototipos, es decir mamifero hereda todas las propiedades de Animal.
let mamifero = Object.create(animal); // El create() no imprime el objeto completo usando console.log()
mamifero.nombre = "Mamifero"; // crea una porpiedad
mamifero.condicion = "Estable"; // crea una porpiedad	
console.log("== mamifero ==")
console.log(mamifero); // Debería imprimir el objeto con sus propiedades


// definir un prototipo en una función constructora




//* ==== 2 Accediendo a las propiedades heredadas ========

// 1. Accediendo a propiedades del mismo objeto
console.log(mamifero.Humano); // Debería imprimir "Donnaji"
console.log(mamifero.Edad); // Debería imprimir 10


//  === 2 Accediendo a propiedades hasta llegar al objeto padre ===
// Buscamos si mamifero (objeto heredado) tiene la propiedad especificada
// si la tiene devuelve el valor de la propiedad
// Si no la tiene se va a su objeto padre hasta llegar el objeto prototpo (objeto base/padre)
console.log("edad mamifero: "+mamifero.Edad);
mamifero.hablar();

//* ==== 3. Creando objetos heredados ====
// Objeto perro, hereda de mamifero (// Animal ---> mamifero ---> perro)
let perro = Object.create(mamifero);
perro.nombre = "Perro"; // cambia el valor de la propiedad nombre
console.log(`El perro tiene ${perro.numAmigos} amigos en total`);


// ===== setPrototypeOf =========
/*Los objetos en JavaScript son "contenedores" dinámicos de propiedades (referidas como sus propiedades particulares). 
Los objetos en JavaScript poseen un enlace a un objeto prototipo. Cuando intentamos acceder a una propiedad 
de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en 
el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el 
nombre o se alcance el final de la cadena de prototipos.
*/
  
let gato = {};
Object.setPrototypeOf(gato, animal); //establece el objeto animal como el prototipo del objeto gato.
gato.nombre = "Anburgueso";
  
gato.hablar(); // Fido hace un sonido.


// ====== getPrototypeOf =========
// 