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
          //Se sim então o newStr recebe os dados de str adcionando _
          //if is it yes then newStr receive the data str ad _
          newStr = str + '_';
          //O retorno da newStr com o metodo match setando o .2 em casas que separa de 2 em 2
          //The return of newStr with match method setting o .2 that show datas 2 by 2
          return newStr.match(/.{2}/g)
        }
        else{
           //Senão... Retorna o metodo match setando o .2 em casas que separa de 2 em 2
          //Else... Return the match method setting o .2 that show datas 2 by 2
          return str.match(/.{2}/g)
        }
    }
    else{
      return [];
    }
  }


  //Aqui é para mostrar o test no console.log
  //Here is for show the test on console.log
  console.log(solution(str))