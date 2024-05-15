let darkMode = localStorage.getItem("darkmode");

const darkModeToggle = document.querySelector(".Darkmode");

// const darkModeStatus = document.querySelector('#dark-mode-status');

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "enabled");
  //   darkModeStatus.innerText = "Activé";
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
  //   darkModeStatus.innerText = "Désactivé";
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
