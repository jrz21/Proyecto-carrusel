console.log
function buscarEstudiante() {
    /*Obtener el ID del estudiante a buscar*/
    var id = document.getElementById("id").value;

    /*Realizar la petición AJAX para buscar el estudiante*/
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            /*Obtener los datos del estudiante*/
            var estudiante = JSON.parse(this.responseText);
            if (estudiante != null) {
                /*Preencher los campos del formulario con los datos del estudiante*/
                document.getElementById("nombre").value = estudiante.nombre;
                document.getElementById("apellido").value = estudiante.apellido;
                document.getElementById("email").value = estudiante.email;
                document.getElementById("telefono").value = estudiante.telefono;
                document.getElementById("edad").value = estudiante.edad;
            } else {
                alert("No se encontro el estudiante con el ID ingresado.");
            }
        }
    };
    xhttp.open("GET", "../../Buscar_estudiantes/buscar_estudiante.php?id=" + id, true);
    xhttp.send();
}