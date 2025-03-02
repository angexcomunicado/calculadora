const calculadora = document.getElementById('calculadora');
const resultado = document.getElementById('result');

let operacion = [];
let nuevaEntrada = false;
calculadora.addEventListener('click', agregarNum);
document.addEventListener('keydown', funcionTeclas);

function funcionTeclas(e) {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
        if (nuevaEntrada) {
            resultado.value = e.key
            nuevaEntrada = false;
        } else {
            resultado.value += e.key
        }
    }

    // if (e.keyCode >= 48 && e.keyCode <= 57 && operacion.length > 1) {
    //     calculadora.reset();
    //     resultado.value += e.key;
    // }
    if (e.key === '-') {restar()};
    if (e.key === 'Enter') {igual()};
    if (e.key === '/') {dividir()};
    if (e.key === 'x') {multiplicar()};
    if (e.key === '+') {sumar()};
    if (e.key === 'c' || e.key === 'Escape') {clear()};
    //console.log(e)
}
function agregarNum(e) {
    if (e.target.getAttribute('type') === 'button') {
        if (e.target.className != 'operacion') {
            if (nuevaEntrada) {
                resultado.value = e.target.innerText;
                nuevaEntrada = false;
            } else {
                resultado.value += e.target.innerText; 
            }
            
        }
    }
    if (e.target.id === 'clear') {clear()}
    if (e.target.id === 'dividir') {dividir()}
    if (e.target.id === 'multiplicar') {multiplicar()}
    if (e.target.id === 'restar') {restar()}
    if (e.target.id === 'sumar') {sumar()}
    if (e.target.id === 'igual') {igual()}
}

function clear() {
    resultado.value = '';
    operacion = [];
}

function dividir() {
    operacion = [];
    operacion.push(resultado.value);
    operacion.push('/');
    nuevaEntrada = true;
    //calculadora.reset(); //Aquí el metodo de reset() al parecer solo funciona cuando es un form, para que se reseteen todos los datos
}

function multiplicar() {
    operacion = [];
    operacion.push(resultado.value);
    operacion.push('*');
    nuevaEntrada = true;
}

function restar() {
    operacion = [];
    operacion.push(resultado.value);
    operacion.push('-');
    nuevaEntrada = true;
}

function sumar() {
    operacion = [];
    operacion.push(resultado.value);
    operacion.push('+');
    nuevaEntrada = true;
}

function igual() {
    if (operacion.length > 2) {
        operacion[0] = resultado.value;
        const total2 = eval(operacion.join(''));
        resultado.value = total2;
    } else {
        operacion.push(resultado.value);
        calculadora.reset()
        const total = eval(operacion.join('')) //eval() evalua una operacion de string como si fuera código javascript, y .join() lo que está haciendo aquí es contatenar lo que está dentro de la string y quitando los espacios
        resultado.value = total;
    }
}

