
function typechecker(argument1 , argument2){
    if(typeof(argument1) == typeof(argument2)){
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


typechecker(x,y); //the same
typechecker(x,z); //not
typechecker(x,u); //not
typechecker(y,u); //not
typechecker(y,z); //not
typechecker(u,z); //same







