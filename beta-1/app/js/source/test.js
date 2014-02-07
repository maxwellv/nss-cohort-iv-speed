/* global test:false, ok:false, deepEqual:false, square:false, sumOfSquares:false */

'use strict';

test('template test', function(){
  ok( 1 === 1, '1 should equal 1');
});


test('squares', function(){
  deepEqual(square(2), 4, '2 ^ 2 = 4');
  deepEqual(square(10), 100, '10 ^ 2 = 100');
  deepEqual(sumOfSquares([1, 2, 3]), 14, 'should return 14');
});
