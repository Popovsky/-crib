let array = [...new Array(10)].map(() => Math.round(Math.random() * 10));
console.log(array);
const randomQuickSort = arr => {
  if (arr.length < 2) {
    return arr;
  } else {
    let middle = arr[Math.floor(Math.random() * arr.length)];
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
    return [...randomQuickSort(less), ...equal, ...randomQuickSort(more)];
  }
};
console.log(randomQuickSort(array));
