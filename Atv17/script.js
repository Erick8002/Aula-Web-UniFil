let inputTarefa = document.getElementById("nome-tarefa");
let selectPrioridade = document.getElementById("prioridade-tarefa");
let btnCadastrar = document.getElementById("btn-cadastrar");
let btnMostrar = document.getElementById("btn-mostrar");
let areaExibicao = document.getElementById("lista-tarefas");

let listaDeTarefas = [];

function cadastrarTarefas() {
  let nome = inputTarefa.value;
  let prioridade = selectPrioridade.value;

  if (nome === "") {
    alert("Por favor, digite uma tarefa!");
    return;
  }

  let novaTarefa = {
    titulo: nome,
    nivelPrioridade: prioridade,
  };

  listaDeTarefas.push(novaTarefa);

  inputTarefa.value = "";

  alert("Tarefa cadastrada com sucesso!")
}

function exibirTarefas() {
  areaExibicao.innerHTML = "";

  if (listaDeTarefas.length === 0) {
    areaExibicao.innerText = "Nenhuma tarefa cadastrada anda.";
    return;
  }

  listaDeTarefas.forEach((tarefa) => {
    let paragrafo = document.createElement("p");

    paragrafo.innerText = `${tarefa.titulo} - Prioridade: ${tarefa.nivelPrioridade}`;

    areaExibicao.appendChild(paragrafo);
  });
}

btnCadastrar.addEventListener("click", cadastrarTarefas);
btnMostrar.addEventListener("click", exibirTarefas);