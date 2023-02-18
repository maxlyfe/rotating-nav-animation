/* Obtener el elemento con el id de abierto. */
const open = document.getElementById('open')

/* Obtener el elemento con el id de cierre. */
const close = document.getElementById('close')

/* Obtener el elemento con la clase de contenedor. */
const container = document.getElementById('.container')

/* Agregar un detector de eventos al elemento abierto. Cuando se hace clic en el elemento abierto, la
clase show-nav se agrega al elemento contenedor. */
open.addEventListener('click', () => container.classList.add('show-nav'))

/* Eliminando la clase show-nav del elemento contenedor. */
close.addEventListener('click', () => container.classList.remove('show-nav'))
