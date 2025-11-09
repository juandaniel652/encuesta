const campaniaForm = document.getElementById('campaniaForm');
const encuestaForm = document.getElementById('encuestaForm');
const crearCampania = document.getElementById('crearCampania');
const encuesta = document.getElementById('encuesta');

let datosCampania = {};

campaniaForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  datosCampania = Object.fromEntries(formData.entries());

  alert(`✅ Campaña "${datosCampania.nombreCampania}" creada desde ${datosCampania.fechaInicio} hasta ${datosCampania.fechaFin}`);

  crearCampania.style.display = 'none';
  encuesta.style.display = 'block';
});

encuestaForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  let respuestas = Object.fromEntries(formData.entries());

  const datosCompletos = {
    ...datosCampania,
    respuestas
  };

  console.log("📋 Datos enviados:", datosCompletos);

  alert("✅ ¡Gracias por completar la encuesta!\nTus respuestas fueron registradas correctamente.");

  this.reset();
  encuesta.style.display = 'none';
  crearCampania.style.display = 'block';
});
