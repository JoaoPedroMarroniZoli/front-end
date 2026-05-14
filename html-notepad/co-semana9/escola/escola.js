const botao = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {

    const nome = document.getElementById("nome").value;

    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);

    const media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7 && media <= 10) {

        resultado.textContent =
            `${nome} foi APROVADO com média ${media.toFixed(2)}`;

        resultado.style.color = "blue";

    } else if (media >= 4 && media < 7) {

        const falta = 10 - media;

        resultado.textContent =
        `${nome} está em EXAME com média ${media.toFixed(2)}. Faltam ${falta.toFixed(2)} pontos para chegar em 10.`;

        resultado.style.color = "green";

    } else {

        resultado.textContent =
        `${nome} foi REPROVADO com média ${media.toFixed(2)}`;

        resultado.style.color = "red";

    }

});