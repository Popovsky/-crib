let array = [...new Array(10)].map(() => Math.round(Math.random() * 10));
console.log(array);
const quickSort = arr => {
  if (arr.length < 2) {
    return arr;
  } else {
    let middle = arr[Math.floor(arr.length / 2)];
    let less = [];
    let equal = [];
    let more = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < middle) {
        less.push(arr[i]);
      }
      if (arr[i] > middle) {
        more.push(arr[i]);
      }
      if (arr[i] === middle) {
        equal.push(arr[i]);
      }
    }
    return [...quickSort(less), ...equal, ...quickSort(more)];
  }
};
console.log(quickSort(array));
