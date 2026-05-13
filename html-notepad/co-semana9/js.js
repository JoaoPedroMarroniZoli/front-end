const cpfinput = document.getElementById("cpf");
const resultado = document.getElementById("resultado");

function validar() {

    const cpf = cpfinput.value.replace(/\D/g, '');

    if (cpf.length !== 11) {
        resultado.textContent = "CPF Inválido";
        resultado.style.color = "red";
        return;
    }

    if (/^(\d)\1+$/.test(cpf)) {
        resultado.textContent = "CPF Inválido";
        resultado.style.color = "red";
        return;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }

    let digito1 = (soma * 10) % 11;

    if (digito1 === 10) {
        digito1 = 0;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(cpf[i]) * (11 - i);
    }

    let digito2 = (soma * 10) % 11;

    if (digito2 === 10) {
        digito2 = 0;
    }

    // ===== Validação final =====
    if (
        digito1 === Number(cpf[9]) &&
        digito2 === Number(cpf[10])
    ) {
        resultado.textContent = "CPF Válido";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "CPF Inválido";
        resultado.style.color = "red";
    }
}