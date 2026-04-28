function mostrarImagem() {
    if (document.getElementById("imgTabela")) return;

    let img = document.createElement("img");

    img.src = "img/Tabela_Jogos.png";

    img.id = "imgTabela";

    img.style.width = "900px";
    img.style.display = "block";
    img.style.margin = "20px auto";

    document.body.appendChild(img);
}