/* jshint unused:false */
'use strict';

function nearHundred(num){
  var hundred = Math.round(num * 0.01) * 100;
  if (hundred === 0){
    return false;
  }
  return Math.abs(hundred - num) <= 10;
}
