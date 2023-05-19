function convertIntToBinary(){

   return input.toString(2);  
}

let input = +prompt("Type a number to transform into binary");
let result = convertIntToBinary(input);
alert(result);


function convertBinaryToInt(){

  return parseInt(input2, 2);  
}

let input2 = prompt("Type a binary number to transform");
let result2 = convertBinaryToInt(input2);
alert(result2);


