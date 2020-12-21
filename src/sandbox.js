Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mapResult = array.forEach((item, i, arr) => console.log(arr[i] * item));
console.log(mapResult);
const myMapResult = array.myForEach((item, i, arr) => console.log(arr[i] * item));
console.log(myMapResult);
