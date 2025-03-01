const calculadora = document.getElementById('calculadora');
const resultado = document.getElementById('result');

let operacion = [];
calculadora.addEventListener('click', agregarNum);
document.addEventListener('keydown', imprimirTecla);

function imprimirTecla(e) {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
        console.log(e.key)
    }
}



function agregarNum(e) {
    if (e.target.getAttribute('type') === 'button') {
        if (e.target.className != 'operacion') {
            resultado.value += e.target.innerText;
        }
        if (e.target.className != 'operacion' && operacion.length > 1) {
            calculadora.reset();
            resultado.value += e.target.innerText;
        }

    }
    if (e.target.id === 'clear') {
        resultado.value = '';
        operacion = [];
    }
    if (e.target.id === 'dividir') {
        operacion = [];
        operacion.push(resultado.value);
        operacion.push('/');
        //calculadora.reset(); //Aquí el metodo de reset() al parecer solo funciona cuando es un form, para que se reseteen todos los datos
        console.log(operacion);
    }

    if (e.target.id === 'multiplicar') {
        operacion = [];
        operacion.push(resultado.value);
        operacion.push('*');
    }
    if (e.target.id === 'restar') {
        operacion = [];
        operacion.push(resultado.value);
        operacion.push('-');
    }
    if (e.target.id === 'sumar') {
        operacion = [];
        operacion.push(resultado.value);
        operacion.push('+');
        console.log(operacion)
        //calculadora.reset();
    }
    if (e.target.id === 'igual') {
        if (operacion.length > 2) {
            operacion[0] = resultado.value;
            console.log(operacion);
            const total2 = eval(operacion.join(''));
            console.log(total2);
            resultado.value = total2;
        } else {
            console.log(operacion);
            operacion.push(resultado.value);
            calculadora.reset()
            const total = eval(operacion.join('')) //eval() evalua una operacion de string como si fuera código javascript, y .join() lo que está haciendo aquí es contatenar lo que está dentro de la string y quitando los espacios
            resultado.value = total;
            console.log(operacion)
            console.log(total);
        }
    }
}

