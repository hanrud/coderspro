(function() {
    function accumulator(str) {
        var array = [];
        var newArray = [];
        var newStr = '';
        array = str.split('');
        for (var i = 0; i < array.length; i++) {
            newArray.push(array[i].repeat(i+1));
                    }
        for (var j = 0; j < newArray.length; j++) {
            newArray[j] = newArray[j].charAt(0).toUpperCase() + newArray[j].split(1);
        }
           newStr = newArray.join("-");
        return newStr;
    }
console.log(accumulator("abcd"));
})();

(function() {
    function pin(str) {
        var array = [];
        var newArray = [];
        var total =0;
        array = str.split('');
        for (i = 0; i < array.length; i++) {
            newArray.push(parseInt(array[i]));
        }
        for (var j =0; j < newArray.length; j++) {
            if (typeof newArray[j] == 'number') {
               total +=1;
            }
        }
        if (newArray.length == 4 && total == 4) {
            console.log('to jest pin');
        } else {
            console.log("to nie jest pin");
        }
        return newArray;
    }
console.log(pin("1256"));
console.log(pin("1d2sdd56"));
console.log(pin("1!2223vd2   56"));
})();
