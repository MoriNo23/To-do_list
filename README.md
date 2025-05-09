Proyecto de practica para el curso de JavaScript - To-do List
Autodidacta yo.

Descripción:
Es un To-do List que permite:
- Agregar tareas.
- Eliminarlas.
- Iniciarlas.
- Marcar las tareas como completadas con el botón "check".
- Eliminar tareas con el botón "x".

Detalles técnicos:
Me apoyé con la IA para aprender el funcionamiento de los eventos y descubrir formas de acceder y manipular los elementos del DOM sin depender de métodos como forEach. Además, aprendí que se puede asignar un único evento al contenedor de los items para verificar si un evento se targeteó mediante la clase o el id. También experimenté con el siguiente código:

  document.getElementById("miform").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el form se refresque.
  });
