const campaniaForm = document.getElementById('campaniaForm');
const clienteForm = document.getElementById('clienteForm');
const encuestaForm = document.getElementById('encuestaForm');

const crearCampania = document.getElementById('crearCampania');
const datosCliente = document.getElementById('datosCliente');
const encuesta = document.getElementById('encuesta');

let datosCampania = {};
let datosClienteActual = {};

campaniaForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  datosCampania = Object.fromEntries(formData.entries());

  alert(`✅ Campaña "${datosCampania.nombreCampania}" creada desde ${datosCampania.fechaInicio} hasta ${datosCampania.fechaFin}`);

  crearCampania.style.display = 'none';
  datosCliente.style.display = 'block';
});

clienteForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  datosClienteActual = Object.fromEntries(formData.entries());

  alert(`Cliente cargado: ${datosClienteActual.nombreCliente} (#${datosClienteActual.numeroCliente})`);

  datosCliente.style.display = 'none';
  encuesta.style.display = 'block';
});

encuestaForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  let respuestas = Object.fromEntries(formData.entries());

  const registroFinal = {
    campaña: datosCampania,
    cliente: datosClienteActual,
    respuestas: respuestas,
    fechaRegistro: new Date().toLocaleString()
  };

  console.log("📋 Registro completo:", registroFinal);

  alert("✅ ¡Gracias por completar la encuesta!\nTus respuestas fueron registradas correctamente.");

  this.reset();
  encuesta.style.display = 'none';
  crearCampania.style.display = 'block';
});
