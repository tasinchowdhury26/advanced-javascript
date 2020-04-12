//We learned it in the earlier module
function add (n1)
{
    let sum = 0;
    for(let i =0;i<arguments.length;i++)
    {
        sum = sum + arguments[i];
    }
    return sum;
}

const result = add(2,4,2,5,13);
console.log(result);

//Lets see pro technique
//Arguments are not array, these are array-like objects.
function addPro(n1)                             //number of arguments doesn't matter! the keyword "arguments" made it easy.
{
    let args = [...arguments];                  //we've spread the objects apart then gathered arguments into an array.
    console.log(args);                          //see arguments within an array.
    console.log(...arguments);                  //see arguments separately , no array, no object.
    console.log(arguments);                     //see arguments as they are, in objects.
    let sum = 0;
    for(let i=0;i<args.length;i++)
    {
        sum = sum+args[i];                      //since, args is an array, we made a loop to get the job done.
    }
    return sum;
}
const resultPro = addPro(3,5,7,2,3);            //chill and keep putting dozens of parameter! 
console.log(resultPro);