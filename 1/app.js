// Usuwanie wlasciwosci z obiektu

var animal = {
  gender: 'female'
};

console.log(animal.gender); //'female'

//delete

delete animal.gender;
console.log(animal.gender); // undefined

//drugi sposob to przypisanie wartosci null

animal.gender = "female";
console.log(animal.gender); //female
animal.gender = null;

//nie usuwa wlasciwosci tylko wlasciwoscma wartosc null i mozna ja wykryc przez uzycie hasOwnProperty
console.log(animal.gender);
