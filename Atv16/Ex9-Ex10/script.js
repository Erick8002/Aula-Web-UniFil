    let botao = document.getElementById("botao");
    let texto = document.getElementById("texto");
    texto.style.display = "block";

    botao.addEventListener("click", () => {
        if(texto.style.display === "none") {
            texto.style.display = "block";
            botao.innerText = "Esconder Texto";
        } else {
            texto.style.display = "none";
            botao.innerText = "Mostrar Texto";
        }
    });