/* Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/ 

function tablaMultiplicar(numero) {
    for(let i = 0; i <= 10; i++) {
        document.writeln(`<p>${numero} x ${i} = ${numero * i}<p>`)
    }
}

const numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar: (1-10)"));

if (numero >= 1 && numero <= 10) {
    tablaMultiplicar(numero);
}
else {
    document.writeln("<h3>El número ingresado no está en el rango permitido</h3>");
}