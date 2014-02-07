/* global test:false, ok:false, deepEqual:false, interest:false */

'use strict';

test('template test', function(){
  ok( 1 === 1, '1 should equal 1');
});
test('something', function(){
  deepEqual(interest(890, 12.5, 261), 79.55, 'blah');
});
