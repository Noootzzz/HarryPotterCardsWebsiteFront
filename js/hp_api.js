// fonction fetch qui recupere les informations
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

    const favBtn = document.createElement("button");
    favBtn.classList.add("favorite-btn");
    favBtn.innerHTML = `
    <svg viewBox="0 0 24 24" width="50" height="50">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
    `;

    favBtn.addEventListener("click", toggleFavorite);

    link.appendChild(h2);
    link.appendChild(img);
    listItem.appendChild(favBtn);
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

//favoris
// Fonction pour basculer l'état du favori et mettre à jour l'affichage
function toggleFavorite(event) {
  const button = event.target;
  const card = button.parentElement;
  // console.log(card);
  const hpCard = card.parentNode.parentNode;
  // console.log(hpCard);

  // rajouter la class favorite
  const isFavoriteHpCard = hpCard.classList.toggle("favorite");
  const isFavoriteCard = card.classList.toggle("favorite");

  // Met à jour l'ordre des cartes en fonction des favoris
  updateCardsOrder();
}

// Fonction pour mettre à jour l'ordre des cartes en fonction des favoris
function updateCardsOrder() {
  const cardList = document.querySelector("#card-list");
  const cards = Array.from(cardList.querySelectorAll(".hp-card"));
  const favorites = cards.filter((card) => card.classList.contains("favorite"));
  // console.log(favorites);
  const nonFavorites = cards.filter(
    (card) => !card.classList.contains("favorite")
  );
  // console.log(nonFavorites);
  cardList.innerHTML = "";
  [...favorites, ...nonFavorites].forEach((card) => {
    cardList.appendChild(card);
  });
  // console.log(cardList);
}

// appel de la fonction pour afficher les cartes une fois la page chargée
window.addEventListener("DOMContentLoaded", displayCharacters);
