// La asincronía en JavaScript es un concepto fundamental que permite que el código se ejecute sin bloquear la ejecución del programa principal. Esto es especialmente útil en situaciones donde se realizan operaciones que podrían tomar tiempo, como realizar solicitudes a servidores, leer archivos, o cualquier operación de entrada/salida (I/O).

// Aquí hay una explicación detallada sobre la asincronía en JavaScript:

// Operaciones Síncronas vs. Asíncronas:

// Operaciones Síncronas: En una operación síncrona, el programa espera a que la operación se complete antes de continuar con la ejecución del código.
// Operaciones Asíncronas: En una operación asíncrona, el programa continúa ejecutando el código sin esperar a que la operación se complete. En lugar de eso, proporciona una función de devolución de llamada (callback) que se ejecutará una vez que la operación asíncrona haya terminado.



// === Ejemplo de operacion sincrona

// for (let index = 0; index < 10; index++) {
//     console.log("Ejecutando proceso 1....");
//     //console.log(index);
// }

// console.log("Ejecutando el proceso 2");


// === Ejemplo de operacion Asincrona




function hacerAlgo(callback) {
    // Simula una operación asincrónica

    
    // La función setTimeout en JavaScript es asincrónica por diseño para permitir que el código continúe ejecutándose sin bloquear el hilo de ejecución principal. Esto significa que cuando se llama a setTimeout, el motor de JavaScript programa la ejecución de la función de callback para que ocurra después de un cierto tiempo, pero no espera a que la función de callback se ejecute antes de continuar con la ejecución del código siguiente.

    setTimeout(() => {
       console.log('Operación asincrónica completada'); // segundo console log
       callback();
    }, 100);

    
    for (let index = 0; index <100; index++) {
        if(index == 30 || index == 60 || index == 90){
            console.log('Esto se ejecuta antes de la operación asincrónica'); //primer console log  
        }   
    }


    // aunque setTimeout permite que la función de callback se ejecute de manera asíncrona después de un cierto tiempo, sigue siendo parte de la secuencia de ejecución del hilo principal de JavaScript. Por lo tanto, en el ejemplo proporcionado, el bucle for bloqueará el hilo principal hasta que se complete, independientemente del setTimeout programado.

    for (let index = 0; index <100000; index++) {
        if(index == 30000 || index == 60000 || index == 90000){
            console.log("Ejecutando proceso 1....");    
        }   
    }

}
// El callback de setTimeout no se ejecuta hasta que el motor de JavaScript ha terminado de ejecutar todas las operaciones sincrónicas en la cola de eventos y ha vuelto al ciclo de eventos para verificar si hay tareas asincrónicas que necesitan ejecutarse. En este punto, si ha pasado el tiempo especificado en setTimeout, el callback se ejecutará.


// ---> setTimeout --> console.log ---> for
// console.log ---> for --> setTimeout
// esperamos a que acabe console.log
// esperamos a que acabe for
// esperamos a que acabe setTimeout


   
// funcion que se ejecutará una vez que la operación asincrónica haya terminado
hacerAlgo(() => {
    console.log('Esto se ejecuta después de la operación asincrónica'); //tercer console log
});
   

//? ¿ Qué pasa con las funciones callbacks ?


// * Funciones de devolución de llamada Sincronia

// Una función de devolución de llamada es síncrona cuando se ejecuta inmediatamente después de que se haya completado la operación que la desencadena.

// Esto significa que el código de la función de devolución de llamada se ejecuta de manera secuencial, en el mismo hilo de ejecución que la operación principal.

// Un ejemplo común de una función de devolución de llamada síncrona es cuando se pasa una función como argumento a un método de array, como forEach() o map(). La función de devolución de llamada se ejecuta para cada elemento del array de manera síncrona.


// * Funciones de devolución de llamada asíncronas:

// Una función de devolución de llamada es asíncrona cuando no se ejecuta inmediatamente después de que se haya completado la operación que la desencadena.

// En cambio, la función de devolución de llamada asíncrona se coloca en una cola de tareas (task queue) y se ejecuta más tarde, después de que se hayan completado otras operaciones síncronas en el hilo de ejecución principal.

// Un ejemplo común de una función de devolución de llamada asíncrona es cuando se pasa una función como argumento a métodos que realizan operaciones asíncronas, como setTimeout(), fetch(), o manejo de eventos en el DOM.



const array = [1, 2, 3, 4];

// La función callback se ejecuta inmediatamente para cada elemento, y forEach espera a que se complete la ejecución de la función callback para ese elemento antes de pasar al siguiente elemento.

array.forEach(element => {
    console.log(element); // Función de devolución de llamada síncrona
});

console.log('Fin del bucle');


//  amix 1, amix 2, amix 3, amix 4, amix 5  --> LIFO
/*  
    Pila de llamadas (en orden de entrada):

    1  4
    2  3    
    3  2 
    4  1  
*/

//-->  1, 2, 3, 4, Fin del bucle 
// --> 4, 3, 2, 1, Fin del bucle

// // ejemplo asincronia


// // Continúa la asincronia

console.log('Función asincrona');


function operacionAsincrona(){
    array.forEach(elemento => {
        console.log("operacion sincrona");
        setTimeout(() => {
            console.log("Operación asincrona", elemento);
        }, 300);
    });
}

operacionAsincrona();





//* ============= Promesas ===================

// Las promesas son objetos que representan el resultado eventual de una operación asincrónica. Una promesa puede estar en uno de tres estados: pendiente, resuelta (fulfilled), o rechazada (rejected). Las promesas permiten encadenar operaciones asincrónicas de una manera más legible y manejable que los callbacks.


// Una promesa es un objeto que puede estar en uno de los tres estados:

// Pendiente (pending): El estado inicial; ni cumplida ni rechazada.
// Cumplida (fulfilled): La operación se completó exitosamente.
//Rechazada (rejected): La operación falló.


// creación de promesa


// Una promesa se puede crear con la función new Promise() y se le pasará una función de devolución de llamada (callback) que se ejecutará cuando se complete la operación asincrónica.


// const miPromesa = new Promise((resolve, reject) => {
//     Operación asíncrona
//     if (/* operación exitosa */) {
//       resolve(resultado); // Resuelve la promesa con éxito
//     } else {
//       reject(error); // Rechaza la promesa con un error
//     }
//   });


// segunda manerra de crear una promesa
function crearPromesa(fn, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const resultado = fn();
                resolve(resultado);
            } catch (error) {
                reject(error);
            }
        }, ms);
    });
}
  

// manejo de promesas o consumo de ellas
// La función resolve() se ejecuta cuando la promesa se haya completado exitosamente. La función reject() se ejecuta cuando la promesa se haya rechazado.

// para manejar el resultado de una promesa se puede utilizar la función .then() o .catch()

// .then() se utiliza para especificar qué hacer cuando la promesa se cumple (pasando el resultado como argumento). Puede encadenarse para manejar múltiples promesas secuencialmente.
// .catch() se utiliza para manejar cualquier error que ocurra en la cadena de promesas (pasando el error como argumento).


// promesa
//  .then(resultado => {
//     console.log('Promesa cumplida con resultado:', resultado);
//  })
//  .catch(error => {
//     console.error('Error en la promesa:', error);
//  });



//  === Encadenamiento de promesas ==========

// La función then() es una función de devolución de llamada que se ejecuta cuando la promesa se completa. Puede encadenarse para manejar muiltples promesas secuencialmente.


// promesa
// .then(result => {
//     console.log('Promesa resuelta:', result);
// })
// .then(result => {
//     console.log('Promesa cumplida con resultado:', result);
// })
// .catch(error => {
//     console.error('Error en la promesa:', error);
// });


// Simulación de una función que procesa los datos obtenidos
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        // simulamos una solicitud a la base de datos
        setTimeout(() => {
            try {
                const datos = {mensaje: "Datos obtenidos de la base de datos"};
                resolve(datos);                
            } catch (error) {
                reject(error);
            }
            
        }, 3000);    
        console.log('Obteniendo datos de la base de datos...');
    })
}


function procesarDatos(){

   return obtenerDatos()
        .then(datosObtenidos =>{
            console.log('datos obtenidos: ', datosObtenidos);

            return new Promise((resolve, reject) => {
                // simulamos la solicitud de procesamiento de los datos

                setTimeout(() => {
                    try{
                        datosObtenidos.mensaje = datosObtenidos.mensaje.toUpperCase();
                        resolve(datosObtenidos);
                    }
                    catch(error){
                        reject(error);
                    }
                }, 3000);
            })
            
        })
        .catch(error =>{
            console.log('error', error);
        })     

}

// si obtienes los datos, quiero que los conviertas a mayúsculas
procesarDatos()
    .then(datosProcesados =>{
        console.log('datos procesados: ', datosProcesados);
    })
    .catch(error =>{
        console.log('error', error);
    });


// Función que simula una operación asíncrona de obtener un número aleatorio entre 0 y 100
function numeroAleatoriof () {
    return new Promise((resolve, reject )=> {
        setTimeout (() => {
            try{
                const numeroAleatorio =  Math.floor( Math.random() * 100)
                resolve(numeroAleatorio);
                console.log(numeroAleatorio)
            }
            catch(error){
                reject(error);
            }
            
        }, 3000);
    })
}


// functionPromise().then( resolve => {
//     console.log('resolve', resolve);
// })
 

// Función que simula una operación asíncrona de elevar un número al cuadrado

function numeroAleatorioCuadrado(){
    return numeroAleatoriof()
     .then (numeroAleatorio => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try{
                    const numeroObtenido= numeroAleatorio * numeroAleatorio
                    resolve(numeroObtenido);
                    console.log(numeroObtenido);
                }
                catch(error){
                    reject(error);
                }
            }, 3000)
        })

     })
    .catch(error => {
        console.log('error', error);
    })
}

numeroAleatorioCuadrado()
.then(resultadoAleatorio => {
    console.log('resultado cuadrado', resultadoAleatorio);})
.catch(error =>{
    console.log('error', error);
});



// 2. Promesas con async/await (segunda manera de crear promesas)
// async/await es una sintaxis más moderna y legible para trabajar con promesas. Una función marcada con async siempre devuelve una promesa, y await se utiliza para esperar a que se resuelva una promesa.


async function funcionAsincrona() {
    try {
       const resultado = await numeroAleatorioCuadrado(); // await convierte una promesa en una función síncrona 
       
       console.log("resultado", resultado);
       console.log("peticion sincrona esperando....");
    //    const resultado2 = await promesa2;
    //    console.log(resultado2);
    } catch (error) {
       console.error(error);
    }
}
   
   funcionAsincrona();
   

// ========= FETCH =========
// Sí, fetch es una función incorporada en JavaScript que se utiliza para realizar solicitudes HTTP. fetch devuelve una promesa que resuelve a la respuesta de la solicitud HTTP. Esto significa que puedes usar .then() para manejar la respuesta cuando la promesa se cumple, o .catch() para manejar cualquier error que ocurra durante la solicitud.

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });


// usando async/await
async function obtenerPosts(){
    const response  =  await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log("data", data);
    console.log("Siguiente instrucción...");
    return data;
}

console.log(obtenerPosts());


