const produtos = {
	"123": {"nome": "Leno Brega", "preco": 9.0000},
	"456": {"nome": "Geladeira eletrolux", "preco": 3.0000},
	"789": {"nome": "Elefante psicquico de guerra pre historico", "preco": 12.0000},
	"147": {"nome": "Fantasmatico", "preco": 90.5000},
};
/*Criar atualizar tela e o alert item */
let carrinho = [];

const audio = new Audio("bip.mp3");

window.onload = () => {
	document.getElementById("cod").focus();
}

function atualizarTela() {
	const lista = document.getElementById("lista");
	const totalHTML = document.getElementById("total");
	const subtotalHTML = document.getElementById("subtotal");

	lista.innerHTML = "";

	let total = 0;

	carrinho.forEach(item => {
		const li = document.createElement("li");
		li.className = "list-group-item";

		li.textContent = `${item.nome} | Qtd: ${item.quantidade} | R$ ${item.subTot.toFixed(2)}`;

		lista.appendChild(li);

		total += item.subTot;
	});

	totalHTML.textContent = total.toFixed(2);

	// Subtotal = último item
	if (carrinho.length > 0) {
		const ultimo = carrinho[carrinho.length - 1];
		subtotalHTML.textContent = ultimo.subTot.toFixed(2);
	} else {
		subtotalHTML.textContent = "0.00";
	}
}

function addProduto() {
	const codHTML = document.getElementById("cod");
	const qtdHTML = document.getElementById("qtd");

	const valorCod = codHTML.value;
	const valorQtd = qtdHTML.value;

	if(!produtos[valorCod]) {
		AlertItem();
		return;
	}

	const infoProduto = produtos[valorCod];

	const item = {
		nome: infoProduto.nome,
		preco: infoProduto.preco,
		quantidade: valorQtd,
		subTot: infoProduto.preco * valorQtd
	};

	carrinho.push(item);
	audio.currentTime = 0;
	audio.play();

	atualizarTela();

	qtdHTML.value = 1;
	codHTML.value = "";
}