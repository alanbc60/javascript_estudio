// El i que itera solo vale para string y datos No primitivos

const palabra = "hello";
for (i=0; i < 5; i++) { 
    console.log(palabra[i]);
}
// "Hello World".split("").forEach(element => console.log(element));



// los números en JavaScript no son iterables como los strings, por lo que tendrías que convertir el número en una cadena (string) para poder acceder a cada dígito individualmente. 


// TODO: las funciones callback pueden o No retornan algo y estas pueden ser interpretadas como:
// 1. function(currentValue, index, arr), thisValue)  se le conoce como "funcion de callback"
// 2. funciones flecha => Es una funcion callback



const frutas = ["manzana", "banana", "naranja", "pera", "kiwi", "coco"];
// buscar la fruta "pera"
console.log(frutas.includes("pera")); 
console.log(frutas.includes("pera", 3)); // se debe usar sin corchetes []
console.log(frutas.includes("Guayaba", 2)); // False, No esta en el arreglo
console.log(frutas.includes("manzana", 2)); // False, si esta en el arreglo pero como empieza a buscar desde el indice 2 no esta ahí


console.log("Ejercicio includes()")
console.log(frutas.includes("A")); 

const frutasQueContienenLetraA = frutas.map(elemento =>{
    return elemento.includes("a");
})

console.log(frutasQueContienenLetraA);

frutas.forEach(elemento =>{
    if (elemento.includes("a"))
        console.log(elemento);
    else
        console.log("El elemento ",elemento," no incluye la letra a")
} )


const lenguajes = ["javascript", "python", "java", "c++", "ruby"];

// usando map encontrar la j

const lenguajes2 = lenguajes.map(elemento => {
    if (elemento.includes("j"))
        console.log("El ", elemento, "incluye una j")
    else
        console.log("El ",elemento, "no incluye una j");
});


console.log(" === Ejercicio 3 includes() === ")

var paises = ["Argentin", "Bolivi", "Franci", "Rusi", "Chin", "Dominican", "Alemani"];
// Si elemento contiene una a(may o min) agregarle una "a" al final

const paises2 = paises.map(elemento => {
    if (elemento.includes("a") || elemento.includes("A") )
        return elemento + "a";
        
    else
        console.log("El elemento ", elemento, " No incluye la letra a")
        return false;
})

console.log(paises2);
