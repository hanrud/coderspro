//Identyfikowanie typow referencyjnych

function add(a, b) {
  return a + b;
}

console.log(typeof add);

var item = [];
var obj = {};

console.log(item instanceof Array); //true
console.log(item instanceof Object); //true
console.log(obj instanceof Object); //true
console.log(obj instanceof Array); //false
console.log(add instanceof Function);  //true
console.log(add instanceof Object);  //true
console.log(Array.IsArray(item)); //true - nowa metoda
