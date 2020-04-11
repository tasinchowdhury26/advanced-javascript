// falsy values
// false, 0, "", undefined, null, NaN, 0n(bigInt)
const age = 0;
if(age)
{
    console.log("Condition is true");
}
else
{
    console.log("Condition is false.")
}
//Truthy values
//" ", true, any number(+/-), "false", {empty object}, [empty array], new Date()....
const str = " "; //this string has a whitespace
if(str)
{
    console.log("string exists.");
}
else
{
    console.log("string doesn't exist.");
}