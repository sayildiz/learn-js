const car = { make: "Honda", model: "Accord", year: "1998" };

console.log("make" in car)

delete car.make;

console.log("make" in car)


if ("make" in car === false) {
  car.make = "Suzuki"
}

console.log(car)
console.log(car.make)

