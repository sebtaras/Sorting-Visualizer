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
    element.style.background = `teal`;
    arrayDisplay.appendChild(container);
  }
  if (document.querySelector(".sort-button").dataset.enabled != "true") enableSortButton();
}

function calculateColor(value, length) {
  let t = value / length;
  while (t > 1) {
    t = t / 10;
  }
  const koef = 255;
  // const red = Math.floor(koef * Math.pow(t, 2));
  // const green = Math.floor(koef * 2 * (1 - t));
  // const blue = Math.floor(koef * Math.pow(1 - t, 2));
  const green = Math.floor(koef * t);
  const red = Math.floor(koef * (1 - t));
  const blue = 0;
  return { red, green, blue };
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function enableStopButton() {}

function disableStopButton() {}
