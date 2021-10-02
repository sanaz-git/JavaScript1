//It hasn't completed yet!

finalList = [];
shoppingCart = ["bananas", "milk"];
shoppingList = ["chocolate","waffles","tea"];

function addToShoppingCart(){
    for(let i = 0; i < shoppingList.length; i++){
            shoppingCart.push(shoppingList[i]);


        
        }
    const finalSentence = shoppingList.join(', ');
    return `You bought ${shoppingList} ! `
}

console.log(addToShoppingCart('chocolate')); 
console.log(addToShoppingCart('waffles')); 
console.log(addToShoppingCart('tea'));

