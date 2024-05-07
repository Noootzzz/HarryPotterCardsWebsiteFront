document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const loginForm = document.getElementById("login-form");

  // Récupérer la valeur stockée dans le localStorage et l'injecter dans l'input au chargement de la page
  const storedEmail = localStorage.getItem("email");
  if (storedEmail) {
    emailInput.value = storedEmail;
  }

  // Écouter l'événement de saisie dans l'input et mettre à jour le localStorage
  emailInput.addEventListener("input", () => {
    localStorage.setItem("email", emailInput.value);
  });
});
