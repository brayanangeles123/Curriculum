var nombre, edad, curso;
class Persona {
    constructor(_nombre, _edad) {
        nombre = _nombre;
        edad = _edad;
    }

    saludar() {
        return 'Hola, mi nombre es ' + nombre + ' y tengo ' + edad + ' años.';
    }
}

class Estudiantes extends Persona{
    constructor(_nombre, _edad, _curso) {
        super(_nombre, _edad);
        curso = _curso;
    }

    estudiar() {
        return nombre + ' esta estudiando el curso de ' + curso;
    }
}

function mostrarMenu() {
    var opcion = prompt()
}