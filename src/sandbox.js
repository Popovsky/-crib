String.prototype.toStartCase = function () {
  let newStr = this[0].toUpperCase();
  for (let i = 1; i < this.length; i++) {
    newStr += this[i];
  }
  return newStr;
};

console.log('hello world'.toStartCase());