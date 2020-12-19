function generateArray() {
  const count = document.querySelector(".selector-size").dataset.value;
  console.log(count);
  console.log("generating");
  let array = [];
  let insertMax = Math.floor(Math.random() * count);
  for (let i = 0; i < count; i++) {
    if (i == insertMax) {
      array[i] = 100;
    } else {
      let value = Math.random();
      while (value < 0.01) {
        value = Math.random();
      }
      array[i] = Math.floor(value * 1000) / 10;
    }
  }
  displayArray(
    array.sort((a, b) => {
      return b - a;
    })
  );
}
