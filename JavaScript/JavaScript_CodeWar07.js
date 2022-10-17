//https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript
/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with 
all of the integer's divisors(except for 1 and the number itself), from smallest to largest. 
If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a 
  in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
*/

function divisors(integer) {
  //criação do array para pegar os dados
  //create array to get data
  var res = []
  //
  //for (let i = 2; i <= Math.floor(integer / 2); ++i){
  for (let i = 2; i <= Math.floor(integer / 2); ++i){
  //Se integer resto da divisão por I for 0 entao
  //If Integer rest of division by i is 0 then
  if (integer % i == 0){ 
  //Então o método push adciona ao nosso vetor res o valor de I
  //Then the push métod add to our array res the value of I
  res.push(i);
  }
  }
  //Aqui imprime se o valor for primo que cai na else condition
  //Here shows the prime value that dropped on else condition
  return res.length ? res : integer + ' is prime'
};

console.log(divisors(20));