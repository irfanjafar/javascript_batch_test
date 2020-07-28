function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

var average = palindrome("Cigar? Toss it in a can. It is so tragic");
console.log(average);

var average = palindrome("Hello World");
console.log(average);
