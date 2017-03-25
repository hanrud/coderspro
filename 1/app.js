


(function() {
  function Person(name) { //name to parametr, atrybut to wartosc
    this.name = name;
  }

  var person1 = new Person("Zosia");
  var person2 = new Person("Tosia");

  Object.freeze(person1);

  Person.prototype.sayHi = function() {
    console.log("Hi");
  };
  person1.sayHi(); //Hi
  person2.sayHi(); //Hi
})();
