/* jshint unused:false */
'use strict';

// beta-5
function firstLastSix(nums){
  if (nums[0] === 6){
    return true;
  } else if (nums[nums.length -1] === 6){
    return true;
  } else {
    return false;
  }
}

// beta-6
function rotateLeft(nums){
  nums.push(nums.shift());
  return nums;
}

// beta-7
function sumMultiple3or5below1000(){
  var ret= 0;
  for (var x = 1;x < 1000;x++){
    if ((x % 3 === 0) || (x % 5 === 0)){
      ret += x;
    }
  }
  return ret;
}
// beta-8
function sumFirst10FibNumbers(){
  var sumTo = 10; //for easy changing later
  var f1 = 1;
  var f2 = 1;
  var ret = 2; // this accounts for the first two numbers being 1 and 1
  for (var x = 0;x < sumTo - 2; x++){
    var f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
    ret += f3;
  }
  return ret;
}

// beta-9

function isPrime(num){
  var upto = Math.sqrt(num);
  for (var x = 2; x <= upto; x++){
    if (num % x === 0){
      return false;
    }
  }
  return true;
}

function sumPrimeFactorsOf13195(){
  var primes = [];
  for (var x = 1; x < 13195; x++){
    if (isPrime(x) && (13195 % x === 0)){
      primes.push(x);
    }
  }
  var ret = 0;
  _.forEach(primes, function(y){
    ret += y;
  });
  return ret;
}

//beta- I don't even remember anymore

function mix(array1, array2){
  var ret = [];
  for (var x = 0;x < array1.length;x++){
    ret.push(array1[x]);
    ret.push(array2[x]);
  }
  return ret;
}

//beta something

function replaceZeroMaxOddRight(nums){
  var largestodd = 0;
  var zeroindex;
  for (var x = 0;x <= nums.length;x++){
    if (x === nums.length){
      nums[zeroindex] = largestodd;
    } else if (zeroindex === undefined && nums[x] === 0){
      zeroindex = x;
    } else if (nums[x] === 0){
      nums[zeroindex] = largestodd;
      zeroindex = x;
      largestodd = 0;
    } else if ((nums[x] % 2 === 1) && (nums[x] > largestodd)){
      largestodd = nums[x];
    }
  }
  return nums;
}

function sortEvenOdd(nums){
  var evens = [];
  var odds = [];
  for (var x = 0;x < nums.length; x++){
    if (nums[x] % 2 === 0){
      evens.push(nums[x]);
    } else {
      odds.push(nums[x]);
    }
  }
  evens.sort();
  odds.sort();
  return evens.concat(odds);
}

function tripleUp(nums){
  var last1, last2;
  for (var x = 0;x < nums.length; x++){
    if (last1 === undefined){
      last1 = nums[x];
    } else if ((nums[x] === last1 + 1) && (nums[x] === last2 + 2)){ //a match!
      return true;//note: we have to use undefined for the above statement, if we use null then "null + 2" returns 2, whereas "undefined + 2" returns NaN, and a falsey value is what we want
    } else if ((nums[x] === last1 + 1) && last2 === undefined){
      last2 = last1;
      last1 = nums[x];
    } else { //if we got here, the numbers weren't consecutive
      last1 = undefined;
      last2 = undefined;
    }
  }
  return false; //no consecutive sequences
}
