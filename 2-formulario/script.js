function siguiente() {
    const caja = document.getElementById('caja');
    caja.innerHTML = '';

    const contra = document.createElement('input');
    contra.placeholder = 'contraseña';

    caja.appendChild(contra)

    document.getElementById('boton').textContent = 'Entrar';
}