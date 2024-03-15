function fetchCharacters() {
    return fetch('https://hp-api.lainocs.fr/characters')
    .then((response) => response.json())
}

async function displayCharacters() {
    const data = await fetchCharacters()
    data.forEach(character => {
        document.querySelector('#card-list').innerHTML += `
            <a href="card.html?slug=${character.slug}">
                <li class="hp-card" data-maison="${character.house}" >
                    <h2>${character.name}</h2>
                    <img src="${character.image}" alt="${character.name}">
                </li>
            </a>`
    })
}

displayCharacters()