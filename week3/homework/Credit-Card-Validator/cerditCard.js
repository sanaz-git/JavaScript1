// const num = prompt("Enter a number: ");


// Input must be 16 characters
function numCharacters(num){
    let input = num.toString().length;
    
   if(input == 16){
        return true;
   }

   else{
    return false;
   }      
}
// console.log(numCharacters("1234567345678"));

// All characters must be numbers
function checkNumber(num){
    let regEx ='^[0-9]+$' ;

    if(num.match(regEx))
     {
        return true;
     }

    else{
        return false;
    } 
}
// console.log(checkNumber("1234567345678"));


// At least two different numbers should be represented
function twoDifferentNumbers(num){
    
        for(i=1; i<num.length; i++){
           if(num[0] !== num[i])
              return true;
        }    
        return false;
}

// console.log(twoDifferentNumbers("1234567345678"));

// The last number must be even
function lastNumIsEven(num){
    lastDigit = num % 10;
    //   console.log('The last digit of ', num, ' is ', lastDigit);
    if(lastDigit % 2 == 0){
        return true;
    }

   else{
       return false
   } 
}
// console.log(lastNumIsEven("1234567345679"));

// The sum of all the numbers must be greater than 16
function sum(num){
    let sumOfNumbers = 0;

    for (let i = 0 ; i < num.length ; i++){
        sumOfNumbers += parseInt(num[i]);   
    } 
       
    if(sumOfNumbers > 16){
        return true;
    }
    else{
        return false;
    } 
     
}
// console.log(sum("123452"));

function validateCreditNumber(num){

   if(numCharacters(num) && checkNumber(num) && twoDifferentNumbers(num) && lastNumIsEven(num) && sum(num) == true){
       return true
   } else {
       return false
   }  
}


console.log(validateCreditNumber("2222222222222224"))







