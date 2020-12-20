async function insertionsort(array, timeout) {
  const larger = "#96f274";
  const smaller = "#f2294b";
  const selected = "#f2f074";
  enableStopButton();
  for (let i = 0; i < array.length - 1; i++) {
    j = i + 1;

    //highlight  the elements about to be compared
    let elements = document.querySelectorAll(".element");
    elements[j].style.background = selected;
    await sleep(timeout);
    elements[j - 1].style.background = selected;
    await sleep(timeout);
    let first = true;
    let displayLast = false;

    //compare, swap and highlight the bigger/smaller element
    while (array[j] < array[j - 1] && j > 0) {
      displayArray(array);
      elements = document.querySelectorAll(".element");
      if (!first) {
        elements[j].style.background = selected;
        await sleep(timeout);
        elements[j - 1].style.background = selected;
        await sleep(timeout);
      } else {
        first = false;
      }
      temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      elements[j].style.background = smaller;
      elements[j - 1].style.background = larger;
      await sleep(timeout);
      displayArray(array);
      elements = document.querySelectorAll(".element");
      elements[j].style.background = larger;
      elements[j - 1].style.background = smaller;
      await sleep(timeout);
      j--;
      if (array[j] < array[j - 1] && j > 0) {
        displayLast = true;
      }
    }
    displayArray(array);
    elements = document.querySelectorAll(".element");
    if (displayLast && elements[j - 1]) {
      elements[j].style.background = selected;
      await sleep(timeout);
      elements[j - 1].style.background = selected;
      await sleep(timeout);
      elements[j].style.background = larger;
      elements[j - 1].style.background = smaller;
      await sleep(timeout);
    }
    if (j + 1 < array.length && first) {
      elements[j].style.background = larger;
      elements[j - 1].style.background = smaller;
      await sleep(timeout);
    }
    displayArray(array);
  }
}
