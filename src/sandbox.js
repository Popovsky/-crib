const carriedSum = (...args) => {
  let result = [].concat(args);
  return function inner(...innerArgs) {
    if (innerArgs.length) {
      result = result.concat(innerArgs);
      return inner;
    }
    return result.reduce((acc, item) => acc + item, 0);
  };
};


console.log(carriedSum(1)(2)(3)(4)(5)(6)());
