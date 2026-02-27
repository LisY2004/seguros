
  // Validación del formulario
  document.getElementById("cotizador-form").addEventListener("submit", (e) => {
    e.preventDefault()
  
    // Aquí puedes agregar la lógica para validar y enviar el formulario
    alert("Formulario enviado correctamente. Pronto recibirás tu cotización.")
  })
  
  function enviarCorreo_Autos() {
    var email = "angelitello54@gmail.com";
    var asunto = "Solicitud de cotización";
    
    // Obtener valores del formulario
    var cedula = document.getElementById("cedula").value;
    var nombre = document.getElementById("nombre").value;
    var fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    var genero = document.getElementById("genero").value;
    var estadoCivil = document.getElementById("estado_civil").value;
    var celular = document.getElementById("celular").value;
    var placa = document.getElementById("placa").value;
    var marca = document.getElementById("marca").value;
    var año = document.getElementById("año").value;
    var modelo = document.getElementById("Modelo").value;



 // Validación de campos obligatorios
 if (!cedula || !nombre || !celular || !placa || !marca || !año || !modelo) {
  alert("Por favor, complete todos los campos obligatorios.");
  return false;
}

    // Construir el cuerpo del mensaje
    var cuerpo = `Cédula: ${cedula}%0D%0A
    Nombre: ${nombre}%0D%0A
    Fecha de Nacimiento: ${fechaNacimiento}%0D%0A
    Género: ${genero}%0D%0A
    Estado Civil: ${estadoCivil}%0D%0A
    Celular: ${celular}%0D%0A
    ----------------------%0D%0A
    Placa: ${placa}%0D%0A
    Marca: ${marca}%0D%0A
    Año: ${año}%0D%0A
    Modelo: ${modelo}`;

    // Redirigir a mailto:
    window.location.href = `mailto:${email}?subject=${asunto}&body=${cuerpo}`;
}


function enviarCorreo_Salud(){
  var email = "angelitello54@gmail.com";
    var asunto = "Solicitud de cotización";
    
    // Obtener valores del formulario
    var cedula = document.getElementById("cedula").value;
    var nombre = document.getElementById("nombre").value;
    var fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    var genero = document.getElementById("genero").value;
    var estadoCivil = document.getElementById("estado_civil").value;
    var celular = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var enfermedades = document.getElementById("enfermedades").value;


 // Validación de campos obligatorios
 if (!cedula || !nombre || !telefono || !correo || !altura || !peso || !enfermedades) {
  alert("Por favor, complete todos los campos obligatorios.");
  return false;
}


   // Construcción del cuerpo del mensaje
   var cuerpo = `Cédula: ${cedula}%0D%0A
   Nombre: ${nombre}%0D%0A
   Fecha de Nacimiento: ${fechaNacimiento}%0D%0A
   Género: ${genero}%0D%0A
   Estado Civil: ${estadoCivil}%0D%0A
   Celular: ${celular}%0D%0A
   Correo: ${correo}%0D%0A
   Altura: ${altura} cm%0D%0A
   Peso: ${peso} kg%0D%0A
   Enfermedades Preexistentes: ${enfermedades}`;

   // Redirigir a mailto:
   window.location.href = `mailto:${email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}





function enviarCorreo_Vida(){
  var email = "angelitello54@gmail.com";
    var asunto = "Solicitud de cotización";
    
    // Obtener valores del formulario
    var cedula = document.getElementById("cedula").value;
    var nombre = document.getElementById("nombre").value;
    var fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    var genero = document.getElementById("genero").value;
    var estadoCivil = document.getElementById("estado_civil").value;
    var celular = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var nivel_estudios = document.getElementById("nivel_estudios").value;
    var ingresos = document.getElementById("ingresos").value;
    var enfermedades = document.getElementById("enfermedades").value;


 // Validación de campos obligatorios
 if (!cedula || !nombre || !telefono || !correo || !nivel_estudios || !ingresos || !enfermedades) {
  alert("Por favor, complete todos los campos obligatorios.");
  return false;
}


   // Construcción del cuerpo del mensaje
   var cuerpo = `Cédula: ${cedula}%0D%0A
   Nombre: ${nombre}%0D%0A
   Fecha de Nacimiento: ${fechaNacimiento}%0D%0A
   Género: ${genero}%0D%0A
   Estado Civil: ${estadoCivil}%0D%0A
   Celular: ${celular}%0D%0A
   Correo: ${correo}%0D%0A
   Nivel estudios: ${nivel_estudios} cm%0D%0A
   Ingresos: ${ingresos} kg%0D%0A
   Enfermedades Preexistentes: ${enfermedades}`;

   // Redirigir a mailto:
   window.location.href = `mailto:${email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}




function enviarCorreo_Multihogar(){
  var email = "angelitello54@gmail.com";
    var asunto = "Solicitud de cotización";
    
    // Obtener valores del formulario
    var cedula = document.getElementById("cedula").value;
    var nombre = document.getElementById("nombre").value;
    var fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    var genero = document.getElementById("genero").value;
    var estadoCivil = document.getElementById("estado_civil").value;
    var celular = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;


 // Validación de campos obligatorios
 if (!cedula || !nombre || !telefono || !correo) {
  alert("Por favor, complete todos los campos obligatorios.");
  return false;
}


   // Construcción del cuerpo del mensaje
   var cuerpo = `Cédula: ${cedula}%0D%0A
   Nombre: ${nombre}%0D%0A
   Fecha de Nacimiento: ${fechaNacimiento}%0D%0A
   Género: ${genero}%0D%0A
   Estado Civil: ${estadoCivil}%0D%0A
   Celular: ${celular}%0D%0A
   Correo: ${correo}`;

   // Redirigir a mailto:
   window.location.href = `mailto:${email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}




function enviarCorreo_PYMES(){
  var email = "angelitello54@gmail.com";
    var asunto = "Solicitud de cotización";
    
    // Obtener valores del formulario
    var cedula = document.getElementById("cedula").value;
    var nombre = document.getElementById("nombre").value;
    var fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    var genero = document.getElementById("genero").value;
    var tipo_persona = document.getElementById("tipo_persona").value;

    var estadoCivil = document.getElementById("estado_civil").value;
    var celular = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;


 // Validación de campos obligatorios
 if (!cedula || !nombre || !telefono || !correo) {
  alert("Por favor, complete todos los campos obligatorios.");
  return false;
}


   // Construcción del cuerpo del mensaje
   var cuerpo = `Cédula: ${cedula}%0D%0A
   Nombre: ${nombre}%0D%0A
   Fecha de Nacimiento: ${fechaNacimiento}%0D%0A
   Género: ${genero}%0D%0A
   Tipo de Persona: ${tipo_persona}%0D%0A
   Estado Civil: ${estadoCivil}%0D%0A
   Celular: ${celular}%0D%0A
   Correo: ${correo}`;

   // Redirigir a mailto:
   window.location.href = `mailto:${email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}





function enviarCorreo_Contacto() {
  var email = "angelitello54@gmail.com";
  var asunto = "Solicitud de Contacto";

  // Obtener valores del formulario
  var nombre = document.getElementById("nombre").value;
  var celular = document.getElementById("telefono").value;
  var correo = document.getElementById("correo").value;
  var mensaje = document.getElementById("floatingTextareaDisabled").value;

  // Validación de campos obligatorios
  if (!nombre || !celular || !correo || !mensaje) {
    alert("Por favor, complete todos los campos obligatorios.");
    return false;
}

  // Construcción del cuerpo del mensaje
  var cuerpo = `Nombre: ${nombre}%0D%0A
Celular: ${celular}%0D%0A
Correo: ${correo}%0D%0A
Mensaje: ${mensaje}`;

  // Redirigir a mailto:
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}




// Funciones para el contacto 
function mostrarContacto() {
  document.getElementById("contacto").style.display = "block";
}

function cerrarContacto() {
  document.getElementById("contacto").style.display = "none";
}


// circulos emergentes

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("footer-container").insertAdjacentHTML("beforeend", `
      <div class="help-circles">
          <a href="https://wa.me/593983464629" class="help-circle" target="_blank">
              <i class="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
          </a>
          <a href="#" class="help-circle"  onclick="mostrarContacto()">
              <i class="fas fa-phone"></i>
              <span>Contáctanos</span>
          </a>
      </div>

      <div id="contacto" class="modal">
          <div class="modal-content">
              <span class="close" onclick="cerrarContacto()">&times;</span>
              <aside id="sidebar">
                  <div class="dark">
                      <h3>Información de Contacto</h3>
                      <p>Teléfono: +593 0995634281</p>
                      <p>Email: info@virtusnexus.com</p>
                      <p>Dirección: Calle Principal 123, Ciudad</p>
                  </div>
              </aside>
          </div>
      </div>
  `);
});



//Funcion para restringir las letras en los campos de nuemeros


function isNumber(evt){
  evt = (evt)? evt :window.event;
  var charCode = (event.which) ? evt.which : evt.KeyCode;
  if(charCode>31&& (charCode< 48 || charCode> 57)){
      return false;
  }

  return true;
}


function ValidarSoloNumeros(e) {
  const tecla = e.key; // Captura la tecla presionada

  // Permitir números, la tecla de retroceso (Backspace), y el punto (.)
  if (!/^[0-9.]$/.test(tecla) && tecla !== "Backspace") {
      e.preventDefault(); // Evitar la acción predeterminada si no es válido
      return false;
  }

  return true; // Permitir la entrada
}

