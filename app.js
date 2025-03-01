alert(`Boas-vindas ao jogo do Número Secreto`)
let numeroSecreto = 30
let chute
//let tentativas = 1;
// enquanto chute não for igual ao n.s
for(let tentativas = 1; chute != numeroSecreto; tentativas++) {
    chute = prompt (`Escolha um número entre 1 e 30`)

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso aí! você descobriu o número secreto com ${tentativas} tentativas`)
    } else if(numeroSecreto < chute ) {
        alert(`O número secreto é menor que ${chute}`)
    }else {
        alert(`O número secreto é maior que ${chute}`)
    }
}


