let a  = 2;

// 넘겨받은 value를 숫자형으로 변환
// 8보다 작은 수,  숫자로 변환될 수 없는 값 -> 0을 return
const makeNumber = function (value) {
  if (value < 0) return 0;

  const newValue = Number(value);
  return isNaN(newValue) ? 0 : newValue;

};

console.log(makeNumber(0)); // 0
console.log(makeNumber(undefined)); // 0 
console.log(makeNumber(null)); // 0
console.log(makeNumber('23')); // 23