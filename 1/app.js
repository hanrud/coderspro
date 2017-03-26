//Dziedziczenie - (prototype chaining)

var book = {
    title: "ABcd"
};

var prototype = Object.getPrototypeOf(book);

console.log(prototype == Object.prototype); //true
