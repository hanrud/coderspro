// Dziedziczenie konstruktorow

// human
function VeryFriendlyConstructor() {
    //hhjskfj
}

//js
//VeryFriendlyConstructor jest podtypem Object
// Object jet supertypem VeryFriendlyConstructor
VeryFriendlyConstructor.prototype = Object.create(Object.prototype, {
    constructor: {
        value: VeryFriendlyConstructor,
        configurable: true,
        writable: true,
        enumerable: true
    }
});

//
function Rectangle(length, width) {
    console.log("Zostal wywolany Rectangle");
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function() {
    return this.length * this.width;
};

Rectangle.prototype.toString = function() {
    return '[Rectangle ' + this.length + ' ' + this.width + ']';
};

function Square(size) {
    this.length = size;
    this.width = size;
}

//
// Square.prototype = new Rectangle();
// Square.prototype.constructor = Square;

Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    value: Square,
    configurable: true, //mozna nie pisac chyba ze false
    enumerable: true,
    writable: true
  }
});

Square.prototype.toString = function() {
    return '[Square ]' + this.length + ' ' + 'na  ' + this.width + ']';
};

var rect = new Rectangle(5, 10);
var square = new Square(6);

console.log(rect.getArea()); //50
console.log(square.getArea()); //36
console.log(rect.toString()); //'Rectangle... '
console.log(square.toString()); //'Square... '
console.log(rect instanceOf Rectangle); // true
console.log(rect instanceOf Square); // false
console.log(rect instanceOf Object); // true
console.log(square instanceOf Square); // true
console.log(square instanceOf Rectangle); //true
console.log(square instanceOf Object); //true
