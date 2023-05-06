var imagenes = ["imagenes/fondos/gwen.jpg", "imagenes/fondos/buho.jpg", "imagenes/fondos/gatitos.jpg","imagenes/fondos/jahy.jpg", "imagenes/fondos/one.png"];
var indice = 0;

function cambiarFondo() {
  var body = document.querySelector("body");
  var anchoVentana = window.innerWidth;
  var altoVentana = window.innerHeight;
  body.style.backgroundImage = "url('" + imagenes[indice] + "')";
  indice++;
  if (indice == imagenes.length) {
    indice = 0;
  }
  body.style.backgroundSize = anchoVentana + "px " + altoVentana + "px";
  body.style.backgroundSize = "no-repeat contain";
  var boton = document.querySelector("button");
  boton.style.backgroundImage = "url('" + imagenes[indice] + "')";
}