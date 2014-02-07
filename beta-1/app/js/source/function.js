/* jshint unused: false */

'use strict';

function square(x){
  return Math.pow(x, 2);
}

function sumOfSquares(nums){
  var squares = _.map(nums, function(x){
    return square(x);
  });
  var ret = 0;
  _.forEach(squares, function(x){
    ret += x;
  });
  return ret;
}


