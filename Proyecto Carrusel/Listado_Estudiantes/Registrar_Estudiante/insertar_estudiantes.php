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
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$edad = $_POST['edad'];

	/*Consulta para insertar un nuevo estudiante */
	/*Consulta para insertar un nuevo estudiante */
$sql = "INSERT INTO estudiantes (nombre, apellido, email, telefono, edad) VALUES ('$nombre', '$apellido','$email','$telefono', '$edad')";
$result = $conn->query($sql);

	/*Verificar si se insertó correctamente */ 
	if ($conn->affected_rows > 0) { 
		$msg = "Se inserto un nuevo estudiante."; 
	} else { 
		$msg = "Error al insertar el estudiante."; 
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