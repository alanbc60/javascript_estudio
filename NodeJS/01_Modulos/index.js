


// Para importar modulos se usa la palabra reservada require()
// const http = require()
// para exportar modulos se usa la palabra reservada module.exports

//* Este modo de exportacion e importacion se le conoce como CommonJS.


console.log("Hola mundo");


// importar el modulo suma provienido de suma.js
const {suma} = require("./operaciones");
console.log(suma(1, 2));


// const { resta: miResta } = require("./operaciones");
const { resta } = require("./operaciones");
console.log(resta(10, 5));




