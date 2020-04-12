// == only checks the value of two variables
const value = 1;
if(value === true)
{
    console.log("1 is equivalent to true");
}
else 
{
    console.log("condition denied.");
}
// === checks both value and type of two variables, returns true only if both are equal.
const value2 = false;
if(value2 === 0)
{
    console.log("condition satisfied");
}
else 
{
    console.log("false and 0 are different when it comes to type comparison");
}