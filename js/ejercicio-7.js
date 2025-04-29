/* Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/ 

function tablaMultiplicar(numero) {
    for(let i = 0; i <= 10; i++) {
        document.writeln(`${numero} x ${i} = ${numero * i}<br>`)
    }
}

tablaMultiplicar(5)