// Przeciazenia (overloading)

function message(mes) {
    console.log(mes);
};

function message() {
    console.log("Default");
};

message("Hello"); //Default

var message = new Function("message", "console.log(message)");
message = new Function("console.log('Default')");
message("Hello"); //Default


function message(message) {
  if (arguments.length === 0) {
    message = "Default";
  }
    console.log(message);
}
console.log(message("Hello")); //Hello
console.log(message()); //Default
