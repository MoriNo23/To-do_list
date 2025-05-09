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
  if (event.target.matches(".eliminar")) {
    event.target.closest(".item").remove();
  }
  if (event.target.matches(".iniciar")) {
    const item = event.target.closest(".item");
    const listo = item.querySelector(".listo");
    listo.style.pointerEvents = "initial";
    listo.style.opacity = "1";
    listo.style.cursor = "pointer";
  }
  if (event.target.matches(".listo")) {
    const item = event.target.closest(".item");
    const iniciar = item.querySelector(".iniciar");
    iniciar.style.pointerEvents = "none";
    iniciar.style.opacity = "0.5";
    iniciar.style.cursor = "default";
    item.querySelector(".text > p:nth-child(1)").style.textDecoration =
      "line-through";
  }
});
