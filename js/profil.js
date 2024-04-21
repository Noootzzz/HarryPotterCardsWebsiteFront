const getMyProfile = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:3000/getMyProfile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  console.log(data);

  let pseudo = document.getElementById("pseudo");
  pseudo.innerHTML = data.name;

  let email = document.getElementById("email");
  email.innerHTML = data.email;
};
getMyProfile();
