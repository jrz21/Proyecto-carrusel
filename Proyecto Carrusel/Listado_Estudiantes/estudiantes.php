<?php
// Datos de conexión
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "estudiantes";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta para obtener el listado de estudiantes
$sql = "SELECT id, nombre, apellido, telefono, edad FROM estudiantes";
$result = $conn->query($sql);

// Verificar si hay resultados
if ($result->num_rows > 0) {
    // Crear un array para almacenar los datos de cada estudiante
    $datos = array();
    // Almacenar los datos de cada estudiante en el array
    while($row = $result->fetch_assoc()) {
        $datos[] = $row;
    }
    // Devuelve los datos en formato JSON
    echo json_encode($datos);
} else {
    // Devuelve un objeto JSON con un mensaje de error
    $error = array('error' => 'No se encontraron estudiantes');
    echo json_encode($error);
}

// Cerrar conexión
$conn->close();
?>
