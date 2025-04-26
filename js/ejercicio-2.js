/*
Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
*/

const ciudades = [];
const ciudad = "";

do {
    const ciudad = prompt('Ingrese Nombres de Ciudades: ');

    if (ciudad) {
        ciudades.push(ciudad);
        continue;
    }
} while (confirm('Desea agregar otra ciudad?'));

document.writeln(`<h3>la logitud del array es: ${ciudades.length}</h3>`);
document.writeln(`<p>El elemento en PRIMERA posicion del item es: ${ciudades[0]}</p><br>`);
document.writeln(`<p>El elemento en TERCERA posicion del item es: ${ciudades[2]}</p><br>`);
let ultimoElemento = ciudades[ciudades.length - 1];
document.writeln(`<p>El elemento en ULTIMA posicion del item ${ultimoElemento}</p><br>`);