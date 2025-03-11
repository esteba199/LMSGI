/* script.js */
function agregarNumero() {
    const numeroInput = document.getElementById('numeroInput');
    const numero = parseInt(numeroInput.value);

    if (!isNaN(numero)) {
        const contenedor = document.getElementById('numeros-container');
        const nuevoElemento = document.createElement('div');
        nuevoElemento.textContent = numero;
        nuevoElemento.classList.add('numero', numero % 2 === 0 ? 'par' : 'impar');
        contenedor.appendChild(nuevoElemento);
        numeroInput.value = '';
        numeroInput.focus();
    }
}

function ocultarPares() {
    document.querySelectorAll('.par').forEach(num => {
        num.style.display = 'none';
    });
}

function ocultarImpares() {
    document.querySelectorAll('.impar').forEach(num => {
        num.style.display = 'none';
    });
}

function mostrarPares() {
    document.querySelectorAll('.par').forEach(num => {
        num.style.display = 'inline-block';
    });
}

function mostrarImpares() {
    document.querySelectorAll('.impar').forEach(num => {
        num.style.display = 'inline-block';
    });
}