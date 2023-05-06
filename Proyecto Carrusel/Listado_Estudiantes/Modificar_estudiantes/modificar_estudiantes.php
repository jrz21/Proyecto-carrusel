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
    /*Obtener los datos modificados del estudiante*/
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $edad = $_POST['edad'];

    /*Consulta para actualizar los datos del estudiante*/
    $sql = "UPDATE estudiantes SET nombre='$nombre', apellido='$apellido', email='$email', telefono='$telefono', edad='$edad' WHERE id='$id'";
    $result = $conn->query($sql); 

    /*Verificar si se actualizó el estudiante*/
    if ($conn->affected_rows == 1) {
        echo "Se actualizó el estudiante correctamente.";
    } else {
        echo "No se pudo actualizar el estudiante.";
    }
}

$conn->close();
?>