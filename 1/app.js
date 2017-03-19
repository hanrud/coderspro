// Obiekty - wykrywanie własciwosci

//NIE!
/*var person = {
  number: 0
};

if (person.number) {
  console.log("true");
} else {
  console.log("false");
} //falses*/

// var person1 = {
//   name: "Hania",
//   age: 22
// };
//
// var person2 = {
//   name: "Lukasz",
//   age: 25
// };
//
// console.log('name' in person1); // true
// console.log('age' in person2); //true
// console.log('height' in person2); //falses


var person1 = {
  name: "Hania",
  logName: function() {
    console.log(this.name);
  }
};

console.log('name' in person1); //true
console.log(person1.hasOwnProperty("name")); //true
console.log('toString' in person1); //true jezeli nie znajdzie w obiekcie to szuka w rodzicu dlatego true
console.log(person1.hasOwnProperty("toString")); //false sprawdza czy dana instancja posiada ta metode
