function keys(x) {
  var array = [];
  array = Object.getOwnPropertyNames(x);
  return array;
}

/* for(key in x) {
if (obj.hasOwnProperty(key)) {
arrKeys.push(key)
}
} */ //drugie rozwiazanie


var obj = {
  red: "dghad",
  green: "fksjf",
  blue: "bhjj"
}

console.log(keys(obj))//['red', 'green', 'blue']
