// Função que desenha os jogos na tela
function renderGames(lista) {
    const grid = document.getElementById('mainGrid');
    grid.innerHTML = ''; // Limpa antes de carregar

    lista.forEach(jogo => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <div class="card-image-container">
                <img src="${jogo.image}" alt="${jogo.name}" loading="lazy">
            </div>
            <div class="game-title">${jogo.name}</div>
        `;
        grid.appendChild(card);
    });
}

// Quando a página carregar, ele busca a lista que está no gamesps2.js e renderiza
window.onload = () => {
    if (typeof jogosDatabase !== 'undefined') {
        renderGames(jogosDatabase);
    } else {
        console.error("Erro: O arquivo de dados não foi carregado!");
    }
};
