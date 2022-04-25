function teste() {
    alert('NADA, NADA QUE É DO POBRE FUNCIONA');
}

calcular.addEventListener('click', bhaskara);

let aEl = document.querySelector('#coeficiente-a');
let bEl = document.querySelector('#coeficiente-b');
let cEl = document.querySelector('#coeficiente-c');
let deltaEl = document.querySelector('#resultado-delta');
let x1El = document.querySelector('#resultado-x1');
let x2El = document.querySelector('#resultado-x2');

function bhaskara() {

    deltaEl.value = '';
    x1El.value = '';
    x2El.value = '';

    let a = aEl.value;
    let b = bEl.value;
    let c = cEl.value;
    
    let delta = (Math.pow(b, 2) - 4 * a * c);

    if (a == 0) {
        alert('O valor de A é 0, impossível continuar')
        return -1;
    }

    if (delta < 0) {
        deltaEl.value = (delta)
    }
    else {
        let x1 = ((-b + Math.sqrt(delta)) / (2 * a));
        let x2 = ((-b - Math.sqrt(delta)) / (2 * a));
        
        x1El.value = (x1);
        x2El.value = (x2);
        deltaEl.value = (delta)
    }
}
