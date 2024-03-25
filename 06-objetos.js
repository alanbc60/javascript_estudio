
// 

const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};
  

  // tercera forma de acceeder a un valor
  const dog = "Hunter";
  const myBreed = dogs[dog];
  console.log(myBreed);

  //imprimir el objeto
  console.log(dogs);
  

const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };

  // Actualizar un valor del objeto
myDog["name"] = "Dachshund";

// segunda manera de actualizar
myDog.tails = 40;


// agregar un nuevo valor
myDog["bark"] = "woof"; // o myDog.bark = "woof"; cualquiera de las 2 se puede

console.log(myDog);
// borrar un valor
delete myDog.tails;

console.log(myDog);

