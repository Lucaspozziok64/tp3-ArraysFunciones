/*
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/

const numeroEntero = 10;

function esPar(numeroEntero) {
    if (numeroEntero % 2 == 0) {
        return "<h2>El número es par</h2>";
    } else {
        return "<h2>El número es impar</h2>";
    }
}

document.writeln(esPar(numeroEntero));