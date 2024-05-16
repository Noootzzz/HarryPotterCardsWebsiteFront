const getMyProfile = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:3000/getMyProfile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    // Mettre à jour les éléments dans le DOM avec les données récupérées
    let pseudo = document.getElementById("pseudo");
    pseudo.innerHTML = `Pseudo : <span>${data.user.name}</span>`;

    let email = document.getElementById("email");
    email.innerHTML = `Email : <span>${data.user.email}</span>`;

    // Récupérer les id des cartes de l'utilisateur depuis la base de données
    const cardsIds = data.cards.map((card) => card.cardId);
    // console.log("Cartes de l'utilisateur depuis la base de données:", cardsIds);

    // Récupérer toutes les cartes depuis l'API
    const responseApi = await fetch("https://hp-api.lainocs.fr/characters");
    const allCards = await responseApi.json();
    // console.log("Cartes de l'API:", allCards);

    // Filtrer les cartes de l'utilisateur parmi toutes les cartes récupérées depuis l'API
    const userCards = allCards.filter((card) => cardsIds.includes(card.id));
    // console.log("Carte de l'user après filtre de l'api : ", userCards);

    // Créer une liste ul pour les cartes de l'utilisateur
    let cardList = document.createElement("ul");
    cardList.classList.add("card-list");

    // Pour chaque carte de l'utilisateur depuis l'API, créer un élément li et l'ajouter à la liste ul
    userCards.forEach((card) => {
      const listItem = document.createElement("li");
      listItem.classList.add("hp-card");
      listItem.setAttribute("alt", card.slug);
      listItem.setAttribute("data-maison", card.house);

      const link = document.createElement("a");
      link.href = `card.html?slug=${card.slug}`;

      const h2 = document.createElement("h2");
      h2.textContent = card.name;

      const p = document.createElement("p");
      p.innerHTML = `House : ${card.house} </br> Actor : ${card.actor} </br> Role : ${card.role} `;

      const img = document.createElement("img");
      img.src = card.image;
      img.alt = card.name;

      link.appendChild(h2);
      link.appendChild(p);
      link.appendChild(img);
      listItem.appendChild(link);

      cardList.appendChild(listItem);
    });

    // Sélectionner l'élément où afficher les cartes et ajouter la liste ul
    let cardsContainer = document.getElementById("list-card");
    const title = document.createElement("h2");
    title.classList.add("my-cards");
    cardsContainer.innerHTML = ""; // Vider le contenu actuel
    title.innerHTML = "My <span>Cards</span>";
    cardsContainer.appendChild(title);
    cardsContainer.appendChild(cardList);

    let numberCards = document.createElement("h2");
    numberCards.classList.add("number-cards");
    numberCards.innerHTML = `Cards in my collection :</br> <span>${data.cards.length}</span> / ${allCards.length}`;
    let stats = document.getElementById("stats");
    stats.appendChild(numberCards);

    let favoriteHouse = document.createElement("h2");

    //stocker le nombre de cartes par maison
    const cardsByHouse = {};

    //les compter
    userCards.forEach((card) => {
      if (!cardsByHouse[card.house]) {
        cardsByHouse[card.house] = 1;
      } else {
        cardsByHouse[card.house]++;
      }
    });
    console.log(cardsByHouse);

    //trouver la maison avec le plus grand nbr de cartes
    let favHouse = "";
    let maxCards = 0;
    Object.entries(cardsByHouse).forEach(([house, count]) => {
      if (count > maxCards) {
        favHouse = house;
        maxCards = count;
      }
    });

    favoriteHouse.classList.add("favorite-house");
    favoriteHouse.innerHTML = `Favorite House :  <span>${favHouse}</span>`;
    stats.appendChild(favoriteHouse);

    // Retourner l'ID de l'utilisateur
    // console.log(data.user.id);
    return data.user.id;
  } catch (error) {
    console.log("Une erreur s'est produite:", error);
  }
};

getMyProfile();
