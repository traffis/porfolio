let bio = document.getElementById("bio");
let avatar = document.getElementById("avatar");

fetch("https://api.github.com/users/traffis")
  .then((response) => response.json())
  .then((data) => {
    bio.innerHTML = data.bio;
    avatar.src = data.avatar_url;
  });
