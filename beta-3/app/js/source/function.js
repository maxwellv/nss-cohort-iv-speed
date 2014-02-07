/* jshint unused:false */
'use strict';

function interest(principal, rate, time){
  return parseFloat(((principal * rate * (time / 365)) / 100).toFixed(2));
}
