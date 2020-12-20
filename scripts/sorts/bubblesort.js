async function bubblesort(array, timeout) {
  const arrayDisplay = document.querySelector(".array-display");
  enableStopButton();
  for (let i = 0; i < array.length - 1; i++) {
    let swap = false;
    for (let j = 0; j < array.length - 1 - i; j++) {
      let latter = true;
      //turn off highlighting from previous step
      displayArray(array);
      let elements = document.querySelectorAll(".element");

      //highlight elements that are being compared
      elements[j].style.background = selected;
      await sleep(timeout);
      elements[j + 1].style.background = selected;
      await sleep(timeout);

      //compare, swap and highlight the bigger/smaller element
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        elements[j].style.background = larger;
        elements[j + 1].style.background = smaller;
        swap = true;
        latter = false;
      } else {
        elements[j].style.background = smaller;
        elements[j + 1].style.background = larger;
      }
      await sleep(timeout);

      //turn off highlighting from previous step
      displayArray(array);
      elements = document.querySelectorAll(".element");

      //show the element swap if it happened
      if (!latter) {
        elements[j].style.background = smaller;
        elements[j + 1].style.background = larger;
        await sleep(timeout);
      }
    }
    if (!swap) {
      break;
    }
  }
  displayArray(array);
  disableStopButton();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
