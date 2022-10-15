//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
/*
A square of squares
You like building blocks. You especially like building blocks that are squares. 
And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! 
Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! 
That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
*/

//Função (parametro)
//Function (parameter)
function isSquare(n){
    //testa se o numero(n) é maior ou igual a 0 e(&&) a raiz quadrada de (n) o resto da divisão por 1 é 0
    //test if the number(n) is greater or equal to 0 and (&&) if the square root of (n) the remainder of division is equal 0
    if(n >= 0 && Math.sqrt(n) % 1 === 0){
    //Se ok "VERDADEIRO" 
    //If ok then "TRUE"
    console.log('TRUE');
    return true    
    }
    //Senão "FALSO"
    //Else "FALSE"    
    else{
    console.log('FALSE');
    return false
    }
  }

isSquare(10)


