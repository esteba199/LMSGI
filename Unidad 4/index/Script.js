let numeros = [];
let pares = [];
let impares = [];

function agregarNumero() {
    let input = document.getElementById("numero").value;
    let numero = parseInt(input);

    // Verificamos que la entrada sea un número válido
    if (isNaN(numero)) {
        alert("Por favor, introduce un número válido.");
        return;
    }

    // Si el número es 0, terminamos
    if (numero === 0) {
        return;
    }

    // Agregamos el número al array
    numeros.push(numero);

    // Clasificamos el número como par o impar
    if (numero % 2 === 0) {
        pares.push(numero);
    } else {
        impares.push(numero);
    }

    // Limpiamos el campo de entrada
    document.getElementById("numero").value = "";

    // Actualizamos los resultados
    mostrarResultados();
}

function mostrarResultados() {
    // Mostrar el array de entrada
    document.getElementById("array").textContent = `Array de entrada: [${numeros.join(", ")}]`;

    // Contar los números pares e impares
    let cantidadPares = pares.length;
    let cantidadImpares = impares.length;

    // Mostrar la cantidad de pares e impares
    document.getElementById("cantidad-pares").textContent = `Pares: ${cantidadPares}`;
    document.getElementById("cantidad-impares").textContent = `Impares: ${cantidadImpares}`;
}
