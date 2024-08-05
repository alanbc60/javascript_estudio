// ============ Variables globales ============

var globalVar = "Soy global";
let globalLet = "También soy global";
const globalConst = "Yo soy global";

// ========= Variables locales ============

function testGlobal() {
    console.log(globalVar);  // Accede a la variable global 
    console.log(globalLet);  // Accede a la variable global
    console.log(globalConst); // Accede a la variable global

    var  localVar = "Soy local";
    let  localLet = "También soy local";
    const localConst = "Yo soy local";
    console.log(localVar);  // Funciona
    console.log(localLet);  // Funciona
    console.log(localConst); // Funciona

}


console.log(globalVar);  // Accede a la variable global
console.log(globalLet);  // Accede a la variable global
console.log(globalConst); // Accede a la variable global



// si queremos acceder a una variable local fuera de su bloque de declaración causara un error
console.log(localVar);  // Error: localVar no existe



