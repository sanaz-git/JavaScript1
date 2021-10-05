const shoppingCart = ["bananas", "milk"];


function addToShoppingCart(grocery){
     shoppingCart.push(grocery);

     if(shoppingCart.length > 3){
        shoppingCart.shift()
     }

      let finalList = "";
      
      for(let i = 0; i < shoppingCart.length; i++){
         finalList += shoppingCart[i] + " ,";
      }
      return `You bought ${finalList}! `
     }
    




console.log(addToShoppingCart('chocolate')); 
console.log(addToShoppingCart('waffles')); 
console.log(addToShoppingCart('tea')); 