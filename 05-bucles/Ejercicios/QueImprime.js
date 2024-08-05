// Ejercicio 1.

const signosZodiacales = [];

// No entre en el bucle , ya que evalua la condición una vez antes de entrar en el bucle.
for( let i = 0; i < signosZodiacales.length ; i++ ){
    console.log( i, signosZodiacales[i] );
}


// Ejercicio 2.
const signosZodiacales2 = 100;

for( let i = 0; i < signosZodiacales2.length ; i++ ){
    console.log( i, signosZodiacales[i] );
}

/*
A) 5 veces
B) 0 veces
C) Marca error 
D) Ciclo infinito
*/

// for(  ; index < 5 ; ){
//     console.log( index );
//     index++;
// }

// marca error,ya que la variable index no existe.

/*
A) 5 veces
B) 0 veces
C) Marca error 
D) Ciclo infinito
*/

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(j,i);
    }
    
}




// (0, 0)
// (1, 0)
// (2, 0)
// (0, 1)
// (1, 1)
// (2, 1)
// (0, 2)
// (1, 2)
// (2, 2)