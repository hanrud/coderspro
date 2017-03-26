// Dziedziczenie obiektow

var book = {
  title: "Abcd"
};

var book1 = Object.create(Object.prototype, {
  title: {
    value: 'Some another title',
    enumerable: true,
    configurable: true,
    writable: true
  }
});

console.log(book);
console.log(book1);

//
var person1 = {
  name:  'Zuzia',
  sayHello: function() {
    console.log(this.name);
  }
};

var person2 = Object.create(person1, {
  name: {
    value: 'Ola',
    enumerable: true,
    configurable: true,
    writable: true
  }
});

person1.sayHello(); //'Zuzia'
person2.sayHello(); // "Ola"

console.log(person1.hasOwnProperty("sayHello")); //true
console.log(person1.isPrototypeOf(person2)); //true
console.log(person2.hasOwnProperty("sayHello")); //false
console.log(person2.isPrototypeOf(person2)); //false

//
// unikanie kolizji nazw - konstruktor 'null'
var emptyObject = Object.create(null);
console.log('toString' in emptyObject); //false
console.log('valueOf' in emptyObject); //false
