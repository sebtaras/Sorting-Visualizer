function displayArray(array, speed) {
  const arrayDisplay = document.querySelector(".array-display");
  arrayDisplay.dataset.array = JSON.stringify(array);
  arrayDisplay.innerHTML = "";
  const theme = document.querySelector(".theme-button").dataset.currentTheme;
  for (let i = 0; i < array.length; i++) {
    let container = document.createElement("div");
    container.classList.add("container");
    let element = document.createElement("div");
    element.classList.add("element");
    if (theme == "night") {
      element.classList.add("element-nightmode");
    }

    if (array.length < 50) {
      element.innerHTML = array[i];
    }

    container.style.width = `${array[i]}%`;
    container.style.height = `${100 / array.length}%`;
    container.append(element);
    element.style.width = "100%";
    element.style.height = "100%";

    const { red, green, blue } = calculateColor(array[i], array.length);
    element.style.background = `rgb(${red},${green},${blue})`;
    // element.style.background = `teal`;
    arrayDisplay.appendChild(container);
  }
  if (document.querySelector(".sort-button").dataset.enabled != "true") enableSortButton();
}

function calculateColor(value, length) {
  let t = 1 - value / 100;
  const koef = 255;

  let red;
  let green;
  let blue;

  // if (length < 20) {
  //   red = 0;
  //   green = 0;
  //   blue = t * koef;
  // } else if (length >= 20 && length < 100) {
  //   red = koef - Math.floor(koef * (1 - t)) - 30;
  //   blue = Math.floor(koef * t) + 50;
  //   green = koef - Math.floor(koef * (1 - t)) - 30;
  // } else {
  //   blue = Math.floor(koef * Math.pow(t, 2));
  //   red = Math.floor(koef * 2 * (1 - t));
  //   green = Math.floor(koef * Math.pow(1 - t, 2));
  // }

  red = koef - Math.floor(koef * (1 - t)) - 30;
  blue = Math.floor(koef * t) + 50;
  green = koef - Math.floor(koef * (1 - t)) - 30;
  console.log(red, green, blue);
  return { red, green, blue };
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function refresh() {
  location.reload();
}

function toggleMenu(button) {
  if (button.dataset.opened == "false") {
    button.dataset.opened = "true";
    const dropdowns = document.querySelector(".dropdowns");
    dropdowns.classList.add("dropdowns-remove");
  } else {
    button.dataset.opened = "false";
    const dropdowns = document.querySelector(".dropdowns");
    dropdowns.classList.remove("dropdowns-remove");
  }
}
let flag = true;
function toggleTheme(button) {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("navbar-nightmode");

    const navtags = document.querySelectorAll(".nav-tag");
    navtags.forEach(navtag => {
      navtag.classList.toggle("nav-tag-nightmode");
    });

    const dropdowns = document.querySelector(".dropdowns");
    dropdowns.classList.toggle("dropdowns-nightmode");

    const dropdown = document.querySelectorAll(".dropdown");
    dropdown.forEach(dropdown => {
      dropdown.classList.toggle("dropdown-nightmode");
    });

    const dropdownContents = document.querySelectorAll(".dropdown-content");
    dropdownContents.forEach(content => {
      content.classList.toggle("dropdown-content-nightmode");
    });

    const elements = document.querySelectorAll(".element");
    const arrayDisplay = document.querySelector(".array-display");
    arrayDisplay.classList.toggle("array-display-nightmode");
    elements.forEach(element => {
      element.classList.toggle("element-nightmode");
    });
    flag = !flag;
    !flag ? localStorage.setItem("flag", "true") : localStorage.removeItem("flag");
}

function enableStopButton() {}

function disableStopButton() {}
