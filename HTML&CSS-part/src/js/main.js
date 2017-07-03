'use strict';

console.log("Uniq item is: " + findUniq(['abc', 'acb ', 'ba c', 'test', 'bca', 'cab', 'cba']));
console.log("Test no array - " + findUniq([]));

function findUniq(arr) {
    if (arr.length) {
        var tested = arr,
            uniqItem;
        tested = tested.toString().replace(/\s+/g, '').split(',');
        if (!uniqItem) {
            uniqItem = tested[0];
        }
        uniqItem = tested.sort(function (a, b) {
                return a.length - b.length;
            })
            .filter(function (elem, index, tested) {
                if (elem.length !== tested[1].length) {
                    return true;
                }
            });
        return uniqItem;
    } else {
        return "No items in array!";
    }
}