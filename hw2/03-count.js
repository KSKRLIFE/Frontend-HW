const content = document.querySelector("#data").innerHTML;
const input = document.querySelector("input");

input.addEventListener("keydown", handleKeyDown);

function handleKeyDown() {
  const search = input.value;
  let regex = new RegExp(search, "gi");
  if (search !== "") {
    let newText = content.replaceAll(regex, (match) => {
      return `<span class='highlight'>${match}</span>`;
    });
    document.querySelector("#data").innerHTML = newText;
  } else {
    document.querySelector("#data").innerHTML = content;
  }
}
