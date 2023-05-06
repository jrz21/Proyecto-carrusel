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

/*Verificar si se enviaron datos por GET*/
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    /*Obtener el ID del estudiante a buscar*/
    $id = $_GET['id'];

    /*Consulta para obtener los datos del estudiante*/
    $sql = "SELECT * FROM estudiantes WHERE id = '$id'";
    $result = $conn->query($sql); 

    /*Verificar si se encontró el estudiante*/
    if ($result->num_rows == 1) {
        /*Obtener los datos del estudiante*/
        $row = $result->fetch_assoc();
        $estudiante = array(
            "nombre" => $row['nombre'],
            "apellido" => $row['apellido'],
            "email" => $row['email'],
            "telefono" => $row['telefono'],
            "edad" => $row['edad']
        );
                
        /*Devolver los datos del estudiante en formato JSON*/
        echo json_encode($estudiante);
    } else {
        /*Devolver un objeto JSON indicando que no se encontró el estudiante*/
        $respuesta = array(
            "error" => "No se encontró el estudiante con el ID ingresado."
        );
        echo json_encode($respuesta);
    }
            }
            
            $conn->close();
            ?>