

// =========== 1. Conversion de string a number ===========

//*Conversion implicita
let a = 10 + "10";
console.log(a);

// =========== 2. Conversion de number a string ===========

//* Conversion implicita
    // cualquier operador aritmetico que no sea un +, se convierte implicitamente a number
    let b = 10 - "10";
    console.log("tipo de dato:",typeof b , " --valor: " , b);
    // Esto siempre y cuando el String no tenga un valor No numérico
    let c = 10 - "Hola";
    console.log(c); // Salida: NaN

//* Conversion explicita 
    // usamos el metodo Number()
    let b2 = 10 - Number("10");
    console.log("sexo de dato:",typeof b2 , " --valor: " , b2);


// =========== 3. Conversion de String a Boolean ===========
//*Conversion implicita
    let d = "true";
    console.log("tipo de dato:",typeof d , " --valor: " , d);

//* Conversion explicita
    // usamos el metodo Boolean()
    let d2 = Boolean("true");
    console.log("sexo de dato:",typeof d2 , " --valor: " , d2);

// =========== 4. Conversion de Boolean a String ===========
let e = true;

//*Conversion explicita (Unica manera de hacerlo)
let f = String(e);
console.log("tipo de dato:",typeof f , " --valor: " , f);
