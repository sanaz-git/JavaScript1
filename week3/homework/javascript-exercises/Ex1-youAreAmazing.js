function giveCompliment(name){
    const compliments =["great", "awesome", "supersmart", "amazing", "incredible", " inspire", "positivity", 
    "creative", "friendly", "honest"];
    const randomItem = compliments[Math.floor(Math.random() * compliments.length)] ; 
    return `You are ${randomItem}, ${name}!`     
}

console.log(giveCompliment("sanaz"));
console.log(giveCompliment("sanaz"));
console.log(giveCompliment("sanaz"));

