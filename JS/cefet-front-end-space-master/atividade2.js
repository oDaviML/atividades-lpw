// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML


let avancarEl = document.querySelector('#proximo');
let slideEl = document.querySelector('#slide');
let anteriorEl = document.querySelector('#anterior');

avancarEl.addEventListener('click', () => {
  indiceDaFotoCorrente++;
  slideEl.src = `${servidorDasImagens}${nomesDasImagens[indiceDaFotoCorrente]}`;
  if (indiceDaFotoCorrente == 5 || indiceDaFotoCorrente > 5) {
    indiceDaFotoCorrente = 0
  }
});

anteriorEl.addEventListener('click', () => {
  indiceDaFotoCorrente--;
  slideEl.src = `${servidorDasImagens}${nomesDasImagens[indiceDaFotoCorrente]}`;
  if (indiceDaFotoCorrente == 0 || indiceDaFotoCorrente < 0) {
    indiceDaFotoCorrente = 5
  }
});


// caminho para onde as imagens estão hospedadas
const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  // array com o nome das 5 imagens da galeria
  nomesDasImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

// o índice da imagem sendo mostrada
// (inicialmente, é a imagem 0: 'philae-parts.jpg')
let indiceDaFotoCorrente = 0;

// ...
