// Document Object Model (DOM):
//? ¿Qué es el DOM?

// El DOM es una representación del contenido de una página web como un árbol de nodos, donde cada nodo representa un elemento HTML, como etiquetas <div>, <p>, <ul>, etc.
// ¿Cómo se crea el DOM?

// El navegador interpreta el HTML y crea una estructura de árbol de nodos que representa la página web.
// Cada elemento HTML es un nodo en este árbol, y pueden tener atributos, hijos (otros nodos) y contenido.
// ¿Para qué se utiliza el DOM?

// El DOM permite a los desarrolladores web acceder y manipular los elementos de una página web usando JavaScript.
// Esto significa que puedes cambiar el contenido, los estilos y la estructura de la página web dinámicamente.
// Ejemplo de manipulación del DOM:



// ============== Accediendo al DOM ================
// Para acceder al DOM, se utilizan métodos y propiedades específicas del navegador. Los navegadores modernos proporcionan el objeto document como punto de entrada al DOM.

// getElementById(id): Devuelve el elemento con el ID especificado.
// getElementsByTagName(tagName): Devuelve una colección de todos los elementos con el nombre de etiqueta especificado.
// getElementsByClassName(className): Devuelve una colección de todos los elementos con la clase especificada.
// querySelector(selector): Devuelve el primer elemento que coincida con el selector CSS especificado.
                            //haciendo referencia a los id usando # y a los nombres de clase usando .
// querySelectorAll(selector): Devuelve una colección de todos los elementos que coincidan con el selector CSS especificado.



//  ============== Manipulando el DOM ================
// Una vez que se accede a un elemento del DOM, se pueden realizar varias operaciones para manipularlo, como cambiar su contenido, añadir o eliminar elementos, cambiar atributos, etc.

// innerHTML: Permite obtener o establecer el contenido HTML de un elemento.
// *textContent: Permite obtener o establecer el contenido de texto de un elemento y sus descendientes.
// setAttribute(name, value): Establece el valor de un atributo para el elemento especificado.
// removeAttribute(name): Elimina el atributo especificado del elemento.
// *appendChild(node): Añade un nodo al final de la lista de hijos de un elemento padre especificado.
// removeChild(node): Elimina un nodo hijo del elemento padre.



// ejemplo innerHTML
// Accede al elemento con el id "miElemento" y cambia su contenido
document.getElementById("miElemento").innerHTML = "Nuevo contenido";

//Si imaginamos que tenemos un div con el id "miElemento" podemos crear etiquetas dentro de ese div con .innerHTML y <p>texto</p>
document.getElementById("miElemento").innerHTML = "<p>Nuevo contenido</p>";

// ejemplo textContent
// Accede al elemento con el id "miElemento" y cambia su contenido de texto
document.getElementById("miElemento").textContent = "Nuevo contenido de texto";
document.getElementById("miElemento").textContent = "<p>Nuevo contenido de texto</p>";


// ? Diferencia entre innerHTML y textContent

// innerHTML devuelve el contenido HTML de un elemento y sus descendientes.
// textContent devuelve el contenido de texto de un elemento y sus descendientes.

// El navegador interpretará el valor como texto plano, no como HTML. Por lo tanto, en lugar de crear un nuevo elemento <p> dentro de "miElemento", simplemente mostrará el texto exacto <p>Nuevo contenido de texto</p> como parte del contenido de texto del elemento.



// ejemplo setAttribute
// Accede al elemento con el id "miElemento" y establece el atributo "class" a "miClase"
document.getElementById("miElemento").setAttribute("class", "miClase");

var link = document.getElementById("miEnlace");
link.setAttribute("href", "https://www.nuevotitulo.com");


// ejemplo de removeAttribute
// Accede al elemento con el id "miElemento" y elimina el atributo "class"
document.getElementById("miElemento").removeAttribute("class");

// ejemplo de appendChild
// Accede al elemento con el id "miElemento" y anñade un nuevo elemento <p>
document.getElementById("miElemento").appendChild(document.createElement("p"));


const contenedorPrincipal = document.getElementById("contenedor");

const contenedorSecundario = document.createElement("div"); // crea un contenedor al vacio, es decir, no esta asociado con nada

contenedorSecundario.innerHTML = `
    <p class="elemento">Elemento 1</p>
    <p class="elemento">Elemento 2</p>
    <p class="elemento">Elemento 3</p>
`;

contenedorPrincipal.appendChild(contenedorSecundario);




//* ================ Eventos ================
// ¿Qué son los eventos?

// Los eventos son acciones que ocurren en el navegador, como hacer clic en un botón, mover el ratón sobre un elemento, presionar una tecla, etc.
// ¿Cómo se manejan los eventos en JavaScript?

// JavaScript permite asociar funciones (event handlers) a los eventos que ocurren en los elementos HTML.
// Cuando ocurre un evento, se llama a la función asociada, lo que permite ejecutar código en respuesta a la acción del usuario.
// Tipos de eventos comunes:

// click: Ocurre cuando se hace clic en un elemento.
// mouseover y mouseout: Ocurren cuando el ratón entra o sale de un elemento.
// keydown y keyup: Ocurren cuando se presiona o se suelta una tecla del teclado, respectivamente.
// Ejemplo de manejo de eventos:


// Asocia la función handleClick al evento click del botón con id "miBoton"
document.getElementById("miBoton").addEventListener("click", handleClick);

// Define la función que se ejecutará cuando ocurra el evento click
function handleClick() {
    alert("¡Haz hecho clic en el botón!");
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

// ejemplos de eventos



// onclick: Se ejecuta cuando se hace clic en un elemento.
// onmouseover: Se ejecuta cuando el ratón entra en un elemento.
// onmouseout: Se ejecuta cuando el ratón sale de un elemento.
// onkeydown: Se ejecuta cuando se presiona una tecla del teclado.
// onkeyup: Se ejecuta cuando se suelta una tecla del teclado.


