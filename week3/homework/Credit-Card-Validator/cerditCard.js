// const num = prompt("Enter a number: ");


// Input must be 16 characters
function numCharacters(num){
    let input = num.toString().length;
    
   if(input == 16){
        return `${num} is valid`
   }

   else{
    return `${num} isn't valid`
   }      
}
console.log(numCharacters("1234567345678"));

// All characters must be numbers
function checkNumber(num){
    let regEx ='^[0-9]+$' ;

    if(num.match(regEx))
     {
        return `${num} is valid`
     }

    else{
        return `${num} isn't valid`
    } 
}
console.log(checkNumber("1234567345678"));


// At least two different numbers should be represented
function twoDifferentNumbers(num){
    
        for(i=1; i<num.length; i++){
           if(num[0] !== num[i])
              return true;
        }    
        return false;
}

console.log(twoDifferentNumbers("1234567345678"));

// The last number must be even
function lastNumIsEven(num){
    lastDigit = num % 10;
    //   console.log('The last digit of ', num, ' is ', lastDigit);
    if(lastDigit % 2 == 0){
        return `${num} is valid`
    }

   else{
       return `${num} isn't valid`
   } 
}
console.log(lastNumIsEven("1234567345679"));

// The sum of all the numbers must be greater than 16
function sum(num){
    for (let i in num){
        sum += num[i];
    } 
    if(sum >= 16){
        return true;
    }
    else{
        return false;
    }    
}
console.log(sum("1234567345679"));







