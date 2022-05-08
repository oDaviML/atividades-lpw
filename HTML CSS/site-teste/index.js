let casas = document.querySelectorAll('input');
let botaoREl = document.querySelector('#reiniciar');
let pVitoriaEl = document.querySelector('#vitoria');

let jogador = 'X', vencedor = '*';

botaoREl.addEventListener('click', () => {
    for (let i = 0; i < 9; i++) {
        casas[i].value='*'; 
    }
    vencedor = '*'

    jogador = 'X';
    pVitoriaEl.innerHTML = ``;
})

for (let i = 0; i < 9; i++) {
    casas[i].addEventListener('click', (e) => {
        if ((e.target.value == '*') && (vencedor == "*")) {
            e.target.value = jogador;
            e.target.style.color = 'black';
        }

        if(jogador == 'X')
        {
            jogador='O';
        }
        else
        {
            jogador='X'
        }

        vencedor = vitoria();

        if (vencedor != '*') {
            pVitoriaEl.innerHTML = `VENCEDOR`;
        }
    });

}
function vitoria() {
    

    if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casas[0].value!='_' ) 
    {
        return casas[0].value;
    }

    else if((casas[3].value==casas[4].value) && (casas[4].value==casas[5].value) && casas[3].value!='_' ) 
    {
        return casas[3].value;
    }

    else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='_' ) 
    {
        return casas[6].value;
    }

    else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_' ) 
    {
        return casas[0].value;
    }

    else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_' ) 
    {
        return casas[1].value;
    }

    else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_' ) 
    {
        return casas[2].value;
    }

    else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_' ) 
    {
        return casas[0].value
    }

    else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_' ) 
    {
        return casas[2].value;
    }

    return '*';
}

