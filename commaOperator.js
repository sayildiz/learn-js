// comma runs from left to right
// and returns the right most valueOf()

const a = (5, 1 + 2);
console.log(a)
// expected 3

let x = 1;
x = (x++, x);
console.log(x)
// expected 2


let sum = 0;

const squares = [1, 2, 3, 4, 5].map((x) => ((sum += x), x * x));
console.log(squares);
console.log(sum);

