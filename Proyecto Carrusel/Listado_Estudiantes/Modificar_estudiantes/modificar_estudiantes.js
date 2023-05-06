document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); //Prevenir que se recargue la página al enviar el formulario
    
    var form = document.getElementById("formulario");
    var data = new FormData(form);
    
    var request = new XMLHttpRequest();
    request.open("POST", "modificar_estudiantes.php");
    request.send(data);
    
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                alert("Se modifico el estudiante.");
                //Borrar los datos del formulario después de enviarlo
                document.getElementById("nombre").value = "";
                document.getElementById("apellido").value = "";
                document.getElementById("email").value = "";
                document.getElementById("telefono").value = "";
                document.getElementById("edad").value = "";
            } else {
                alert("Error al modificar el estudiante.");
            }
        }   
    }
    });