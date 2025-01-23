// Obtén el elemento del navbar
const navbar = document.getElementById("navbar");

// Función para agregar la clase sticky-top cuando se hace scroll
window.onscroll = function() {
    if (window.scrollY > 45) {
        navbar.classList.add("sticky-top", "navbar-light");
    } else {
        navbar.classList.remove("sticky-top");
        navbar.classList.add("navbar-light");  // Aseguramos que 'navbar-light' se mantenga al volver al top
    }
};

//Inicialización del Popovers
document.addEventListener('DOMContentLoaded', function () {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Cerrar el popover después de un tiempo (ej. 5 segundos)
    popoverTriggerList.forEach(function (popoverTriggerEl) {
        const popover = new bootstrap.Popover(popoverTriggerEl);
        
        // Mostrar el popover cuando se activa
        popoverTriggerEl.addEventListener('shown.bs.popover', function () {
            setTimeout(function () {
                popover.hide(); // Cerrar el popover después de 5 segundos
            }, 2000); // 5000ms = 5 segundos
        });
    });
});

//Inicialización del Tooltip
document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });


//validacion del formulario
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario para validarlo primero
    
    var inputs = document.querySelectorAll("#contactForm input, #contactForm textarea");
    var valid = true;
  
    inputs.forEach(function(input) {
      // Validar si el campo está vacío
      if (!input.value) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        valid = false;
      } else {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
      }
    });
  
    // Si todos los campos son válidos, se puede enviar el formulario
    if (valid) {
      // Aquí podrías agregar el código para enviar el formulario, por ejemplo con Ajax
      alert("Formulario enviado correctamente!");
    }
  });
  
  // Validación en tiempo real mientras el usuario escribe
  var inputs = document.querySelectorAll("#contactForm input, #contactForm textarea");
  
  inputs.forEach(function(input) {
    input.addEventListener("input", function() {
      if (input.value) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
      } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
      }
    });
  });



  
  
