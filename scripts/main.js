const larger = "#8de051";
const smaller = "#ff4747";
const selected = "#e3d35d";

let loadThemeValue = localStorage.getItem("theme");
console.log(loadThemeValue);
if (loadThemeValue == null) loadThemeValue = "day";
console.log(loadThemeValue);

const selectorAlgorithm = document.querySelector(".selector-algorithm");
const childrenAlgorithm = selectorAlgorithm.childNodes;
childrenAlgorithm.forEach((child) => {
	if (child.innerHTML != undefined) {
		child.addEventListener("click", () => setSettings(child, selectorAlgorithm, childrenAlgorithm));
	}
});

const selectorSpeed = document.querySelector(".selector-speed");
const childrenSpeed = selectorSpeed.childNodes;
childrenSpeed.forEach((child) => {
	if (child.innerHTML != undefined) {
		child.addEventListener("click", () => setSettings(child, selectorSpeed, childrenSpeed));
	}
});

const selectorSize = document.querySelector(".selector-size");
const childrenSize = selectorSize.childNodes;
childrenSize.forEach((child) => {
	if (child.innerHTML != undefined) {
		child.addEventListener("click", () => setSettings(child, selectorSize, childrenSize));
	}
});

const logo = document.querySelector(".logo");
logo.addEventListener("click", () => refresh());

const themeButton = document.querySelector(".theme-button");
themeButton.dataset.currentTheme = loadThemeValue;
themeButton.addEventListener("click", () => toggleTheme(themeButton));
toggleTheme(themeButton);

const menuButton = document.querySelector(".menu-button");
menuButton.dataset.opened = "false";
menuButton.addEventListener("click", () => toggleMenu(menuButton));

const learnButton = document.querySelector(".learn-button");
learnButton.addEventListener("click", () => toggleLearn(learnButton));
