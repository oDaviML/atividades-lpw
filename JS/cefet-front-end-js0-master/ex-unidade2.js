function contandoElementosDoVetor(elementos, elementoSendoProcurado) {
    let quantidade = 0;
    for (let elemento of elementos) {
        if (elemento === elementoSendoProcurado) {
            quantidade += 1 ;
        }
    }
    
    return quantidade;
}

escreva(0.4, "ElementosDoVetor", contandoElementosDoVetor([1, 5, 5], 5));
escreva(0.4, "ElementosDoVetor", contandoElementosDoVetor(['daniel', 'flávio'], 'joão'));


function obtemNomeDoMes(numero) {
    
    if (numero < 1 || numero > 12) {
        escrevaMensagem(0.5, 'Mês inválido: ' + numero);
        return null;
    }
    
    let meses = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro'
    ];

    return meses[numero - 1];
}

escreva(0.5, "Mês resultante", obtemNomeDoMes(1));


function calculaVelocidadeAlturaBola(velocidadeInicial, gravidade, n){

    for (let i = 0; i < n; i++) {
        escreva(3, "h", calculaAlturaBola(i, velocidadeInicial, gravidade));
        escreva(3, "v", calculaVelocidadeBola(i, velocidadeInicial, gravidade));
    }
    return (calculaAlturaBola + calculaVelocidadeBola);
}
(calculaVelocidadeAlturaBola(50, 9.81,20));


function somatorio(n) {
    let s = 0;

    for (i = 2; i <= n; i+=2) {
        s = 1/i+s;
    }
    return s;
}
escreva(4, "s", somatorio(1));
escreva(4, "s", somatorio(10));
escreva(4, "s", somatorio(100));

function obtemPosicaoDoElemento(vetores, fruta) {

    let contador = 0;

    for (let vetor of vetores) {
        if (vetor === fruta) {
            return contador;
        }
        else{
            contador += 1;
        }
    }
    
    return null;

}
escreva(5, "frutas", obtemPosicaoDoElemento(['Pera', 'Uva', 'Abacaxi', 'Cenoura'] , 'Uva'));


function calculaMediaEntreExtremos(vetor) {

    let media = 0;
    let maior = Math.max.apply(null, vetor);
    let menor = Math.min.apply(null, vetor);

    /*
     for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }
    for (let i = 0; i < vetor.length; i++) {
       if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }
    */
   
    media = ((menor + maior) / 2);

    return media;
}
escreva(6, "media", calculaMediaEntreExtremos([3, -2, 12]))

function fibonacci(tamanhoSequencia) {
    let sequencia = [];

    escreva(7, 'Fib(' + tamanhoSequencia + ')', sequencia);
    return sequencia;
}

