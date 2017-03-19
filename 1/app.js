Date.prototype.nextDay = function() {
  var today = new Date();
  today.setDate(today.getDate() + 1);

  return today;
}

console.log(Date.prototype.nextDay());
