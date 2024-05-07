const formulaire = document.getElementById("formulaire");

formulaire.addEventListener("submit", async (event) => {
  event.preventDefault(); //eviter que la page se recharger quand on envoie
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  const token = data.token;

  if (token) {
    localStorage.setItem("token", token);
    window.location.href = "profil.html";
    alert("Connecté avec l'adresse e-mail : " + email);
  }
  if (!token) {
    alert(
      "Erreur de connexion. Veuillez vérifier votre identifiant et mot de passe."
    );
  }
});
