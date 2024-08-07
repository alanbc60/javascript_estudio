let animal = {
    hablar() { console.log("El animal hace un sonido"); }
  };
  
  let perro = {
    ladrar() { console.log("Guau!"); }
  };
  
  perro.__proto__ = animal;
  perro.ladrar(); // Guau!
  perro.hablar(); // El animal hace un sonido