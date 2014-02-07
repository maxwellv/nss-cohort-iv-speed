/* global tripleUp:false, sortEvenOdd:false, replaceZeroMaxOddRight: false, mix:false, sumPrimeFactorsOf13195:false, sumFirst10FibNumbers:false, sumMultiple3or5below1000:false, deepEqual:false, rotateLeft:false, firstLastSix:false, test:false, ok:false */

'use strict';

test('template test', function(){
  ok( 1 === 1, '1 should equal 1');
});

test('firstLastSix', function(){
  ok(firstLastSix([6, 2, 1]), 'has a 6 in the first position');
  ok(!firstLastSix([2, 6, 4]), 'has a 6 in the middle, but not the first or last');
  ok(firstLastSix([1, 3, 6]), 'has a 6 in the last position');
  ok(!firstLastSix([5, 4, 3]), 'does not have a 6 at all');
});

test('rotateLeft', function(){
  deepEqual(rotateLeft([1, 2, 3, 4]), [2, 3, 4, 1], 'should have returned [2, 3, 4, 1]');
  deepEqual(rotateLeft(['this', 'test', 'was', 'easy']), ['test', 'was', 'easy', 'this'], 'should have returned that array that I don\'t feel like typing out again');
});

test('sumMultiple3or5below1000', function(){
  deepEqual(sumMultiple3or5below1000(), 233168, 'all that crap should equal 233168');
});

test('sumFirst10FibNumbers', function(){
  deepEqual(sumFirst10FibNumbers(), 143, 'the first 10 Fibbonacci numbers, added up, should equal 143');
});

test('sumPrimeFactorsOf13195', function(){
  deepEqual(sumPrimeFactorsOf13195(), 55, 'all that stuff should add up to 55');
});

test('mix', function(){
  deepEqual(mix(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]), ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5], 'mix the two arrays');
});

test('replaceZeroMaxOddRight', function(){
  deepEqual(replaceZeroMaxOddRight([0, 2, 3, 0, 5, 2, 0, 7, 9]), [3, 2, 3, 5, 5, 2, 9, 7, 9], 'do all that crazy crap');
});

test('sortEvenOdd', function(){
  deepEqual(sortEvenOdd([7, 2, 6, 5, 4, 9]), [2, 4, 6, 5, 7, 9], 'should have sorted the evens, then the odds');
});

test('tripleUp', function(){
  ok(tripleUp([4, 2, 5, 6, 7, 10]), 'this should pass (5, 6, 7)');
  ok(!tripleUp([1, 2, 4, 9, 6, 8, 9]), 'this should fail');
  ok(tripleUp([3, 9, 10, 11, 12, 15]), 'this should pass (9, 10, 11)');
});
