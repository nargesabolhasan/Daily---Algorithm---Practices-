var filter = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i],i)) {
      result.push(arr[i]);
    }
  }
  return result;
};
function greaterThan10(n) {
  return n > 10;
}
function firstIndex(n, i) {
  return i === 0;
}

filter([0, 10, 20, 30], firstIndex);
