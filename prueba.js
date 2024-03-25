// 


// const ejemploPromesa = () => Promise.resolve("A");

// function primeraFuncion() {
//     ejemploPromesa().then((result) => {
//         console.log("B");
//     })
// }

// async function segundaFuncion() {
//     console.log(await ejemploPromesa());
//     console.log("B");
// }

// primeraFuncion();
// segundaFuncion();


// let cadena  = "parangaricutirimicuaro";
// let caracter = "i";
// function enumerar(cadena, caracter){
//     let contador = 0;

//     for (let i = 0; i < cadena.length; i++) {
//         if(cadena[i] === caracter){
//             contador++;
//         }
//     }
//     return contador;
// }

// console.log(enumerar(cadena, caracter));

const myNumbers = [1,2,3,4,5,6,7];

const myFunction = arr =>{
    return arr.map (x => x + 3).filter(x  => x<7);
}

console.log(myFunction(myNumbers))