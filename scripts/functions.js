function displayArray(array, speed) {
  const arrayDisplay = document.querySelector(".array-display");
  arrayDisplay.dataset.array = JSON.stringify(array);
  arrayDisplay.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let container = document.createElement("div");
    container.classList.add("container");
    let element = document.createElement("div");
    element.classList.add("element");

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

function toggleTheme(button) {
  if (button.dataset.value == "day") {
    button.data.value == "night";
    //set night theme
  } else {
    //set day theme
  }
}

function enableStopButton() {}

function disableStopButton() {}
