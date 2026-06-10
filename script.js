// ══════════════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════════════
const consolesData = [
  {
    id:"ps2", name:"PlayStation 2", sales:"155 milhões", rank:"#1 Mais Vendido",
    year:2000, maker:"Sony",
    image:"https://images.tcdn.com.br/img/img_prod/1211726/playstation_2_slim_seminovo_277_1_cdad97bf064ac254c387a1da08a1ac61.png",
    exclusives:[
      {name:"God of War II",            score:93, genre:"Ação"},
      {name:"Shadow of the Colossus",   score:91, genre:"Aventura"},
      {name:"God of War",               score:94, genre:"Ação"},
      {name:"Gran Turismo 4",           score:89, genre:"Corrida"},
      {name:"ICO",                      score:90, genre:"Aventura"},
      {name:"Jak and Daxter",           score:90, genre:"Plataforma"},
    ],
    popular:[
      {name:"GTA: San Andreas",              score:95, genre:"Ação"},
      {name:"Resident Evil 4",               score:96, genre:"Survival Horror"},
      {name:"Need for Speed: Underground 2", score:82, genre:"Corrida"},
      {name:"Guitar Hero II",               score:92, genre:"Música"},
      {name:"Pro Evolution Soccer 6",        score:88, genre:"Esportes"},
    ],
    catalog:[
      {name:"God of War",             year:2005, genre:"Ação",           score:94},
      {name:"God of War II",          year:2007, genre:"Ação",           score:93},
      {name:"Shadow of the Colossus", year:2005, genre:"Aventura",       score:91},
      {name:"ICO",                    year:2001, genre:"Aventura",       score:90},
      {name:"Gran Turismo 4",         year:2004, genre:"Corrida",        score:89},
      {name:"Jak and Daxter",         year:2001, genre:"Plataforma",     score:90},
      {name:"Jak II",                 year:2003, genre:"Ação",           score:87},
      {name:"Ratchet & Clank",        year:2002, genre:"Plataforma",     score:88},
      {name:"GTA: San Andreas",       year:2004, genre:"Ação",           score:95},
      {name:"Resident Evil 4",        year:2005, genre:"Survival Horror",score:96},
      {name:"Need for Speed: UG2",    year:2004, genre:"Corrida",        score:82},
      {name:"Guitar Hero II",         year:2006, genre:"Música",         score:92},
      {name:"Tekken 5",               year:2005, genre:"Luta",           score:86},
      {name:"Devil May Cry 3",        year:2005, genre:"Ação",           score:87},
      {name:"Burnout 3: Takedown",    year:2004, genre:"Corrida",        score:94},
    ]
  },
  {
    id:"switch", name:"Nintendo Switch", sales:"140 milhões", rank:"#2 Mais Vendido",
    year:2017, maker:"Nintendo",
    image:"https://allugator.com/_next/image?url=https%3A%2F%2Fimages.digital.allugator.com%2Fproducts%2FNintendo%20Switch%202-1.png&w=3840&q=90https://images.tcdn.com.br/img/img_prod/1211726/playstation_2_slim_seminovo_277_1_cdad97bf064ac254c387a1da08a1ac61.png",
    exclusives:[
      {name:"Zelda: Breath of the Wild", score:97, genre:"Aventura"},
      {name:"Super Mario Odyssey",       score:97, genre:"Plataforma"},
      {name:"Animal Crossing: NH",       score:90, genre:"Simulação"},
      {name:"Pokémon Scarlet/Violet",    score:72, genre:"RPG"},
      {name:"Metroid Dread",             score:88, genre:"Ação"},
      {name:"Splatoon 3",                score:83, genre:"Shooter"},
    ],
    popular:[
      {name:"Mario Kart 8 Deluxe",  score:92, genre:"Corrida"},
      {name:"Minecraft",            score:90, genre:"Sandbox"},
      {name:"Stardew Valley",       score:89, genre:"Simulação"},
      {name:"Among Us",             score:85, genre:"Social"},
      {name:"Hollow Knight",        score:90, genre:"Metroidvania"},
    ],
    catalog:[
      {name:"Zelda: Breath of the Wild", year:2017, genre:"Aventura",   score:97},
      {name:"Super Mario Odyssey",       year:2017, genre:"Plataforma", score:97},
      {name:"Animal Crossing: NH",       year:2020, genre:"Simulação",  score:90},
      {name:"Metroid Dread",             year:2021, genre:"Ação",       score:88},
      {name:"Mario Kart 8 Deluxe",       year:2017, genre:"Corrida",    score:92},
      {name:"Splatoon 3",                year:2022, genre:"Shooter",    score:83},
      {name:"Fire Emblem: Three Houses", year:2019, genre:"RPG",        score:89},
      {name:"Super Smash Bros. Ultimate",year:2018, genre:"Luta",       score:93},
      {name:"Luigi's Mansion 3",         year:2019, genre:"Aventura",   score:86},
      {name:"Xenoblade Chronicles 3",    year:2022, genre:"RPG",        score:89},
      {name:"Kirby and the Forgotten",   year:2022, genre:"Plataforma", score:84},
      {name:"Bayonetta 3",               year:2022, genre:"Ação",       score:86},
      {name:"Pokémon Scarlet/Violet",    year:2022, genre:"RPG",        score:72},
      {name:"Hollow Knight",             year:2018, genre:"Metroidvania",score:90},
      {name:"Stardew Valley",            year:2017, genre:"Simulação",  score:89},
    ]
  },
  {
    id:"ps4", name:"PlayStation 4", sales:"117 milhões", rank:"#3 Mais Vendido",
    year:2013, maker:"Sony",
    image:"https://images.tcdn.com.br/img/img_prod/1211726/playstation_4_fat_500gb_seminovo_623_1_60c84cfb7ab29fa9dfd8ce90d6e61349.png",
    exclusives:[
      {name:"God of War (2018)",       score:94, genre:"Ação"},
      {name:"Marvel's Spider-Man",     score:87, genre:"Ação"},
      {name:"The Last of Us Part II",  score:93, genre:"Aventura"},
      {name:"Bloodborne",              score:92, genre:"RPG de Ação"},
      {name:"Horizon Zero Dawn",       score:89, genre:"RPG"},
      {name:"Ghost of Tsushima",       score:83, genre:"Ação"},
    ],
    popular:[
      {name:"GTA V",                   score:97, genre:"Ação"},
      {name:"Red Dead Redemption 2",   score:97, genre:"Aventura"},
      {name:"The Witcher 3",           score:92, genre:"RPG"},
      {name:"Dark Souls III",          score:89, genre:"RPG de Ação"},
      {name:"Call of Duty: Warzone",   score:81, genre:"Shooter"},
    ],
    catalog:[
      {name:"God of War (2018)",         year:2018, genre:"Ação",       score:94},
      {name:"The Last of Us Part II",    year:2020, genre:"Aventura",   score:93},
      {name:"Bloodborne",                year:2015, genre:"RPG de Ação",score:92},
      {name:"Marvel's Spider-Man",       year:2018, genre:"Ação",       score:87},
      {name:"Horizon Zero Dawn",         year:2017, genre:"RPG",        score:89},
      {name:"Ghost of Tsushima",         year:2020, genre:"Ação",       score:83},
      {name:"GTA V",                     year:2013, genre:"Ação",       score:97},
      {name:"Red Dead Redemption 2",     year:2018, genre:"Aventura",   score:97},
      {name:"The Witcher 3",             year:2015, genre:"RPG",        score:92},
      {name:"Dark Souls III",            year:2016, genre:"RPG de Ação",score:89},
      {name:"Sekiro",                    year:2019, genre:"RPG de Ação",score:90},
      {name:"Persona 5",                 year:2016, genre:"RPG",        score:93},
      {name:"NieR: Automata",            year:2017, genre:"RPG de Ação",score:88},
      {name:"Detroit: Become Human",     year:2018, genre:"Aventura",   score:78},
      {name:"Death Stranding",           year:2019, genre:"Ação",       score:82},
    ]
  },
  {
    id:"xbox360", name:"Xbox 360", sales:"84 milhões", rank:"#4 Mais Vendido",
    year:2005, maker:"Microsoft",
    image:"COhttps://www.lojatrocagame.com.br/xbox/xbox-360/consoles-seminovos-xbox-360/xbox-360-250-gb-seminovo?srsltid=AfmBOopDFksntpm1rSttJYhu-qNyY7vMeVEcYoSVSo7cqx8JRE8KC1TA",
    exclusives:[
      {name:"Halo 3",              score:94, genre:"Shooter"},
      {name:"Gears of War 2",      score:93, genre:"Shooter"},
      {name:"Fable II",            score:89, genre:"RPG"},
      {name:"Forza Motorsport 4",  score:91, genre:"Corrida"},
      {name:"Halo: Reach",         score:91, genre:"Shooter"},
      {name:"Gears of War",        score:94, genre:"Shooter"},
    ],
    popular:[
      {name:"The Elder Scrolls V: Skyrim", score:96, genre:"RPG"},
      {name:"Call of Duty: Black Ops",     score:87, genre:"Shooter"},
      {name:"Minecraft: X360 Edition",     score:82, genre:"Sandbox"},
      {name:"Batman: Arkham City",         score:96, genre:"Ação"},
      {name:"Portal 2",                    score:95, genre:"Puzzle"},
    ],
    catalog:[
      {name:"Halo 3",                year:2007, genre:"Shooter", score:94},
      {name:"Gears of War",          year:2006, genre:"Shooter", score:94},
      {name:"Gears of War 2",        year:2008, genre:"Shooter", score:93},
      {name:"Halo: Reach",           year:2010, genre:"Shooter", score:91},
      {name:"Forza Motorsport 4",    year:2011, genre:"Corrida",  score:91},
      {name:"Fable II",              year:2008, genre:"RPG",      score:89},
      {name:"Skyrim",                year:2011, genre:"RPG",      score:96},
      {name:"Batman: Arkham City",   year:2011, genre:"Ação",     score:96},
      {name:"Portal 2",              year:2011, genre:"Puzzle",   score:95},
      {name:"Call of Duty: Black Ops",year:2010,genre:"Shooter",  score:87},
      {name:"BioShock Infinite",     year:2013, genre:"Shooter",  score:94},
      {name:"Red Dead Redemption",   year:2010, genre:"Aventura", score:95},
      {name:"Mass Effect 2",         year:2010, genre:"RPG",      score:96},
      {name:"Borderlands 2",         year:2012, genre:"Shooter",  score:89},
      {name:"Left 4 Dead 2",         year:2009, genre:"Shooter",  score:90},
    ]
  },
  {
    id:"ps5", name:"PlayStation 5", sales:"65 milhões", rank:"#5 Geração Atual",
    year:2020, maker:"Sony",
    image:"https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
    exclusives:[
      {name:"Demon's Souls (Remake)",      score:92, genre:"RPG de Ação"},
      {name:"Returnal",                    score:86, genre:"Shooter"},
      {name:"Ratchet & Clank: Rift Apart", score:88, genre:"Plataforma"},
      {name:"Spider-Man: Miles Morales",   score:85, genre:"Ação"},
      {name:"Astro's Playroom",            score:82, genre:"Plataforma"},
      {name:"Final Fantasy XVI",           score:87, genre:"RPG"},
    ],
    popular:[
      {name:"Elden Ring",             score:96, genre:"RPG de Ação"},
      {name:"Baldur's Gate 3",        score:96, genre:"RPG"},
      {name:"Cyberpunk 2077",         score:86, genre:"RPG"},
      {name:"God of War: Ragnarök",   score:94, genre:"Ação"},
      {name:"Hogwarts Legacy",        score:84, genre:"RPG"},
    ],
    catalog:[
      {name:"Demon's Souls (Remake)",      year:2020, genre:"RPG de Ação", score:92},
      {name:"Returnal",                    year:2021, genre:"Shooter",     score:86},
      {name:"Ratchet & Clank: Rift Apart", year:2021, genre:"Plataforma",  score:88},
      {name:"Spider-Man: Miles Morales",   year:2020, genre:"Ação",        score:85},
      {name:"Astro's Playroom",            year:2020, genre:"Plataforma",  score:82},
      {name:"Final Fantasy XVI",           year:2023, genre:"RPG",         score:87},
      {name:"God of War: Ragnarök",        year:2022, genre:"Ação",        score:94},
      {name:"Elden Ring",                  year:2022, genre:"RPG de Ação", score:96},
      {name:"Baldur's Gate 3",             year:2023, genre:"RPG",         score:96},
      {name:"Cyberpunk 2077",              year:2023, genre:"RPG",         score:86},
      {name:"Hogwarts Legacy",             year:2023, genre:"RPG",         score:84},
      {name:"Marvel's Spider-Man 2",       year:2023, genre:"Ação",        score:90},
      {name:"Star Wars Jedi: Survivor",    year:2023, genre:"Ação",        score:84},
      {name:"Alan Wake 2",                 year:2023, genre:"Survival Horror",score:89},
      {name:"Final Fantasy VII Rebirth",   year:2024, genre:"RPG",         score:92},
    ]
  },
  {
    id:"gba", name:"Game Boy Advance", sales:"81 milhões", rank:"#6 Portátil Icônico",
    year:2001, maker:"Nintendo",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Nintendo-Game-Boy-Advance-Milky-Blue-FL.png/960px-Nintendo-Game-Boy-Advance-Milky-Blue-FL.png",
    exclusives:[
      {name:"Pokémon FireRed/LeafGreen",       score:81, genre:"RPG"},
      {name:"Golden Sun",                       score:91, genre:"RPG"},
      {name:"Metroid Fusion",                   score:92, genre:"Ação"},
      {name:"Castlevania: Aria of Sorrow",      score:91, genre:"Metroidvania"},
      {name:"Fire Emblem",                      score:86, genre:"Estratégia"},
      {name:"Zelda: The Minish Cap",            score:89, genre:"Aventura"},
    ],
    popular:[
      {name:"Pokémon Ruby/Sapphire",            score:82, genre:"RPG"},
      {name:"Mega Man Zero",                    score:82, genre:"Ação"},
      {name:"Kirby: Nightmare in Dream Land",   score:78, genre:"Plataforma"},
      {name:"Final Fantasy Tactics Advance",    score:87, genre:"RPG"},
      {name:"Advance Wars",                     score:92, genre:"Estratégia"},
    ],
    catalog:[
      {name:"Metroid Fusion",              year:2002, genre:"Ação",        score:92},
      {name:"Golden Sun",                  year:2001, genre:"RPG",         score:91},
      {name:"Castlevania: Aria of Sorrow", year:2003, genre:"Metroidvania",score:91},
      {name:"Zelda: The Minish Cap",       year:2004, genre:"Aventura",    score:89},
      {name:"Fire Emblem",                 year:2003, genre:"Estratégia",  score:86},
      {name:"Advance Wars",                year:2001, genre:"Estratégia",  score:92},
      {name:"Final Fantasy Tactics Adv.", year:2003,  genre:"RPG",         score:87},
      {name:"Pokémon FireRed/LeafGreen",   year:2004, genre:"RPG",         score:81},
      {name:"Pokémon Ruby/Sapphire",       year:2002, genre:"RPG",         score:82},
      {name:"Mega Man Zero",               year:2002, genre:"Ação",        score:82},
      {name:"Kirby: NiDL",                 year:2002, genre:"Plataforma",  score:78},
      {name:"Golden Sun: Lost Age",        year:2002, genre:"RPG",         score:90},
      {name:"Metroid: Zero Mission",       year:2004, genre:"Ação",        score:88},
      {name:"WarioWare, Inc.",             year:2003, genre:"Party",       score:90},
      {name:"Mario & Luigi: SS",           year:2003, genre:"RPG",         score:90},
    ]
  },
  {
    id:"n64", name:"Nintendo 64", sales:"33 milhões", rank:"#7 Clássico Eterno",
    year:1996, maker:"Nintendo",
    image:"https://upload.wikimedia.org/wikipedia/commons/0/02/N64-Console-Set.png",
    exclusives:[
      {name:"Zelda: Ocarina of Time",  score:99, genre:"Aventura"},
      {name:"Super Mario 64",          score:94, genre:"Plataforma"},
      {name:"GoldenEye 007",           score:96, genre:"Shooter"},
      {name:"Zelda: Majora's Mask",    score:95, genre:"Aventura"},
      {name:"Banjo-Kazooie",           score:92, genre:"Plataforma"},
      {name:"Donkey Kong 64",          score:90, genre:"Plataforma"},
    ],
    popular:[
      {name:"Mario Kart 64",       score:83, genre:"Corrida"},
      {name:"Star Fox 64",         score:88, genre:"Shooter"},
      {name:"Super Smash Bros.",   score:79, genre:"Luta"},
      {name:"Conker's Bad Fur Day",score:92, genre:"Plataforma"},
      {name:"Perfect Dark",        score:97, genre:"Shooter"},
    ],
    catalog:[
      {name:"Zelda: Ocarina of Time", year:1998, genre:"Aventura",  score:99},
      {name:"Super Mario 64",         year:1996, genre:"Plataforma", score:94},
      {name:"GoldenEye 007",          year:1997, genre:"Shooter",    score:96},
      {name:"Zelda: Majora's Mask",   year:2000, genre:"Aventura",   score:95},
      {name:"Banjo-Kazooie",          year:1998, genre:"Plataforma", score:92},
      {name:"Perfect Dark",           year:2000, genre:"Shooter",    score:97},
      {name:"Mario Kart 64",          year:1996, genre:"Corrida",    score:83},
      {name:"Star Fox 64",            year:1997, genre:"Shooter",    score:88},
      {name:"Donkey Kong 64",         year:1999, genre:"Plataforma", score:90},
      {name:"Conker's Bad Fur Day",   year:2001, genre:"Plataforma", score:92},
      {name:"Super Smash Bros.",      year:1999, genre:"Luta",       score:79},
      {name:"Paper Mario",            year:2000, genre:"RPG",        score:93},
      {name:"F-Zero X",               year:1998, genre:"Corrida",    score:89},
      {name:"Pokémon Stadium",        year:1999, genre:"Estratégia", score:73},
      {name:"Wave Race 64",           year:1996, genre:"Esportes",   score:93},
    ]
  },
  {
    id:"xboxone", name:"Xbox One", sales:"51 milhões", rank:"#8 Mais Vendido",
    year:2013, maker:"Microsoft",
    image:"https://images.tcdn.com.br/img/img_prod/1211726/xbox_one_fat_500gb_seminovo_1337_1_5f49f4dd1205a012714169e8095fea68.png",
    exclusives:[
      {name:"Halo 5: Guardians",        score:84, genre:"Shooter"},
      {name:"Ori and the Blind Forest", score:88, genre:"Plataforma"},
      {name:"Forza Horizon 4",          score:92, genre:"Corrida"},
      {name:"Gears 5",                  score:84, genre:"Shooter"},
      {name:"Cuphead",                  score:87, genre:"Ação"},
      {name:"Sea of Thieves",           score:69, genre:"Aventura"},
    ],
    popular:[
      {name:"The Witcher 3",              score:92, genre:"RPG"},
      {name:"Red Dead Redemption 2",      score:97, genre:"Aventura"},
      {name:"Sekiro: Shadows Die Twice",  score:90, genre:"RPG de Ação"},
      {name:"Doom Eternal",              score:88, genre:"Shooter"},
      {name:"Control",                   score:82, genre:"Ação"},
    ],
    catalog:[
      {name:"Halo 5: Guardians",         year:2015, genre:"Shooter",    score:84},
      {name:"Ori and the Blind Forest",  year:2015, genre:"Plataforma", score:88},
      {name:"Forza Horizon 4",           year:2018, genre:"Corrida",    score:92},
      {name:"Gears 5",                   year:2019, genre:"Shooter",    score:84},
      {name:"Cuphead",                   year:2017, genre:"Ação",       score:87},
      {name:"Ori and the Will of Wisps", year:2020, genre:"Plataforma", score:90},
      {name:"The Witcher 3",             year:2015, genre:"RPG",        score:92},
      {name:"Red Dead Redemption 2",     year:2018, genre:"Aventura",   score:97},
      {name:"Doom Eternal",              year:2020, genre:"Shooter",    score:88},
      {name:"Control",                   year:2019, genre:"Ação",       score:82},
      {name:"Hellblade: Senua's Sac.",   year:2017, genre:"Ação",       score:84},
      {name:"Sekiro",                    year:2019, genre:"RPG de Ação",score:90},
      {name:"Halo: Master Chief Coll.",  year:2014, genre:"Shooter",    score:85},
      {name:"Sunset Overdrive",          year:2014, genre:"Ação",       score:81},
      {name:"Titanfall 2",               year:2016, genre:"Shooter",    score:89},
    ]
  }
];

// ══════════════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════════════
let currentFilter = 'all';
let currentSearch = '';
let currentConsoleId = null;
let currentTab = 'exclusives';
const gameImages = {}; // { "consoleId::gameName": base64 }

// ══════════════════════════════════════════════════════
//  HELPERS
// ══════════════════════════════════════════════════════
function scoreColor(s) {
  if (s >= 85) return 'score-green';
  if (s >= 70) return 'score-yellow';
  return 'score-red';
}
function scoreLabel(s) {
  if (s >= 85) return 'Ótimo';
  if (s >= 70) return 'Bom';
  return 'Regular';
}
function scoreStars(s) {
  const full = Math.round(s / 20);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}
function gameKey(cid, name) { return cid + '::' + name; }

// ══════════════════════════════════════════════════════
//  FILTER & SEARCH
// ══════════════════════════════════════════════════════
function filteredConsoles() {
  const q = currentSearch.toLowerCase().trim();
  return consolesData.filter(c => {
    const makerMatch = currentFilter === 'all' || c.maker === currentFilter;
    if (!makerMatch) return false;
    if (!q) return true;
    // match console name, maker, or any game name
    if (c.name.toLowerCase().includes(q)) return true;
    if (c.maker.toLowerCase().includes(q)) return true;
    const allGames = [...c.exclusives, ...c.popular, ...(c.catalog || [])];
    return allGames.some(g => g.name.toLowerCase().includes(q));
  });
}

// ══════════════════════════════════════════════════════
//  RENDER CARDS
// ══════════════════════════════════════════════════════
function renderCards() {
  const container = document.getElementById('container');
  const noResults = document.getElementById('noResults');
  const list = filteredConsoles();

  container.innerHTML = '';

  if (list.length === 0) {
    container.classList.add('hidden');
    noResults.classList.remove('hidden');
    document.getElementById('searchTerm').textContent = currentSearch;
    return;
  }

  container.classList.remove('hidden');
  noResults.classList.add('hidden');

  list.forEach((c, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${i * 0.06}s`;
    card.onclick = () => openModal(c.id);
    card.innerHTML = `
      <div class="card-img-wrap">
        <span class="rank-badge">${c.rank}</span>
        <span class="maker-badge">${c.maker}</span>
        <img src="${c.image}" alt="${c.name}" loading="lazy"
             onerror="this.style.opacity='.2';this.removeAttribute('onerror')">
      </div>
      <div class="card-body">
        <div class="card-name">${c.name}</div>
        <div class="card-sales">Vendas: <strong>${c.sales}</strong></div>
        <div class="card-meta">
          <span class="meta-year">${c.year}</span>
        </div>
        <div class="btn-wrap">
          <button class="btn-ver">Ver Jogos</button>
        </div>
      </div>`;
    container.appendChild(card);
  });

  document.getElementById('statCount').textContent = list.length;
}

// ══════════════════════════════════════════════════════
//  GAME ITEM HTML
// ══════════════════════════════════════════════════════
function gameItemHTML(cid, game) {
  const key = gameKey(cid, game.name);
  const src = gameImages[key];
  const imgEl = src
    ? `<img class="game-img" src="${src}" alt="${game.name}">`
    : `<label class="game-img-placeholder" title="Adicionar imagem da capa">
         <span class="plus">+</span>
         <input type="file" accept="image/*" onchange="loadGameImg(event,'${key.replace(/'/g,"\\'")}')">
       </label>`;
  const col = scoreColor(game.score);
  return `<li data-key="${key}">
    ${imgEl}
    <div class="game-info">
      <div class="game-name">${game.name}</div>
      <div class="game-rating">
        <span class="stars">${scoreStars(game.score)}</span>
        <span class="score-num">${game.score}/100</span>
        <span class="score-badge ${col}">${scoreLabel(game.score)}</span>
      </div>
    </div>
  </li>`;
}

// ══════════════════════════════════════════════════════
//  CATALOG ROW HTML
// ══════════════════════════════════════════════════════
function catalogRowHTML(game) {
  const col = scoreColor(game.score);
  return `<tr>
    <td>${game.name}</td>
    <td>${game.year}</td>
    <td><span class="genre-tag">${game.genre}</span></td>
    <td><span class="score-badge ${col}">${game.score}</span></td>
  </tr>`;
}

// ══════════════════════════════════════════════════════
//  RENDER TAB CONTENT
// ══════════════════════════════════════════════════════
function renderTab(tab) {
  currentTab = tab;
  const c = consolesData.find(x => x.id === currentConsoleId);
  if (!c) return;

  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tab);
  });

  const body = document.getElementById('modalBody');
  body.innerHTML = '';

  const panel = document.createElement('div');
  panel.className = 'tab-panel';

  if (tab === 'exclusives') {
    panel.innerHTML = `
      <div class="upload-hint"><span>📷</span> Clique em <strong>+</strong> para adicionar a capa de qualquer jogo.</div>
      <ul class="game-list">${c.exclusives.map(g => gameItemHTML(c.id, g)).join('')}</ul>`;
  } else if (tab === 'popular') {
    panel.innerHTML = `
      <div class="upload-hint"><span>📷</span> Clique em <strong>+</strong> para adicionar a capa de qualquer jogo.</div>
      <ul class="game-list">${c.popular.map(g => gameItemHTML(c.id, g)).join('')}</ul>`;
  } else if (tab === 'catalog') {
    panel.innerHTML = `
      <table class="catalog-table">
        <thead><tr><th>Jogo</th><th>Ano</th><th>Gênero</th><th>Nota</th></tr></thead>
        <tbody>${(c.catalog || []).map(catalogRowHTML).join('')}</tbody>
      </table>`;
  }

  body.appendChild(panel);
}

// ══════════════════════════════════════════════════════
//  OPEN / CLOSE MODAL
// ══════════════════════════════════════════════════════
function openModal(id) {
  const c = consolesData.find(x => x.id === id);
  if (!c) return;
  currentConsoleId = id;

  document.getElementById('modalTitle').textContent = c.name;
  document.getElementById('modalMaker').textContent = c.maker;
  document.getElementById('modalYear').textContent = `Lançamento: ${c.year}`;

  // Reset to first tab
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-tab="exclusives"]').classList.add('active');

  renderTab('exclusives');

  document.getElementById('modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
  document.body.style.overflow = '';
}

// ══════════════════════════════════════════════════════
//  IMAGE UPLOAD
// ══════════════════════════════════════════════════════
function loadGameImg(event, key) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    gameImages[key] = e.target.result;
    const li = document.querySelector(`li[data-key="${CSS.escape(key)}"]`);
    if (li) {
      const ph = li.querySelector('.game-img-placeholder');
      if (ph) {
        const img = document.createElement('img');
        img.className = 'game-img';
        img.src = e.target.result;
        ph.replaceWith(img);
      }
    }
  };
  reader.readAsDataURL(file);
}

// ══════════════════════════════════════════════════════
//  EVENTS
// ══════════════════════════════════════════════════════
document.getElementById('closeBtn').addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', e => {
  if (e.target === document.getElementById('modal')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => renderTab(btn.dataset.tab));
});

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderCards();
  });
});

// Search
let searchTimer;
document.getElementById('searchInput').addEventListener('input', e => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    currentSearch = e.target.value;
    renderCards();
  }, 180);
});

// ══════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════
renderCards();