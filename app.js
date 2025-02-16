alert("Boas vindas ao jogo do numero secreto");
let numeroSecreto = 30;
let chute = prompt ("Digite um numero de 1 a 30");

// comentario
if(chute == numeroSecreto) {
    alert(`Voce acertou! Voce descobriu o numero secreto ${numeroSecreto}`)
} else {
    alert('Voce errou :(')
}