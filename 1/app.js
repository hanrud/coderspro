// Wykrywanie wlasciwosci

if (person.age) {
  //
}

var car = {
  manufacturer: "Ford"
};

console.log('manufacturer' in car); //true

//Warunek if zwroci false gdy będzie rowne null, undefined, 0, false, NaN, ''

var car = {
    manufacturer: "Ford"
}

console.log(car.hasOwnProperty("manufacturer")); //true
console.log("toString" in car); //true
console.log(car.hasOwnProperty("toString")); // false
