const lista = document.querySelector(".to-do_list__items");

document.getElementById("miform").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(this.tarea.value);
  lista.innerHTML += `<div class="item">
          <div class="text">
            <p>${this.tarea.value}</p>
          </div>
          <div class="btn-container">
            <button class="btn_item iniciar">Iniciar</button>
            <button class="btn_item listo">✔</button>
            <button class="btn_item eliminar">X</button>
          </div>
        </div>`;
  this.tarea.value = "";
});

lista.addEventListener("click", function (event) {
  var listo = document.querySelector(".listo");
  var iniciar = document.querySelector(".iniciar");
  if (event.target.matches(".eliminar")) {
    event.target.closest(".item").remove();
  }
  if (event.target.matches(".iniciar")) {
    listo.style.pointerEvents = "initial";
    listo.style.opacity = "1";
    listo.style.cursor = "pointer";
  }
  if (event.target.matches(".listo")) {
    iniciar.style.pointerEvents = "none";
    iniciar.style.opacity = "0.5";
    iniciar.style.cursor = "default";
    document.querySelector(".text > p:nth-child(1)").style.textDecoration =
      "line-through";
  }
});
