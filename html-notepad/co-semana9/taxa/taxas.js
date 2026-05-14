const botao = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {

    const bandeira =
        document.getElementById("bandeira").value;

    const valor =
        Number(document.getElementById("valor").value);

    const parcelas =
        Number(document.getElementById("parcelas").value);

    let taxaBandeira = 0;

    // Taxa da bandeira
    switch (bandeira) {

        case "visa":
            taxaBandeira = valor * 0.02;
            break;

        case "master":
            taxaBandeira = valor * 0.0185;
            break;

        case "elo":
            taxaBandeira = valor * 0.03;
            break;

        default:
            resultado.innerHTML =
                "<p style='color:red;'>Selecione uma bandeira válida.</p>";
            return;

    }

    const juros =
        valor * (0.015 * parcelas);

    const taxaMensal =
        parcelas * 12.50;

    const total =
        valor + taxaBandeira + juros + taxaMensal;

    const valorParcela =
        total / parcelas;

    resultado.innerHTML = `
        <p><strong>Valor da Venda:</strong> R$ ${valor.toFixed(2)}</p>

        <p><strong>Taxa da Bandeira:</strong> R$ ${taxaBandeira.toFixed(2)}</p>

        <p><strong>Valor dos Juros:</strong> R$ ${juros.toFixed(2)}</p>

        <p><strong>Taxa Mensal:</strong> R$ ${taxaMensal.toFixed(2)}</p>

        <p><strong>Total da Compra:</strong> R$ ${total.toFixed(2)}</p>

        <p><strong>Valor de cada Parcela:</strong> R$ ${valorParcela.toFixed(2)}</p>
    `;

});