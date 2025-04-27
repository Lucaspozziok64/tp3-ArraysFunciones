/*
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

const cadenaTexto = "Hola Mundo";

function informacionCadena(cadenaTexto) {
    if(cadenaTexto === cadenaTexto.toUpperCase()) {
        return "<h3>El texto está formado sólo por mayúsculas</h3>";
    }else if(cadenaTexto === cadenaTexto.toLowerCase()) {
        return "<h3>El texto está formado sólo por minúsculas</h3>";
    }else {
        return "<h3>El texto está formado por una mezcla de mayúsculas y minúsculas</h3>";
    }
}

document.writeln(informacionCadena(cadenaTexto));
