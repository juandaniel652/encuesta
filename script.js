document.getElementById('encuestaForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  let respuestas = {};
  for (let [key, value] of formData.entries()) {
    respuestas[key] = value;
  }

  // Mostrar confirmación
  alert("✅ ¡Gracias por completar la encuesta!\nTus respuestas han sido registradas correctamente.");

  console.log("Respuestas del usuario:", respuestas);
  this.reset();
});
