// Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y
//  un valor. Los valores de las propiedades pueden ser datos primitivos, como números, cadenas de texto, 
//  booleanos, o incluso otros objetos.

// ================================= Creación de Objetos  ===============================

console.log("==== creación de objetos ====")
// 1. Creación Literal
// La forma más común de crear un objeto es mediante la notación literal de objeto, que es una 
// lista de pares clave-valor encerrados entre llaves {}.



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
persona.estadoCivil = "soltero";

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
// let  --> Cuando el objeto puede cambiar: Si planeas modificar el objeto después de 
// su inicialización (por ejemplo, agregar, eliminar o cambiar propiedades), debes usar let. 
// Esto es porque let permite reasignar el objeto a un nuevo valor.


//const --> Cuando el objeto no debe cambiar: Si el objeto se inicializa y no se espera que cambie en 
// absoluto, ni sus propiedades ni la referencia al objeto, debes usar const. Esto asegura que el objeto 
// no pueda ser reasignado a un nuevo valor o a otro objeto.



// ========================== Acceso a Propiedades  ===========================================
// Para acceder a las propiedades de un objeto, se utiliza la notación de punto o la notación de corchetes[].

console.log(persona.nombre); // Salida: Juan
console.log(persona["edad"]); // Salida: 30


// puede agregar nuevas propiedades accediendo a punto o []
objeto.esMoreno = true;
objeto["pais"] = "México";

console.log(objeto);
console.log(JSON.stringify(objeto)); //stringify es un metodo JSON eque convierte un objeto a un JSON(formato para guardra y transportar data, se usa cuando la data es envuada desde un servidor a una pagina web )



// =========================== Modificacion de propiedades ===========================================

console.log("==== modificar propiedades ====")

// 1. modificar propiedades con el operador "." 
// para modificar una propiedad lo hacemos con el simbolo "." y escribimos el nuevo valor
persona.edad = 26;
console.log(persona);

// 2. modificar propiedades con el operador "[]"
// para modificar una propiedad lo hacemos con el simbolo "[" y escribimos el nuevo valor
objeto["ciudad"] = "Barcelona";
console.log(objeto);


// =========================== Eliminando propiedades  ===========================================

console.log("==== eliminar propiedades ====")
// 1. Eliminar propiedades usamos el operador delete
delete persona.edad;
console.log(persona);

delete persona["estadoCivil"];
console.log(persona);


// =========================== iterando propiedades  ===========================================

console.log("==== iterando propiedades ====")


for (let prop in persona) {
   console.log(prop + ": " + persona[prop]);
}

