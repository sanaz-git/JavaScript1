const drinkTypes = ['cola', 'lemonade', 'water'];
const drinkTray = [];
const waiter = [];


for (let i = 0; i < drinkTypes.length; i++) {
    waiter.push(drinkTypes[i]);
    
    
    for (let j = 0; j < 2; j++) {
        if(drinkTray.length >= 5){
            break
        }


        if (waiter ==  "cola") {
            drinkTray.push(waiter[i])
        } else if (waiter  ==  "lemonade") {
            drinkTray.push(waiter[i])
        } else {
            drinkTray.push(waiter[i])
        }
    }

}


const finalSentence = drinkTray.join(', ');
console.log('Hey guys, I brought a ' + finalSentence + '!');


//second method:

// const drinkTypes = ['cola', 'lemonade', 'water'];
// const drinkTray = [];

// for (let i = 0; i < drinkTypes.length; i++) {
//     for(let j = 0; j < 2; j++){
//         if(drinkTray.length >= 5){
//             break
//         }

//         drinkTray.push(drinkTypes[i])        
//     }
// }

// const finalSentence = drinkTray.join(', ');
// console.log('Hey guys, I brought a ' + finalSentence + '!');