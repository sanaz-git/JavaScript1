// It hasn't completed yet

function giveCompliment(name){
    compliments =["great", "awesome", "supersmart", "amazing", "incredible", " inspire", "positivity", 
    "creative", "friendly", "honest"];
    return Math.floor(compliments.random() + name); 

}

const name = "Noer";

// const randomCompliments = compliments[Math.floor(Math.random() * compliments.length)];

// console.log(`You are ${randomCompliments} , Noer !`);



giveCompliment('Noer');
giveCompliment('Noer'); 
giveCompliment('Noer');