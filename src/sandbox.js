const input = document.getElementById('input');
const log = () => {
  console.log(input.value);
}
const debounce = () => {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(log, 500);
  };
};

const onChange = debounce();

input.addEventListener('keyup', onChange);
