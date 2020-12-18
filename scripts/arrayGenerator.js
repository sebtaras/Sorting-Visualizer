function generateArray(count) {
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
  const sorted = [...array].sort((a, b) => {
    return a - b;
  });

  return { array, sorted };
}

const { array, sorted } = generateArray(100);
console.log(array, sorted);
