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

// modificacion de objetos anidados
alumno.direccion.calle = "Calle Falsa";
console.log(alumno.direccion.calle); // Salida: Calle Falsa


// Añadir propiedades a objetos anidados
alumno.direccion.telefono = 123456789;
console.log(alumno.direccion.telefono); // Salida: 123456789


// Eliminar propiedades de objetos anidados
delete alumno.direccion.pais;




for (const key in persona.direccion) {
   console.log(`${key}: ${persona.direccion[key]}`);
 }
 // Output:
 // calle: Calle Falsa
 // numero: 456
 // ciudad: Shelbyville
 // pais: USA
 // codigoPostal: 12345
 