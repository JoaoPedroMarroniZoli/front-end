function revelar() {
    
    let img = document.getElementById("imgJogador");
    img.src = "img/_vinicius_junior.png";

    
    let nome = document.getElementById("Nome");
    let rank = document.getElementById("Rank");
    let data = document.getElementById("Data_Nas");
    let altura = document.getElementById("Alutra"); 
    let posicao = document.getElementById("Posicao");

    
    nome.textContent = "Vinícius José Paixão de Oliveira Júnior ";
    rank.textContent = "9,5";
    data.textContent = "12/07/2000 (25 anos)";
    altura.textContent = "1,76 m";
    posicao.textContent = "Ponta-esquerda / Atacante";

    let elementos = [data, altura, posicao];

    elementos.forEach(function(el) {
        el.classList.remove("placeholder");
        el.classList.add("card-text");
    });
}