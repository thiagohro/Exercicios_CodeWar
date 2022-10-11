//Given an array of integers, find the one that appears an odd number of times.

//There will always be only one integer that appears an odd number of times.

//Examples
//[7] should return 7, because it occurs 1 time (which is odd).
//[0] should return 0, because it occurs 1 time (which is odd).
//[1,1,2] should return 2, because it occurs 1 time (which is odd).
//[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
//[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//Vetor(1) para testar a função
//Arrays(1) for test function
const test1 = [0,1,0,1,0];

//Vetor(2) para testar a função
//Arrays(2) for test function
const test2 = [1,2,2,3,3,3,4,3,3,3,2,2,1];

const pessoa = ['nome', 'sobrenome', 'idade'];

function findOdd(x) {
    let count = 0;
    let arr = x.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          count++;
        }
      }
      if (count % 2 !== 0) {
        return arr[i];
      }
    }
  }

//Saida usando o log e a função criada com o primeiro vetor(1) como parametro
//Output using log and function created with first vector(1) as parameter
 console.log(findOdd(test1))

 //Saida usando o log e a função criada com o primeiro vetor(2) como parametro
//Output using log and function created with first vector(2) as parameter
 console.log(findOdd(test2))