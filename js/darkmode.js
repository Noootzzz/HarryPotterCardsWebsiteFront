let darkMode = localStorage.getItem("darkmode");

const darkModeToggle = document.querySelector(".Darkmode");
const darkModeToggleRes = document.querySelector(".darkmode");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  console.log("1");
  localStorage.setItem("darkmode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  console.log("2");
  localStorage.setItem("darkmode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

//au clique
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkmode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
darkModeToggleRes.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkmode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// // Fonction pour activer le mode sombre
// const enableDarkMode = () => {
//   document.body.classList.add("darkmode");
//   console.log("1");
//   localStorage.setItem("darkmode", "enabled");
// };

// // Fonction pour désactiver le mode sombre
// const disableDarkMode = () => {
//   document.body.classList.remove("darkmode");
//   console.log("2");
//   localStorage.setItem("darkmode", null);
// };

// // Vérification du mode sombre au chargement de la page
// let darkMode = localStorage.getItem("darkmode");
// if (darkMode === "enabled") {
//   enableDarkMode();
// }

// // Gestion du clic sur le bouton "Mode sombre" (sélectionné avec querySelector)
// const darkModeToggle = document.querySelector(".Darkmode");
// darkModeToggle.addEventListener("click", () => {
//   darkMode = localStorage.getItem("darkmode");
//   if (darkMode !== "enabled") {
//     enableDarkMode();
//   } else {
//     disableDarkMode();
//   }
// });

// // Gestion du clic sur les éléments avec la classe "Darkmode" (sélectionnés avec getElementsClassName)
// const darkModeToggle2 = document.getElementsByClassName("Darkmode");
// for (let i = 0; i < darkModeToggle2.length; i++) {
//   darkModeToggle2[i].addEventListener("click", () => {
//     darkMode = localStorage.getItem("darkmode");
//     if (darkMode !== "enabled") {
//       enableDarkMode();
//     } else {
//       disableDarkMode();
//     }
//   });
// }
