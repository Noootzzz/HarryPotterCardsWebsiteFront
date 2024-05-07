const formulaire = document.getElementById("formulaire");
const email = document.getElementById("email").value;

localStorage.setItem("userEmail", email);
console.log(email);
const storedEmail = localStorage.getItem("userEmail");

console.log(storedEmail);

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

  localStorage.setItem("token", token);
  console.log("token :", token);
});
