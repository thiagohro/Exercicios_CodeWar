//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without 
any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
}
*/

//Criação de array pra testa. (você pode alterá-lo)
//Created this array for test. (you can change if you want)
var myArray = ['A','a','b','c','c','d','d','e',1,2,3];
//criação dessa variável já feita pela requisição. (variável mais função anonima com parametro que poderia ser arrow tb) "TIPO ISSO: var uniqueInOrder=((iterable) => {})"
//this variable was created by requisition. (variable and anonymous function was created with parametre that would be a arrow too). "LIKE THIS: var uniqueInOrder=((iterable) => {})"
var uniqueInOrder=function(iterable){
  //criação de novo array que vai receber
  //new array created that will receive the values
  var arr = [];
  //o "for" vai rodar enquanto for menor que o tamanho do vetor usando a função "length"
  //the "for" will run untill it was less than the array size using function "length"
  for(i=0; i < iterable.length; i++){   
    //O teste "IF" se o valor do array na posição [i] que foi passado como parametro for diferente do próximo
    //The test if the value of array on position [i] that was pass with parametrer is diferent than the next one
      if(iterable[i] != iterable[i+1]){  
        //Aqui usamos o método "PUSH" para adciona-lo no novo array
        //Here we use the "PUSH" metod to add on the new array  
          arr.push(iterable[i]);  
      }
  }
//retorno do array novo no final do "FOR"
//return of the array on the final of the "FOR"
return arr;
}  

//Aqui é só para testar a saída
//Here is only for test the print
console.log(uniqueInOrder(myArray))

