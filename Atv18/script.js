let btnAdicionar = document.getElementById("btn-adicionar");
let inputTarefa = document.getElementById("input-tarefa");
let lista = document.getElementById("lista-tarefas");
let tareafas = [];

function adicionarTarefa() {
    let valorDoInput = inputTarefa.value;

    if(valorDoInput.trim() === ""){
        alert("Digite alguma tarefa para ser adicionado!");
        return;
    };

    let novaTarefa = {
        id: Date.now(),
        texto: valorDoInput
    };

    tareafas.push(novaTarefa);

    inputTarefa.value = "";

    renderizarTarefas();
}

function renderizarTarefas(){
    lista.innerHTML = "";

    tareafas.forEach((tarefa) => {
        let itemLista = document.createElement("li");

        itemLista.innerText = tarefa.texto;

        lista.appendChild(itemLista);
    })
}

btnAdicionar.addEventListener("click", adicionarTarefa);