//La primera línea del código crea un arreglo llamado estacionamiento con una longitud de 10 elementos, inicializados con el valor de null
const estacionamiento = new Array(10).fill(null)

//se encarga de mostrar el estado actual del estacionamiento
function mostrarEstado(indice = 0, mensaje = "Estado actual del estacionamiento\n"){
  if (indice >= estacionamiento.length){
    alert(mensaje);
    return;
  }
  
//recore cada espacio del estacionamiento y checa cual esta libre
  if (estacionamiento[indice] === null) {
    mensaje += `Espacio ${indice + 1}: Libre\n`
  }else{
    mensaje += `Espacio ${indice + 1}: Ocupado por el vehiculo ${estacionamiento[indice]}\n`
  }

  mostrarEstado(indice + 1, mensaje);
}

//se encarga de buscar y mostrar el primer espacio disponible en el estacionamiento
function buscaEspacioDisponible(){

//Realiza una búsqueda recursiva en el arreglo estacionamiento para encontrar el primer índice que tenga el valor null 
  function buscaEspacioRecursivo(indice) {
    if (indice >= estacionamiento.length) {
      return -1;
    }

    if (estacionamiento[indice] === null){
      return indice;
    }
    return buscaEspacioRecursivo(indice + 1);
  }


  const indiceDisponible = buscaEspacioRecursivo(0)
  if (indiceDisponible === -1) {
    alert("No hay espacios disponible.")
    }else{
      alert(`El espacio ${indiceDisponible + 1} esta disponible`)
    }
}
//Solicita al usuario el número de espacio que desea ocupar y el nombre o número de placa del vehículo
function ocuparEspacio(){
  const espacio = parseInt(prompt("Ingrese el numero de espacio que desea ocupar:"))

  if (isNaN(espacio) || espacio < 1 || espacio > estacionamiento.length){
    alert("Numero de espacio invalido.")
    return;
  }
  if (estacionamiento[espacio - 1] !== null){
    alert("El espacio seleccionado ya esta ocupado.")
    return;
  }
    const vehiculo = prompt("Ingrese el nombre o numero de placa del vehiculo:")
    estacionamiento[espacio - 1] = vehiculo;
    alert(`El espacio ${espacio} ha sido ocupado por el vehiculo ${vehiculo}.`)
}

//Solicita al usuario el número de espacio que desea liberar
function liberarEspacio(){
  const espacio = parseInt(prompt("Ingrese el numero de espacio que dese liberar:"))

  if (isNaN(espacio) || espacio < 1 || espacio > estacionamiento.length){
    alert("Numero de espacio invalido.");
    return;
  }

  if (estacionamiento[espacio - 1] === null){
    alert("El espacio seleccionado ya esta libre.")
    return;
  }

  const vehiculo = estacionamiento[espacio -1];
  estacionamiento[espacio - 1] = null;
  alert(`El espacio ${espacio} ha sido liberado. El vehiculo ${vehiculo} ha salido`)
}

//Dependiendo de la opción seleccionada por el usuario, llama a la función correspondiente para ejecutar la operación deseada
function mostrarMenu(){
  var option = prompt("---MENU---\n" +
                      "1. Mostrar estado actual del estacionamiento\n" +
                      "2. Buscar espacio dsiponible\n" +
                      "3. Ocupar espacio\n" +
                      "4. Liberar espacio\n" +
                      "5. Salir")
        switch (option){
          case "1":
            mostrarEstado()
            mostrarMenu()
          case "2":
            buscaEspacioDisponible()
            mostrarMenu()
          case "3":
            ocuparEspacio()
            mostrarMenu()
          case "4":
            liberarEspacio()
            mostrarMenu()
          case "5":
            alert("Saliendo del programa...")
            window.close()
            return;
          default:
            alert("Opcion invalida.")
            break;
        }
}

//Inicia la ejecución del programa
mostrarMenu()