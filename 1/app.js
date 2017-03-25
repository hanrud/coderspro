// Atrybuty wspolne

// [[Enumerable]], [[Configuarable]]

// Do zmiany tych wlasciwosci uzywamy metody Object.defineProperty()

(function() {
    'use strict';
    var person = {
        name: 'Ula'
    };
    console.log(person.propertyIsEnumerable("name")); //true
    Object.defineProperty(person, "name", {
        configurable: false
    });

    Object.defineProperty(person, "name", {
        enumerable: false
    });
    console.log(person.propertyIsEnumerable("name"));
    Object.defineProperty(person, "name", {
        configurable: true
    });
})();
