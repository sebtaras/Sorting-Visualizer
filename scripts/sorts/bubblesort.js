async function bubblesort(array, timeout) {
  const arrayDisplay = document.querySelector(".array-display");
  for (let i = 0; i < array.length - 1; i++) {
    let swap = false;
    for (let j = 0; j < array.length - 1 - i; j++) {
      let latter = true;
      displayArray(array);
      let elements = document.querySelectorAll(".element");
      //highlight selected
      let color1 = elements[j].style.background;
      let color2 = elements[j + 1].style.background;
      elements[j].style.background = "black";
      await sleep(timeout);
      elements[j + 1].style.background = "black";
      await sleep(timeout);
      //highlight smaller and bigger
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        elements[j].style.background = "blue";
        elements[j + 1].style.background = "yellow";
        swap = true;
        latter = false;
      } else {
        elements[j].style.background = "yellow";
        elements[j + 1].style.background = "blue";
      }
      await sleep(timeout);
      //rerender with swap
      displayArray(array);
      elements = document.querySelectorAll(".element");
      if (!latter) {
        elements[j].style.background = "yellow";
        elements[j + 1].style.background = "blue";
        await sleep(timeout);
      }
    }
    if (!swap) {
      break;
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
