document.getElementById("formulario-registro").addEventListener("submit", function(event) {
	event.preventDefault(); //Prevenir que se recargue la página al enviar el formulario

	var form = document.getElementById("formulario-registro");
	var data = new FormData(form);

	var request = new XMLHttpRequest();
	request.open("POST", "matricula.php");
	request.send(data);

	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				alert("Se Registro un nuevo Pago.");
				//Borrar los datos del formulario después de enviarlo
				document.getElementById("id_estudiante").value = "";
				document.getElementById("pago").value = "";
                document.getElementById("pago_dia").value = "";
                document.getElementById("pago_mes").value = "";
				document.getElementById("fecha_de_pago").value = "";
			} else {
				alert("Error al Registrar el pago.");
			}
		}
	}
});