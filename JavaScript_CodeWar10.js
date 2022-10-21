//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
/*
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/


//You can test here with your on data
//Vc pode testar aqui com seus próprios dados
str = 'abcdef';

//The function solution created to recive the parametrer from str
//Função solução criada para receber cada parametro vindo de str
function solution(str){
  
    //Variavel criada para receber novos dados quando o resultado é diferente nos testes 
    //Variable created to recive new data when the result is different on test
    let newStr = "";
    //verificação de tamanho do parametro
    //check the parametrer lenth
    if(str.length){
        //testa se o tamanho do parametro resto da divisão é igual a 1
        //test if parametrer length rest of division by 2 is equal 1
        if(str.length % 2 === 1){
          
          newStr = str + '_';
          return newStr.match(/.{2}/g)
        }
        else{
          return str.match(/.{2}/g)
        }
    }
    else{
      return [];
    }
  }

  console.log(solution(str))