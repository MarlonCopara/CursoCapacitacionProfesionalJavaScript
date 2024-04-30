// Importar el módulo File System de Node.js
const fs = require('fs');

// Definir la ruta de los archivos de entrada y salida
const inputFile = 'input.txt';
const outputFile = 'output.txt';

// Leer el contenido del archivo de entrada
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo de entrada:', err);
        return;
    }
    
    // Contar las líneas
    const lines = data.split('\n').length;
    console.log('Número de líneas:', lines);

    // Escribir el contenido en el archivo de salida
    fs.writeFile(outputFile, data, (err) => {
        if (err) {
            console.error('Error al escribir en el archivo de salida:', err);
            return;
        }
        console.log('Contenido copiado a output.txt');

        // Borrar el archivo de entrada
        fs.unlink(inputFile, (err) => {
            if (err) {
                console.error('Error al borrar el archivo de entrada:', err);
                return;
            }
            console.log('Archivo de entrada borrado correctamente');
        });
    });
});
