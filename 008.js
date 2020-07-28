function anagrams(s1, s2){
  return s1.split("").sort().join("") === s2.split("").sort().join("");
}
   
   console.log(anagrams('hello world', 'world hello'))
   console.log(anagrams('hellow world', 'hello there'))
   console.log(anagrams('hellow world', 'hello there!'))