
//  =========================== Ejercicio 1 ===========================
// **Suma de elementos:**
//   a. Escribe un programa que sume todos los números en un array dado.
//   - Datos de entrada: Un array de números, por ejemplo: **`[1, 2, 3, 4, 5]`**.

const numeros = [1,2,3,4,5];
let suma = 0;
for(let i = 0; i< numeros.length; i++){
    suma += numeros[i];
};
console.log(suma);

//  =========================== Ejercicio 2 ===========================

//   2. **Encontrar el máximo y el mínimo:**
//      q. Escribe un programa que encuentre el número máximo y el número mínimo en un array dado.
//    - Datos de entrada: Un array de números, por ejemplo: **`[10, 5, 3, 8, 15]`**.

const array = [10, 5, 3, 8, 15];
// ordenar el arreglo

for(let i = 0; i<array.length; i++){
    for(let j = 0; j<array.length; j++){
        if(array[i] < array[j]){
            let aux = array[i];
            array[i] = array[j];
            array[j] = aux;
        }
    }
}

console.log(`El número más grande es ${array[array.length - 1]} y el mínimo es ${array[0]}`);



//  =========================== Ejercicio 3 ===========================
// 1. Escribe un programa que filtre los números pares de un array dado y devuelva un nuevo array solo con esos números pares.
// - Datos de entrada: Un array de números, por ejemplo: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrFiltered = arr.filter(num => num % 2 === 0);
console.log(arrFiltered);



//  =========================== Ejercicio 4 ===========================

// 1. Escribe un programa que elimine todos los elementos de un array dado que sean iguales a un valor específico.
// - Datos de entrada: Un array de elementos y un valor específico a eliminar, por ejemplo: **`[1, 2, 3, 4, 5, 3, 6, 7, 3]`** y **`3`**.

const array4 = [1, 2, 3, 4, 5, 3, 6, 7, 3];
let array4Filtered = array4.filter(num => num !== 3);
console.log(array4Filtered);

//  =========================== Ejercicio 5 ===========================


const items = ['Oranges','Oregano','Mozzarella cheese','Milk','Detergent powder'];

const list = (array) => {
    array.array.map(element => {
        document.getElementById("lista").innerHTML = `
            <li>${element}</li>
        `;
    });
}


// mostrar esto en un html con un id="lista" sin un bucle
// 1. Oranges
// 2. Oregano
// 3. Mozzarella cheese
// 4. Milk
// 5. Detergent powder


// https://www.codeguage.com/courses/js/arrays-quiz