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
   