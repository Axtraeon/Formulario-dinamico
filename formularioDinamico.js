
// Clase Empleado
class Empleado {
    constructor(nombre, apellidos, nacimiento, sueldo, dni, email) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nacimiento = nacimiento;
        this.sueldo = sueldo;
        this.dni = dni;
        this.email = email;
    }

    render() {
        const fila = document.createElement("tr");

        // Crear celdas para cada dato
        [this.nombre, this.apellidos, this.nacimiento, this.sueldo, this.dni, this.email].forEach(dato => {
            const celda = document.createElement("td");
            celda.textContent = dato;
            fila.appendChild(celda);
        });

        return fila;
    }
}

// Código del formulario dinámico
function generarFormulario() {
    // 1. Crear un formulario
    let formulario = document.createElement("form");
    formulario.id = "form-empleado";

    // 2. Agregar inputs al formulario
    const campos = [
        { id: "nombre", label: "Nombre", type: "text" },
        { id: "apellidos", label: "Apellidos", type: "text" },
        { id: "nacimiento", label: "Año de Nacimiento", type: "date" },
        { id: "sueldo", label: "Sueldo", type: "number" },
        { id: "dni", label: "DNI", type: "text" },
        { id: "email", label: "Email", type: "email" }
    ];

    campos.forEach(campo => {
        // Crear etiqueta
        let label = document.createElement("label");
        label.htmlFor = campo.id;
        label.innerText = campo.label;

        // Crear input
        let input = document.createElement("input");
        input.type = campo.type;
        input.id = campo.id;
        input.name = campo.id;

        // Agregar elementos al formulario
        formulario.appendChild(label);
        formulario.appendChild(input);
        formulario.appendChild(document.createElement("br")); // Salto de línea
    });

    // 3. Agregar un botón para enviar
    let boton = document.createElement("button");
    boton.type = "submit";
    boton.innerText = "Agregar Empleado";

    formulario.appendChild(boton);

    // 4. Agregar el formulario al contenedor
    const formContainer = document.getElementById("form-container");
    formContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar el formulario
    formContainer.appendChild(formulario);

    // 5. Manejar el evento de envío
    formulario.addEventListener("submit", function (e) {
        e.preventDefault(); // Evitar recarga de la página

        // Recoger datos del formulario
        let datos = {};
        campos.forEach(campo => {
            datos[campo.id] = document.getElementById(campo.id).value;
        });

        // Crear un nuevo empleado y agregarlo a la tabla
        let nuevoEmpleado = new Empleado(
            datos.nombre,
            datos.apellidos,
            datos.nacimiento,
            datos.sueldo,
            datos.dni,
            datos.email
        );

        let tabla = document.querySelector("#lista-empleados tbody");
        tabla.appendChild(nuevoEmpleado.render());

        // Resetear formulario
        formulario.reset();
    });
}

// Generar el formulario al cargar la página
generarFormulario();
