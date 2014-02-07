/* global test:false, ok:false, deepEqual:false, average:false, variance:false, stdDev:false*/

'use strict';

test('template test', function(){
  ok( 1 === 1, '1 should equal 1');
});

test('number stuff', function(){
  var nums = [1, 2, 3, 4, 5];
  deepEqual(average(nums), 3, 'average of 1, 2, 3, 4, and 5 is 3');
  deepEqual(variance(nums), 10, 'variance of the above numbers is 10');
  deepEqual(stdDev(nums), 3.1622776601683795, 'standard deviation of the above numbers is 3.1622776601683795');
});
