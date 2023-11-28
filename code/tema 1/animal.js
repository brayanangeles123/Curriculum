var especie, nombre, edad;

class Animal { /*creara onjetos*/
    constructor(_especie, _nombre, _edad) {
        this.especie = _especie;
        this.nombre = _nombre;
        this.edad = _edad;
    }

    obtenerInformacion() { /*Metodo set se encarga de darle un valor o atributoa un objeto*/
        return `Especie: ${this.especie}\nNombre: ${this.nombre}\nEdad: ${this.edad} años`;

    }
}

function mostrarMenu(){
    var opcion = prompt (
        "Seleccione una opcion:\n" +
        "1. Ingresar la informacion de un animal. \n" +
        "2. Mostrar la informacion del animal.\n" +
        "Ingrese el numero de la opcion:"
    );

    switch (opcion) {
        case "1":
            ingresarInformacion();
            break;
        case "2":
            mostrarInformacion();
            break;
        default:
            alert("Opcion invalida. Seleccione otra opcion");
            mostrarMenu();
            break;
    }

}

var animal;

function ingresarInformacion() {
    var especie = prompt("Ingrese la especie del animal");
    var nombre = prompt ("Ingrese el nombre del animal:");
    var edad = parseInt(prompt("Ingrese la edad del animal en años"));

    animal = new Animal(especie, nombre, edad);
    alert("Informacion del animal almacenada exitosamente.");

    mostrarMenu();
}

function mostrarInformacion() {
    if (animal) {
        var informacion = animal.obtenerInformacion();
        alert(informacion);
    } else {
        alert("No se ha ingresado informacion del animal. Por favor seleccione la opcion 1 para ingresar informacion");
        mostrarMenu();
    }
}

mostrarMenu();