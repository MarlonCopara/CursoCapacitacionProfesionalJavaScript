// Estructuras de control de flujo
console.log("1. Control de flujo");

// Estructura if
console.log("1.1 | Estructura if");
var edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
}

// Estructura if...else
console.log("1.2 | Estructura if…else");
var hora = 10;
if (hora < 12) {
    console.log("Buenos días");
} else {
    console.log("Buenas tardes");
}

// Estructura for
console.log("1.3 | Estructura for");
for (var i = 0; i < 5; i++) {
    console.log("Iteración " + i);
}

// Estructura for...in
console.log("1.4 | Estructura for...in");
var persona = { nombre: "Juan", edad: 30 };
for (var key in persona) {
    console.log(key + ": " + persona[key]);
}

// Funciones
console.log("2. Funciones");

// Funciones útiles para cadenas de texto
console.log("2.1 | Funciones útiles para cadenas de texto");
var mensaje = "Hola Mundo";
console.log("Longitud del mensaje:", mensaje.length);
console.log("Concatenación:", mensaje.concat(" desde JavaScript"));
console.log("Mayúsculas:", mensaje.toUpperCase());
console.log("Minúsculas:", mensaje.toLowerCase());
console.log("Carácter en la posición 4:", mensaje.charAt(3));
console.log("Índice de 'Mundo':", mensaje.indexOf("Mundo"));
console.log("Subcadena desde la posición 5:", mensaje.substring(4));

// Funciones útiles para arrays
console.log("2.2 | Funciones útiles para arrays");
var numeros = [1, 2, 3, 4, 5];
console.log("Array original:", numeros);
console.log("Unión con otro array:", numeros.concat([6, 7, 8]));
console.log("Unión con elementos individuales:", numeros.concat(6, 7, 8));
console.log("Unión con separador:',':", numeros.join(","));
console.log("Último elemento eliminado:", numeros.pop());
console.log("Array después de pop:", numeros);
numeros.push(6);
console.log("Elemento añadido al final:", numeros);
console.log("Primer elemento eliminado:", numeros.shift());
console.log("Array después de shift:", numeros);
numeros.unshift(0);
console.log("Elemento añadido al principio:", numeros);
console.log("Array invertido:", numeros.reverse());

// Funciones útiles para números
console.log("2.3 | Funciones útiles para números");
console.log("Resultado de operación no numérica:", isNaN("Hola"));
console.log("Resultado de división por cero:", 10 / 0);
console.log("Valor Infinity:", Number.POSITIVE_INFINITY);
console.log("Redondeo a dos decimales:", (12.34567).toFixed(2));

// Ámbito de las variables
console.log("3. El ámbito de las variables");
function mostrarMensaje() {
    var mensajeLocal = "Hola desde la función";
    console.log(mensajeLocal);
}
mostrarMensaje();

