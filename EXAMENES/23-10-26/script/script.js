const caja = document.getElementById("input")
caja.placeholder = "Nombre de usuario"

function siguiente() {
    const formulario = document.getElementById("form1")
    const formulario2 = document.getElementById("form2")
    const caja = document.getElementById("input")

    const contenidocaja1 = caja.value

    const caja2 = document.getElementById("input2")

    caja2.placeholder = "Introduce un correo electrónico"

    formulario.classList.add('oculto')
    formulario2.classList.remove('oculto')
}

function siguiente2() {
    const formulario = document.getElementById("form2")
    const formulario3 = document.getElementById("form3")
    const caja = document.getElementById("input2")

    const contenidocaja2 = caja.value

    const caja3 = document.getElementById("input3")

    caja3.placeholder = "Introduce una contaseña"

    formulario.classList.add('oculto')
    formulario3.classList.remove('oculto')

}

function siguiente3() {
    const formulario = document.getElementById("form3")
    const formulario4 = document.getElementById("form4")
    const caja = document.getElementById("input3")

    const contenidocaja3 = caja.value
    console.log(contenidocaja3);
    

    formulario.classList.add('oculto')
    formulario4.classList.remove('oculto')
    formulario4.classList.add('letraform4')

    const usuario = document.createElement("p")
    usuario.textContent = "Nombre: " + contenidocaja1
    const email = document.createElement("p")
    email.textContent = "e-Mail " + contenidocaja2
    const contra = document.createElement("p")
    contra.textContent = "Contraseña " + contenidocaja3
}