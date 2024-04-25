var rxjs = require("rxjs");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterFn(value, index) {
    console.log('filter fn', value, index);
    return value % 2 == 0;
}

let filteredArray = arr.filter(filterFn);
console.log(filteredArray);

function mapFn(value, index) {
    return value + 10;
}

let mappedArray = filteredArray.map(mapFn);
console.log(mappedArray);

function reduceFn(prevValue, currValue) {
    console.log('reduce', prevValue, currValue);
    return prevValue + currValue;
}

let sum = mappedArray.reduce(reduceFn);
console.log(sum);

console.log('---------------');
let sum2 = arr.filter(filterFn)
            .map(mapFn)
            .reduce(reduceFn);
console.log(sum2);