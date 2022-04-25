let marcacoes = document.querySelectorAll('.marcacao');
let balaozinhoEl = document.querySelector('#balaozinho');
let bodyEl = document.querySelector('body');

// Recebe os Inputs
let quadradoMarcacaoEl = document.querySelector('#definir-marcacao');
let XEl = document.querySelector('#marcacao-x');
let YEl = document.querySelector('#marcacao-y');
let larguraEl = document.querySelector('#marcacao-largura');
let alturaEl = document.querySelector('#marcacao-altura');

// Pega apenas o primeiro .marcacao
let marcacao = document.querySelector('.marcacao');

for (let marcacoesEl of marcacoes){

    marcacoesEl.addEventListener('mouseover', (e) => {
        let balaozinho = e.currentTarget;
        balaozinhoEl.innerHTML = `<h2>${balaozinho.dataset.titulo}</h2><p>${balaozinho.dataset.conteudo}</p>`;
        balaozinhoEl.style.display = 'block';
    });
    marcacoesEl.addEventListener('mouseout', () => {
        balaozinhoEl.innerHTML = '';
        balaozinhoEl.style.display = 'none';
    });

    marcacoesEl.addEventListener('mousemove', (e) => {
        balaozinhoEl.style.top = `${e.pageY}px`;
        balaozinhoEl.style.left = `${e.pageX}px`;
    });

}

quadradoMarcacaoEl.addEventListener('click', () => {

    let X = XEl.value;
    let Y = YEl.value;
    let largura = larguraEl.value;
    let altura = alturaEl.value;

    marcacao.style = `left: ${X}px; top: ${Y}px; width: ${largura}px; height: ${altura}px;`;

});

