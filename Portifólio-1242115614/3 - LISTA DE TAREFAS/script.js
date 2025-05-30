const tarefa = document.getElementById("tarefa")
const adicionar = document.getElementById("add")
const container = document.getElementById("tarefas")

adicionar.addEventListener("click", function () {
    if (tarefa.value === "") {
    alert("Digite uma tarefa!")
    return;
}
    var newDiv = document.createElement("div")
    newDiv.textContent = tarefa.value;
    container.appendChild(newDiv)
    newDiv.setAttribute("class", "tarefa")
    var newButton = document.createElement("button")
    newDiv.appendChild(newButton)
    newButton.addEventListener("click", function () {
        container.removeChild(newDiv)
    })
    newButton.textContent = "Remover"
    })
