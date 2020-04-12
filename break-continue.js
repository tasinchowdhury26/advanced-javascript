const arr = [1,2,5,6,7,32,11,14,32,-21,45,-8,22,31,-4];
for(let i = 0;i<arr.length;i++)
{
    if(arr[i]<0)                 //if element is negative,
    {
        continue;                //it will skip to the rest of the elements across the array.
    }
    else if(arr[i]>30)          //if element is greater than 30, 
    {
        break;                  //it will break the loop at first site/detection.
    }
    console.log(arr[i]);
}