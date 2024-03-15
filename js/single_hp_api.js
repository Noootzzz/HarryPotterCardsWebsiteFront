function fetchCharacter() {
    let url = window.location.search
    let slug = new URLSearchParams(url).get('slug')
    return fetch('https://hp-api.lainocs.fr/characters/' + slug)
    .then((response) => response.json())
}

async function displayCharacter() {
    const data = await fetchCharacter()
    document.querySelector('#card-view').innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.image}" alt="${data.name}">
        <p>House : ${data.house}</p>
        <p>Actor : ${data.actor}</p>
        <p>Role : ${data.role}</p>
        <p>Patronus : ${data.patronus}</p>
        <p>Blood : ${data.blood}</p>
        <a href="details.html">Back</a>`
}

displayCharacter()