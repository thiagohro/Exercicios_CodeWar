//In this kata you will create a function that takes a list of non-negative integers and strings and 
//returns a new list with the strings filtered out.

//Example
//filter_listA([1,2,'a','b']) == [1,2]
//filter_listB([1,'a','b',0,15]) == [1,0,15]
//filter_listC([1,2,'aasf','1','123',123]) == [1,2,123]

//Essa constante eu criei somente para testar a função. Você pode alterar ela da maneira que vocë quizer para testar
//This const was just created for test the function. You can change if you want for your own test
const testL = [1,2,3,'a','b'];

//Essa função usa o operador typeof do JS para capturar oque é diferente de string(letras e palavras) e armazena no filter e o (l) será o parametro que vamos pegar lá na frente
//This function use the typeof operator to check if we have something different of string and put on filter and (l) is our parameter
function filter_list(l) {
return l.filter( str => typeof str != 'string');
}

//aqui chamamos a função e passamos nossa const no lugar o (l) que é nosso parametro
//here we call the function and use the const in the place of (l) that was our paramter
console.log(filter_list(testL));