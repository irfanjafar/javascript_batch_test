//indexOf
const data = new Array(1,2,3,4,5)
const indexOf = data.indexOf(3)
console.log(indexOf)

//lastIndex
const lastIndex = data.lastIndexOf(5)
console.log(lastIndex)

//includes
const includes1 = data.includes(6)
const includes2 = data.includes(5)
console.log(includes1)
console.log(includes2)

//fill
const fill = data.fill(3)
console.log(fill)

//join
const data1 = new Array(1,2,3,4,5)
const join = data1.join('-')
console.log(join)

//sum
 var sum = data1.reduce(function(a, b){
        return a + b;
    }, 0);
console.log(sum)