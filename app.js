alert(`Boas-vindas ao jogo do Número Secreto`)
let numeroSecreto = 30;
let chute = prompt (`Escolha um número entre 1 e 30`)

if (chute == numeroSecreto) {
    alert(`Isso aí! você descobriu o número secreto `)
} else {
    alert('Você errou :(')
}