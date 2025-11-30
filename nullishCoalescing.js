// nullish coalescing operator
const a = null ?? "Default String";
console.log(a);

const b = { duration: 50 };
b.speed ??= 25;
console.log(b.speed);
// expected: 25

b.duration ??= 10;
console.log(b.duration);
// expected: 50
