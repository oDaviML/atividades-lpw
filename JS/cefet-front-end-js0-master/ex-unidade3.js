function metodosVetor(vetor) {
    vetor.sort();
    vetor.pop();
    vetor.unshift('abacate');

    return vetor;
}
escreva(0.6, 'vetor', metodosVetor([4, 0, 9]))


function metodosString(strings) {

    let string = strings.replaceAll('o', 'a');
    let stringfinal = string.toUpperCase();

    return stringfinal;
}
escreva(0.7, 'string', metodosString('Foda! Foda, velho! É foda, nada funciona, nada que é do pobre funciona. '));



function escreveDataPorExtenso(data) {
    let dia = data.split('/')[0];
    let mes = data.split('/')[1];
    let ano = data.split('/')[2];
    data = (dia + ' de ' + obtemNomeDoMes(mes) + ' de ' + ano);
    
    return data;
}
escreva(9, 'data', metodosString('09/03/2005'));



function eliminaCaracteres(texto, caracteresParaEliminar) {
    for (let caractere of caracteresParaEliminar) {
        texto = texto.replaceAll(caractere, '');
    }
    
    return texto;
}


function substituiCaracteres(texto, caracteresProcura, caracteresSubstituirPor) {
    for(let i = 0; i < caracteresProcura.length; i++) {
        let caractereProcura = caracteresProcura[i];
        let caractereSubstituirPor = caracteresSubstituirPor[i];
        texto = texto.replaceAll(caractereProcura, caractereSubstituirPor);
    }
    
    
    return texto;
}

function inverteTexto(texto) {
    let textoInvertido = texto.split("").reverse().join("");;

    return textoInvertido;
}



function dizOiPara(funcaoDeDarOi, nomeDaPessoa) {
    
    // veja que aqui, independente do nome da função
    // externa, invocamos ela como funcaoDeDarOi
    textoDoOi = funcaoDeDarOi(nomeDaPessoa);
    
    escrevaMensagem(12, '=========== Início do chat ===========');
    escrevaMensagem(12, textoDoOi);
    escrevaMensagem(12, '======================================');
    escrevaMensagem(12, '<br>');
}


function oiEmPortuguesFormal(nome) {
    return 'Oi Sr(a). ' + nome + ', como vai?';
}

let oiEmPortugues = function(nome) {
    return 'Oi ' + nome + ', blza?';
};


// dá oi para 'Daniel' de várias formas diferentes
dizOiPara(oiEmPortuguesFormal, 'Daniel');
dizOiPara(oiEmPortugues, 'Daniel');
dizOiPara(function(nome) {
    return 'Hi ' + nome + ', how are you?';
}, 'Daniel');

dizOiPara(oiEmPortuguesFormal, 'Davi');
dizOiPara(oiEmPortugues, 'Davi');
dizOiPara(function(nome) {
    return 'Hi ' + nome + ', how are you?';
}, 'Davi');





function aplicaOperacaoEmCadaElemento(operacao, vetor1, vetor2) {
    if (vetor1.length != vetor2.length) {
        return null;
    }
   let calculo = operacao(vetor1, vetor2);
 
   escrevaMensagem(13, calculo);
   return calculo;
}

function somavetor(vetor1, vetor2) {
    let resultadoSoma = [];

    for (let i = 0; i < vetor1.length; i++) {
        resultadoSoma.push(vetor1[i] + vetor2[i]);
    }
    return resultadoSoma;
}

function subtrai(vetor1, vetor2) {
    let resultadoSubtracao = [];

    for (let i = 0; i < vetor1.length; i++) {
        resultadoSubtracao.push(vetor1[i] - vetor2[i]);
    }
    return resultadoSubtracao;
}

function multiplica(vetor1, vetor2) {
    let resultadoMultiplica = [];

    for (let i = 0; i < vetor1.length; i++) {
        resultadoMultiplica.push(vetor1[i] * vetor2[i]);
    }
    return resultadoMultiplica;
}

aplicaOperacaoEmCadaElemento(somavetor, [4, 2, -1, 10], [10, 2, 3, 5]);
aplicaOperacaoEmCadaElemento(subtrai, [4, 2, -1, 10], [10, 2, 3, 5]);
aplicaOperacaoEmCadaElemento(multiplica, [4, 2, -1, 10], [10, 2, 3, 5]);