//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
/*
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/



str = 'abcdef';

function solution(str){
    let newStr = "";
    if(str.length){
      if(str.length % 2 === 1){
       newStr = str + '_';
       return newStr.match(/.{2}/g)
     }else{
       return str.match(/.{2}/g)
     }
    }else{
      return [];
    }
  }

  console.log(solution(str))