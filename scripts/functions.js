function displayArray(array) {
  const arrayDisplay = document.querySelector(".array-display");
  console.log(arrayDisplay.style.height);
  arrayDisplay.innerHTML = "";
  console.log("meme");

  for (let i = 0; i < array.length; i++) {
    let container = document.createElement("div");
    container.classList.add("container");
    let element = document.createElement("div");
    if (array.length < 50) {
      element.innerHTML = array[i];
    }
    element.classList.add("element");
    container.style.width = `${array[i]}%`;
    container.append(element);
    container.style.height = `${100 / array.length}%`;
    element.style.width = "100%";
    element.style.height = "100%";
    const { red, green, blue } = calculateColor(array[i] / array.length);
    element.style.background = `rgb(${red},${green},${blue})`;
    arrayDisplay.appendChild(container);
  }
}

function calculateColor(t) {
  while (t > 1) {
    t = t / 10;
  }
  const koef = 255;
  // const red = Math.floor(koef * Math.pow(t, 2));
  // const green = Math.floor(koef * 2 * (1 - t));
  // const blue = Math.floor(koef * Math.pow(1 - t, 2));
  const red = Math.floor(koef * t);
  const blue = Math.floor(koef * (1 - t));
  const green = 150;
  console.log(red, green, blue, Math.round(t * 100, 2) / 100);
  return { red, green, blue };
}
