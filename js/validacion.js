document.addEventListener("DOMContentLoaded", function () {

  const formulario = document.getElementById("formularioContacto");

  formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const errorNombre = document.getElementById("errorNombre");
    const errorCorreo = document.getElementById("errorCorreo");
    const errorMensaje = document.getElementById("errorMensaje");
    const mensajeExito = document.getElementById("mensajeExito");

    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorMensaje.textContent = "";

    mensajeExito.classList.add("d-none");

    let formularioValido = true;


    if (nombre === "") {

      errorNombre.textContent = "El nombre es obligatorio.";

      formularioValido = false;

    }


    if (correo === "") {

      errorCorreo.textContent = "El correo es obligatorio.";

      formularioValido = false;

    } else if (!validarCorreo(correo)) {

      errorCorreo.textContent = "Ingresa un correo electrónico válido.";

      formularioValido = false;

    }


    if (mensaje === "") {

      errorMensaje.textContent = "El mensaje es obligatorio.";

      formularioValido = false;

    }


    if (formularioValido) {

      mensajeExito.classList.remove("d-none");

      formulario.reset();

    }

  });


  function validarCorreo(correo) {

    const expresion =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return expresion.test(correo);

  }

});
