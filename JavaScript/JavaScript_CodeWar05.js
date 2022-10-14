//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

//Note: The function accepts an integer and returns an integer



function aoQuadrado(n){

    let f = '';

    console.log('VAL AAAA: ',f);
    console.log('AAAA: ',typeof f);

    f = f + n;

    console.log('VAL DDDD: ',f);
    console.log('D: ',typeof f);


    
    for (i=0; i< f.length; i++)
    {
        console.log(i);
    }

    return n;        
}


console.log(aoQuadrado(9119));
