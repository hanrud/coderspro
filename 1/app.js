// Konstruktory i prototypy

function Computer() {
    //
}

//new zwraca wartośc
var computer1 = new Computer;
var computer2 = new Computer;

console.log(computer1.constructor === Computer); //true
/////

function Person(name) {
    this.name = name;
    this.sayHello = function() {
        console.log("hello");
    };
}

var person1 = new Person("Piotr");
var person2 = new Person("Pawel");
console.log(person1.name); //Piotr

(function() {
    "use strict";

    function Car(name) {
        Object.defineProperty(this, 'name', { //to jest to samo co this.name na gorze
            get: function() {
                return name;
            },
            set: function(value) {
                name = value;
            }
        });
            this.brrrum = function() {
              console.log("Bruuuuum");
            }

    }

    var car1 = new Car("Szybki");
    car1.brrrum(); //"Bruuuuum"
})();
