const dadosVideogames = {
    ps2: {
        nome: "PlayStation 2 (O mais vendido da história)",
        populares: ["Grand Theft Auto: San Andreas", "Grand Theft Auto: Vice City", "Gran Turismo 4"],
        exclusivos: ["God of War", "Shadow of the Colossus", "Metal Gear Solid 3: Snake Eater"]
    },
    switch: {
        nome: "Nintendo Switch",
        populares: ["Mario Kart 8 Deluxe", "Animal Crossing: New Horizons", "Super Smash Bros. Ultimate"],
        exclusivos: ["The Legend of Zelda: Breath of the Wild", "Super Mario Odyssey", "Metroid Dread"]
    },
    ps5: {
        nome: "PlayStation 5",
        populares: ["Marvel's Spider-Man 2", "God of War Ragnarök", "Horizon Forbidden West"],
        exclusivos: ["Returnal", "Demon's Souls", "Ratchet & Clank: Rift Apart"]
    }
};

function mostrarDados(consoleId) {
    const consoleData = dadosVideogames[consoleId];
    
    // Elementos da página
    const secaoDetalhes = document.getElementById('detalhes-console');
    const titulo = document.getElementById('titulo-console');
    const listaPopulares = document.getElementById('jogos-populares');
    const listaExclusivos = document.getElementById('jogos-exclusivos');
    
    if (!consoleData) return;
    
    // Atualiza os títulos e textos
    secaoDetalhes.classList.remove('hidden');
    titulo.textContent = consoleData.nome;
    
    // Limpa as listas atuais
    listaPopulares.innerHTML = '';
    listaExclusivos.innerHTML = '';
    
    // Adiciona os jogos mais comprados
    consoleData.populares.forEach(jogo => {
        const li = document.createElement('li');
        li.textContent = jogo;
        listaPopulares.appendChild(li);
    });
    
    // Adiciona os jogos exclusivos
    consoleData.exclusivos.forEach(jogo => {
        const li = document.createElement('li');
        li.textContent = jogo;
        listaExclusivos.appendChild(li);
    });
}
