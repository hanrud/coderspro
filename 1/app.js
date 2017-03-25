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


(function() {
    Array.prototype.sumUp = function() { //sumuje wszystkie elementy tablicy
        return this.reduce(function(a, b) {
            return a + b;
        }, 0);
    };
})();

(function() {
    Array.prototype.sumUp1 = function() {
      var total = 0;
      var array = [];
      var array1 = [];
      array1 = this.sort(function(a,b) {
        return a - b;
      });
        array.push(array1[0]);
      for (var i = 1; i < array1.length; i++) {
        if (array1[i-1] != array1[i]){
          array.push(array1[i]);
        }
      };
      for (var j = 0; j < array.length; j++) {
        total += array[j];
      };
      return total;
    };
      var numbers = [1,2,5,5,2,2,3,4] //15
      console.log(numbers.sumUp1());
})();
