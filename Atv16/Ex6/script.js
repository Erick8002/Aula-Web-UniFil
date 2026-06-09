let botao = document.getElementById("botao");
let paragrafo = document.getElementById("paragrafo");

botao.addEventListener("click", () => {
    paragrafo.innerText = "Texto atualizado!";
});