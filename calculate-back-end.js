/******************
 * YOUR CODE HERE *
 ******************/
function calculate(num,num2,sign){
  if (sign === '+' || sign === 'plus' || sign === 'added to') {
    return num * 1 + num2 * 1
  }
  if (sign === '-' || sign === 'minus' || sign === 'subtracted from'){
    return parseInt(num) - parseInt(num2)
  }
  if (sign === 'x' || sign === 'times' || sign === 'multiplied by' || sign === 'X'){
    return +num * +num2
  }
  if (sign === '/' || sign === 'divided by'){
    return +num / +num2
  }
  if (sign === '%' || sign === 'mod' || sign === 'modulus'){
    return +num % +num2
  }
  else
  return "Sorry, that's not a mathematical operation!"

}


/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;