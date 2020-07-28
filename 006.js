function fizzBuzz(number){
    for (var i = 1; i<=number; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 2 === 0) {
        console.log("Fizz");
    }
    else if (i % 3 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
 }
}

var result = fizzBuzz(30);
console.log(result);