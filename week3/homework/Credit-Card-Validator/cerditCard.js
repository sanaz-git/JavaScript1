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

// At least two different numbers should be represented
function twoDifferentNumbers(num){
    
        for(i=1; i<num.length; i++){
           if(num[0] !== num[i])
              return true;
        }    
        return false;
}


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

function validateCreditNumber(num){

   if(numCharacters(num) && checkNumber(num) && twoDifferentNumbers(num) && lastNumIsEven(num) && sum(num) == true){
       return true
   } else {
       return false
   }  
}
function checking(num) {
    if (numCharacters(num) == false) {
        return `invalid! ${num} must be 16 characters!`
    } else if (checkNumber(num) == false) {
        return `invalid!  All characters of ${num} must be numbers!`
    } else if (twoDifferentNumbers(num) == false) {
        return `invalid! ${num} should contain at least 2 different types of numbers!`
    } else if (lastNumIsEven(num) == false) {
        return `invalid! The last number of ${num} must be even`
    } else if (sum(num) == false) {
        return `invalid! The sum of all the numbers of ${num} must be greater than 16`
    } else {
        return `The credit card number is valid`
    }
}


console.log(validateCreditNumber("2222222222222224"))
console.log(checking("2222222222222224"))









