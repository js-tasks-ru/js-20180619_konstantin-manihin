'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {

  let arr = str.split(' ').join().split(',');
  let number = [];
  let out = {};

  arr.forEach(function(item, i, arr) {
    if ( !isNaN(parseFloat(item)) ) {
      number.push(parseFloat(item));
    }
  });

  out.min = Math.min.apply(null, number);
  out.max = Math.max.apply(null, number);

  return out;
}