/* Asignando la variable open al elemento con el id de open. */
const open = document.getElementById('open');

/* Asignando la variable close al elemento con el id de close. */
const close = document.getElementById('close');

/* Seleccionando el elemento con la clase de contenedor. */
const container = document.querySelector('.container');

/* Agregar un detector de eventos al elemento abierto. Cuando se hace clic en el elemento abierto, la
clase de show-nav se agrega al elemento contenedor. */
open.addEventListener('click', () => container.classList.add('show-nav'));

/* Eliminando la clase de show-nav del contenedor. */
close.addEventListener('click', () => container.classList.remove('show-nav'));