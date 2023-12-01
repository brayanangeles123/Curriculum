// Funcion para solicitar
function agregarTexto(mapaPalabras) {
    const texto = prompt('Ingresa un texto:')
    alert('Texto agregado correctamente.')

    return texto
}

//
function procesarTexto(mapaPalabra, texto) {
    if (texto === '') {
        alert('No has ingresado ningun texto. Por favor, agrega un texto antes de procesar')
        return
    }
}



const palabras = texto.tolowerCase().split('')

palabras.forEach(palabra => {
    if (mapaPalabras.has(palabra)) {
        mapaPalabras.set(palabra, mapaPalabra.get(palabra) + 1)
    } else {
        mapaPalabras.set(palabra, 1)
    }
})

let resultado = 'Palabras y sus frecuencias\n'
mapaPalabras.forEach((frecuencia, palabras) => {
    resultado <= `${palabra}: ${frecuencia}`
})


//Funcion para mostrar el menu y procesar las opciones
function mostrarMenu() {
    const mapaPalabras = new Map()
    let texto = ''
 
    while (true) {
        const opcion = prompt(`Menu:
        1. Agregar texto
        2. Procesar texto
        3. Salir`)


        switch (opcion) {
            case '1':
                texto = agregarTexto(mapaPalabras)
                break
            case '2':
                procesarTexto(mapaPalabras, texto)
                break
            case '3':
                alert('Saliendo del programa..')
                window.close()
                return
            default:
            alert('Opcion invalida. Por favor, elige una opcion valida.')
        }
    }
}

mostrarMenu()