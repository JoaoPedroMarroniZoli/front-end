function calcularOrcamento() {

    const pacote = Number(document.getElementById('pacote').value);
    const pessoas = Number(document.getElementById('pessoas').value);

    const custoBruto = pacote * pessoas;

    const taxaServico = custoBruto * 0.10;

    const subtotal = custoBruto + taxaServico;

    let desconto = 0;

    if (pessoas > 100) {
        desconto = subtotal * 0.05;
    }

    const totalFinal = subtotal - desconto;

    const resultado = document.getElementById('resultado');

    resultado.innerHTML = `
        <p>Custo Bruto: R$ ${custoBruto.toFixed(2)}</p>
        <p>Taxa de Serviço: R$ ${taxaServico.toFixed(2)}</p>
        <p>Desconto: R$ ${desconto.toFixed(2)}</p>
        <p><strong>Total Final: R$ ${totalFinal.toFixed(2)}</strong></p>
    `;
}