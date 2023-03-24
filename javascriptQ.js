//if elese
var number1 = 10;
var number2 = 20;
if (number2 <= number1) {
    console.log("Number 2 is greater than number 1");
}
else {
    console.log(" Number 2 is not greater than number 1 ..");
}

var userAage = 79;
if (userAage > 18) {
    console.log("user is applicable");
}
else if (userAage == 18) {
    console.log("user is applicable for learning lic...");
}
else {
    console.log("user is  not applicable ..");
}

// Q - check given Number is odd or even or display the result
var usarNumber = 89;
if ((usarNumber % 2) == 0) {
    console.log("number is even");
}
else {
    console.log("number is odd   ..");
}

var Statement = 88;
if ((Statement % 2) == 0) {
    console.log(" provided number is even");
}
else {
    console.log(" provided number is odd   ..");
}

 
//switch case
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
    case 'watermelon':
        console.log('watermelon are $0.89 a pound.');
        break;
        case 'strawberry':
        console.log('strawberry are $0.60 a pound.');
        break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

const fruit = 'strawberry';
switch ( fruit) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
    case 'watermelon':
        console.log('watermelon are $0.89 a pound.');
        break;
        case 'strawberry':
        console.log('strawberry are $0.60 a pound.');
        break;
  default:
    console.log(`Sorry, we are out of ${fruit}.`);
}

//templets litrals
var myName = "Vibha";
var city = "NaviMumbai";
console.log(`my name is ${ myName} & Im from ${city}` );

// Q1 - check given Number is odd or even or display the result
var usarNumber = 89;
if ((usarNumber % 2) == 0) {
    console.log("number is even");
}
else {
    console.log("number is odd   ..");
}

var Statement = 88;
if ((Statement % 2) == 0) {
    console.log(" provided number is even");
}
else {
    console.log(" provided number is odd   ..");
}

// Q2 print the number from 20-40 which are even.
for (var i = 20; i <= 40; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

//Q3 print the count from 20-40 which are even.

var count = 0
for (var i = 20; i <= 40; i++) {
    if (i % 2 === 0) {
        count++;
    }
}
console.log(count)

//Q4 print count of numbers d]from 147-254 which are divisiable by 3 and odd.
var count = 0;
 for (var i=147; i<=254; i++){
    if((i%3 === 0) && (i%2 !== 0)){
                 count++;
     }
 }
 console.log(count)

 // Q5 find count of  number 45 from given array
// [ 12, 13, 45 , 67, 43 , 45, 76, 89,54, 23,7, 8797,243,23234 };
var count = 0;
var array = [  12, 13, 45 , 67, 43 , 45, 76, 89,54, 23,7, 8797,243,23234];
for (var i = 0; i < array.length ; i++){
    if( array [i] === 45){
        count++;
    }

}
console.log( count)

// Q6 find number which addition target

var nums = [ 5,4,2,7 ]
var target = 9
for (i = 0; i<nums.length - 1; i++ ){
    for(var j =  i+1;  j<nums.length ; j++){
        if (nums[i]+ nums[j] === target ){
            console.log( nums[i] ,nums[j])
        }
    }
}

//Q7 find addition of every second number from 57689-346578
 
var firstDigit = 1
var secondDigit = 10
var add = 0 
 for ( var i = firstDigit + 1 ; i< secondDigit; i = i+2){
     add = add + i
 }
 console.log (add ,"add here")

  var firstDigit = 57689
var secondDigit = 346578
var add = 0 
 for ( var i = firstDigit + 1 ; i< secondDigit; i = i+2){
     add = add + i
 }
 console.log (add ,"add here")

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

// find count of  number 45 from given array
//[ 12, 13, 45 , 67, 43 , 45, 76, 89,54, 23,7, 8797,243,23234 };
// var count = 0;
// var array = [  12, 13, 45 , 67, 43 , 45, 76, 89,54, 23,7, 8797,243,23234];
// for (var i = 0; i < array.length ; i++){
//     if( array [i] === 45){
//         count++;
//     }

// }
// console.log( count)

// find number which addition target

var nums = [ 5,4,2,7 ]
var target = 9
for (i = 0; i<nums.length - 1; i++ ){
    for(var j =  i+1;  j<nums.length ; j++){
        if (nums[i]+ nums[j] === target ){
            console.log( nums[i] ,nums[j])
        }
    }
}

// find addition of every second number from 57689-346578
 
// var firstDigit = 1
// var secondDigit = 10
// var add = 0 
//  for ( var i = firstDigit + 1 ; i< secondDigit; i = i+2){
//      add = add + i
//  }
//  console.log (add ,"add here")

//  var firstDigit = 57689
// var secondDigit = 346578
// var add = 0 
//  for ( var i = firstDigit + 1 ; i< secondDigit; i = i+2){
//      add = add + i
//  }
//  console.log (add ,"add here")