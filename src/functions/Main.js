function insert (num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num
};

function clean() {
    document.getElementById('resultado').innerHTML = '';
};

function remove() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
};

function calculate() {
    let resultado = document.getElementById('resultado').innerHTML;

    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
};

function fatorial() {
    let resultado = document.getElementById('resultado').innerHTML;
    let fatorial = resultado;

    for (let i = resultado - 1; i > 0; i--) {
        fatorial *= i
    }

    document.getElementById('resultado').innerHTML = fatorial
};

function raiz() {
    let resultado = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = Math.sqrt(resultado)
}