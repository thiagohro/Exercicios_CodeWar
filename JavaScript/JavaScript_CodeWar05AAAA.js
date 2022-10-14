//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

//Note: The function accepts an integer and returns an integer



function aoQuadrado(n){

    let f = '';
    //console.log('VAL AAAA 1: ',f);
    //console.log('AAAA: 2',typeof f);
    f = f + n;
    //console.log('VAL DDDD: 3',f);
    //console.log('D: 4',typeof f);    
    for (i=0; i< f.length; i++)
    {   
        let resx = [];
        res = f[i]*f[i];
        resx[i] = res;
        resz = [f[i]*f[i]];        
        //console.log(i)
        console.log('AQUI 1', resz)
        console.log('AQUI 2', res)
        console.log('AQUI 3', resx)
        //for (x=0; x < res.length; x++)
        //{
        //console.log(res[x]);
        //}
        //console.log(f[i]);
        //console.log(i);
    }
    
    console.log('resultado: ', resz);
          
}


console.log(aoQuadrado(9119));



//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript