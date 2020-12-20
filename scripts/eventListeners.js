function getSettings() {
  const selectorAlgorithm = document.querySelector(".selector-algorithm");
  const selectorSpeed = document.querySelector(".selector-speed");
  const selectorSize = document.querySelector(".selector-size");
  return {
    algorithm: selectorAlgorithm.dataset.value,
    speed: selectorSpeed.dataset.value,
    size: selectorSize.dataset.value,
  };
}

function setSettings(child, parent, siblings) {
  parent.dataset.value = child.innerHTML.split(" ").join("-");
  siblings.forEach(sibling => {
    if (sibling.innerHTML != undefined) sibling.classList.remove("nav-selected");
  });
  child.classList.add("nav-selected");
  const { algorithm, speed, size } = getSettings();
  if (algorithm && speed && size) {
    enableArrayGenerator();
  }
}

function getArray() {
  const array = JSON.parse(document.querySelector(".array-display").dataset.array);
  return array;
}

function enableArrayGenerator() {
  const newArrayButton = document.querySelector(".new-array-button");
  newArrayButton.classList.add("navbar-button");
  newArrayButton.addEventListener("click", () => generateArray());
}

function enableSortButton() {
  const sortButton = document.querySelector(".sort-button");
  sortButton.classList.add("navbar-button");
  sortButton.dataset.enabled = "true";
  sortButton.addEventListener("click", () => sortListener());
}

function sortListener() {
  const { algorithm, speed } = getSettings();
  let timeout;
  switch (speed) {
    case "Debug":
      timeout = 1000;
      break;
    case "Slow":
      timeout = 400;
      break;
    case "Medium":
      timeout = 100;
      break;
    case "Fast":
      timeout = 20;
      break;
    case "Very-quick-one":
      timeout = 1;
      break;
  }
  console.log(algorithm);
  switch (algorithm) {
    case "Selection-sort":
      selectionsort(getArray(), timeout);
      break;
    case "Bubble-sort":
      bubblesort(getArray(), timeout);
      break;
    case "Insertion-sort":
      insertionsort(getArray(), timeout);
      break;
    case "Merge-sort":
      //insertionsort(getArray(), timeout);
      break;
    case "Quick-sort":
      //insertionsort(getArray(), timeout);
      break;
  }
}
