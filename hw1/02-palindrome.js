const elem = document.querySelector("input");
elem.addEventListener("input", handleInput);

function handleInput() {
  let rev = elem.value.split("").reverse().join("");
  if (elem.value.length == 0) {
    document.getElementById("error").style.display = "none";
    document.getElementById("result").style.display = "none";
  } else if (elem.value < 0 || elem.value == NaN) {
    document.getElementById("error").style.display = "block";
    document.getElementById("result").style.display = "none";
  } else if (elem.value != rev) {
    document.getElementById("error").style.display = "block";
    document.getElementById("result").style.display = "none";
  } else {
    document.getElementById("error").style.display = "none";
    document.getElementById("result").style.display = "block";
  }
}
