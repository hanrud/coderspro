//Wyliczenia

var obj = {
  string: "abc",
};

for (var property in obj) {
  console.log(property); //nazwa wlasciwosci
  console.log(obj[property]); //wartosc wlasciwosci

};


//_proto_ nie bedzie wylistowane poniewaz [[Enumerable]] jest ustawione na false
console.log(Object.keys(obj));

console.log(property.propertyIsEnumerable("_proto_"));
