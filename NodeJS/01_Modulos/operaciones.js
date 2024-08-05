// 


function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}


// para exportar los modulos se usa la palabra reservada  module.exports

// module.exports = suma;


// Aqui nos obligaria a exportar el modulo con su nombre

module.exports = { suma, resta };



