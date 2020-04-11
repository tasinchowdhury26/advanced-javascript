const arr = [2,5,3,7,12];
//Within the map method , the inner function can have 3 parameters : element, index, and the array itself
//here, we are working with only elements for starting this up.
const result = arr.map(function(element){
    return element * 10;
})
console.log(result);

//let's try it on string
const str = ['q',"e","f","you"];
const upped = str.map(function(element){
    return element.toUpperCase();
})
console.log(upped);

//we can also use arrow function within map method.
const arr2 = [3,8,4,12,11];
const square = arr2.map(num =>num*num);
console.log(square);

//we haven't tried it with index and array parameter, let's do it.
const arr3 = [12,41,56,23,28,46];
arr3.map(function(element,index,array){
    console.log(element,index,array);       //shows both the elements with index, and the array itself too.
})

//now let's get into filter
const arr4 = [21,43,29,47,53,18];
const fil = arr4.filter(n => n > 20);         //will return numbers greater than 20
console.log(fil);

//heard about find() : it is similar to filter() but returns the first detected element instead of array
const arr5 = [12,64,28,45,23,57,12,31,13];
const found = arr5.find(n => n>20);
console.log(found);
