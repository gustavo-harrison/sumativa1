// ------------------------------ FUNCIÓN FORMULARIO DE CONTACTO -------------------------- //

function validarformulariocontacto(){

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if(!nombre || !correo || !telefono || !edad || !mensaje){
        alert("Por favor, ingrese todos los campos seleccionados");
        return;
    }

    if(isNaN(edad) || Number(edad) <= 0){
        alert("Por favor, ingrese una edad valida");
        return;
    } 

    const correoexpre = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!correoexpre.test(correo)){
        alert("Por favor, ingrese un correo valido");
        return;
    }

    console.log("Datos del formulario: ");
    console.log(nombre);
    console.log(correo);
    console.log(telefono);
    console.log(edad);
    console.log(mensaje);

}

// ------------------------------ FUNCIÓN REGISTRO FORMULARIO -------------------------- //

function datosformulario() {
    // Recopilar los datos del formulario
    const rut = document.getElementById("rut").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const apellidoP = document.getElementById("apellidoP").value.trim();
    const apellidoM = document.getElementById("apellidoM").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const comuna = document.getElementById("comuna").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const region = document.getElementById("region").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();

    // Validaciones de los campos
    if (!rut || !nombre || !apellidoP || !apellidoM || !direccion || !comuna || !telefono || !correo || !region || !contrasena) {
        alert("Por favor, ingrese todos los campos seleccionados");
        return;
    }
    
    console.log("Datos del formulario: ");
    console.log(rut);
    console.log(nombre);
    console.log(apellidoP);
    console.log(apellidoM);
    console.log(direccion);
    console.log(comuna);
    console.log(telefono);
    console.log(correo);
    console.log(region);
    console.log(contrasena);
}




// ------------------------------ FUNCIÓN INICIO DE SESIÓN -------------------------- //

function validarYRedirigir() {
    const rutInput = document.getElementById("rut").value.trim();
    const contrasenaInput = document.getElementById("contrasena").value.trim();
    
    // Verificar si los datos están en el localStorage
    const datosformulario = JSON.parse(localStorage.getItem("datosFormulario"));

    // Verificar si los datos del formulario existen en el localStorage
    if (datosformulario) {
        // Compara el RUT y la contraseña
        if (datosformulario.rut === rutInput && datosformulario.contrasena === contrasenaInput) {
            alert("Inicio de sesión exitoso.");
            // Redirigir a otra página después del inicio de sesión
            window.location.href = "menu_principal.html"; // Cambia a la página de destino después del login
        } else {
            alert("RUT o contraseña incorrectos.");
        }
    } else {
        alert("No hay datos de registro guardados.");
    }
}

