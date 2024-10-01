// Tarea entregable 01
/*
// 1) Seleccionamos el elemento con ID 'contenedorCartas'
 let contenedor = document.querySelector('#contenedorCartas');

// 1) Su primer hijo
 contenedor.firstElementChild;

// 2) Su tercer hijo
 contenedor.children[2];

// 3) El siguiente hermano del tercer hijo
let tercerHijo = contenedor.children[2];
tercerHijo.nextElementSibling;

// 4) Su último hijo
contenedor.lastElementChild;

// 5) Su padre
contenedor.parentElement;

// 6) El padre del padre
 contenedor.parentElement.parentElement;

// 7) Su hermano anterior
 contenedor.previousElementSibling;

// 8) Las clases del último hijo
let ultimoHijo = contenedor.lastElementChild;
 ultimoHijo.classList;
 */

 // Tarea entregable 02

 // 1) Eliminar el primer elemento hijo desde el padre
 let contenedor = document.getElementById('contenedorCartas');
contenedor.removeChild(contenedor.firstElementChild);

// 2) Eliminar, desde él mismo, el elemento cuya clase es "cards redClass"

let redCard = document.querySelector('.cards.redClass');
if (redCard) {
    redCard.remove();
    console.log('2) Elemento con clase "cards redClass" eliminado:', redCard);
} else {
    console.log('No se encontró ningún elemento con la clase "cards redClass".');
}
// 3) Crear un elemento h1 con tu nombre

let h1Nombre = document.createElement('h1');
h1Nombre.textContent = 'Javier Polo';
console.log(h1Nombre);

// 4) Crear un elemento enlace con texto "Vedruna" y cuyo href sea la página del Vedruna

let enlaceVedruna = document.createElement('a');
enlaceVedruna.textContent = 'Vedruna';
enlaceVedruna.href = 'https://vedrunasevilla.org/';

// PROBAR SI APARECE EL TEXTO DE VEDRUNA

// 5) Crear un elemento botón cuyo id sea "botonJoker" y su texto sea "boton"

let botonJoker = document.createElement('button');
botonJoker.id = 'botonJoker';
botonJoker.textContent = 'boton';





