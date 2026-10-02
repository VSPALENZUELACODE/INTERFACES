function siguiente() {
    const caja = document.getElementById('caja');
    caja.innerHTML = '';

    const boton = document.getElementById('boton');
    boton.remove()

    const contra = document.createElement('input');
    contra.placeholder = 'contraseña';

    const buttonAdd = document.createElement('button');
    buttonAdd.textContent = 'Entrar';

    buttonAdd.style.marginTop = '20px';
    buttonAdd.addEventListener('click', paso3);

    caja.appendChild(contra)
    caja.appendChild(buttonAdd)
}

function paso3() {
    const caja = document.getElementById('caja');
    caja.innerHTML = '';

    const tituloFormulario = document.getElementById('tituloForm');
    tituloFormulario.innerHTML = '';

    const tituloDentro = document.createElement('h1');
    tituloDentro.textContent = 'estas dentro';

    caja.appendChild(tituloDentro);

}