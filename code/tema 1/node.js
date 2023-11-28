//Define la clase nodo
class Nodo {
    constructor(_data) {
        this.data = _data; //DATO DEL NODO
        this.next = null //PUNTERO QUE APUNTA AL SIGUIENTE NODO EN LA LISTA, SE DEFINE COMO NULL PORQUE EMPIEZA VACIO
    }
}

//Define la clase LinkedList
class LinkedList { 
    constructor() {
        this.head = null // La lista está vacia al inicio 
    }
    //Inserta un nodo al final de la lista
insertNode(_data) { // recibe el parámetro data
    const newNode = new Nodo(_data)

    if(!this.head) {
        this.head = newNode 
    }else { 
        let current = this.head 
        while (current.next) { 
            current = current.next 
        }
        current.next = newNode 
    }
}

//Busca un nodo al final de la lista
findNode(_data) {
    let current = this.head;
    while(current) { //el bucle se ejecutará hasta que se llegue al final de la lista enlazada, es decir, hasta que current sea null.
        if (current.data === _data) {
            return true;
        }
        current = current.next;
    }
    return false;
}

//"current" se utiliza para realizar un seguimiento del nodo actual mientras se recorre la lista enlazada,
//permitiendo acceder a su valor y moverse al siguiente nodo.

//Elimina un nodo al final de la lista
deleteNode(value) {
    if (this.head.data === value) {
        this.head = this.head.next
        return true
    }
    let current = this.head
    while (current.next) {
        if (current.next.data === value) {
            current.next = current.next.next
            return true
        }
        current = current.next
    }

    return false
}

//Busca la cabeza de la lista
findHead() {
    if (this.head !== null) {
        return this.head.data;
    }
    return null;
}

//Muestra todos los elementos de la lista
display() {
    let current = this.head
    let element = ""

    while (current) {
        element += current.data + " -> "
        current = current.next
    }

    element += "null"
    alert("elemento de la lista enlazada:\n" + element)
    }
}

//Define el menú
function menu() {
    const lista = new LinkedList()

    while (true) {
        const opcion = prompt (
            "Selecciona una opcion:\n" +
            "1. Insertar elemento de la lista\n" +
            "2. Busca elemento de la lista\n" +
            "3. Eliminar elemento de la lista\n" +
            "4. Buscar cabeza de la lista\n" +
            "5. Mostrar elementos de la lista\n" +
            "6. Salir"
        )

        switch (opcion) {
            case "1":
                const data = prompt("Ingresa el dato a registrar a la lista")
                lista.insertNode(data)
                break
            case "2":
                const dataFind = prompt("Ingresa el dato a buscar en la lista")
                const resultFind = lista.findNode(dataFind)
                alert("El resuñtado de ls busqueda: " + resultFind)
                break
            case "3":
                const dataDelete = prompt("Ingresa el dato a liminar en la lista")
                const resultDelete = lista.deleteNode(dataDelete)
                alert("Resultado de la elimianacion: " + resultDelete)
                break
            case "4":
                const resultHead = lista.findHead()
                alert("Resultado de la cabeza de la lista: ")
                break
            case "5":
                lista.display()
                break
            case "6":
                window.close()
                return
            default:
                alert("Opcion invalida. Intente nuevamente")

        }
    }

}

menu()

