// Modyfikacja this call() 
function logNameAll(arg) {
    console.log(arg + ": " + this.name);

}
var person1 = {
    name: "piotr"
};

var person2 = {
    name: "Michel"
};

var name = "Michelle";

logNameAll.call(this, "global"); //global: Michellle odnosimy sie do obiektu funkcji i wywolujemy metode call ktora ma zawsze 2 parametry, dany kontekst i drugi-przekazujemy dane odwolanie
logNameAll.call(person1, "person1"); //person1: Piotr
logNameAll.call(person2, "person2"); // person2: Michel
