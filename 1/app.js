// Przywlaszczanie konstruktorow

function Rectangle(length, width)  {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

Rectangle.prototype.toString = function() {
  return 'Rectangle ' + this.length + ' x ' + this.width;
};

function Square(size) {
  Rectangle.call(this, size, size);
}

Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    value: Square
  }
});

Square.prototype.toString = function() {
  return 'Square '+ this.length + ' x ' + this.width;
};

var square = new Square(6);
console.log(square.length);
console.log(square.width);
console.log(square.getArea());
console.log(square.toString());
