La Programación Orientada a Objetos (POO) es un paradigma de programación que utiliza objetos y sus interacciones para diseñar aplicaciones y programas de software. En JavaScript, aunque es un lenguaje de programación basado en prototipos, se puede implementar POO de manera efectiva. A continuación, te explicaré los conceptos fundamentales de POO en JavaScript, incluyendo cómo definir clases, crear instancias de objetos, herencia, y encapsulamiento.

Clases
En JavaScript, las clases son una mejora sintáctica sobre la herencia basada en prototipos. Una clase es una plantilla para la creación de objetos. Define un conjunto de propiedades y métodos que serán comunes a todos los objetos creados a partir de ella.

class Coche {
 constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
 }

 presentar() {
    return `Este coche es un ${this.marca} ${this.modelo}.`;
 }
}
Instancias de Objetos
Una instancia de un objeto es un objeto creado a partir de una clase. Puedes crear una instancia de la clase Coche de la siguiente manera:

let miCoche = new Coche('Toyota', 'Corolla');
console.log(miCoche.presentar()); // "Este coche es un Toyota Corolla."
Herencia
La herencia permite que una clase herede propiedades y métodos de otra clase. En JavaScript, esto se logra mediante la palabra clave extends.

class CocheDeportivo extends Coche {
 constructor(marca, modelo, velocidadMaxima) {
    super(marca, modelo);
    this.velocidadMaxima = velocidadMaxima;
 }

 presentar() {
    return `${super.presentar()} Su velocidad máxima es ${this.velocidadMaxima} km/h.`;
 }
}

let miCocheDeportivo = new CocheDeportivo('Ferrari', '488 Pista', 330);
console.log(miCocheDeportivo.presentar()); // "Este coche es un Ferrari 488 Pista. Su velocidad máxima es 330 km/h."
Encapsulamiento
El encapsulamiento es el principio de ocultar los detalles internos de cómo un objeto realiza sus operaciones. En JavaScript, esto se logra mediante el uso de métodos y propiedades privadas.

class Coche {
 #marca;
 #modelo;

 constructor(marca, modelo) {
    this.#marca = marca;
    this.#modelo = modelo;
 }

 presentar() {
    return `Este coche es un ${this.#marca} ${this.#modelo}.`;
 }
}
En este ejemplo, #marca y #modelo son propiedades privadas, lo que significa que solo pueden ser accedidas dentro de la clase Coche.

Polimorfismo
El polimorfismo permite que un objeto se comporte de diferentes maneras dependiendo de su tipo o clase. En JavaScript, el polimorfismo se puede lograr a través de la sobreescritura de métodos en clases derivadas.

class Coche {
 presentar() {
    return 'Este es un coche.';
 }
}

class CocheDeportivo extends Coche {
 presentar() {
    return 'Este es un coche deportivo.';
 }
}

let miCoche = new Coche();
let miCocheDeportivo = new CocheDeportivo();

console.log(miCoche.presentar()); // "Este es un coche."
console.log(miCocheDeportivo.presentar()); // "Este es un coche deportivo."
