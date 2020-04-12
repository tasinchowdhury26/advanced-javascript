//We are going to slice an array.
const arr = [3,64,13,24,31,22,77,2,75,14,59,24,39,60,37,83,26,76];
const part = arr.slice(5,11);   //from index 5 to index 10
console.log("Original arr : ",arr);               //you're right. It won't affect the original array
console.log("Sliced elements : ",part);
//Boom. Array sliced!

//Now let's see the splice thing. Yes it's called splice, no shit! 
const arr2 = [2,5,65,33,8,66,4,88,14,63,33,74,14,66];
const removed = arr2.splice(2,6,13,11,12,17);
console.log("Removed elements : ",removed);
console.log("Original arr2 : ",arr2);