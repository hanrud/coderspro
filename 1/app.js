// Funkcje jako wartośc

function sayHello() {
  console.log("Hi");
}

sayHello();
var sayHello2 = sayHello;

var numbers = [1,45,2,4,45,6,78];
var foo = numbers.sort(function(a, b) {
  return a - b;
});

console.log(foo);
