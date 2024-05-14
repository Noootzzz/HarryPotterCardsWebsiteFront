const cardsContainer = document.getElementById("booster-cards-container");
const drawButton = document.getElementById("booster-btn");

// Fonction pour ouvrir un booster
drawButton.addEventListener("click", async () => {
  // Vérifier le temps de la dernière ouverture du booster
  const lastOpenedTime = localStorage.getItem("lastOpenedTime");
  const currentTime = new Date().getTime();
  const maxTime = 24 * 60 * 60 * 1000; // 24 heures en millisecondes

  // if (lastOpenedTime && currentTime - parseInt(lastOpenedTime) < maxTime) {
  if (false) {
    // Si moins de 24 heures se sont écoulées depuis la dernière ouverture, afficher un message d'alerte
    alert("Vous ne pouvez ouvrir un booster qu'une fois toutes les 24 heures.");
  } else {
    // Si 24 heures se sont écoulées ou si c'est la première ouverture, procéder à l'ouverture du booster
    const cards = await drawRandomCards(3);
    displayCards(cards);

    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3000/getMyProfile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const dataUser = await response.json();
    const id = dataUser.id; //id de l'user connecté

    const idCards = cards.map((card) => card.id);
    await fetch("http://localhost:3000/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, idCards }),
    });

    // Mettre à jour le temps de la dernière ouverture du booster dans le localStorage
    localStorage.setItem("lastOpenedTime", currentTime.toString());
  }
});

// Récupérer des cartes aléatoires dans l'API
let availableCards = []; // Garder la trace des cartes disponibles

async function drawRandomCards(numCards) {
  if (availableCards.length === 0) {
    const response = await fetch("https://hp-api.lainocs.fr/characters");
    availableCards = await response.json();
  }

  const randomCards = [];
  for (let i = 0; i < numCards; i++) {
    if (availableCards.length === 0) break; // Si aucune carte n'est disponible, sortir de la boucle
    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const selectedCard = availableCards[randomIndex];
    randomCards.push(selectedCard);
    availableCards.splice(randomIndex, 1); // Retirer la carte sélectionnée du tableau des cartes disponibles
  }
  return randomCards;
}

// Affiche les cartes tirées au sort
function displayCards(cards) {
  cardsContainer.innerHTML = "";
  const cardList = document.createElement("ul"); // Liste des cartes
  cardList.classList.add("card-list");

  cards.forEach((card) => {
    const listItem = document.createElement("li");
    listItem.classList.add("hp-card");
    listItem.setAttribute("alt", card.slug);
    listItem.setAttribute("data-maison", card.house);

    const link = document.createElement("a");
    link.href = `card.html?slug=${card.slug}`;

    const h2 = document.createElement("h2");
    h2.textContent = card.name;

    const img = document.createElement("img");
    img.src = card.image;
    img.alt = card.name;

    link.appendChild(h2);
    link.appendChild(img);
    listItem.appendChild(link);

    cardList.appendChild(listItem);
  });

  cardsContainer.appendChild(cardList);
}
