let alternado = false;

function trocarGrupos() {
    const container = document.getElementById("container");

    if (!alternado) {
        container.innerHTML = `
        <div class="card">
            <h2>Grupo D</h2>
            <ul>
                <li>Estados Unidos</li>
                <li>Paraguai</li>
                <li>Austrália</li>
                <li>Turquia</li>
            </ul>
            <details>
                <summary>Saiba mais</summary>
                <p>Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas em torneios.</p>
            </details>
        </div>

        <div class="card">
            <h2>Grupo E</h2>
            <ul>
                <li>Alemanha</li>
                <li>Equador</li>
                <li>Costa do Marfim</li>
                <li>Curaçao</li>
            </ul>
            <details>
                <summary>Saiba mais</summary>
                <p>Alemanha costuma dominar fases de grupos. Equador e Costa do Marfim têm estilos físicos semelhantes.</p>
            </details>
        </div>

        <div class="card">
            <h2>Grupo F</h2>
            <ul>
                <li>Holanda</li>
                <li>Japão</li>
                <li>Tunísia</li>
                <li>Suécia</li>
            </ul>
            <details>
                <summary>Saiba mais</summary>
                <p>Brasil, Marrocos e Escócia já dividiram grupo em 1998. Brasil nunca perdeu para a Escócia em Copas.</p>
            </details>
        </div>
        `;
    } else {
        container.innerHTML = `
        <div class="card">
            <h2>Grupo A</h2>
            <ul>
                <li>México</li>
                <li>África do Sul</li>
                <li>Coreia do Sul</li>
                <li>República Tcheca</li>
            </ul>
            <details>
                <summary>Saiba mais</summary>
                <p>O jogo de abertura será México x África do Sul. Confrontos entre Coreia do Sul e seleções europeias já ocorreram em várias Copas, com histórico equilibrado.</p>
            </details>
        </div>

        <div class="card">
            <h2>Grupo B</h2>
            <ul>
                <li>Canadá</li>
                <li>Suíça</li>
                <li>Catar</li>
                <li>Vaga Europeia (Bósnia)</li>
            </ul>
            <details>
                <summary>Saiba mais</summary>
                <p>O Canadá joga em casa, fator importante de desempenho. Catar e Suíça já se enfrentaram recentemente em amistosos internacionais.</p>
            </details>
        </div>

        <div class="card">
            <h2>Grupo C</h2>
            <ul>
                <li>Brasil</li>
                <li>Marrocos</li>
                <li>Haiti</li>
                <li>Escócia</li>
            </ul>
            <details>
                <summary>Saiba mais</summary>
                <p>Brasil, Marrocos e Escócia já dividiram grupo em 1998. Brasil nunca perdeu para a Escócia em Copas.</p>
            </details>
        </div>
        `;
    }

    alternado = !alternado;
}