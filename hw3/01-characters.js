// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";

let app = document.querySelector("#results");

const addElements = (character) => {
  let characterList = document.createElement("div");
  characterList.className = "figure";

  app.classList.add("style");

  let characterimage = document.createElement("img");
  characterimage.className = "image";

  let charactertitle = document.createElement("div");
  charactertitle.className = "charactertitle";

  charactertitle.textContent = character.fullName;
  characterimage.src = character.imageUrl;
  characterimage.alt = character.firstName;

  let title = document.createElement("div");
  title.className = "title";
  title.textContent = character.title;

  characterList.append(characterimage);
  characterList.append(charactertitle);
  characterList.append(title);

  app.append(characterList);
};
const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        addElements(element);
      });
    })
    .catch((error) => {
      let errormsg = document.createElement("div");
      errormsg.textContent = "An error occured. Please try again.";
      app.append(errormsg);
    });
};

fetchData(url);
