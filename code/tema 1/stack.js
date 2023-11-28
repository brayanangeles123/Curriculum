class Stack {
    constructor() {
      this.data = [];
    }
  
    // Agrega un elemento a la parte superior de la pila.
    push(_data) {
      this.data.push(_data);
    }
  
    // Busca y devuelve el elemento superior de la pila.
    peek() {
      if (this.isEmpty()) {
        return "La pila estÃ¡ vacÃ­a";
      }
      return this.data[this.data.length - 1];
    }
  
    // Retira y devuelve el elemento superior de la pila.
    pop() {
      if (this.isEmpty()) {
        return "La pila estÃ¡ vacÃ­a";
      }
      return this.data.pop();
    }
  
    // Comprueba si la pila estÃ¡ vacÃ­a.
    isEmpty() {
      return this.data.length === 0;
    }
  
    // Devuelve el nÃºmero de elementos en la pila.
    size() {
      return this.data.length;
    }
  
    // Elimina todos los elementos de la pila.
    clear() {
      this.data = [];
    }
  
    // Muestra los elementos de la pila.
  print() {
    let items = "null \n";
    
    // Recorre los elementos de la pila en orden inverso (desde el Ãºltimo al primero)
    for (let i = this.data.length - 1; i >= 0; i--) {
      items += this.data[i];
  
      // Agrega la flecha "->" solo si no es el Ãºltimo elemento
      if (i !== 0) {
        items += "\n -> \n";
      }
    }
  
    alert(items);
  }
  }
  
  // Define el menu
  function menu() {
    const pila = new Stack();
  
    while (true) {
      const opcion = prompt(
        "Seleccione una opcion:\n" +
          "1. Insertar elemento en la cima de la pila\n" +
          "2. Buscar elemento en la cima de la pila\n" +
          "3. Eliminar elemento en la cima de la pila\n" +
          "4. Comprobar si la pila esta vaci­a\n" +
          "5. Mostrar el numero de elementos de la pila\n" +
          "6. Eliminar todos los elementos de la pila\n" +
          "7. Mostrar los elementos de la pila\n" +
          "8. Salir"
      );
  
      switch (opcion) {
        case "1":
          const data = prompt("Ingresa el dato a registrar en la pila:");
          pila.push(data);
          break;
        case "2":
          const resultPeek = pila.peek();
          alert("Resultado de la busqueda: " + resultPeek);
          break;
        case "3":
          const resultPop = pila.pop();
          alert("Resultado de la eliminacion: " + resultPop);
          break;
        case "4":
          const resultEmpty = pila.isEmpty();
          alert("La pila esta vaci­a: " + resultEmpty);
          break;
        case "5":
          const resultSize = pila.size();
          alert("Numero de elementos en la pila: " + resultSize);
          break;
        case "6":
          pila.clear();
          alert("Los datos se han borrado");
          break;
        case "7":
          pila.print();
          break;
        case "8":
          window.close() //Se utiliza para cerrar la ventana
          return
        default:
          alert("Opcion invalida. Intenta nuevamente.");
          break;
      }
    }
  }
  
  // Ejecuta el menÃº
  menu();