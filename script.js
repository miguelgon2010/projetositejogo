// Lista de consoles com suas respectivas informações e caminhos de imagens
const consolesData = [
    {
        id: "ps2",
        name: "PlayStation 2",
        sales: "Mais de 155 milhões de unidades",
        rank: "#1 Mais Vendido",
        image: "https://images.tcdn.com.br/img/img_prod/1211726/playstation_2_slim_seminovo_277_1_cdad97bf064ac254c387a1da08a1ac61.png", // Substitua pelo link ou caminho local (Ex: "imagens/ps2.png")
        exclusives: ["GTA: San Andreas (Temporal)", "God of War I & II", "Gran Turismo 4", "Shadow of the Colossus"],
        popular: ["Resident Evil 4", "Guitar Hero III", "Need for Speed: Underground 2"]
    },
    {
        id: "switch",
        name: "Nintendo Switch",
        sales: "Mais de 140 milhões de unidades",
        rank: "#2 Mais Vendido",
        image: "https://allugator.com/_next/image?url=https%3A%2F%2Fimages.digital.allugator.com%2Fproducts%2FNintendo%20Switch%202-1.png&w=3840&q=90https://images.tcdn.com.br/img/img_prod/1211726/playstation_2_slim_seminovo_277_1_cdad97bf064ac254c387a1da08a1ac61.png", // Substitua pelo link ou caminho local
        exclusives: ["The Legend of Zelda: Breath of the Wild", "Super Mario Odyssey", "Animal Crossing: New Horizons", "Pokémon Scarlet/Violet"],
        popular: ["Minecraft", "Mario Kart 8 Deluxe", "Among Us"]
    },
    {
        id: "ps4",
        name: "PlayStation 4",
        sales: "Mais de 117 milhões de unidades",
        rank: "#3 Mais Vendido",
        image: "https://images.tcdn.com.br/img/img_prod/1211726/playstation_4_fat_500gb_seminovo_623_1_60c84cfb7ab29fa9dfd8ce90d6e61349.png", // Substitua pelo link ou caminho local
        exclusives: ["God of War (2018)", "Marvel's Spider-Man", "The Last of Us Part II", "Bloodborne"],
        popular: ["GTA V", "Red Dead Redemption 2", "Call of Duty: Warzone"]
    },
    {
        id: "xbox360",
        name: "Xbox 360",
        sales: "Mais de 84 milhões de unidades",
        rank: "#4 Mais Vendido",
        image: "COhttps://www.lojatrocagame.com.br/xbox/xbox-360/consoles-seminovos-xbox-360/xbox-360-250-gb-seminovo?srsltid=AfmBOopDFksntpm1rSttJYhu-qNyY7vMeVEcYoSVSo7cqx8JRE8KC1TA", // Substitua pelo link ou caminho local
        exclusives: ["Halo 3", "Gears of War 2", "Forza Motorsport 4", "Fable II"],
        popular: ["Skyrim", "Call of Duty: Black Ops", "Minecraft: Xbox 360 Edition"]
    }
];

// Seleção dos elementos do HTML
const container = document.querySelector('.container');
const modal = document.getElementById('gamesModal');
const closeBtn = document.querySelector('.close-btn');

// Função para gerar os cards de cada console na tela
function renderCards() {
    container.innerHTML = ''; // Limpa o container para evitar duplicados
    
    consolesData.forEach(console => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Estrutura do card injetando a imagem e os dados dinamicamente
        card.innerHTML = `
            <img src="${console.image}" alt="${console.name}" class="card-img">
            <div class="card-header">
                <span>${console.name}</span>
                <span class="rank">${console.rank}</span>
            </div>
            <div class="card-body">
                <p class="sales-info">Vendas: ${console.sales}</p>
                <button class="btn" onclick="openModal('${console.id}')">Ver Jogos</button>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Função para abrir a janela modal com as listas de jogos correspondentes
function openModal(consoleId) {
    const consoleInfo = consolesData.find(c => c.id === consoleId);
    
    if (consoleInfo) {
        // Altera o título do modal para o nome do console clicado
        document.getElementById('modalTitle').innerText = consoleInfo.name;
        
        // Mapeia e renderiza a lista de jogos exclusivos
        const exclusiveList = document.getElementById('exclusiveGamesList');
        exclusiveList.innerHTML = consoleInfo.exclusives.map(game => `<li>${game}</li>`).join('');
        
        // Mapeia e renderiza a lista de jogos populares
        const popularList = document.getElementById('popularGamesList');
        popularList.innerHTML = consoleInfo.popular.map(game => `<li>${game}</li>`).join('');
        
        // Exibe o modal na tela mudando o display para flex
        modal.style.display = 'flex';
    }
}

// Evento para fechar o modal ao clicar no botão 'X'
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Evento para fechar o modal caso o usuário clique na área escura fora dele
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Executa a função para desenhar os cards assim que a página carrega
renderCards();
