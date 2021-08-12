
function typechecker(argument1 , argument2){
    if(argument1 === argument2){
       console.log('SAME TYPE');
    }else{
        console.log('Not the same');
    }
}


// Declare all variables
let x = "first string";
let y = "second string";
let z = {
    age : 31,
    gender : "female",
}

let u = {
    score : 100,
    grade : "A",
}

// Check if data type is the same
if (x === y) {
    console.log('SAME TYPE');
}if (x === u) {
    console.log('SAME TYPE');
} if (x === z){
    console.log('SAME TYPE');
}if (u === z){
    console.log('SAME TYPE');
}if (y === z){
    console.log('SAME TYPE');
}else{
    console.log('Not the same');
}   


// Check data type
console.log(typeof x);
console.log(typeof z);






