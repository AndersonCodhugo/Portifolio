let numeroSecreto;
let tentativas = 5;

function iniciarJogo() {
    const input = document.getElementById("numeroSecretoInput");
    numeroSecreto = parseInt(input.value);

    if (isNaN(numeroSecreto) || numeroSecreto < 1 || numeroSecreto > 100) {
        alert("Digite um número válido entre 1 e 100.");
        return;
    }

  // Esconde a interface do Jogador 1 e mostra a do Jogador 2
    document.getElementById("configuracao").style.display = "none";
    document.getElementById("jogo").style.display = "block";
}

function fazerPalpite() {
    const palpite = parseInt(document.getElementById("palpiteInput").value);
    const mensagem = document.getElementById("mensagem");

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("Digite um número entre 1 e 100.");
        return;
    }

    tentativas--;

    if (palpite === numeroSecreto) {
        mensagem.textContent = "🎉 Parabéns! Você acertou o número!";
        document.getElementById("palpiteInput").disabled = true;
    } else if (tentativas === 0) {
        mensagem.textContent = `😢 Fim de jogo! O número era ${numeroSecreto}.`;
        document.getElementById("palpiteInput").disabled = true;
    } else {
        mensagem.textContent = palpite > numeroSecreto
        ? "Tente um número menor."
        : "Tente um número maior.";
    document.getElementById("tentativasRestantes").textContent =
        `Tentativas restantes: ${tentativas}`;
    }
}