// ------- VARIABLES
// --- CAMPOS
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

// --- BOTONES
const btnEnviar = document.getElementById("enviar");
const btnReset = document.getElementById("resetBtn");

// ---- FORMULARIO
const form = document.getElementById("enviar-mail");

// -------- EVENT LISTENER
(() => {
  document.addEventListener("DOMContentLoaded", deshabilitarBtn);
  btnReset.addEventListener("click", resetearForm);

  email.addEventListener("blur", validarCampo);
  asunto.addEventListener("blur", validarCampo);
  mensaje.addEventListener("blur", validarCampo);

  btnEnviar.addEventListener("click", enviarForm);
})();

// --------- FUNCIONES
function deshabilitarBtn() {
  btnEnviar.disabled = true;
}

function resetearForm() {
  form.reset();
  deshabilitarBtn();
}

function validarCampo() {
  validarLongitud(this);

  // Validar campo email
  if (this.type === "email") {
    validarEmail(this);
  }

  // Validando campos y errores
  let errores = document.querySelectorAll(".error");

  if (email.value !== "" && asunto.value !== "" && mensaje.value !== "") {
    debugger;
    if (errores.length === 0) {
      btnEnviar.disabled = false;
    }
  }
}

function validarLongitud(campo) {
  if (campo.value.length > 0) {
    campo.style.borderBottomColor = "#43cea2";
    campo.style.borderWidth = "1px";
    campo.classList.remove("error");
  } else {
    campo.style.borderBottomColor = "red";
    campo.style.borderWidth = "1px";
    campo.classList.add("error");
  }
}

function validarEmail(email) {
  const campoEmail = email.value;
  if (campoEmail.indexOf("@") !== -1) {
    email.style.borderBottomColor = "#43cea2";
    email.style.borderWidth = "1px";
    email.classList.remove("error");

    console.log("eeeee");
  } else {
    email.style.borderBottomColor = "red";
    email.style.borderWidth = "1px";
    email.classList.add("error");
  }
}

function enviarForm(e) {
  e.preventDefault();

  let spinner = document.querySelector("#spinner");
  spinner.style.display = "block";

  const enviado = document.createElement("img");
  enviado.src = "img/mail.gif";
  enviado.style.display = "block";

  setTimeout(() => {
    spinner.style.display = "none";
    let loaders = document.querySelector("#loaders");
    loaders.appendChild(enviado);
    setTimeout(() => {
      enviado.remove();
      form.reset();
      deshabilitarBtn();
    }, 4000);
  }, 5000);
}
