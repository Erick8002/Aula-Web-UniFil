let botao = document.getElementById("botao");
let contador = 0;

botao.addEventListener("click", () => {
    contador++;
    if(contador === 1){
        document.body.style.backgroundColor = "red";
    } else{
        document.body.style.backgroundColor = "black";
        contador = 0;
    }
});