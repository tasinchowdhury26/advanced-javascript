const students = [
    {id:21,name:"Omar"},
    {id:34,name:"Misha"},
    {id:42,name:"Mannaa"},
    {id:24,name:"Bannaa"},
    {id:32,name:"Linaa"},
    {id:46,name:"Gorilla"},
];
//Advanced technique
const newArray2 = [];
const names = students.map(s =>s.name);
newArray2.push(names);
console.log(newArray2);

//To show more specific elements from the array 
const guilt = students.filter(x => x.id < 30);
console.log("Id's < 30 are : ",guilt);

//Applying filter
const boss = students.find(x => x.id > 40);
console.log("Id greater than 40 is : ",boss);

//Get the names from that array and show them in a new array. (I did this first on my own)
// const newArray = [];
// for(let i =0;i<students.length;i++)
// {
//     let element = students[i].name;
//     newArray.push(element);
// }
// console.log(newArray);