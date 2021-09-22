const drinkTypes = ['cola', 'lemonade', 'water'];
const drinkTray = [];

for (let i = 0; i < drinkTypes.length; i++) {
    for(let j = 0; j < 2; j++){
        if(drinkTray.length >= 5){
            break
        }

        drinkTray.push(drinkTypes[i])        
    }
}

const finalSentence = drinkTray.join(', ');
console.log('Hey guys, I brought a ' + finalSentence + '!');