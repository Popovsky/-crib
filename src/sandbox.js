Array.prototype.myFlat = function (depth = 1) {
  const newArray = [];

  function spread(arr) {
    depth--;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth) {
        spread(arr[i]);
      } else {
        arr[i] !== undefined && newArray.push(arr[i]);
      }
    }
    depth++;
  }

  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && depth) {
      spread(this[i]);
    } else {
      this[i] !== undefined && newArray.push(this[i]);
    }
  }
  return newArray;
};

const array = [1, , '', , [2, [3, [3]]], [4, [5, 6]], 7];
const flatResult = array.flat();
console.log(flatResult);
const myFlatResult = array.myFlat();
console.log(myFlatResult);
