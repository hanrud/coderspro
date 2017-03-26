// Wzorzec modulu

var sampleObj = (function() {
    //definiujemy prywatne dane/informacje

    return {
        //upublicznione/udostepnione dane
    }
})();

var person = (function() {
    var age = 25;

    return {
        name: 'Zosia',
        getAge: function() {
            return age;
        },
        growOlder: function() {
            age++;
        }
    }

})();

console.log(person.name); //Zosia
console.log(person.getAge()); // 25

person.age = 50;

console.log(person.getAge()); //25
person.growOlder();
console.log(person.getAge()); //26 
