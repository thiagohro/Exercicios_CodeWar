/*
https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

var testSentence = 'Hey fellow nice warriors';

function spinWords(string){
  
  //Aqui trasformamos a string em array
  const sentenceSplitedWords = string.split(' ');
  console.log('Transformou a string em array: ', sentenceSplitedWords);

  //Nosso "for" vai percorrrer o nosso agora Array com o metodo length que vai 'dividir' nossas 
  //...palavras da string
  for(i=0; i < sentenceSplitedWords.length; i++){
    //Agora criamos uma variavel chamada de sentenceSplitedLetter para armazenar cada palavra que 
    //...foi dividida
    sentenceSplitedLetter = sentenceSplitedWords[i].split('');
    //Teste se a palavra é maior ou = a 5
    if(sentenceSplitedLetter.length >= 5){
      //Se sim a nossa variável sentenceSplitedWords[i] (na posição I 'index') recebe sentenceSplitedLetter
      //...basicamente o metodo reverse que vira de traz pras frente e o método join que faz ele virar String 
      sentenceSplitedWords[i] = sentenceSplitedLetter.reverse().join('');
      //Console.log de teste    
      console.log('NO IF: ', sentenceSplitedWords[i]);
      }
    else{
      //Senão nossa variável sentenceSplitedWords[i] (na posição I 'index') recebe sentenceSplitedLetter
      //...basicamente o método join que faz ele virar String
      sentenceSplitedWords[i] = sentenceSplitedLetter.join('')
      //Console.log de teste  
      console.log('NO ELSE: ', sentenceSplitedWords[i]);
      }
      //Nossa variavel vai receber o sentenceSplitedWords com as alterações do if e else e vai converter
      //...em string com o join
      result = sentenceSplitedWords.join(' ');
  }
  //retorna a variavel resultado
  return result;
}  
console.log('Console log do final: ', spinWords(testSentence));
  

 

