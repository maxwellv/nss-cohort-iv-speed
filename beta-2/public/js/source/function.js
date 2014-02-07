/* jshint unused:false */
'use strict';

function average(nums){
  var ret = 0;
  _.forEach(nums, function(x){
    ret += x;
  });
  ret = ret / nums.length;
  return ret;
}

function variance(nums){
  var avg = average(nums);
  var ret = 0;
  _.forEach(nums, function(x){
    ret += Math.pow(x - avg, 2);
  });
  return ret;
}

function stdDev(nums){
  return Math.sqrt(variance(nums));
}
