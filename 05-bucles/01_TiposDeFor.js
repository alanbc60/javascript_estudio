

// 1. for tradicional
// USO:  se utiliza cuando conoces de antemano el número de iteraciones que necesitas realizar.

for (let i = 0; i<10; i++) {
    console.log("i: ",i);
    
}

// 2. for in
// USO: se utiliza para iterar sobre las propiedades enumerables de un objeto (incluyendo las propiedades del prototipo).

const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
for (let propiedad in persona) {
    console.log("propiedad: ",propiedad);
    console.log("valor: ",persona[propiedad]);
}


// 3. for of

// USO: se utiliza para iterar sobre valores de objetos iterables como arrays, cadenas de texto, mapas, conjuntos, etc.

const numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
    console.log("numero: ",numero);
}


// Podemos recorrer un string con todos los tipos de for

const cadena = "hola";
for (let letra of cadena) {
    console.log("letra: ",letra);       
}

for (let i = 0; i < cadena.length; i++) {
    console.log("letra: ",cadena[i]);       
}

for (let letra in cadena) {
    // console.log("letra: ",letra);       
    console.log("valor: ",cadena[letra]);
}


// ========= iterando un objeto ============

//* con el for in podemos iterar un objeto

//! No se puede iterar un objeto con for tradicional
console.log("============ usando for tradicional ===============");
for (let i = 0; i < persona.length; i++) {
    console.log("valor: ",i[persona[i]]);
}

// podemos recorrer un objeto con for of usando objeto.values() o objeto.keys()

for (let valor of Object.values(persona)) {
    console.log("valor: ",valor);
}

for (let clave of Object.keys(persona)) {
    console.log("clave: ",clave);
}


// ========= iterando un array ============

const numeros2 = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
    console.log("valor: ",numeros[i]);
}

// con el for in podemos iterar un array
for (const num of numeros2) {
    console.log("valor: ",num);
}

// con el for of podemos iterar un array
for (const num of numeros2) {
    console.log("valor: ",num);
}


// ========= iterando un array de objetos ============


console.log("============ array de objetos ===============");
const personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Pedro", edad: 40 }
];
for (const persona of personas) {
    console.log("persona: ",persona);
}
// usando for in
for(const clave in personas) {
    // console.log("clave: ",clave);
    console.log("valor: ",personas[clave]);
}

for (let i = 0; i < personas.length; i++) {
    console.log("valor: ",personas[i]);
}


console.log("============ iterando String ===============");

// 1. usando el for tradicional
for (let i = 0; i < cadena.length; i++) {
    console.log("valor: ",cadena[i]);
}

// 2. usando el for in
for (const letra of cadena) {
    console.log("valor: ",letra);
}

// 3. usando el for of
for (const letra of cadena) {
    console.log("valor: ",letra);
}


