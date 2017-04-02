// Przy podanej liście numerów, zwrócić nową listę, która zawiera każdy numer z pierwszej przy założeniu
// że występuje maksymalnie n-razy:
function naszaFunkcja(array, num) {
    var newArray = [];
    var count = [];

    function searchCount() {
        for (var x = 0; x < count.length; x++) {
            if (count[x][0] === array[i]) {
                if (count[x][1] < num) {
                    newArray.push(array[i]);
                    count[x][1] += 1;
                }
            }
        }
        return x;
    }

    for (var i = 0; i < array.length; i++) {
        if (array[i] != null) {
            if (newArray.indexOf(array[i]) === -1) {
                newArray.push(array[i]);
                count.push([array[i], 1]);
            } else if (newArray.indexOf(array[i]) > -1) {
                var x = searchCount();
            }
        }
    }

    return newArray;

}
console.log(naszaFunkcja([2, 6, 7, 2, 7, 2, , 9, 2], 2)); // [2, 6, 7, 2, 7, 9]
console.log(naszaFunkcja([2, 6, 7, 2, 7, 2, , 9, 2], 1)); // [2, 6, 7, 9]
console.log(naszaFunkcja([2, 6, 7, 2, 7, 2, , 9, 2], 3)); // [2, 6, 7, 2, 7, 2, 9]
console.log(naszaFunkcja([1, 1, 1, 1], 3)); // [1,1,1]
console.log(naszaFunkcja([1, 1, 1, 1], 2)); // [1,1]
console.log(naszaFunkcja([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3], 2)); // [1, 1, 2, 2]