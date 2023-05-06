document.getElementById("formulario-busqueda").addEventListener("submit", function(event) {
    event.preventDefault(); //Prevenir que se recargue la página al enviar el formulario
  
    var form = document.getElementById("formulario-busqueda");
    var data = new FormData(form);
  
    var request = new XMLHttpRequest();
    request.open("POST", "consultama.php");
    request.send(data);
  
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          // Mostrar los resultados de la consulta en una tabla HTML
          document.getElementById("resultados").innerHTML = request.responseText;
        } else {
          alert("Error al buscar la información de matrícula.");
        }
      }
    }
  });
  
  document.getElementById("buscar-id").addEventListener("click", function(event) {
    event.preventDefault(); //Prevenir que se recargue la página al hacer clic en el botón
  
    var form = document.getElementById("formulario-busqueda");
    var data = new FormData(form);
  
    // Agregar un parámetro "buscar" a los datos del formulario
    data.append("buscar", "id");
  
    var request = new XMLHttpRequest();
    request.open("POST", "consultama.php");
    request.send(data);
  
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          // Mostrar los resultados de la consulta en una tabla HTML
          document.getElementById("resultados").innerHTML = request.responseText;
        } else {
          alert("Error al buscar la información de matrícula.");
        }
      }
    }
  });
  
  document.getElementById("buscar-todos").addEventListener("click", function(event) {
    event.preventDefault(); //Prevenir que se recargue la página al hacer clic en el botón
  
    var form = document.getElementById("formulario-busqueda");
    var data = new FormData(form);
  
    // Agregar un parámetro "buscar" a los datos del formulario
    data.append("buscar", "todos");
  
    var request = new XMLHttpRequest();
    request.open("POST", "consultama.php");
    request.send(data);
  
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          // Mostrar los resultados de la consulta en una tabla HTML
          document.getElementById("resultados").innerHTML = request.responseText;
        } else {
          alert("Error al buscar la información de matrícula.");
        }
      }
    }
  });