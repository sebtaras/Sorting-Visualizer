async function selectionsort(array, timeout) {
  const arrayDisplay = document.querySelector(".array-display");
  enableStopButton();

  for (let i = 0; i < array.length - 1; i++) {
    displayArray(array);
    let elements = document.querySelectorAll(".element");
    min = array[i];
    minIndex = i;

    //go through the other ones
    for (let j = i + 1; j < array.length; j++) {
      let elements = document.querySelectorAll(".element");

      //select the current minimum
      elements[minIndex].style.background = selected;
      await sleep(timeout);

      //save old color of compared element
      let color = elements[j].style.background;
      elements[j].style.background = selected;
      await sleep(timeout);

      //if new is smaller -> becomes min
      //color current as larger, new as smaller
      //otherwise
      //color current as smaller, new as larger
      if (array[j] < min) {
        elements[minIndex].style.background = larger;
        elements[j].style.background = smaller;
        min = array[j];
        minIndex = j;
      } else {
        elements[minIndex].style.background = smaller;
        elements[j].style.background = larger;
      }
      await sleep(timeout);
      displayArray(array);
      elements[j].style.backgrund = color;
    }

    //display swap if it happened
    if (i != minIndex) {
      displayArray(array);
      elements = document.querySelectorAll(".element");
      elements[minIndex].style.background = selected;
      elements[i].style.background = selected;
      await sleep(timeout);
      elements[minIndex].style.background = smaller;
      elements[i].style.background = larger;
      await sleep(timeout);
      array[minIndex] = array[i];
      array[i] = min;
      displayArray(array);
      elements = document.querySelectorAll(".element");
      elements[minIndex].style.background = larger;
      elements[i].style.background = smaller;
      await sleep(timeout);
    }
  }
  displayArray(array);
}
