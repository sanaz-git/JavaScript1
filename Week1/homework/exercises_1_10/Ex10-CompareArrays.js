const array = ["hello", 123, true, { name: "Noer" }];
const array2 = ["goodbye", 100, true, { lastname: "Noer" }, 5.23, "age", false];

console.log('The length of the array is' + ' ' + array.length);
console.log('The length of the array is' + ' ' + array2.length);

if(array.length == array2.length){
    console.log("They are the same!")
}else{
    console.log("Two different sizes")
}