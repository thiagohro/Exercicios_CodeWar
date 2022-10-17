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
  var i=0, arr = [];
  if(integer % 2 === 0 || integer % 3 === 0){
    for(n=2; n<Math.ceil(Math.sqrt(integer)); n++) {
    console.log('o primeiro valor de N: ',n);
    console.log('o primeiro valor de Integer: ', Math.ceil(integer))
    console.log('o primeiro valor de MathSqrt: ', Math.sqrt(integer))
    console.log('o primeiro valor de MathCeil(MathSqrt): ', Math.ceil(Math.sqrt(integer)))
      if(integer%n==0){
        console.log('IF (Integer = ', integer, 'resto da divisao %', 'N = ', n, 'Igual a == 0', 'Resultaddo disso = ', integer%n)
        console.log('Arr splice = ', i, 0, n);
        arr.splice(i,0,n);          
          if(integer/n!=Math.sqrt(integer)) arr.splice(i+1,0,integer/n);
          console.log('No Segundo (IF) (SE) (Integer)', '(', integer, ')', '(dividido) (/) ', '(N)', '(', n, ')')
          console.log('For (diferente) de (!=) de (MathSqrt(Integer)',  Math.sqrt(integer))
          console.log('O array splice vai receber: ', 'sendo (i+1)','(', i+1, ')' ,'(Integer)', '(', integer, ')', '/', '(N)', '(', n, ')' );
          i++;
      }
  }
  
  return (arr.length!=0)? arr : integer + " is prime";
}
console.log('PRIMO')
};

console.log(divisors(133));