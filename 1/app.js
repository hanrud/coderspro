//Parametry funkcji

function show(value) {
  return value;
}

//Array.isArray(argument)  - false

console.log(show("Hi")); //Hi
console.log(show("Hi", 34)); //Hi
console.log(show.length); //1 - funkcja oczekuje 1 parametru - arnośc funkcji

show = function() {
  return arguments[0];
}

console.log(show("Hello")); // Hello
console.log(show("Hello", 45)); //hello
console.log(show.length); //0

function sum() {
  var result = 0;
  var len = arguments.length;
  var i = 0;

  while ( i < len) {
    result += arguments[i];
    i++;
  }
  return result;
}

console.log(sum(1,5)); //6
console.log(sum(4,5,7)); //16
console.log(sum(3)); //3
console.log(sum()); //0
