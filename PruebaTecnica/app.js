document.addEventListener('DOMContentLoaded', function() {

    const contenedorPalabras = document.querySelector("#contenedorPalabras");
    const inputPalabras = document.querySelector("#inputBuscarPalabra");

    const btnBuscarPalabra = document.querySelector("#btnBuscarPalabra");


    btnBuscarPalabra.addEventListener('click', function(ev){
        ev.preventDefault();

        // capturar el texto del input

        const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio', 'Generation', 'Pizarron', 'Saludo', 'JavaScript'];
        const palabrasFiltradas = bigWords(inputPalabras.value, myArray);

        // Creamos una lista de las palabras filtradas
        const listaPalabras = palabrasFiltradas.map(palabra => `<li>${palabra}</li>`).join('');
        // Insertamos la lista en el contenedor
        contenedorPalabras.innerHTML = `<ul>${listaPalabras}</ul>`;
        console.log(palabrasFiltradas);

    })
});

function bigWords(palabraAbuscar, array){
    return array.filter(palabra => palabra.length > palabraAbuscar.length);
}


// Jose de Jesus Lopez Morales  -> entrevistador técnico