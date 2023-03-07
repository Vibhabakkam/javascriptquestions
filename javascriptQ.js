//Q10 find given number is present in given array or not , if found return true else false 

// Array.includes(23);
// console.log(Array.includes);
// var  array = [1,2,443,454,232,546,23,567,676,2342,565,4,2,6]
// var number = 6;
// console.log(array.includes(23))
// if (array.includes(number)){
//     console.log("true")
// } else{
//     console.log("false")
// }
// var flag = flag;
// for (var i= 0; i < array.length; i++){
//    if (array[i] === number){
//     flag = true;
//    }
   
     
// }
// if (flag === true){
//     console.log("true")
// }
// else{
//     console.log("false")
// }


// Q find out number 689  from given array
 // then print only " got it "  and if not found then print " not found " 

// var array = [2,4,6,23,56,3224,454,23,54,56,232,689,233];
// var number = 689;

// var flag = flag;
// for (var i= 0; i < array.length; i++){
//    if (array[i] === number){
//     flag = true;
//    }
   
     
// }
// if (flag === true){
//     console.log(" got it")
// }
// else{
//     console.log("not found")
// }

// given an array make an  object with key of that specific index with value;
var array = [9,8,7,6,5,4,3,2,1,0]

// var result = { 0: array[0],  1: array[9], 2: array[8], 3: array[7], 4: array[6], 5: array[5], 6: array[4], 7: array[3], 8: array[2], 9: array[1],  }
// console.log(result)

var result = {};

for(var i=0; i<array.length; i++){
    result[i] = array[i].toString();
}
console.log(result);
