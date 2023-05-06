<?php
/*Datos de conexión */ 
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "estudiantes"; 

/*Crear conexión */ 
$conn = new mysqli($servername, $username, $password, $dbname);

/*Verificar conexión */ 
if ($conn->connect_error) { 
	die("Conexión fallida: " . $conn->connect_error); 
} 

/*Verificar si se enviaron datos por POST*/
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

	/*Obtener los datos del formulario*/
	$id_estudiante = $_POST['id_estudiante'];

	if (!empty($id_estudiante)) {
		/*Consulta para obtener los datos del estudiante especificado */ 
		$sql = "SELECT * FROM matricula WHERE id_estudiante = '$id_estudiante'"; 
	} else {
		/*Consulta para obtener todos los registros */ 
		$sql = "SELECT * FROM matricula"; 
	}
	
	$result = $conn->query($sql); 

	/*Verificar si se encontraron registros */ 
	if ($result->num_rows > 0) { 
		echo "<table class='tabla-matricula'>";
		echo "<tr><th>ID Estudiante</th><th>Pago</th><th>Día de Pago</th><th>Mes de Pago</th><th>Fecha de Pago</th></tr>";
		while($row = $result->fetch_assoc()) {
			echo "<tr><td>" . $row["id_estudiante"] . "</td><td>" . $row["pago"] . "</td><td>" . $row["pago_dia"] . "</td><td>" . $row["pago_mes"] . "</td><td>" . $row["fecha_de_pago"] . "</td></tr>";
		}
		echo "</table>";
	} else { 
		echo "No se encontraron registros de matrícula."; 
	}
}

/*Cerrar conexión*/ 
$conn->close(); 
?>