//Ever thought that we can return a function within a function!!
//If the inner function accesses any variable of the parent function, 
//it creates a closed environment which is called closure.
function stopWatch()
{
    let count = 0;
    return function()
    {
        count++;
        return count;
    }
}
const clock1 = stopWatch();
console.log(clock1());          //since the function returns another function, we call it as a function after keeping in a variable.
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock1());
console.log(clock2());
console.log(clock2());
console.log(clock2());

//Nah , code below doesn't work that way. It is not a closure. It only returns a variable.
// function two()
// {
//     let count = 0;
//     count++;
//     return count;
// }
// const two1 = two();
// console.log(two1);           //that's why we call it only with the name, unlike a function.
// // console.log(two1());
// // console.log(two1());
// // console.log(two1());

// // const two2 = two();
// // console.log(two2());
// // console.log(two1());
// // console.log(two2());
// // console.log(two2());
