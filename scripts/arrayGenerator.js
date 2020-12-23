function generateArray() {
  const count = document.querySelector(".selector-size").dataset.value;
  console.log(count);
  console.log("generating");
  let array = [];
  //let insertMax = Math.floor(Math.random() * count);
  for (let i = 0; i < count; i++) {
    let value = Math.random();
    while (value < 0.01) {
      value = Math.random();
    }
    let val = Math.floor(value * 1000) / 10;
    if (val < 3) {
      val = val + 3;
    }
    array[i] = val;
  }
  // displayArray(
  //   array.sort((a, b) => {
  //     return b - a;
  //   })
  // );
  displayArray(array);
}
