// //fonction fetch qui recupere les informations
function fetchCharacters() {
  return fetch("https://hp-api.lainocs.fr/characters").then((response) =>
    response.json()
  );
}

// //fonction asynchrone pour afficher
// async function displayCharacters() {
//   const data = await fetchCharacters();
//   data.forEach((character) => {
//     document.querySelector("#card-list").innerHTML += `
//             <a href="card.html?slug=${character.slug}">
//                 <li class="hp-card" alt="${character.slug}" data-maison="${character.house}" >
//                     <h2>${character.name}</h2>
//                     <img src="${character.image}" alt="${character.name}">
//                 </li>
//             </a>`;
//   });
// }

// //appel de la fonction
// displayCharacters();

// Fonction pour récupérer les informations des personnages depuis l'API
// async function fetchCharacters() {
//   const response = await fetch("https://hp-api.lainocs.fr/characters");
//   const data = await response.json();
//   return data;
// }

// Fonction pour afficher les cartes des personnages dans le DOM
async function displayCharacters() {
  const characters = await fetchCharacters();
  const cardList = document.querySelector("#card-list");
  cardList.innerHTML = ""; // Efface le contenu précédent de la liste

  characters.forEach((character) => {
    const listItem = document.createElement("li");
    listItem.classList.add("hp-card");
    listItem.setAttribute("alt", character.slug);
    listItem.setAttribute("data-maison", character.house);

    const link = document.createElement("a");
    link.href = `card.html?slug=${character.slug}`;

    const h2 = document.createElement("h2");
    h2.textContent = character.name;

    const img = document.createElement("img");
    img.src = character.image;
    img.alt = character.name;

    link.appendChild(h2);
    link.appendChild(img);
    listItem.appendChild(link);

    cardList.appendChild(listItem);
  });
}

// fonction pour filtrer les cartes en fonction de la recherche
function filterCards(searchValue) {
  const cards = document.querySelectorAll("#card-list .hp-card");
  cards.forEach((card) => {
    const name = card.querySelector("h2").textContent.toLowerCase();
    if (name.includes(searchValue.toLowerCase())) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// événement de recherche
const searchInput = document.querySelector("#searchbar");
searchInput.addEventListener("input", (e) => {
  const searchValue = e.target.value.trim().toLowerCase();
  filterCards(searchValue);
});

// appel de la fonction pour afficher les cartes une fois la page chargée
window.addEventListener("DOMContentLoaded", displayCharacters);
