// Metody dziedziczone po Object.prototype

// - hasOwnProperty()
// - propertyIsEnumerable()
// - isPrototypeOf()
// - valueOf() - zwraca wartosc
// - toString()

//
//valueOf()
var now = new Date();
var earlier = new Date(2017, 01, 01); //2017-01-01

console.log(now > earlier);

var string = "Hello world";
var response = string.valueOf();
console.log(response); // Hello world

//toString()
var book = {
  title: "Abcd"
};

var message = 'Book ' + book;
console.log(message);//book [object Object]

//

var book = {
  title: "Abcd",
  toString: function() {
    return '[Book with title of ' + this.title + ']'
  }
};

var message = 'Book = ' + book;
console.log(message); //[Book with title of Abcd]
