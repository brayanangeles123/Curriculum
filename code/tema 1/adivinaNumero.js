var numeroSecreto = Math.trunc(Math.random() *  20) +1; /*genera aleatoriamente un numero*/
var intentos = 7;
var logrado =0;

function adivinaNumero(numero, vidas, logrado){
    while(true){
        vidas=vidas-1
        logrado += 1
        var usuario = prompt("Piensa en un numero entero del 1 y el 20. ¿Cual es?");
        if(usuario == 0){
            break
        }
        else if(vidas ==0){
            alert("Has perdido")
            break
        }
        else if(usuario == numero){
            alert("has ganado al intento" + logrado)
            break
        }
        else if(usuario < numero){
            alert("El numero es menor, vuelve a intentarlo")
        }
        else if(usuario > numero){
        alert("El numero es mayor, vuelve a intentarlo")
}
}
}
        adivinaNumero(numeroSecreto, intentos, logrado) /*manda a llamar la funcion*/