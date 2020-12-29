let array = [...new Array(10)].map(() => Math.round(Math.random() * 10));
console.log(array);
const bubbleSort = arr => {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
};
bubbleSort(array);
console.log(array);