
/*
    Un WeakMap es una colección de pares clave-valor en la que las claves deben ser objetos y los valores 
    pueden ser arbitrarios. Las claves de un WeakMap son "débiles", lo que significa que no previenen que 
    el recolector de basura elimine las claves si no hay otra referencia a ellas.

    Características:

    Claves débiles: Si no hay otras referencias a la clave, puede ser recolectada por el recolector de basura.
    No iterables: No puedes iterar sobre las claves o valores de un WeakMap.
    Métodos principales:

    set(key, value): Añade o actualiza el valor de una clave.
    get(key): Devuelve el valor asociado con la clave.
    has(key): Devuelve true si la clave existe en el WeakMap.
    delete(key): Elimina el elemento con la clave especificada.
*/

const weakMap = new WeakMap();
const obj = {
    "name": "Alan",
    "age": 26,
    "carrera": "Ingeniería de Software"
};

console.log("==== metodo set() ====");
weakMap.set(obj, 'value');

console.log("==== metodo get() ====");
console.log(weakMap.get(obj)); // value

console.log("==== metodo has() ====");
console.log(weakMap.has(obj)); // true

console.log("==== metodo delete() ====");
weakMap.delete(obj);
console.log(weakMap.has(obj)); // false
