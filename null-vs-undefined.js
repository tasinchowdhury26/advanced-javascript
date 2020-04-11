function add(n1,n2)
{
    console.log(n1+n2);
}
const result = add(13,4);
//It will show undefined if we execute the line 
//below, since there is no return in the function above.
//console.log(result);
//absence of a parameter while calling function will throw undefined (if default is not used)
const obj = {name:"Alia", age:27};
console.log(obj.name);
//below line will show undefined
//console.log(obj.address);

//Setting variable undefined is never recommended
let fun = undefined;
console.log(fun);

//Attempt to access array element that doesn't exist
const arr = [12,41,3,5];
console.log(arr[15]);
