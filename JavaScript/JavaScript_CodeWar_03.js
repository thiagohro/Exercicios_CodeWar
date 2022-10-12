//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//If the function is passed a valid PIN string, return true, else return false.
//Examples (Input --> Output)
//"1234"   -->  true
//"12345"  -->  false
//"a234"   -->  false

function validatePIN (pin) {
  //var criada para testar o tamanho do pin se é 4 ou 6 com o metodo length
  //var created to test the lenth of var with length metod
  let checkLength = pin.length === 4 || pin.length === 6;  
    
  // var criada para verificar se está somente entre numeros 0 e 9
  //var created to test if the string is between 0 and 9
  let checkNum  = /^[0-9]/g;

  //verificação de teste utilizando o metodo match que verifica se está contido no caso no pin que é o parametro
  //time to check and use the match metod that will try to check if we have our numbers there
  if (checkLength && pin.match(checkNum)){
      //Use para teste se quiser
      //Use for test if you want
      //console.log("TRUE")
      return true;
  }
  else{
      //Use para teste se quiser
      //Use for test if you want
      //console.log("FALSE")
    return false;
  }
}

const pw = '1234';
validatePIN(pw);