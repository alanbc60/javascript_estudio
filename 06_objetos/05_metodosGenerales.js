// JavaScript proporciona varios métodos para trabajar con objetos, como Object.keys(), Object.values(), 
// Object.entries(), Object.assign(), entre otros.


//* 1. Object.keys(obj) -->Este método devuelve un array que contiene las claves de todas las propiedades 
//enumerables del objeto.

const objKeys = { a: 1, b: 2, c: 3 };
console.log(Object.keys(objKeys)); // ["a", "b", "c"]


//* 2.Object.values(obj)
//Este método devuelve un array que contiene los valores de todas las propiedades enumerables del objeto.

const objValues = { a: 1, b: 2, c: 3 };
console.log(Object.values(objValues)); // [1, 2, 3]

//* 3. Object.entries(obj)
// Este método devuelve un array de arrays, donde cada subarray es un par clave-valor correspondiente a 
//una propiedad enumerable del objeto.

const objEntries = { a: 1, b: 2, c: 3 };
console.log(Object.entries(objEntries)); // [["a", 1], ["b", 2], ["c", 3]]


//* 4.Object.assign(target, ...sources)

// Este método se utiliza para copiar los valores de todas las propiedades enumerables de uno o más objetos 
//fuente a un objeto destino. Devuelve el objeto destino.
//Modifica las propiedades del objetivo
const objetivo = { a: 1, b: 2 };
const fuente = { b: 4, c: 5 };
const returnedTarget = Object.assign(objetivo, fuente);
console.log(objetivo); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }


//* 5. Object.getOwnPropertyNames(obj)
// Este método devuelve un array que contiene todas las claves (enumerables o no) encontradas directamente 
//en un objeto.

const objgetOwnPropertyNames = { a: 1, b: 2, c: 3 };
Object.defineProperty(objgetOwnPropertyNames, 'd', {
 value: 4,
 enumerable: false
});

// enumerable está establecido en true, la propiedad será visible cuando se itere sobre las propiedades 
//del objeto (por ejemplo, usando un bucle for...in o el método Object.keys()). Si enumerable está 
// establecido en false, la propiedad no será visible en estas enumeraciones.

console.log(Object.getOwnPropertyNames(objgetOwnPropertyNames)); // ["a", "b", "c", "d"]


//* 6. Object.getOwnPropertySymbols(obj)
// Este método devuelve un array que contiene todos los símbolos encontrados como propiedades en un objeto.

const objgetOwnPropertySymbols = { a: 1, b: 2, c: 3 };
const symbol = Symbol('symbol');
objgetOwnPropertySymbols[symbol] = 3;

console.log(Object.getOwnPropertySymbols(objgetOwnPropertySymbols)); // [Symbol(symbol)]

//* 7. Object.freeze(obj)
// Este método congela un objeto, lo que significa que no se pueden agregar nuevas propiedades al objeto, 
// no se pueden eliminar propiedades existentes, y no se pueden cambiar los valores de las propiedades existentes.

let objFrezzes = { a: 1, b: 2, c: 3 };

Object.freeze(objFrezzes);

objFrezzes.a = 4; // No tiene efecto
console.log(objFrezzes.a); // 1

//* 8.Object.seal(obj)
// Este método sella un objeto, lo que significa que no se pueden agregar nuevas propiedades al objeto, y 
// no se pueden eliminar propiedades existentes. Sin embargo, los valores de las propiedades existentes 
// pueden cambiar.


console.log(" == seal ==")
const objSeal = { a: 1, b: 2, c: 3 };
Object.seal(objSeal);
objSeal.a = 4; // Tiene efecto
console.log(objSeal.a); // 4
delete objSeal.a; // No tiene efecto
console.log(objSeal); 

// Para "desellar" el objeto, puedes crear una copia del objeto
//Para crear la copia de un objeto se pone con "...nombreObjetoOriginal"
//Para modificar un objeto seal se puede hacer creando una copia del objeto
const objDesellado = {...objSeal};
delete objDesellado.a;
console.log(objDesellado);
