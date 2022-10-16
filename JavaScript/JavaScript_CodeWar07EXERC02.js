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

function divisors(x) {
  var result = [];
  for (var a = 2; a*a <= x; ++a) {
    console.log('------------- FOR COMEÇA ----------------')
    console.log('Começa com o 2 e testa se (A) * (A) é menor que X e se for vai para o IF e depois ++1!');
    console.log('A conta ', a, '(A) * ' ,a ,'(A) =', a*a ,'menor ou igual a X = ', x);
    console.log('------------- FOR TERMINA ----------------')
    if (x%a == 0) {
      console.log('------------- IF 01 COMEÇA ----------------');
      console.log('Aqui começa o teste do resto da divisão x/a');
      var c = x%a;
      var b = x/a;
      console.log('Variavel B = ', '(X)', x, 'dividido / ', 'A', a, 'Resultado B = ', b ,'E o resto é: ', c)
      result.push(a);
      console.log('RESULTADO DO PUSH (A): ',result.push(a));
      console.log('------------- IF 01 TERMINA ----------------');
      if (b != a) {
        console.log('AAAA', a)
        console.log('BBBB', b)
        result.push(b);
        console.log('RESULTADO DO PUSH (B): ',result.push(a));
      }
    }
  }
  if (result.length == 0) {
    return x+' is prime';
  }
  result.sort(function (a, b) {
    return a - b;
  });
  return result;
};

console.log(divisors(12))