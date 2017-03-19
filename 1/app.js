// literały obiektow i tablic
var car = {
  manufacturer: "ford",
  model: "mondeo"
};
 //tak lepiej jak na gorze
var car = {
  'manufacturer origin': "ford", //tak można ale tak nie robic lepiej camelcase
  model: "mondeo"
};

var car2;
car2.manufacturer = "fiat";
car2.model = '500';

//literał tablic

var arr = ['red', 'green', 'blue'];
console.log(arr[1]);
