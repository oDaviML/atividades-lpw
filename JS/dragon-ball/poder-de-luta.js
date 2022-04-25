
// tipos de dados em JS:
// --------------------
// number
// STRING, BOOLEAN, OBJECT


function mostraJanelinha() {
  alert('janelinha chata chatíssima');
}

function personalizarAPagina() {
  let bodyEl = document.querySelector('body');
  let forcaEl = document.querySelector('#input-forca');
  bodyEl.style.backgroundColor = 'red';
  bodyEl.style.fontSize = forcaEl.value + 'px';


  //Em CSS: background-color
  //Em JS: backgroundColor
}

let botaoPoderDeLutaEl = document.querySelector('#calcula');
let tituloEl = document.querySelector('h1');
tituloEl.addEventListener('dblclick', personalizarAPagina);




















// geral: pegar a força e a velocidade, multiplicar e elevar por 5
botaoPoderDeLutaEl.addEventListener('click', function() {
  // 1.a pegar uma referência ao input da FORÇA
  let inputForcaEl = document.querySelector('#input-forca');
  // 1.b pegar o valor que está digitado nesse input
  let forca = inputForcaEl.value;
  
  // 2.a pegar uma referência ao input da VELCOIDADE
  let inputVelocidadeEl = document.querySelector('#input-velocidade');
  // 2.b pegar o valor que está digitado nesse input
  let velocidade = inputVelocidadeEl.value;

  // 3. calcular e achar o poder de luta
  let poderDeLuta = (forca * velocidade) ** 5;
  // 4. escrever o poder de luta no input desabilitado
  // 4.a pega referencia ao elemento
  let resultadoEl = document.querySelector('#resultado-do-poder');
  // 4.b definir o value desse cara
  resultadoEl.value = poderDeLuta;
});


// 1.a pegar uma referência ao input da FORÇA
// 2.a pegar uma referência ao input da VELCOIDADE
// 4.a pega referencia ao elemento
let inputForcaEl = document.querySelector('#input-forca');
let inputVelocidadeEl = document.querySelector('#input-velocidade');
let resultadoEl = document.querySelector('#resultado-do-poder');



botaoPoderDeLutaEl.addEventListener('click', function() {
  // 1.b pegar o valor que está digitado nesse input
  let forca = inputForcaEl.value;
  
  // 2.b pegar o valor que está digitado nesse input
  let velocidade = inputVelocidadeEl.value;
  
  // 3. calcular e achar o poder de luta
  let poderDeLuta = (forca * velocidade) ** 5;


  // 4. escrever o poder de luta no input desabilitado
  // 4.b definir o value desse cara
  resultadoEl.value = poderDeLuta;
});


