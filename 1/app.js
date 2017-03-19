// Typy opakowujące (primitive wrapper types)

// String, Number, Boolean
//mozna sie nimi poslugiwac jak obiektami (zamieniamy typ prosty na typ referencyjny w tle)

var name = "Hania";
var firstCharacter = name.charAt(0);
console.log(firstCharacter);


//to co sie dzieje w tle
var name1 = "Marcin";
var temporary = new String(name1);
var firstCharacter1 = temporary.charAt(0);
temporary = null;
console.log(firstCharacter1);

var name = "Grzesiek";
name.last = "Kowalski";
console.log(name.last); //undefined


//to co sie dzieje w tle
var name2 = "Zosia";
var temp = new String(name2);
temp.last = "Kowalska";
temp = null;
var temp = new String(name2);
console.log(temp.last); //undefined
temp = null;

//

var name3 = "Genowefa";
var count = 10;
var found = false;
console.log(name3 instanceof String); //false
console.log(count instanceof Number); //false
console.log(found instanceof Boolean); //false

//instanceof sprwdza czy jest instancja obiektu!!! dlatego false bo to string obiekt!


var name4 = new String('Genowefa');
var count2 = new Number(10);
var found1 = new Boolean(false);
console.log(typeof name4); //object
console.log(typeof count2);
console.log(typeof found1);

//

var founded = new Boolean(false);
if(founded) {
  console.log("I found a variable");
} else {
  console.log("I haven't found a variable");
} //sprawdzamy czy founded w ogole istnieje i dlatego wyswietla pierwsza opcje
