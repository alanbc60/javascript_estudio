
//  =========================== Ejercicio 1 ===========================

// Imagina que tienes un array de objetos, donde cada objeto representa a un usuario con propiedades 
// como nombre, edad, ciudad, y hobbies. El objetivo es procesar estos datos para obtener información específica.

// Paso 1: Filtrar usuarios mayores de 18 años.
// Paso 2: Transformar la lista de usuarios filtrados para incluir solo sus nombres.
// Paso 3: Verificar si un usuario específico está en la lista de usuarios mayores de 18 años.
// Paso 4: Contar cuántos usuarios tienen un hobby específico.
// Paso 5: Sumar todas las edades de los usuarios mayores de 18 años.

const usuarios = [
    { nombre: "Ana", edad: 20, ciudad: "Madrid", hobbies: ["leer", "cine"] },
    { nombre: "Carlos", edad: 17, ciudad: "Barcelona", hobbies: ["fútbol", "videojuegos"] },
    { nombre: "Beatriz", edad: 22, ciudad: "Valencia", hobbies: ["pintar", "viajar"] },
    { nombre: "David", edad: 15, ciudad: "Sevilla", hobbies: ["musica", "deporte"] },
    { nombre: "Elena", edad: 25, ciudad: "Zaragoza", hobbies: ["cocinar", "leer"] },
];

console.log(usuarios)


const usuariosFiltro = usuarios.filter( usuario => usuario.edad > 18)
console.log("Usuarios mayor edad: "+ usuariosFiltro);


const listaFiltradaSoloNombre = usuariosFiltro.map( usuario =>{
    return usuario.nombre
});

console.log("Usuarios nombre: "+ listaFiltradaSoloNombre);


const usuarioBuscar = "Ana";


const resultadoUsuarioEspecifico = usuariosFiltro.some(usuario => usuario.nombre === usuarioBuscar );
console.log(`El usuario ${usuarioBuscar} se encuentra ${resultadoUsuarioEspecifico}`);

const hobbyEspecifico = "leer";


const resultadoHobby = usuarios.filter( usuario =>  usuario.hobbies.includes(hobbyEspecifico)).length;
console.log(`Numeros de usuario con hobby ${hobbyEspecifico} es: ${resultadoHobby}`);

const edadesTotales = usuariosFiltro.reduce( (acumlador, elementoActual) =>  acumlador + elementoActual.edad, 0 )
console.log("Total de edades: ", edadesTotales);


//  =========================== Ejercicio 2 ===========================

console.log(" ========================= Ejercicio 2 ===========================")

// Ejercicio: Gestión de empleados de una empresa
// Imagina que tienes un array de objetos, donde cada objeto representa a un empleado con propiedades como nombre, puesto, salario, y departamento. El objetivo es procesar estos datos para obtener información específica sobre los empleados.

// Paso 1: Filtrar empleados que ganan más de 50000.
// Paso 2: Transformar la lista de empleados para incluir solo sus nombres y puestos.
// Paso 3: Verificar si un empleado específico está en la lista de empleados que ganan más de 50000.
// Paso 4: Contar cuántos empleados pertenecen a un departamento específico.
// Paso 5: Calcular el salario promedio de los empleados que ganan más de 50000.


const empleados = [
    { nombre: "Juan", puesto: "Gerente", salario: 60000, departamento: "Ventas" },
    { nombre: "Ana", puesto: "Asistente", salario: 30000, departamento: "Ventas" },
    { nombre: "Carlos", puesto: "Ingeniero", salario: 70000, departamento: "Desarrollo" },
    { nombre: "Beatriz", puesto: "Diseñadora", salario: 55000, departamento: "Diseño" },
    { nombre: "David", puesto: "Contador", salario: 52000, departamento: "Finanzas" },
   ];

const empleadosRicos = empleados.filter( empleado => empleado.salario > 50000  );
console.log(empleadosRicos);


//* Las llaves se utilizan para delimitar el cuerpo de la función, pero también se pueden usar para crear objetos literales.
const listaEmpleadosActualizada = empleados.map( empleado => ({nombre: empleado.nombre, puesto: empleado.puesto} ) )
console.log(listaEmpleadosActualizada);

// paso 3
const empleadoEspecifico = "David";

const resultadoBusqueda = empleadosRicos.some(empleado => (empleado.nombre === empleadoEspecifico));
console.log(`¿El empleado ${empleadoEspecifico} se encuentra? R: ${resultadoBusqueda}`);


// Paso 4 --> Contar cuántos empleados pertenecen a un departamento específico.

const departamento = "Ventas";
const empleadosDeparta = empleados.filter(empleado => empleado.departamento.includes(departamento)).length;
console.log(`El número de empleados que trabajan en el departamento de`, departamento, `son`, empleadosDeparta);


// paso 5

const sumaEmpleadoRicos =  empleadosRicos.reduce( (acumulador, elementoActual) => acumulador + elementoActual.salario, 0 ) ;
console.log(typeof(sumaEmpleadoRicos));

console.log("La suma es: "+sumaEmpleadoRicos);

const promedio = sumaEmpleadoRicos / empleadosRicos.length;
console.log("El promedio es: ",promedio);



//  =========================== Ejercicio 3 ===========================

console.log(" ========================= Ejercicio 3 ===========================")
// Ejercicio: Gestión de inventario de una tienda
// Imagina que tienes un array de objetos, donde cada objeto representa un producto con propiedades como nombre, precio, cantidadEnStock, y categoria. El objetivo es procesar estos datos para obtener información específica sobre el inventario.

// Paso 1: Filtrar productos que estén en oferta (precio menor al 100).
// Paso 2: Transformar la lista de productos en oferta para incluir solo sus nombres.
// Paso 3: Verificar si un producto específico está en la lista de productos en oferta.
// Paso 4: Contar cuántos productos pertenecen a una categoría específica.
// Paso 5: Calcular el valor total del inventario de productos en oferta.


const productos = [
    { nombre: "Camiseta", precio: 50, cantidadEnStock: 10, categoria: "Ropa" },
    { nombre: "Pantalón", precio: 120, cantidadEnStock: 5, categoria: "Ropa" },
    { nombre: "Bicicleta", precio: 200, cantidadEnStock: 3, categoria: "Deportes" },
    { nombre: "Libro", precio: 30, cantidadEnStock: 20, categoria: "Libros" },
    { nombre: "Cámara", precio: 80, cantidadEnStock: 15, categoria: "Electrónica" },
   ];





//  =========================== Ejercicio 3 ===========================



//  =========================== Ejercicio 4 ===========================




//  =========================== Ejercicio 5 ===========================


//  https://www.codeguage.com/courses/js/arrays-quiz