const obj ={};
const keys =["Mealname","Serves","Ingredients"]

const mealrecipe =['potatococoa', 2, ['3 potatos', '1 eggs', '1 tsp salt/pepper']];


for(i in keys){
    console.log(keys[i] + ": " + mealrecipe[i]) 
}

