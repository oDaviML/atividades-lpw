// 1. pega ref ao botão
// 2. coloca 'click' nele, registrando uma função
// 2.a pegar ref. aos inputs dos coeficientes
// 2.b fazer o cálculo do delta
// 2.c escrever o resultado no SPAN
let aEl = document.querySelector('#a');
let bEl = document.querySelector('#b');
let cEl = document.querySelector('#c');
let resultadoDeltaEl = document.querySelector('#resultado-delta');

function calculaDelta(a, b, c) {
  // b² - 4ac
  let delta = b*b - 4*a*c;
  return delta;
}

function botaoFoiClicado() {
  let a = aEl.value;
  let b = bEl.value;
  let c = cEl.value;

  let delta = calculaDelta(a, b, c);

  resultadoDeltaEl.innerHTML = delta;
}

let botaoDeltaEl = document.querySelector('#calcula-delta');
botaoDeltaEl.addEventListener('click', botaoFoiClicado);