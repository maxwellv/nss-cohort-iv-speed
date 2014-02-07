/* global test:false, ok:false, deepEqual:false, nearHundred:false */

'use strict';

test('template test', function(){
  ok( 1 === 1, '1 should equal 1');
});

test('hundreds', function(){
  deepEqual(nearHundred(100), true, '100 true');
  deepEqual(nearHundred(107), true, '107 true');
  deepEqual(nearHundred(94), true, '94 true');
  deepEqual(nearHundred(201), true, '201 true');
  deepEqual(nearHundred(893), true, '893 true');
  deepEqual(nearHundred(309), true, '309 true');

  deepEqual(nearHundred(89), false, '89 false');
  deepEqual(nearHundred(144), false, '144 false');
  deepEqual(nearHundred(551), false, '551 false');
  deepEqual(nearHundred(111), false, '111 false');
  deepEqual(nearHundred(981), false, '981 false');
  deepEqual(nearHundred(0), false, '0 false');
});
