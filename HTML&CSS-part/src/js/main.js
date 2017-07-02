'use strict';
/*JS part
Допустим есть массив строк. Все строки содержар одинаковые символы, кроме одной строки.
Надо написать функцию, которая будет принимать этот массив и находить это слово.
Строки могут содержать пробелы, их нужно игнорировать, только non-spaces символы имеют значение. Гарантировано, что массив будет содержать больше 3 строк
Примр:
findUniq([ 'abc', 'acb', 'bac', 'test', 'bca', 'cab', 'cba' ]) === 'test'
*/

findUniq(['abc', 'acb', 'bac', 'test', 'bca', 'cab', 'cba']);
findUniq([]);

function findUniq(arr) {
    var uniqItem;
    if (!uniqItem) {
        uniqItem = arr[0];
    }
    if (arr.length) {

        arr.sort((a, b) => {
                return a.length - b.length;
            })
            .filter((elem) => {});
        console.log(arr);


    } else {
        console.log("no items in array!");
    }
    console.log(uniqItem);
    return uniqItem;
}