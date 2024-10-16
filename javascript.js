// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// Comunicación AJAX para Test

var preguntaActual = 0;
var maximoPreguntas = 0;
var soluciones = new Array();
var resultados = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

function setTest(element){
  let codigo = "<button id='anterior' class='btn btn-dark botones' onclick = 'preguntaAnterior()'>Anterior</button>" 
  + "<button id='siguiente' class='btn btn-dark botones' onclick = 'preguntaSiguiente()'>Siguiente</button>"
  document.getElementById("botones").innerHTML = codigo;
  element.remove();
  cargaPregunta();
}


function cargaPregunta(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      guardaRespuestasCorrectas(this);
      escribePregunta(this);
    }
  };
  xmlhttp.open("GET", "XML/Preguntas_Test.xml", true);
  xmlhttp.send();
}


function escribePregunta(xml){
  let xmlDoc = xml.responseXML;
  let preguntas = xmlDoc.getElementsByTagName("PREGUNTA");

  if (maximoPreguntas == 0){
    maximoPreguntas = preguntas.length;
  }

  document.getElementById("pregunta").innerHTML = "";

  let pregunta = "<div class = 'container-fluid'>";
  document.getElementById("title").innerHTML = preguntas[preguntaActual].getElementsByTagName("Enunciado")[0].childNodes[0].nodeValue;
  var opciones = preguntas[preguntaActual].getElementsByTagName("Opción");

  for (let i = 0; i < opciones.length; i++){
    pregunta = pregunta + "<div class='form-check justify-content-center align-items-center'><input class='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault" + (i + 1) + "'><label class='form-check-label container-fluid' for='flexRadioDefault" + (i + 1) + "'>" 
    + opciones[i].childNodes[0].nodeValue + "</label></div>"
  }
  pregunta = pregunta + "</div>";
  document.getElementById("pregunta").innerHTML = pregunta;
}


function guardaRespuestasCorrectas(xml){
  let xmlDoc = xml.responseXML;
  let preguntas = xmlDoc.getElementsByTagName('PREGUNTA');

  for (let i = 0; i < preguntas.length; i++){
    let opciones = preguntas[0].getElementsByTagName('Opción');

    for (let x = 0; x < opciones.length; x++){
      if (opciones[x].getAttribute("correcta") === "true"){
        soluciones.push(x + 1);
      }
    }
  }
}


function escribeResultado(){
  document.getElementById("pregunta").remove();
  document.getElementById("botones").remove();

  let correctas = 0;
  for(let i = 0; i < resultados.length; i++){
    if (resultados[i] == soluciones[i]){
      correctas++;
    }
  }

  document.getElementById("title").innerHTML = "Nota : " + correctas + "/" + resultados.length;
}


function preguntaSiguiente(){
  guardaRespuesta();
  if (document.getElementById("siguiente").textContent === "Terminar"){
    escribeResultado();
  }else if (preguntaActual + 1 < maximoPreguntas){
    preguntaActual++;
    cargaPregunta();

    if (preguntaActual == (maximoPreguntas - 1)) {
      document.getElementById("siguiente").textContent = "Terminar";
    }
  }
}

function guardaRespuesta(){
  var nOpciones = document.getElementsByClassName("form-check");

  for(let i = 0; i < nOpciones.length; i++){
    if (document.getElementById("flexRadioDefault" + (i + 1)).checked){
      resultados[preguntaActual] = i + 1;
      break;
    }
  }
}


function preguntaAnterior(){
  if (preguntaActual - 1 >= 0){
    preguntaActual--;
    cargaPregunta();

    document.getElementById("siguiente").textContent = "Siguiente";

    resultados[preguntaActual] == 0;
  }
}




