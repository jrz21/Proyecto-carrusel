<?php
function crear_grafico_edad_promedio($conn) {
    // Comprobar si se ha recibido la acción de cargar datos
    if (isset($_POST['accion']) && $_POST['accion'] == 'cargar_datos') {
        // Consulta para obtener el promedio de edad de los estudiantes
        $sql = "SELECT ROUND(AVG(edad), 2) AS edad_promedio FROM estudiantes";
        $result = $conn->query($sql);

        // Verificar si hay resultados
        if ($result->num_rows > 0) {
            // Obtener el resultado de la consulta
            $row = $result->fetch_assoc();
            // Crear un array con los datos del gráfico
            $datos = array(
                "labels" => ["Edad promedio"],
                "datos" => array($row["edad_promedio"])
            );
        } else {
            echo "No se encontraron estudiantes.";
        }

        // Devolver los datos en formato JSON
        echo json_encode($datos);
    }
}
?>