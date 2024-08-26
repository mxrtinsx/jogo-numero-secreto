let listaDeNumerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', );
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Advinhe o número que estou pensando!');
    exibirTextoNaTela('p', 'Escreva um número entre 1 e 10');
}

exibirMensagemInicial();

exibirTextoNaTela('h1', 'Advinhe o número que estou pensando!');
exibirTextoNaTela('p', 'Escreva um número entre 1 e 10');

function verificarChute() {
    let numeroDigitado = document.querySelector('input').value;
    console.log(`Número correto: ${numeroSecreto}, Número digitado: ${numeroDigitado}`);

    if (numeroDigitado == numeroSecreto) {
        exibirTextoNaTela('h1', 'Isso ai!!!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número que eu pensava em ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDigitado > numeroSecreto) {
            exibirTextoNaTela('p', 'Estou pensando em um número menor.');
        } else {
            exibirTextoNaTela('p', 'Estou pensando em um número maior.');
        }
        tentativas++;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElemtnosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElemtnosNaLista == numeroLimite) {
    listaDeNumerosSorteados = []
}

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    numeroDigitado = document.querySelector('input');
    numeroDigitado.value = '';

}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}