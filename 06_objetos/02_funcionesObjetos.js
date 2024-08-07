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