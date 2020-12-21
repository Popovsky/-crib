Array.prototype.myReduce = function (callback, initialValue = 0) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator += this[i];
    callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 56, 6];
const reduceResult = array.reduce((acc, item) => acc + item, 0);
console.log(reduceResult);
const myReduceResult = array.myReduce((acc, item) => acc + item, 0);
console.log(myReduceResult);
