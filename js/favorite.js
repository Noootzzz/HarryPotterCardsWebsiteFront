// // Fonction pour basculer l'état du favori et mettre à jour l'affichage
// function toggleFavorite(event) {
//   const button = event.target;
//   const card = button.parentElement;
//   const isFavorite = card.classList.toggle("favorite");

//   // Ajoutez le code pour gérer l'état de favori
//   const characterSlug = card.getAttribute("alt");
//   if (isFavorite) {
//     addToFavorites(characterSlug);
//   } else {
//     removeFromFavorites(characterSlug);
//   }
//   // Met à jour l'ordre des cartes en fonction des favoris
//   updateCardsOrder();
// }

// // Fonction pour mettre à jour l'ordre des cartes en fonction des favoris
// function updateCardsOrder() {
//   const cardList = document.querySelector("#card-list");
//   const cards = Array.from(cardList.querySelectorAll(".hp-card"));
//   const favorites = cards.filter((card) => card.classList.contains("favorite"));
//   const nonFavorites = cards.filter(
//     (card) => !card.classList.contains("favorite")
//   );
//   cardList.innerHTML = "";
//   [...favorites, ...nonFavorites].forEach((card) => {
//     cardList.appendChild(card);
//   });
//   console.log(cardList);
// }
