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

function datosformulario() {
    
    const datosform = {
        rut: document.getElementById("rut").value.trim(),
        nombre: document.getElementById("nombre").value.trim(),
        apellidoP: document.getElementById("apellidoP").value.trim(),
        apellidoM: document.getElementById("apellidoM").value.trim(),
        direccion: document.getElementById("direccion").value.trim(),
        comuna: document.getElementById("comuna").value.trim(),
        telefono: document.getElementById("telefono").value.trim(),
        correo: document.getElementById("correo").value.trim(),
        region: document.getElementById("region").value,
        contrasena: document.getElementById("contrasena").value.trim()
    };

    console.log("Datos capturados del formulario:", datosform);

    if (datos.region === "") {
        alert("Por favor, seleccione una región.");
        return;
    }

    localStorage.setItem("datosFormulario", JSON.stringify(datosform));
    alert("Datos guardados correctamente");
    window.location.href = "menu_principal.html";
}

document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    datosformulario();
});


