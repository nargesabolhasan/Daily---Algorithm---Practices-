var reduce = function (nums, fn, init) {
  let accum = init;
  for (let i = 0; i < nums.length; i++) {
    accum = fn(accum, nums[i]);
  }
  console.log(accum);

  return accum;
};

function sum(accum, curr) {
  return accum + curr;
}
let nums = [1, 2, 3, 4];
reduce(nums, sum, 0);
