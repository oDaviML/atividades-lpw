// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

// 1: Pega uma lista de todos os botÕes.

let botoes = document.querySelectorAll('.botao-expandir-retrair');

// 2: Percorrer essa lista.

for (let botaoEl of botoes) {

    // 2.1: Para cada botão adicionar um evento de click.
    botaoEl.addEventListener('click', (e) => {
        let clicadoEl = e.currentTarget;
        let pEl = clicadoEl.parentNode;
        pEl.classList.toggle('expandido');

        if (pEl.classList.contains('expandido') == true) {
            botaoEl.innerHTML = '-';
        }
        else {
            botaoEl.innerHTML = '+';
        }
        // 2.1.1: Descobrir qual botões foi clicado.
        // 2.1.2: Descobrir o pai desse botão.
        //2.1.3: Adicionar ou remover a classe expandido / pai.
        //2.1.4: Condicionalmente, definir o conteudo do botão como + ou -.
    });
}





