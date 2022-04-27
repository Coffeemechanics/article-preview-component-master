const shareClick = document.querySelector(".shareicon");
const popUp = document.querySelector(".share-stuff");
let checkClick = document.querySelector(".check-click");

checkClick.addEventListener("click", toggleShare);
function toggleShare() {
  if (!checkClick) {
    popUp.classList.add("hidden");
    checkClick = true;
    checkClick.classList.remove("active");
  } else {
    checkClick = false;
    popUp.classList.remove("hidden");
    checkClick.classList.add("active");
  }
}
