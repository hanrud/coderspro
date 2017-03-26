// Singleton

var Singleton = (function() {
    console.count();

    var instance;

    function createInstance() {
      var obj = new Object('Zostalem stworzony');
      return obj;
    }

    return {
      getInstance: function() {
        if (!instance) {
          console.log("Zwracam instancje");
          createInstance();
        }
        return instance;
      }
    }

})();

function init() {
  var instance1 = Singleton.getInstance(); //kazda instancja tutaj to to samo
  var instance2 = Singleton.getInstance();

  console.log(instance1 === instance2); //true
}

init();
