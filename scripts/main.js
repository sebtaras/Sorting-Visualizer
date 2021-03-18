const larger = "#8de051";
const smaller = "#ff4747";
const selected = "#e3d35d";

const selectorAlgorithm = document.querySelector(".selector-algorithm");
const childrenAlgorithm = selectorAlgorithm.childNodes;
childrenAlgorithm.forEach(child => {
  if (child.innerHTML != undefined) {
    child.addEventListener("click", () => setSettings(child, selectorAlgorithm, childrenAlgorithm));
  }
});

const selectorSpeed = document.querySelector(".selector-speed");
const childrenSpeed = selectorSpeed.childNodes;
childrenSpeed.forEach(child => {
  if (child.innerHTML != undefined) {
    child.addEventListener("click", () => setSettings(child, selectorSpeed, childrenSpeed));
  }
});

const selectorSize = document.querySelector(".selector-size");
const childrenSize = selectorSize.childNodes;
childrenSize.forEach(child => {
  if (child.innerHTML != undefined) {
    child.addEventListener("click", () => setSettings(child, selectorSize, childrenSize));
  }
});

const logo = document.querySelector(".logo");
logo.addEventListener("click", () => refresh());

const themeButton = document.querySelector(".theme-button");
themeButton.dataset.currentTheme = "day";
themeButton.addEventListener("click", () => toggleTheme(themeButton));

const menuButton = document.querySelector(".menu-button");
menuButton.dataset.opened = "false";
menuButton.addEventListener("click", () => toggleMenu(menuButton));

// Check local storage if night mode was turned on
if (localStorage.getItem("flag") !== null) {
  toggleTheme(themeButton);
}