/*
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/

const apariciones = {}; // Objeto para almacenar el conteo de apariciones de cada suma
let resultados = []; // Lista para guardar cada lanzamiento y su suma

// Lanzar los dados 50 veces y registrar las apariciones
for (let i = 0; i < 50; i++) {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const suma = dado1 + dado2;

    apariciones[suma] = (apariciones[suma] || 0) + 1;
    resultados.push({ lanzamiento: i + 1, suma: suma, apariciones: apariciones[suma] });
}

// Construir la tabla con los 50 resultados
document.writeln("<table border='1'><tr><th>Suma🎲🎲</th><th>Apariciones</th></tr>");

resultados.forEach(({ lanzamiento, suma, apariciones }) => {
    document.writeln(`<tr><td>${suma}</td><td>${apariciones}</td></tr>`);
});

document.writeln("</table>");




