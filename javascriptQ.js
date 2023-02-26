//Q10 find given number is present in given array or not , if found return true else false 

// Array.includes(23);
// console.log(Array.includes);
var  array = [1,2,443,454,232,546,23,567,676,2342,565,4,2,6]
var number = 6;
// console.log(array.includes(23))
// if (array.includes(number)){
//     console.log("true")
// } else{
//     console.log("false")
// }
var flag = flag;
for (var i= 0; i < array.length; i++){
   if (array[i] === number){
    flag = true;
   }
   
     
}
if (flag === true){
    console.log("true")
}
else{
    console.log("false")
}

