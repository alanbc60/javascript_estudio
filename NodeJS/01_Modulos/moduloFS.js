// El módulo fs en Node.js es uno de los módulos más importantes y se utiliza para interactuar con el sistema de archivos. Proporciona una API para trabajar con archivos y directorios, permitiéndote realizar operaciones como leer, escribir, actualizar y borrar archivos y carpetas.


const fs = require('fs');

// ======== Lectura de archivos =========
// se usa fs.readFile() para leer el contenido de un archivo de manera asincrona

fs.readFile('./archivo.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});
// fs.readFileSync() lee el contenido de un archivo de manera sincrona

const data = fs.readFileSync('./archivo.txt');
console.log(data.toString());

// ===== Escritura de archivos =========

// fs.writeFile() se usa para escribir un archivo de manera asincrona, reescribiendo el archivo si ya existe
fs.writeFile('./archivo.txt', 'Soy un archivo de texto nuevo', (err) => {
    if (err) throw err;
    console.log('El archivo se ha escrito correctamente');
});

// fs.writeFileSync() --> Escribe datos en un archivo de manera síncrona.

fs.writeFileSync('archivo.txt', 'Nuevo contenido', 'utf8');
console.log('El archivo ha sido guardado.');


// fs.appendFile()
// Agrega datos al final de un archivo de manera asíncrona.
fs.appendFile('./archivo.txt', 'agregando nuevo texto :)', (err) => {
    if (err) throw err;
    console.log('El archivo se ha escrito correctamente');
});

// fs.appendFileSync()
// Agrega datos al final de un archivo de manera síncrona.
fs.appendFileSync('archivo.txt', 'agregando nuevo texto', 'utf8');
console.log('El archivo ha sido guardado.');


// ==========

