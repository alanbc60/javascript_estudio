console.log(hoistedVar);  // undefined
var hoistedVar = "Soy hoisted";
console.log(hoistedVar);  // "Soy hoisted"

// El código anterior se interpreta de esta manera:

var hoistedVar2;
console.log(hoistedVar2);  // undefined
hoistedVar2 = "Soy hoisted 2";
console.log(hoistedVar2);  // "Soy hoisted 2"



// ==== Usando let y const ====
console.log(hoistedLet);  // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "Soy hoisted con let";

console.log(hoistedConst);  // ReferenceError: Cannot access 'hoistedConst' before initialization
const hoistedConst = "Soy hoisted con const";
