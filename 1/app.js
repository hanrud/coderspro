// Obiekty - usuwanie wartosci

var person = {
  name: "Hania"
};

console.log(person.name); //Hania
delete person.name;   
console.log("name" in person); //false
console.log(person.name); //undefind
