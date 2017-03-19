// Modyfikacja this apply()
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

logNameAll.apply(this, ["global"]); //global: Michellle 
logNameAll.apply(person1, ["person1"]); //person1: Piotr
logNameAll.apply(person2, ["person2"] ); // person2: Michel
