// Task
// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.
// To judge the number n. If n is one of the above five constants, return one of these string:
// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Other values should return "Input number is xxx". xxx means this number.

const whatNumberIsIt = (n) => 
  (number => "Input number is " + (number ? `Number.${number}` : isNaN(n) ? 'Number.NaN' : n))
    (Object.getOwnPropertyNames(Number).filter(num => n === Number[num]).join(''))