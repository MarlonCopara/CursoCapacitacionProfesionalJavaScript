// Ejemplo de código JavaScript

// Funciones útiles para cadenas de texto
function demoCadenasTexto() {
    var men = "Hola Mundo";
    var numLetras = men.length; // numLetras = 10
    var men1 = "Hola";
    var men2 = " Mundo";
    var menConcat = men1 + men2; // menConcat = "Hola Mundo"
    var menConcat2 = men1.concat(" Mundo"); // menConcat2 = "Hola Mundo"
    var var1 = "Hola ";
    var var2 = 3;
    var menSuma = var1 + var2; // menSuma = "Hola 3"

    console.log("Número de letras en 'Hola Mundo': " + numLetras);
    console.log("Concatenación de 'Hola' y ' Mundo': " + menConcat);
    console.log("Concatenación usando concat(): " + menConcat2);
    console.log("Concatenación de 'Hola ' y 3: " + menSuma);
}

// Funciones útiles para arrays
function demoArrays() {
    var a1 = [1, 2, 3];
    var a2 = a1.concat(4, 5, 6); // a2 = [1, 2, 3, 4, 5, 6]
    var a3 = a1.concat([4, 5, 6]); // a3 = [1, 2, 3, 4, 5, 6]
    
    console.log("Concatenación de arrays: " + a2);
    console.log("Concatenación de arrays: " + a3);
}

// Funciones útiles para números
function demoNumeros() {
    var num1 = 4564.34567;
    var numRedondeado1 = num1.toFixed(2); // 4564.35
    var numRedondeado2 = num1.toFixed(6); // 4564.345670
    var numRedondeado3 = num1.toFixed(); // 4564

    console.log("Número redondeado a 2 decimales: " + numRedondeado1);
    console.log("Número redondeado a 6 decimales: " + numRedondeado2);
    console.log("Número redondeado: " + numRedondeado3);
}

// Llamadas a las funciones de demostración
demoCadenasTexto();
demoArrays();
demoNumeros();
