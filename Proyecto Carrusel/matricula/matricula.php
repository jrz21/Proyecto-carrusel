<?php 
/*Datos de conexión */ $servername = "localhost"; 
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
$pago = $_POST['pago'];
$pago_dia = $_POST['pago_dia'];
$pago_mes = $_POST['pago_mes'];
$fecha_de_pago = $_POST['fecha_de_pago'];

	/*Consulta para insertar un nuevo estudiante */
	$sql = "INSERT INTO matricula (id_estudiante, pago, pago_dia, pago_mes, fecha_de_pago) VALUES ('$id_estudiante', '$pago','$pago_dia','$pago_mes','$fecha_de_pago')";
    $result = $conn->query($sql); 

	/*Verificar si se insertó correctamente */ 
	if ($conn->affected_rows > 0) { 
		$msg = "Se registro un nuevo Pago."; 
	} else { 
		$msg = "Error al registrar el pago."; 
	}
}

/*Verificar si se insertó correctamente */ 
if ($conn->affected_rows > 0) { 
    echo "success"; 
} else { 
    echo "error"; 
}

/*Cerrar conexión*/ 
$conn->close(); 
?>