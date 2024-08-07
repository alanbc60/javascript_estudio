
/*
Un WeakSet es una colección de objetos, donde los objetos son "débiles", es decir, si no hay otra 
referencia a un objeto almacenado en un WeakSet, el objeto puede ser recolectado por el recolector de basura.

Características:

Objetos débiles: Si no hay otras referencias a un objeto, puede ser recolectado por el recolector de basura.
No iterables: No puedes iterar sobre los valores de un WeakSet.
Métodos principales:

add(value): Añade un nuevo objeto al WeakSet.
has(value): Devuelve true si el objeto existe en el WeakSet.
delete(value): Elimina el objeto especificado del WeakSet.

*/

const weakSet = new WeakSet();
const obj = {};

console.log("==== metodo add() ====");
weakSet.add(obj);
console.log("==== metodo has() ====");
console.log(weakSet.has(obj)); // true
console.log("==== metodo delete() ====");
weakSet.delete(obj);
console.log(weakSet.has(obj)); // false
