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
document.writeln(`<p>El elemento en <b>*PRIMERA*</b> posicion del array es: <b>*${ciudades[0]}*</b></p><br>`);
document.writeln(`<p>El elemento en <b>*TERCERA*</b> posicion del array es: <b>*${ciudades[2]}*</b></p><br>`);
const ultimoElemento = ciudades[ciudades.length - 1];
document.writeln(`<p>El elemento en <b>*ULTIMA*</b> posicion del array es: <b>*${ultimoElemento}*</b></p><br>`);

ciudades.push('Paris');
ciudades[1] = 'Barcelona';
document.writeln(`<p>El elemento en <b>*SEGUNDA*</b> posicion del array sustituido es: <b>*${ciudades[1]}*</b></p><br>`);