let nomeEl = document.querySelector('#nome');
let corEl = document.querySelector('#cor-da-pele');
let cabeloEl = document.querySelector('#cabelo');

let avatar_nomeEl = document.querySelector('#avatar-nome');
let avatar_corpoEl = document.querySelector('#avatar-corpo');
let avatar_cabecaEl = document.querySelector('#avatar-cabeca');
let avatar_cabeloEl = document.querySelector('#avatar-cabelo');

nomeEl.addEventListener('change', () => {
    let nome = nomeEl.value;
    avatar_nomeEl.innerHTML = `${nome}`;
});

corEl.addEventListener('input', () => {
    let cor = corEl.value;
    avatar_corpoEl.style.backgroundColor = cor;
    avatar_cabecaEl.style.backgroundColor = cor;
});

cabeloEl.addEventListener('change', () => {
    let cabelo = cabeloEl.value;
    avatar_cabeloEl.src = `${cabelo}`;

});