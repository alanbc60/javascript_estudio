console.log("============= AND ==================");
// 1. AND (&&) --> Compara dos valores y devuelve true si ambos son true
// True && True = True
// True && False = False
// False && True = False
// False && False = False

let x = 5;
let y = 10;
console.log(x > 0 && y > 0);
console.log(x < 0 && y < 0);

console.log("============= OR ==================");
// 2. OR (||) --> Compara dos valores y devuelve true si uno es true

// True || True = True
// True || False = True
// False || True = True
// False || False = False
let z = 5;
let a = 10;
console.log(z > 0 || a > 0);
console.log(z < 0 || a < 0);


console.log("============= NOT ==================");
// 3. NOT (!) --> Compara dos valores y devuelve true si uno es false

// !True = False
// !False = True
let b = 5;
let c = 10;
console.log(!b);
console.log(!b > 0);
console.log(!c > 0);


// XOR (^) --> Compara dos valores y devuelve true si uno es true y el otro false
// True XOR True = False
// True XOR False = True
// False XOR True = True
// False XOR False = False

let d = 5;
let e = 10;
console.log(d > 0 ^ e > 0);



