let darkButton = document.querySelector("#dark-button");
darkButton.addEventListener("click", changeDarkmode);

function changeDarkmode() {
  document.documentElement.classList.toggle("dark");
}
