function analisarCartao() {

    let numero = document.getElementById('cartao').value;

    numero = numero.replace(/\s/g, '');
    numero = numero.replace(/\./g, '');

    if (!/^\d+$/.test(numero)) {
        alert('Digite apenas números.');
        return;
    }

    if (numero.length < 13 || numero.length > 16) {
        alert('O cartão deve possuir entre 13 e 16 dígitos.');
        return;
    }

    let soma = 0;
    let inverter = numero.split('').reverse();

    for (let i = 0; i < inverter.length; i++) {

        let digito = Number(inverter[i]);

        if (i % 2 !== 0) {

            digito *= 2;

            if (digito > 9) {
                digito -= 9;
            }
        }

        soma += digito;
    }

    let valido = soma % 10 === 0;

    let bandeira = 'Desconhecida';

    if (numero.startsWith('4')) {
        bandeira = 'Visa';
    }
    else if (
        numero.startsWith('51') ||
        numero.startsWith('52') ||
        numero.startsWith('53') ||
        numero.startsWith('54') ||
        numero.startsWith('55')
    ) {
        bandeira = 'MasterCard';
    }
    else if (
        numero.startsWith('34') ||
        numero.startsWith('37')
    ) {
        bandeira = 'American Express';
    }
    else if (
        numero.startsWith('6011')
    ) {
        bandeira = 'Discover';
    }

    let primeiroDigito = numero[0];
    let setor = '';

    switch (primeiroDigito) {

        case '1':
            setor = 'Companhias Aéreas';
            break;

        case '2':
            setor = 'Financeiro';
            break;

        case '3':
            setor = 'Viagens e Entretenimento';
            break;

        case '4':
        case '5':
            setor = 'Bancário e Financeiro';
            break;

        case '6':
            setor = 'Comércio e Bancos';
            break;

        default:
            setor = 'Não identificado';
    }

    let banco = 'Banco não identificado';

    if (numero.startsWith('4')) {
        banco = 'Banco Visa Internacional';
    }
    else if (
        numero.startsWith('51') ||
        numero.startsWith('52') ||
        numero.startsWith('53') ||
        numero.startsWith('54') ||
        numero.startsWith('55')
    ) {
        banco = 'Master Bank';
    }
    else if (
        numero.startsWith('34') ||
        numero.startsWith('37')
    ) {
        banco = 'American Express Bank';
    }

    document.getElementById('status').innerHTML =
        `Status: <span class="${valido ? 'valido' : 'invalido'}">
        ${valido ? 'VÁLIDO' : 'INVÁLIDO'}
        </span>`;

    document.getElementById('bandeira').innerHTML =
        `Bandeira: ${bandeira}`;

    document.getElementById('setor').innerHTML =
        `Categoria de Setor: ${setor}`;

    document.getElementById('banco').innerHTML =
        `Banco Emissor: ${banco}`;
}