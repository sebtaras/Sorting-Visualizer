async function bubblesort(array) {
  const arrayDisplay = document.querySelector(".array-display");
  const elements = document.querySelectorAll(".element");
  alert(elements.length);
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      //highlight selected
      let color1 = elements[i].style.background;
      let color2 = elements[j].style.background;
      elements[i].style.background = "black";
      elements[j].style.background = "black";
      await sleep(20);
      //highlight smaller and bigger
      //rerender with swap
      elements[i].style.background = color1;
      elements[j].style.background = color2;
      console.log(color1);
      await sleep(20);
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
