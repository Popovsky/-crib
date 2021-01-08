const input = {
  ' ': [5],
  d: [10],
  e: [1],
  H: [0],
  l: [2, 3, 9],
  o: [4, 7],
  r: [8],
  w: [6],
};

const buildString = obj => {
  let result = [];
  for (let i = 0; i < 11; i++) {
    let temp = Object.keys(obj).find(key => obj[key].find(el => el === i) === i);
    result.push(temp);
  }
  return result.join('');
};

console.log(buildString(input));
