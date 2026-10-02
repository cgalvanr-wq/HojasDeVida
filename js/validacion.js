document.addEventListener("DOMContentLoaded", function () {

  const formulario = document.getElementById("formularioContacto");

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  const errorNombre = document.getElementById("errorNombre");
  const errorCorreo = document.getElementById("errorCorreo");
  const errorMensaje = document.getElementById("errorMensaje");

  const mensajeExito = document.getElementById("mensajeExito");


  // ==============================
  // VALIDAR CORREO
  // ==============================

  function validarCorreo(correo) {

    const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return expresionCorreo.test(correo);

  }


  // ==============================
  // VALIDAR NOMBRE
  // ==============================

  function validarNombre() {

    const valor = nombre.value.trim();

    if (valor === "") {

      errorNombre.textContent = "El nombre es obligatorio.";

      return false;

    }

    errorNombre.textContent = "";

    return true;

  }


  // ==============================
  // VALIDAR CORREO
  // ==============================

  function validarCampoCorreo() {

    const valor = correo.value.trim();

    if (valor === "") {

      errorCorreo.textContent = "El correo es obligatorio.";

      return false;

    }

    if (!validarCorreo(valor)) {

      errorCorreo.textContent =
        "Ingresa un correo electrónico válido.";

      return false;

    }

    errorCorreo.textContent = "";

    return true;

  }


  // ==============================
  // VALIDAR MENSAJE
  // ==============================

  function validarMensaje() {

    const valor = mensaje.value.trim();

    if (valor === "") {

      errorMensaje.textContent =
        "El mensaje es obligatorio.";

      return false;

    }

    errorMensaje.textContent = "";

    return true;

  }


  // ==============================
  // VALIDACIÓN EN TIEMPO REAL
  // ==============================

  nombre.addEventListener("blur", validarNombre);

  nombre.addEventListener("input", function () {

    if (nombre.value.trim() !== "") {

      errorNombre.textContent = "";

    }

  });


  correo.addEventListener("blur", validarCampoCorreo);

  correo.addEventListener("input", function () {

    if (correo.value.trim() === "") {

      errorCorreo.textContent =
        "El correo es obligatorio.";

    } else if (validarCorreo(correo.value.trim())) {

      errorCorreo.textContent = "";

    } else {

      errorCorreo.textContent =
        "Ingresa un correo electrónico válido.";

    }

  });


  mensaje.addEventListener("blur", validarMensaje);

  mensaje.addEventListener("input", function () {

    if (mensaje.value.trim() !== "") {

      errorMensaje.textContent = "";

    }

  });


  // ==============================
  // ENVÍO DEL FORMULARIO
  // ==============================

  formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    mensajeExito.classList.add("d-none");

    const nombreValido = validarNombre();
    const correoValido = validarCampoCorreo();
    const mensajeValido = validarMensaje();


    if (
      nombreValido &&
      correoValido &&
      mensajeValido
    ) {

      mensajeExito.classList.remove("d-none");

      formulario.reset();

    }

  });

});
