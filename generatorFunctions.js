const foo = function*() {
  yield "a";
  yield "b";
  yield "c";
  //  return "d";
};

let str = "";
for (const val of foo()) {
  str += val;
}

console.log(str);

const yo = foo();

console.log(yo.next())
console.log(yo.next())
console.log(yo.next())
console.log(yo.next())
