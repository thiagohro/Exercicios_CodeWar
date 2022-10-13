/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digitalRoot(n){
    //start result variable as int 0
    //começa a variavel result com inteiro 0
    let result = 0;
    //converte para string o 'n' e utiliza o MAP para mapear cada digito
    //convert to string the 'n' and use the MAP for map each digit
    String(n).split('').map(num => {
    //aqui pegamos todos os numeros e acumulamos na variável resultado 
    //here we got every NUMBER in num and do acumulate with result variable
      result += Number(num);
    });
    //finalmente verificamos se é maior que 10 se for ele volta para função de novo até chegar no minimo dele e retornar o valor que precisamos
    //finally we check if this number is less than 10 we back with this number to the function until he gives our value
    return result > 10 ? digitalRoot(result) : result;
  }