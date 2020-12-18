function renderWhiteKeys() {
  const keyboard = document.querySelector(".keyboard");
  for (let i = 0; i < 7; i++) {
    const key = document.createElement("div");
    key.classList.add("white-key");
    key.innerHTML = `${i}`;
    keyboard.appendChild(key);
  }
}

function renderBlackKeys() {
  const keyboard = document.querySelector(".keyboard");
  for (let i = 0, j = 1; i < 5; i++, j++) {
    if (i == 2) {
      j++;
    }
    const key = document.createElement("div");
    key.classList.add("black-key");
    key.innerHTML = `${j + 0.5}`;
    console.log(j * 45.5);
    key.style.left = `${j * 45.5 + i * 49}px`;
    keyboard.appendChild(key);
  }
}

renderWhiteKeys();
renderBlackKeys();
