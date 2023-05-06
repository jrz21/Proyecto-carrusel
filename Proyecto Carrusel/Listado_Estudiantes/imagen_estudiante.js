console.log
// Definir la variable "datos" fuera de la función "cargarDatos()"
var datos = [];

function cargarDatos() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Llenar la variable "datos" con los datos de los estudiantes
      datos = JSON.parse(this.responseText);
      var tabla = document.getElementById("tablaDatos").getElementsByTagName('tbody')[0];
      tabla.innerHTML = "";
      for (var i = 0; i < datos.length; i++) {
        tabla.insertRow(i);
        tabla.rows[i].insertCell(0).innerHTML = datos[i].id;
        tabla.rows[i].insertCell(1).innerHTML = datos[i].nombre;
        tabla.rows[i].insertCell(2).innerHTML = datos[i].apellido;
        tabla.rows[i].insertCell(3).innerHTML = datos[i].edad;

        // Agregar la imagen correspondiente al ID
        var celdaImagen = tabla.rows[i].insertCell(4);
        var imagen = document.createElement('img');
        imagen.src = 'fotos/' + datos[i].id + '.png'; imagen.width = 100;
        imagen.height = 100; // Cambiar la ruta y extensión según corresponda
        celdaImagen.appendChild(imagen);
      }
      document.getElementById("tablaDatos").style.display = "";
    }
  };
  xhttp.open("GET", "estudiantes.php", true);
  xhttp.send();
}

// Obtener el botón por su ID
var btnMostrarDatos = document.getElementById("btnMostrarDatos");

// Agregar un evento de clic al botón
btnMostrarDatos.addEventListener("click", cargarDatos);