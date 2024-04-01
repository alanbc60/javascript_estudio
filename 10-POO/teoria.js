//La Programación Orientada a Objetos (POO) es un paradigma de programación que utiliza objetos y sus interacciones para diseñar aplicaciones y programas de software. En JavaScript, aunque es un lenguaje de programación basado en prototipos, se puede implementar POO de manera efectiva. A continuación, te explicaré los conceptos fundamentales de POO en JavaScript, incluyendo cómo definir clases, crear instancias de objetos, herencia, y encapsulamiento.

//============================== Clases =============================
// En JavaScript, las clases son una mejora sintáctica sobre la herencia basada en prototipos. Una clase es una plantilla para la creación de objetos. Define un conjunto de propiedades y métodos que serán comunes a todos los objetos creados a partir de ella.

// =============== Creación de Clases =================

//Los atributos de una clase en JavaScript son propiedades que se asocian con instancias de la clase. Estos atributos pueden ser de cualquier tipo, incluyendo números, cadenas de texto, objetos, y más. Los atributos se definen dentro del constructor de la clase o directamente en el cuerpo de la clase.


// En esta version necesita establecer la palabra constructor.
class Coche {

   // Constructor   
   constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
   }

   // Metodos
   presentar() {
      return `Este coche es un ${this.marca} ${this.modelo}.`;
   }
   arranque() {
      return 'El coche ha arrancado.';
   }

}


// Manera 2 --> ES6
class Automovil {

   constructor(marcaAuto = 'Toyota', modelo = 'Vacio', anio = 0)  {
       // marca, modelo y anio son atributos y toman los valores perdeterminados
       this.marca = marcaAuto;
       this.modelo = modelo;
       this.anio = anio;
   }

   mostrarInfo() {
       console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
   }
}






// ================ Instancias de Objetos  ===================
//Una instancia de un objeto es un objeto creado a partir de una clase. Puedes crear una instancia de la clase Coche de la siguiente manera:


const autoPredeterminado = new Automovil();
console.log(autoPredeterminado.marca); //toyota
console.log(autoPredeterminado.modelo);


autoPredeterminado.marcaAuto = 'Fiat';  // Defino un nuevo atributo
console.log(autoPredeterminado);

const autoClase = new Automovil('Fiat', 'Uno', 2000);
console.log(autoClase);



// ================== Herencia =============================
//La herencia permite que una clase herede propiedades y métodos de otra clase. En JavaScript, esto se logra mediante la palabra clave extends.

class CocheDeportivo extends Coche {
 constructor(marca, modelo, velocidadMaxima) {
    // super() llama al constructor de la clase padre
    super(marca, modelo);
    this.velocidadMaxima = velocidadMaxima;
 }

 presentar() {
    return `${super.presentar()} Su velocidad máxima es ${this.velocidadMaxima} km/h.`;
 }
}

let miCocheDeportivo = new CocheDeportivo('Ferrari', '488 Pista', 330);
console.log(miCocheDeportivo.presentar()); // "Este coche es un Ferrari 488 Pista. Su velocidad máxima es 330 km/h."
// ================= Encapsulamiento ===========================
//El encapsulamiento es el principio de ocultar los detalles internos de cómo un objeto realiza sus operaciones. En JavaScript, esto se logra mediante el uso de métodos y propiedades privadas.

// Definimos una clase "Coche"

// El encapsulamiento se refiere a la práctica de ocultar los detalles internos de cómo un objeto realiza sus operaciones y exponer solo lo que es necesario a través de métodos públicos.


console.log("==== Encapsulamiento ====")

class AutoEncap {
   // Constructor de la clase
   constructor(marca, modelo, anio) {
       // Variables privadas
       let _marca = marca; //  "let _nombreAtributo" indica que la variable es privada
       let _modelo = modelo;
       this.anio = anio;  //"this." indica que la variables es pública 

       // Método público para obtener la marca
       this.getMarca = function() { // método get son método propios de las clases, 
           return _marca;
       };

       // Método público para obtener el modelo
       this.getModelo = function() {
           return _modelo;
       };

       // Método público para obtener el año
       this.getAño = function() {
           return this.anio;
       };

       // Método público para establecer la marca
       this.setMarca = function(marca) {
           _marca = marca;
       };

       // Método público para establecer el modelo
       this.setModelo = function(modelo) {
           _modelo = modelo;
       };

       // Método público para establecer el año
       this.setAño = function(año) {
           this.anio = año;
       };

       // funcion privada

      //  _funcionPrivada = function() {
      //    console.log("soy una funcion privada");
      //  }

   }
}


// Creando una instancia de la clase Coche
let miCoche = new AutoEncap('Toyota', 'Corolla', 2020);

console.log(miCoche._marca);
console.log(miCoche.anio);

// Accediendo a los métodos públicos para obtener y establecer los atributos
console.log(miCoche.getMarca()); // Toyota


// tipo objeto --> No es la manera concreta de acceder a los atributos
miCoche.anio = 2021;
const anioCoche = miCoche.anio;
console.log(anioCoche);

// usando metodos de las clases
miCoche.setAño(2024);
console.log(miCoche.getAño());


// acceder a la funcion privada

//console.log(miCoche._funcionPrivada()); // no existe la funcion privada o no esta definida


// console.log(miCoche.getModelo()); // Corolla
// console.log(miCoche.getAño()); // 2020

// // Cambiando los atributos usando los métodos públicos
// miCoche.setMarca('Honda');
// miCoche.setModelo('Civic');
// miCoche.setAño(2021);

// console.log(miCoche.getMarca()); // Honda
// console.log(miCoche.getModelo()); // Civic
// console.log(miCoche.getAño()); // 2021



// =============== Polimorfismo ================
// El polimorfismo es uno de los cuatro principios fundamentales de la Programación Orientada a Objetos (OOP), junto con la herencia, el encapsulamiento y la abstracción. El polimorfismo se refiere a la capacidad de un objeto para tomar muchas formas. En términos de programación, esto significa que un objeto puede ser utilizado como si fuera de otro tipo, siempre que tenga las mismas propiedades y métodos.

// En JavaScript, aunque no es un lenguaje puramente orientado a objetos, se pueden aplicar conceptos de OOP, incluyendo el polimorfismo, para organizar y estructurar el código de manera más eficiente y flexible.

// Polimorfismo en JavaScript
// El polimorfismo en JavaScript se puede lograr de varias maneras, pero una de las formas más comunes es a través de la herencia y la redefinición de métodos en clases derivadas. Aquí te muestro un ejemplo simple para ilustrar cómo funciona:

console.log( "==== Polimorfismo ====")


// Clase base
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    // Método que será redefinido en las clases derivadas
    hacerSonido() {
        console.log('El animal hace un sonido');
    }
}

// Clase derivada
class Perro extends Animal {
    // Redefinición del método hacerSonido
    hacerSonido() {
        console.log('El perro ladra');
    }
}

// Clase derivada
class Gato extends Animal {
    // Redefinición del método hacerSonido
    hacerSonido() {
        console.log('El gato maulla');
    }
}



// Creando instancias de las clases
let miPerro = new Perro('Fido');
let miGato = new Gato('Whiskers');

// Llamando al método hacerSonido en cada instancia
miPerro.hacerSonido(); // El perro ladra
miGato.hacerSonido(); // El gato maulla


console.log( "==== Abstracción ====")


// ¿Qué es la Abstracción?
// La abstracción se refiere a la práctica de ocultar los detalles de implementación y mostrar solo las características esenciales a los usuarios. En términos de programación, esto significa que se pueden crear clases o funciones que encapsulen la lógica interna y solo expongan una interfaz simple y clara para interactuar con ellas.

// Abstracción en JavaScript
// En JavaScript, la abstracción se puede lograr de varias maneras, pero una de las formas más comunes es a través de clases y objetos. Aquí te muestro un ejemplo simple para ilustrar cómo funciona:

// Clase abstracta



console.log("====== Abstracción ========");
class AnimalAbstracta {
    constructor(nombre) {
        if (this.constructor === Animal) {
            throw new Error("No se puede instanciar una clase abstracta");
        }
        this.nombre = nombre;
    }

    // Método abstracto
    hacerSonido() {
        throw new Error("El método hacerSonido() debe ser implementado por las clases derivadas");
    }
}

// Clase derivada
class PerroAbstracto extends Animal {
    hacerSonido() {
        console.log('El perro ladra');
    }
}

// Clase derivada
class GatoAbastracto extends Animal {
    hacerSonido() {
        console.log('El gato maulla');
    }
}

// Creando instancias de las clases

let miPerroAbs = new Perro('Fido');
let miGatoAbs = new Gato('Whiskers');



// Llamando al método hacerSonido en cada instancia

miPerro.hacerSonido(); // El perro ladra
miGato.hacerSonido(); // El gato maulla

