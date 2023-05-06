console.log
function cargarDatos() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var datos = JSON.parse(this.responseText);
            var tabla = document.getElementById("tablaDatos").getElementsByTagName('tbody')[0];
            tabla.innerHTML = "";
            for (var i = 0; i < datos.length; i++) {
                tabla.insertRow(i);
                tabla.rows[i].insertCell(0).innerHTML = datos[i].id;
                tabla.rows[i].insertCell(1).innerHTML = datos[i].nombre;
                tabla.rows[i].insertCell(2).innerHTML = datos[i].apellido;
                tabla.rows[i].insertCell(3).innerHTML = datos[i].edad;
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
