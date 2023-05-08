// nums = [3, 2, 4];
// target = 6;

// var twoSums = function (nums, target) {
//   var array = [];
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i+1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         array.push(i,j);
//       }
//     }
//   }
//   return array;
// }

// var ans = twoSums(nums,target);
// console.log(ans);

//  var nums = [0,0,1,1,1,2,2,3,4,4,4,4];

//    var array1= [];
//    var array2= [];
//  function practice () {
//   for( var i=0; i<nums.length ; i++){
//       if (nums[i] == nums[i+1]){
//            array1.push(nums[i])
//       }
//       else{
//         array2.push (nums[i])
//       }
//   }
//  console.log(array2);
//  }
//  practice () ;
 
// var nums = [1,2,3,4,5,6,7,8,9,10]
//   nums.splice(4,1)
//   console.log (nums)

var n=5;
var sum =0;
for(var i=1; i<=n; i++){
  if(i%3==0 || i%5==0 || i%7==0){
    sum+=i; //sum = sum+ i
  }
}
console.log(sum);