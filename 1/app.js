//

var Person = (function() {
  var age = 23;

  function InnerPerson(name) {
    this.name = name;
  }

  InnerPerson.prototype.getAge = function () {
    return age;
  };

  InnerPerson.prototype.growOlder = function () {
    age++;
  };

  return InnerPerson;
})();

var person1 = new Person('pawel');
var person2 = new Person("gawel");
console.log(person1.name);
console.log(person1.getAge());

console.log(person2.name);
console.log(person2.getAge());

person1.growOlder();
console.log(person1.getAge());
console.log(person2.getAge());
