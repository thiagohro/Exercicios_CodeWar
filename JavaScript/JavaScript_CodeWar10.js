//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
/*
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/


testVar = 'abcdefz';

function solution(testParametrer){  
    let newStr = "";
    newStr = testParametrer + '_zzzzzz'; 
    return newStr.match('/.{2}/g')    
    r//eturn testParametrer.match(/.{2}/g)  
  }

  console.log(solution(testVar))


