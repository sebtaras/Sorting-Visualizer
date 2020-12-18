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
  parent.dataset.value = child.innerHTML;
  siblings.forEach(sibling => {
    if (sibling.innerHTML != undefined) sibling.classList.remove("nav-selected");
  });
  child.classList.add("nav-selected");
  const { algorithm, speed, size } = getSettings();
  if (algorithm && speed && size) {
    enableArrayGenerator();
  }
}

function enableArrayGenerator() {
  const newArrayButton = document.querySelector(".new-array-button");
  newArrayButton.classList.add("navbar-button");
  newArrayButton.addEventListener("click", () => generateArray());
}

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
