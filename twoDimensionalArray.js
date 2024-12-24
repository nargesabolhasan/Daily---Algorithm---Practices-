var grades = [
  [1, 1, 1],
  [1, 1, 1],
  [10, 1, 1],
];

const ave = (array) => {
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      average += array[i][j];
    }
  }

  return average;
};

console.log(ave(grades));

const jaggedArrays = (row, col, init) => {
  let array = [];
  for (let i = 0; i < row; i++) {
    let cols = [];
    for (let j = 0; j < col[i]; j++) {
      cols[j] = init += 1;
    }
    array[i] = cols;
  }
  return array;
};

console.log(jaggedArrays(3, [4, 5, 1], -1));
