// It hasn't completed yet

function giveCompliment(name){
    compliments =["great", "awesome", "supersmart", "amazing", "incredible", " inspire", "positivity", 
    "creative", "friendly", "honest"];
    const randomItem = compliments[Math.floor(Math.random() * compliments.length)] ; 
    return `You are ${randomItem}, Noer!` 
    
}

console.log(giveCompliment());

