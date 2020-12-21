Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mapResult = array.map((item, i, arr) => arr[i] * item);
console.log(mapResult);
const myMapResult = array.myMap((item, i, arr) => arr[i] * item);
console.log(myMapResult);
