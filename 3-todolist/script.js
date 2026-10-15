function anadirLista() {

    const caja = document.getElementById("cajaAdd");

    const elemento = document.createElement("div");
    elemento.textContent = caja.value + " ";

    const botonTachar = document.createElement("button");
    botonTachar.textContent = "X";
    botonTachar.addEventListener('click', tacharLista);

    elemento.appendChild(botonTachar);

    document.getElementById("lista").appendChild(elemento);

    function tacharLista(){
        elemento.remove();
    }

    event.preventDefault();

}