// Modyfikowanie prototypow

Object.prototype.add = function(val) {
    return this + val;
};

var book = {
    title: "Abcd"
};

console.log(book.add(9)); //[object Object]9
console.log('tytul '.add(' ksiazki')); //tytul ksiazki
console.log(document.add(true)); //[object HTMLDocument]true

// zabezpieceie
var empty = {};
for (var property in empty) {
    if (empty.hasOwnPropeerty(property)) {
        console.log(property);
    }
}
