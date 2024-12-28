var compose = function (functions) {
  for (let i = functions.length - 1; i >= 0; i--) {
    let result = functions[i](result);
  }
  return function (x) {
    console.log(functions[i]);
    //   result = functions[i](x);
  };
};

var compose = function (functions) {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  }
  return function (x) {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    console.log(result);
    return result;
  };
};

const fn = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
fn(1); // 9
