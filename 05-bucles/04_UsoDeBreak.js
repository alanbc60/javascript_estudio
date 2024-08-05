// Uso de break
// Se usa en ciclos(for, while, do-while) y switch. Su función es salir
// del ciclo actual o bloque case(casos) antes de que haya terminado de ejecutar todos
// sus iteraciones o casos.

for( let i = 0; i < 10 ; i++ ){
    console.log(`Núm de iteración ${i}`);
    if( i === 5){
        break;
    }
}

// Salida: {0,1,2,3,4,5}
/*
A) 10 veces
B) 6 veces
C) 5 veces
D) 0 veces
*/


const signosCh42 = ["Acuario", "Geminis", "Escorpio", "Sagitario", "Sagitario", "Escorpio"]

// Imprimir los signos de la varible SignosCh42
// y dejar de imprimir cuando se encuentre a un "Escorpio"
  
for( let i = 0; i < signosCh42.length; i++ ){
    console.log(i, signosCh42[i] );
    if( signosCh42[i] === "Escorpio" ) break;        
}

// salida: 
//    Acuario
//    Geminis
//    Escorpio    



for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;  // Sale del bucle cuando i es igual a 5
    }
    console.log(i);
  }
  // Output: 0, 1, 2, 3, 4


  let i = 0;

while (i < 10) {
  if (i === 5) {
    break;  // Sale del bucle cuando i es igual a 5
  }
  console.log(i);
  i++;
}
// Output: 0, 1, 2, 3, 4

  