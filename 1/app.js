// Atrybuty wspolne

// [[Value]], [[Writeable]]
// iife
(function() {
    'use strict';

    var person = {
      name: "Konrad"
    };
})();


(function() {
    'use strict';
    var person = {};
    Object.defineProperty(person, 'name', {
      value: "Pawel",
      enumerable: true,
      configuarable: true,
      writable: true
    });
})();
//Object.seal() zapieczętowanie
//extensible i configurable  ustawia na false
(function() {
    'use strict';
    var person = {
      name: "Konrad"
    };
    console.log(Object.isExtensible(person)); //true
    console.log(Object.isSealed(person)); //false

    Object.seal(person);
    console.log(Object.isExtensible(person)); //false
    console.log(Object.isSealed(person)); //true

    person.sayHello = function() {
      console.log(this.name);
    };

    //sprawdzimy istnienie metody
    console.log("sayHello" in person); //false

    person.name = 'abcd';
    console.log(person.name); // "Konrad"
})();
