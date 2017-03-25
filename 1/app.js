// Setter  getter

var person = {
  _name: 'Marcin',
  get name() { //musi zwroci wartosc
    console.log("Hello %s %s", this._name, this._age);
    //console.log(`Helo ${this._name}`); w es6
    return this._name;
  },
  set name(value) { //musi dostac argument
    console.log("Zmiana wartosci %s", value);
    this._name = value;
  }
};

console.log(person.name);
person.name = "Zosia";
console.log(person.name);
