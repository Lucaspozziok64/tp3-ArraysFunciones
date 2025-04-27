/*
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:
Input:
lado A = 24
lado B = 5

Output: 58
*/

const ladoA = parseInt(prompt("Ingrese el lado A del rectángulo"));
const ladoB = parseInt(prompt("Ingrese el lado B del rectángulo"));
const perimetro = 2 * (ladoA + ladoB);

function calcularPerimetro(ladoA, ladoB) {
    return "El area del perimetro es: " + perimetro;
}

document.writeln(calcularPerimetro(perimetro));
