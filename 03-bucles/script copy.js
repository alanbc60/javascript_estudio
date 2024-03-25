// 1. **Dada la misma `nums`matriz que se muestra arriba, escriba algún código para registrar sus elementos en orden inverso usando un `for`bucle estandar.**
// const **`nums = [1, 10, 5, -9, -1];`**

const nums = [1,10,5,-9,-1];
for(i=nums.length-1; i>=0; i--){
    console.log(nums[i]);
}


// 2. **Escriba algún código para lograr el siguiente resultado: (0, 0) (1, 0) (2, 0) (0, 1) (1, 1) (2, 1) (0, 2) (1, 2) (2, 2)**
//const array = [];
for(i=0; i<=2; i++){
    for(j=0; j<=2; j++){
        console.log((i,j));
    }
}


// 3. **Cree una estructura repetitiva para multiplicar todos los números en un array determinado y devolver el producto.**
//     **`var nums = [1, 5, 70, -2, -1, -0.5];`**
const nums6 = [1, 5, 70, -2, -1, -0.5];
for(i=1; i=nums6.length; i++){
    const multiplicación = i*multiplicacion;
    console.log(multiplicación)
}


// imprimir el dibujo 

// markdownCopy code
// *
// **
// ***
// ****
// *****
 



// Escribe un programa que genere los primeros 20 términos de la secuencia de Fibonacci utilizando un bucle for.



// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...



// Imprimir números del 1 al 10 excepto el 5



// Imprimir números par al 10



// Encontrar el primer número divisible por 7 entre 1 y 100



// Encontrar el primer número mayor que 5 en un arreglo



// Escribe un programa que calcule el factorial de un número dado utilizando un bucle while.


// 1. **Dada la misma `nums`matriz que se muestra arriba, escriba algún código para registrar sus elementos en orden inverso usando un `for`bucle estandar.**
// const **`nums = [1, 10, 5, -9, -1];`**

const nums = [1,10,5,-9,-1];
for(i=nums.length-1; i>=0; i--){
    console.log(nums[i]);
}


// 2. **Escriba algún código para lograr el siguiente resultado: (0, 0) (1, 0) (2, 0) (0, 1) (1, 1) (2, 1) (0, 2) (1, 2) (2, 2)**
//const array = [];
for(i=0; i<=2; i++){
    for(j=0; j<=2; j++){
        console.log((i,j));
    }
}


// 3. **Cree una estructura repetitiva para multiplicar todos los números en un array determinado y devolver el producto.**
//     **`var nums = [1, 5, 70, -2, -1, -0.5];`**
const nums6 = [1, 5, 70, -2, -1, -0.5];
for(i=1; i=nums6.length; i++){
    const multiplicación = i*multiplicacion;
    console.log(multiplicación)
}


// imprimir el dibujo 

// markdownCopy code
// *
// **
// ***
// ****
// *****
 



// Escribe un programa que genere los primeros 20 términos de la secuencia de Fibonacci utilizando un bucle for.



// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...



// Imprimir números del 1 al 10 excepto el 5
for(i=0; i<11; i++){
    if i !== 5{
    console.log(i);
}
}


// Imprimir números pares del 1 al 10
for(i=0; i<11; i++){
    if i%2 === 0{
    console.log(i);
}
}


// Encontrar el primer número divisible por 7 entre 1 y 100
for(i=0; i<101; i++){
    if i%7 === 0{
        console.log(i)
    }
}


// Encontrar el primer número mayor que 5 en un arreglo
for(i=0; i<array.length; i++){
    if array[i]>5{
        console.log(i)
    }
}

// Escribe un programa que calcule el factorial de un número dado utilizando un bucle while.
 const num = 1; 
 const factorial = 5;
 const factorial2 = 1;

 while(num=factorial){
    factorial2 = factorial2*num; //fcatorial 2= 1 factorial 2= 2 factorial 3= 6 factorial 3 24 fcatial 4 120
    num =num+1
 }
 console.log(factorial2);

//  functionfactorial(arg){

//     // factorial de cero y el factorial 1 ---- > caso base
//     if (arg===0 || arg===1){
//         return 1;
//     }
//     else{
//         return arg * functionfactorial(arg-1);
//     }

//     // caso base return 1;
//  }


//  function pow(base, n) {
//     let result = 1;
//     if (n===0){
//         return 1;
//     }
//     else {
//        return base * pow(base, n-1);
//     }ff
//   }
  

    //   function pow(base, n) {
    //     let result = 1;
    
    //     // multiply result by x n times in the loop
    //     for (let i = 0; i < n; i++) {
    //       result = result * base; // 2 * 4 * 8
    //     }
    
    //     return result;
    //   }
    
    //   alert( pow(2, 3) ); // 8




    // Podemos calcular la suma de los primeros n números naturales de forma recursiva de la siguiente manera:

    function naturales(n){
        if (n===1)
            return 1;
        else 
        return n + naturales (n-1);
    }

    function hanoi(numerodiscos, torre1, torre2, torre3){
        if(numerodiscos===1){
            return console.log(`Mover disco de ${torre1} a ${torre3}`);
        }
        // n - 1 el disco más grande que se queda 
        hanoi(numerodiscos-1, torre1, torre3, torre2); // movemos todos los discos excepto el mas grande que se queda
        


        // pila


        //Pila de llamadas (en orden de entrada):

        // 1. hanoi(3, torre1, torre3, torre2)
        // 2. hanoi(2, torre1, torre2, torre3)
        // 3. hanoi(1, torre1, torre3, torre2)


        // caso base  ---> sacamos de la pila

        // numerodiscos = 1
        // hanoi(numerodiscos-1, torre1, torre3, torre2); Resolvemos  ---> sacamos de la pila


        // numerodiscos = 2
        // hanoi(numerodiscos-1, torre1, torre3, torre2); //   --> sacamos de la pila

        // numerodiscos = 3
        // hanoi(numerodiscos-1, torre1, torre3, torre2); // resolvemos


        // mueves el disco 1 a la torre 2 
        //caso base disco 2 a torre3
        // mueves el disco 2 a la torre 3

        console.log(`Mover disco de ${torre1} a ${torre3}`);
        hanoi(numerodiscos-1, torre2, torre1, torre3) // movemos todos los discos desde la torre auxilar a la torre destino


    }