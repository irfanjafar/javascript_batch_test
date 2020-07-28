//Sort Function
const data = new Array(4, 2, 1, 3, 5);
var sort = data.sort();
console.log(sort)

//Reverse Function
const data1 = new Array(4, 2, 1, 3, 5);
var reverse = data1.reverse();
console.log(reverse)

//Splice Function
const data2 = new Array(4, 2, 1, 3, 5);
const insert = (arr, index, newItem) => [
    ...arr.slice(0, index),
    newItem,
    ...arr.slice(index)
  ]
  const splice = insert(data2, 3, 6)
console.log(splice)
