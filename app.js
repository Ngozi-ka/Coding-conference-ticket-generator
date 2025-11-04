const form = document.querySelector(".form");
const image = document.querySelector("#image-file");
const imageLabel = document.querySelector("#image-label");
const avatarGithub = document.querySelector(".avatar-github");
const receivedImage = document.querySelector(".received-image");
const firstContainer = document.querySelector(".first-container");
const ticketContainer = document.querySelector(".ticket-container");
const name = document.querySelector(".namee");
const email = document.querySelector(".emaill");
const yourName = document.querySelector(".your-name");
const yourGit = document.querySelector(".your-git");
const username = document.getElementById("username");
const userEmail = document.getElementById("useremail");
const userGit = document.getElementById("usergit");
const todaysDate = document.querySelector(".date");
const specialId = document.querySelector(".special-id");
const imagePreview = document.querySelector("#image-preview");

image.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      receivedImage.src = e.target.result;
    };

    reader.readAsDataURL(file);
    imageLabel.textContent = file.name;
  } else {
    imageLabel.textContent = "No image selected";
  }
});


form.addEventListener("submit", function (event) {
  event.preventDefault();

  firstContainer.style.display = "none";
  ticketContainer.style.display = "flex";

  const special = Math.floor(Math.random() * 1000000);
  const candidate = username.value;
  const candidateName = candidate.charAt(0).toUpperCase() + candidate.slice(1);

  name.textContent = candidateName;
  yourName.textContent = candidateName;
  email.textContent = userEmail.value;
  yourGit.textContent = userGit.value;
  specialId.textContent = `CONF${special}`;

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  todaysDate.textContent = `${year}/ ${month + 1} / ${day}`;
});
