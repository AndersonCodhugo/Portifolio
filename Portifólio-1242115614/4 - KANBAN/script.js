let contadorId = 0;

// Carrega as tarefas salvas no localStorage
window.onload = function () {
    const dados = JSON.parse(localStorage.getItem("tarefas")) || [];
    dados.forEach(({ id, texto, coluna }) => {
        criarCartao(id, texto, coluna);
    });
};

function adicionarTarefa() {
    const campo = document.getElementById("campoTarefa");
    const texto = campo.value.trim();
    if (texto === "") return;

    const id = "tarefa-" + Date.now();
    criarCartao(id, texto, "em-aberto");
    salvarTarefa(id, texto, "em-aberto");
    campo.value = "";
}

function criarCartao(id, texto, coluna) {
    const card = document.createElement("div");
    card.className = "cartao";
    card.draggable = true;
    card.id = id;
    card.ondragstart = arrastar;

    const span = document.createElement("span");
    span.innerText = texto;

    const btn = document.createElement("button");
    btn.innerText = "✖";
    btn.onclick = () => removerTarefa(id);

    card.appendChild(span);
    card.appendChild(btn);

    document.getElementById(coluna).appendChild(card);
}

function removerTarefa(id) {
    const card = document.getElementById(id);
    card.parentNode.removeChild(card);

    let dados = JSON.parse(localStorage.getItem("tarefas")) || [];
    dados = dados.filter((item) => item.id !== id);
    localStorage.setItem("tarefas", JSON.stringify(dados));
}

function arrastar(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function permitirSoltar(ev) {
    ev.preventDefault();
}

function soltar(ev) {
    ev.preventDefault();
    const id = ev.dataTransfer.getData("text");
    const card = document.getElementById(id);
    ev.target.closest(".coluna").appendChild(card);

    const novaColuna = ev.target.closest(".coluna").id;

    let dados = JSON.parse(localStorage.getItem("tarefas")) || [];
    dados = dados.map((item) => {
        if (item.id === id) {
        item.coluna = novaColuna;
    }
    return item;
    });
    localStorage.setItem("tarefas", JSON.stringify(dados));
}

function salvarTarefa(id, texto, coluna) {
    const dados = JSON.parse(localStorage.getItem("tarefas")) || [];
    dados.push({ id, texto, coluna });
    localStorage.setItem("tarefas", JSON.stringify(dados));
}
