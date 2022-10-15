//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//Note: The function accepts an integer and returns an integer

//test your number here to square
//teste seu número aqui para ao quadrado
const oNumToSquare = 9119;

//function receive num as parameter
//função recebe num como parametro
function squareDigits(num){

    //var convert num to string on var numberz
    //var converte num em string na var numberz
    let numberz = num.toString();  
    
    //create a new array to get data
    //criação de um novo vetor para pegar dados
    let newNum = [];

    //split the string and map with lambda function
    //dividi a string e mapea com a função lambda
    numberz.split('').map(n => {
        //insert the square 
        //insere o ao quadrado
        newNum.push(n**2);
    }) 
    //return converted final valor on integer with parseint
    //retorna o valor final convertido em inteiro with parseint
    return parseInt(newNum.join(''));   
  }

  console.log(squareDigits(oNumToSquare));