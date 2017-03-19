// Obiekt this

/* var person = {
  name: "Piotr",
  logName: function() {
    console.log(person.name);
  }
};

person.logName();

var person = {
  name: "Piotr",
  logName: function() {
    console.log(this.name);
  }
};

person.logName(); */

function allSayHello() {
  console.log(this.name);
};

var person1 = {
  name: "piotr",
  sayHello: allSayHello
};
var person2 = {
  name: "karol",
  sayHello: allSayHello
};

var name = "Kinga";

console.log(person1.sayHello); //Piotr
console.log(person2.sayHello); //Kinga
console.log(allSayHello()); //Kinga
