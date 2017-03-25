(function() {
    function sortStrings(array){
        var newArray = [];
    for (var i=0; i < array.length; i++ ) {
       newArray.push(array[i].replace(/[^A-Z]/gi, "")) ;
    };
     newArray.sort(function(a,b) {
         return a.length - b.length;
     })

       return newArray;
   }

   console.log(sortStrings(['fds223aas', 'fd!/ss', 'fds2df/ff', 'fdasssdf', 'a', 'ah23jcz!!!l']));
})();

//posortowac i usunac wszystkie znaki oprocz liter
