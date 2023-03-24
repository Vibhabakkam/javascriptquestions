// Q 2- Check is user applicable for dl or not ?
// learning lic - for 18 year candidate

// var userAge = 78;
// if (  userAge > 18 ){
//     console.log("User is Applicable !");
// } else if(userAge == 18){
//     console.log("User is applicable for Leanrng lic...")
// } else {
//     console.log("User is NOT Applicable !");
// }

// Q 3 - Check given number is odd or even and diplay the result.
// var userNumber = 0;
// if((userNumber % 2) == 0 ){
//     console.log("Provided number is Even !")
// } else {
//     console.log("Provided Number is ODD !")
// }

// Q 4. Print the numbers from 20 - 40, which are even.
// for(var i = 20; i <= 40; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }
// Q 5. Print the count from 20 - 40, which are even.
// var count = 0;
// for(var i = 20; i <= 40; i++){
//     if(i%2===0){
//         count++;
//     }
// }
// console.log(count);

// Q 6. Print count of numbers from 147-254, which are divisible by 3 and odd.

// var count  = 0;
// for(var i = 147; i <= 254; i++){
//     if(i%3===0 && i%2!==0){
//         count++;
//     }
// }
// console.log(count)
// //    __ 6 - Q
// // 3 / 18
// //     18
// //      0 - R

// Q 7. Find count of number 45 from given Array.

// [12,13,45,67,43,45,76,89,54,23,7,8797,243,23234]

// =>

// var count = 0;
// var rocky = [12,13,45,67,43,45,76,89,54,23,7,8797,243,23234];
// // var strings = ["a","abc","rocky","im student,my name is rocky","xyz"]
// // var namee = "my name is rocky";
// for(var i = 0; i < rocky.length ; i++){
//     if( rocky[i] === 45){
//         count++;
//     }
// }
// console.log(count);
// // console.log(array[2])
// // console.log(array[15]);
// // console.log(strings[1]);


// // Q 8. Find numbers which addition is target
// var nums = [11,15,4,5];
// var target = 9;
// for(var i = 0; i < nums.length - 1; i++ ){ // 0,  1 , 2, 3, 4, 4 < 4
//     for(var j = i + 1 ; j < nums.length ; j++){ // 1, 2,3, 4 < 4
//         if(nums[i] + nums[j]  === target){
//             console.log(nums[i],nums[j])
//         }
//     }
// }

// Q 9. find addition of every second numnber from 
// var firstDigit = 1
// // var secondDigit = 346578
// var secondDigit = 10
// //  57689
// //  57690 + 
// //  57691
// //  57692 + 
// var add = 0;
//  for(var i = firstDigit + 1; i < secondDigit; i = i + 2 ){
//     // console.log(i)
//     add = add + i
//  }
//  console.log(add,"add here")

//  Q.10 find given number is present in given array or not, if found return true else false;\

//  array.includes(23)
 

//  var array = [1,2,443,454,232,546,23,567,676,2342,565,4,2,6]
//  var number  = 1;

// //  if(array.includes(number)){
// //     console.log("true")
// //  } else {
// //     console.log("false")
// //  }
// var flag = false;
// for(var i =0; i< array.length; i++){
//     if(array[i] === number){
//         flag = true
//     }
// }
// if(flag === true){
//     console.log("true")
// } else {
//     console.log("false")
// }



// Q. Find out number 689 from given array
// then print only "Got it" and if not found then return "Not found!";

// var arr = [2,4,6,23,56,3224,454,23,54,56,232,689,233];
// var N = 689;
// function findNumber(arr,N){
//     var flag = false;
//     for(var i =0; i< arr.length; i++){
//         if(arr[i] === N){
//             flag = true;
//         } 
//     }
//     if(flag === true){
//         return "Got it";
//     } else {
//         return "Not Found";
//     }
// }
// var myFunc = findNumber(arr,N);
// console.log(myFunc);

// if im calling function and function returns then we need to apply console.log to calling function




// Q. Given an array, make an object with key of that specific index with value from array;

var array = [9,8,7,6,5,4,3,2,1,0]


var result = {};


for(var i = 0; i< array.length; i++){
    // console.log(i)
    result[i] = array[i].toString();
}
console.log(result);

// {0: "9", 1: "8" , 2:"7",..., 9:'0' }