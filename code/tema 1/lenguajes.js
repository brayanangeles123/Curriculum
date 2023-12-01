var lenguajes = ['Python', 'java', 'JavaScript']

function imprimeForBasico(lenguajes){
    var salida= ''
    for(var i = 0; i<lenguajes.length; i++){
        salida += lenguajes[i] + '\n'
    }
    alert(salida)
}

function imrpimeFor(lenguajes){
    var salida = ''
    for(var i = 0; i < lenguajes.length; i++){
        salida += lenguajes[i] + 'se encuentra en el indice' + 'i' + '\n'

    }
    alert(salida)
}

function imprimeForechbasico(lenguajes){
    var salida = ''
    lenguajes.forEach(element =>
        salida += element + '\n'
    )
    alert(salida)
}

function imprimeForech(lenguajes){
    var salida=''
    lenguajes.forEach(function (valor, indice){
        salida += valor + ' se encuentra en el indice ' + indice + '\n'
    })
    alert(salida)
}

function mostrarMenu() {
    var opcion = prompt('Seleccione una opcion: ' + '\n1. Imprimir lenguajes con "for" basico' +
    '\n2. Imprimir lenguajes con "for" y su indice' + '\n3. Imprimir lenguajes con "forEach" basico' +
    '\n4. Imprimir lenguajes con "forEach" y su indice' + '\nIngrese el numero de la opcion');
    switch (opcion) {
        case '1':
            imprimeForBasico(lenguajes);
            break;
        case '2':
            imrpimeFor(lenguajes);
            break;
        case '3':
            imprimeForechbasico(lenguajes);
            break;
        case '4':
            imprimeForech(lenguajes);
            break;
        default:
            alert('Opcion invalida. Seleccione otra opcion.');
            break;
    }
}

mostrarMenu()

