const miPromesa = () =>  Promise.resolve("A");
//las promesas son organizadores de operaciones asincronicas
//son una forma de manejar el codigo asincrono de manera más legible
function primeraFuncion(params) {
    miPromesa().then(resultado => console.log(resultado)); //asincronas
    console.log("B"); //sincrona
}

function ejemploPromesa(){
    return new Promise((resolve, reject) => {
        try {
            resolve("Promesa con exito"); // funcion de la promesa
        } catch (error) {
            reject("Error en la promesa"); // funcion de la promesa
        }
    })
}


async function segundaFuncion() {
    console.log(await ejemploPromesa());
    console.log(await miPromesa()); //await solo trabaja sobre promesas
    console.log("B");
    //primeraFuncion().then( resultado => console.log("el resultado es: "+resultado)); // Esta mal, ya que no puedes usar propiedades
    // o métodos de una función asincrona o sincrona si no devuelve una promesa
}

//primeraFuncion(); // B A 
//segundaFuncion(); // A B


//  llamada  la funcion primeraFuncion() --> miPromesa() asincrona  --> console.log("B") --> fin llamada primeraFuncion()
//    --> console.log("B") --> fin llamada primeraFuncion()
//    --> console.log("B") sincrono --> miPromesa() Asincrona  --> fin llamada primeraFuncion()
//    miPromesa() Asincrona  --> fin llamada primeraFuncion()




async function llamadaFetch(params) {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
        const data = await response.json();  
        console.log("data", data);  
        return data;

    } 
    catch (error) {
        // datos corrompidos, error de petición del servidor, etc
    }
}

// const URL = "http://localhost/Myquiz/Backend/controllers/controller.php?";

// async function loginUsuario(ev, formLogin){


//     const sesionRecuperada = sessionStorage.getItem('session_id');

  
//     if(sesionRecuperada == null){
//       window.location.href = '../views/error.html'; // lleva a otra pestaña desde la pestaña actual usando JS
//     }

//     ev.preventDefault(); //Evita que se envie el formulario
//     let verificacion = false;  
//     const urlCompleta = URL+"accion=inicioSesion";

//     try{
//       // aqui trabaja buscando los atributos name de html  
//       const datosForm = new FormData(formLogin);
//       const correo = datosForm.get('login_correo')
//       const password = datosForm.get('login_password')
//       console.log("El correo es: "+correo);
//       console.log("El password es: "+password);
//       let mensaje = "";
      
//       const response = await fetch(urlCompleta, {
//         method: "POST", 
//         body: datosForm
//       })

//       const data = await response.json();
//       console.log("Data: "+data);

//       if (data.status == 'comprobado') {

//         console.log('La sesión es válida para el usuario actual');
//         console.log('User ID:', data.user_id);
//         console.log('Nombre de usuario:', data.nombre_usuario);
//         console.log('Correo:', data.correo);
//         console.log('Session ID:', data.session_id);
        
//         sessionStorage.setItem('session_id', data.session_id);    

//         window.location.href = '../views/quizzes.html';
        
//       }
//       else if(data.status == 'false'){
//         mensaje = "Correo o contraseña no válidos";
//         mostrarMensajeDeError(mensaje);
//         console.log("Lo que recibi fue: "+data); 
//       }

//       else if(data.status == 'errorHTTP'){
//         mensaje = data.message;

//         mostrarMensajeDeError(mensaje);
//       }

//     }

//     catch(error) {
//       console.log('Error en la solicitud: ' +error);
//     };
 
// };



// === Ejercicio promesas 1 ===
// const miOtraPromesa = () => Promise.resolve("C"); // asincrona que devuelve C

// function operacionAsincrona() {
//     console.log("D");  //sincrona que devuelve D
// }

// function otraPromesa() {
//     return new Promise((resolve, reject) => {
//         try {
//             resolve("Otra promesa con éxito"); //asincrona que devuelve Otra promesa...
//         } catch (error) {
//             reject("Error en otra promesa"); 
//         }
//     });
// }

// ! Console.log es una operación sincrona, por lo que no espera que la operación se complete antes de continuar con la ejecución del código
// async function otraFuncionAsincrona() {
//     console.log(otraPromesa()); // Promise {'Otra promesa con éxito'};
//     console.log(" ======")
//     console.log(otraPromesa().then((result) => console.log(result))); 
//     console.log(await miOtraPromesa());  // C
//     console.log("E"); //E
// }

// console.log("==== Ejercicio promesas 1 ====");
// operacionAsincrona(); //D
// otraFuncionAsincrona();// C-E-Otra promesa con éxito


// ================ Ejercicio promesas 2 ================

// Ejercicio: Crear una función asíncrona que realiza una operación asíncrona
// Objetivo: Crear una función que realiza una operación asíncrona (por ejemplo, esperar un cierto tiempo) y luego devuelve un resultado. 
//La función principal debe llamar a esta función asíncrona y manejar el resultado de manera asíncrona.

console.log("==== Ejercicio promesas 2 ====");

function tiempoAsincrono(){
    return new Promise((resolve, reject) =>{
      setTimeout(()=>{
        try{
          resolve("Resultado exitosa");
        } catch(error){
          reject("Respuesta sin exito");
        }
        
        
      },2000);
    })
}

async function llamadaFuncion(){
  console.log("Iniciando operación asincrona");

//   // manera fea
//   await tiempoAsincrono().then(respuesta => {
//     console.log(respuesta);
//   })
//   tiempoAsincrono().catch((error)=>{
//     console.log(error);
//   });

  const respuesta = await tiempoAsincrono();
  console.log(respuesta);

  console.log("Finalizando operación asincrona");
  
}
//llamadaFuncion(); //Iniciando operacion -Respuesta exitosa -asincrona-Finalizando...


// Ejercicio: Crear una función que realiza una operación asíncrona con setTimeout
// Objetivo: Crear una función que realiza una operación asíncrona (por ejemplo, esperar un cierto tiempo) utilizando setTimeout y luego devuelve un resultado. 
//La función principal debe llamar a esta función asíncrona y manejar el resultado de manera asíncrona, la función principal es una función sincrona.

console.log("==== Ejercicio promesas 3 ====");
function tiempoSincrono(){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      try{
        resolve("Tiempo sincrono exitoso");
      } catch {
        reject("Tiempo asincrono NO exitoso");
      }
    },2000);
  })
}

function funcionPrincipal(){ // esta linea no se cambia
  /* tiempoSincrono().then;
  console.log(respuestaAsinc2);
} */
/* Manera larga */
 console.log("iniciando operación asincrona");
 tiempoSincrono()
    .then(respuesta =>{
        console.log(respuesta);
        console.log("Promesa manejada")
    })
    .catch((error)=>{
        console.log(error);
    });

    console.log("Esta línea se ejecuta inmediatamente después de iniciar la operación asíncrona.");

}

funcionPrincipal();

//Cuando se trabaja con funciones ASINCRONAS, se necesita que await trabaje con funciones asinrconas que lo envuelven
//cuando se trabaja con funciones SINCRONAS, se necesita trabajar con .then y .catch para obtener el resultad de manera asincrona


// ================= SessionStorage y localStorage


// Local Storage:

// El Local Storage es una forma de almacenamiento persistente en el navegador que permanece incluso después de cerrar la ventana del navegador.
// Los datos almacenados en Local Storage permanecen allí hasta que se eliminan explícitamente o se borran los datos del navegador.
// Se puede acceder a Local Storage desde cualquier ventana o pestaña del mismo dominio.
// La cantidad de datos que se puede almacenar en Local Storage varía según el navegador y puede ser de varios megabytes.
// Session Storage:

// Session Storage

// El Session Storage es similar al Local Storage, pero los datos almacenados en él solo permanecen durante la duración de la sesión del navegador.
// Si cierras la ventana del navegador o la pestaña, los datos almacenados en Session Storage se eliminarán.
// Al igual que con Local Storage, se puede acceder a Session Storage desde cualquier ventana o pestaña del mismo dominio.


// Almacenar datos en Local Storage
//slocalStorage.setItem('clave', 'valor');

// Recuperar datos de Local Storage
//var dato = localStorage.getItem('clave');

// Eliminar un elemento de Local Storage
//localStorage.removeItem('clave');

// Borrar todos los datos de Local Storage
//localStorage.clear();




