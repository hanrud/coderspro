// Atrybuty wspolne

// Object.freeze() Zamrazanie obiektu nadpisuje seal
// nie mozna ani dodawac ani usuwac wlasciwosci ani zmieniac
(function() {
    'use strict';

    var person = {
      name: "Konrad"
    };

    console.log(Object.isExtensible(person));  //true
    console.log(Object.isFrozen(person));  //false

    Object.freeze(person);
    console.log(Object.isFrozen(person)); //true

    person.sayGoodbye = function() {
      console.log("Say Goodbye ", this.name);
    }
    console.log('sayGoodbye' in person); //false

    person.name = "Piotr";
    console.log(person.name); //Konrad

    delete person.name;
    console.log("name" in person); //true
})();
