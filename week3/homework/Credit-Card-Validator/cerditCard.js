
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

console.log(numCharacters(1234567345678))

//All characters must be numbers

function checkNumber(num){
    let input = num;

    if(input.match(num)){
        return `${num} is valid`
    }

    else{
     return `${num} isn't valid`
    } 

}
console.log(numCharacters(1234567345678))