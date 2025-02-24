let numeros = [];
let pares = [];
let impares = [];

function agregarNumero() {
    let input = document.getElementById("numero").value;
    let numero = parseInt(input);

    // Verificamos que la entrada 
    if (isNaN(numero)) {
        alert("Por favor, introduce un número válido.");
        return;
    }
    
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


    document.getElementById("numero").value = "";


    mostrarResultados();
}

function mostrarResultados() {
 
    document.getElementById("array").textContent = `Array de entrada: [${numeros.join(", ")}]`;


    let cantidadPares = pares.length;
    let cantidadImpares = impares.length;

    // Mostrar la cantidad de pares e impares
    document.getElementById("cantidad-pares").textContent = `Pares: ${cantidadPares}`;
    document.getElementById("cantidad-impares").textContent = `Impares: ${cantidadImpares}`;
}
