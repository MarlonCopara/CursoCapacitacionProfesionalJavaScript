// Estructuras de control de flujo

// Estructura if
function ejemploIf(condicion) {
    if (condicion) {
        console.log("La condición es verdadera.");
    }
}

// Estructura if...else
function ejemploIfElse(condicion) {
    if (condicion) {
        console.log("La condición es verdadera.");
    } else {
        console.log("La condición es falsa.");
    }
}

// Estructura for
function ejemploFor() {
    for (var i = 0; i < 5; i++) {
        console.log("Iteración " + (i + 1));
    }
}

// Estructura for...in
function ejemploForIn() {
    var numbers = [0, 1, 2];
    for (var i in numbers) {
        var a = numbers[i];
        console.log("Elemento " + i + ": " + a);
    }
}

// Funciones útiles para cadenas de texto

// length
var mensaje = "Hola Mundo";
var numLetras = mensaje.length;

// toUpperCase()
var mensajeMayusculas = mensaje.toUpperCase();

// Funciones útiles para arrays

// length
var array = ["a", "b", "c"];
var numElementos = array.length;

// Funciones útiles para números

// isNaN()
function esNumero(num) {
    if (isNaN(num)) {
        console.log("No es un número.");
    } else {
        console.log("Es un número.");
    }
}

// toFixed()
var numero = 123.456;
var numeroRedondeado = numero.toFixed(2);

// El ámbito de las variables

// Variable global
var mensajeGlobal = "Hola desde el ámbito global";

function mostrarMensajeGlobal() {
    console.log(mensajeGlobal);
}

// Variable local
function mostrarMensajeLocal() {
    var mensajeLocal = "Hola desde el ámbito local";
    console.log(mensajeLocal);
}

// Ejecución de las funciones
ejemploIf(true);
ejemploIfElse(false);
ejemploFor();
ejemploForIn();
esNumero("abc");
console.log("Número redondeado:", numeroRedondeado);
mostrarMensajeGlobal();
mostrarMensajeLocal();
